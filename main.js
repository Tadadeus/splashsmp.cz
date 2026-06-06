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
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    };

    const closeMenu = () => {
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
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

      // Počkáme, až se zavře mobilní menu a odemkne se scroll (.no-scroll),
      // jinak je layout zamčený a souřadnice cíle vyjdou špatně (skok dolů).
      setTimeout(() => {
        const rect = target.getBoundingClientRect();
        const pageTop = rect.top + window.scrollY;          // absolutní pozice cíle
        const visibleArea = window.innerHeight - NAV_HEIGHT; // prostor pod navbarem

        // Vycentrovat cíl do prostoru pod navbarem (nikdy nad začátek stránky).
        let top = pageTop - NAV_HEIGHT - Math.max(0, (visibleArea - rect.height) / 2);
        top = Math.max(0, top);

        window.scrollTo({ top, behavior: 'smooth' });
      }, 320);   // 320 ms ≈ doba zavření menu (transform 0.42s, stačí část)
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

    // Nastav správný stav navbaru BEZ animace (jinak při načtení blikne).
    navbar.classList.add('no-transition');
    updateNavbar();
    // Vynuť reflow, aby se počáteční stav uložil bez přechodu,
    // a teprve pak povol animaci pro skutečné scrollování.
    void navbar.offsetWidth;
    requestAnimationFrame(() => navbar.classList.remove('no-transition'));
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