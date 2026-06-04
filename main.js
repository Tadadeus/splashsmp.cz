'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────────────────────
     1. HAMBURGER / MOBILNÍ MENU
  ──────────────────────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {

    const openMenu = () => {
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    // Zavři kliknutím mimo obsah menu
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) closeMenu();
    });

    // Zavři klávesou Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
    });

    // Zavři po kliknutí na odkaz uvnitř menu
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }


/* ────────────────────────────────────────────────────────
     2. SMOOTH SCROLL s korekcí výšky navbaru (FIX PRO MOBILY)
  ──────────────────────────────────────────────────────── */
  const NAV_HEIGHT = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10
  ) || 68;

  document.querySelectorAll('.js-scroll').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Použijeme setTimeout (50ms), aby se stihlo zavřít mobilní menu
      // a obnovit overflow na body. Tím získáme 100% přesné souřadnice.
      setTimeout(() => {
        let totalOffset = NAV_HEIGHT;

        // Pokud jsme na mobilu, dáme schválně velkou rezervu (např. 90px),
        // abychom hned viděli, že to reaguje. Pak ji můžeš snížit.
        if (window.innerWidth <= 768) {
          totalOffset += 250; 
        }

        const top = target.getBoundingClientRect().top + window.scrollY - totalOffset;
        
        window.scrollTo({ 
          top: top, 
          behavior: 'smooth' 
        });
      }, 50); 
    });
  });

  /* ────────────────────────────────────────────────────────
     3. NAVBAR – ztmavení po odscrollování (přes rAF)
  ──────────────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  if (navbar) {
    let rafPending = false;

    const updateNavbar = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };

    window.addEventListener('scroll', () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        updateNavbar();
        rafPending = false;
      });
    }, { passive: true });

    updateNavbar();
  }


  /* ────────────────────────────────────────────────────────
     4. SCROLL ANIMACE KARET (IntersectionObserver)
  ──────────────────────────────────────────────────────── */
  const cardsWrapper = document.querySelector('.cards');
  const cards        = cardsWrapper ? [...cardsWrapper.querySelectorAll('.js-reveal')] : [];

  if (cards.length > 0 && 'IntersectionObserver' in window) {

    // Zapni animaci – skryj karty (bezpečně, JS běží)
    cardsWrapper.classList.add('will-animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.08,           // stačí 8 % karty → spustí
      rootMargin: '0px 0px 0px 0px',
    });

    cards.forEach(card => observer.observe(card));

    // Pojistka: pokud karty ještě nejsou viditelné po 1.5 s,
    // zobraz je nasilím (obranou před edge-case selháním)
    setTimeout(() => {
      cards.forEach(card => card.classList.add('is-visible'));
    }, 1500);

  }

});