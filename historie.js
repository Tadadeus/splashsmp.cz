'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // (Hamburger / mobilní menu řeší sdílený main.js – tady nic netřeba.)

  /* ────────────────────────────────────────────────────────
     1. PŘEPÍNAČ DAT (ZDE POKRAČUJE TVŮJ DALŠÍ KÓD...)
     ──────────────────────────────────────────────────────── */
  const dateToggle = document.getElementById('dateToggle');

  if (dateToggle) {
    dateToggle.addEventListener('change', () => {
      const dates = document.querySelectorAll('.timeline-date');
      dates.forEach(date => {
        if (dateToggle.checked) {
          date.classList.remove('hide-date');
        } else {
          date.classList.add('hide-date');
        }
      });
    });
  }

  /* ────────────────────────────────────────────────────────
     2. TLAČÍTKA PRO MEZIUDÁLOSTI NA OSE
     ──────────────────────────────────────────────────────── */
  window.toggleInterstitial = function(btn) {
    const interstitialContainer = btn.closest('.timeline-interstitial');
    const wrapper = interstitialContainer.querySelector('.interstitial-wrapper');
    
    wrapper.classList.toggle('active');
    
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    
    const textSpan = btn.querySelector('.btn-text');
    if (textSpan) {
      textSpan.textContent = wrapper.classList.contains('active') ? "Skrýt meziudálosti" : "Zobrazit meziudálosti";
    }
  };

  /* ────────────────────────────────────────────────────────
     3. SCROLL REVEAL ANIMACE PRO TIMELINE
     ──────────────────────────────────────────────────────── */
  const historyItems = document.querySelectorAll('.js-reveal-history');

  if (historyItems.length > 0 && 'IntersectionObserver' in window) {
    const historyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        historyObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    historyItems.forEach(item => historyObserver.observe(item));
  } else {
    historyItems.forEach(item => item.classList.add('is-visible'));
  }

  /* ────────────────────────────────────────────────────────
     4. PŘÍCHOD Z KARTY HRÁČE (#ev-...) → najdi událost,
        rozbal meziudálost, odscrolluj a zvýrazni ji.
     ──────────────────────────────────────────────────────── */
  function focusEvent(id) {
    const target = document.getElementById(id);
    if (!target) return;

    // Zajisti viditelnost (reveal animace ji jinak skrývá).
    target.classList.add('is-visible');

    // Pokud je to meziudálost, automaticky ji rozbal.
    if (target.classList.contains('timeline-interstitial')) {
      const wrapper = target.querySelector('.interstitial-wrapper');
      const btn = target.querySelector('.interstitial-btn');
      if (wrapper && !wrapper.classList.contains('active') && btn) {
        window.toggleInterstitial(btn);
      }
    }

    // Odscrolluj s rezervou na fixní navbar a zvýrazni událost.
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10
    ) || 68;

    setTimeout(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 40;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });

      target.classList.add('event-highlight');
      setTimeout(() => target.classList.remove('event-highlight'), 2600);
    }, 250);  // počkáme na reveal/rozbalení
  }

  if (window.location.hash.startsWith('#ev-')) {
    const id = window.location.hash.slice(1);
    // Po načtení (a doběhnutí nativního skoku) zaměříme událost.
    window.addEventListener('load', () => setTimeout(() => focusEvent(id), 80));
  }

  /* ────────────────────────────────────────────────────────
     5. UDÁLOST → POPUP HRÁČE
        Mapování id události → jméno hráče si vezmeme rovnou
        z players.js (pole CLENI, pole "hist"). Žádné dvojí psaní.
     ──────────────────────────────────────────────────────── */
  if (window.Players && Array.isArray(window.CLENI)) {
    // { "ev-ardaros": "Ardaros", ... }
    const eventToPlayer = {};
    window.CLENI.forEach(p => { if (p.hist) eventToPlayer[p.hist] = p.name; });

    window.Players.initModalControls();

    document.querySelectorAll('[id^="ev-"]').forEach(el => {
      const playerName = eventToPlayer[el.id];
      if (!playerName) return;

      // Klikatelný je vnitřní obsah (karta), ne tlačítko meziudálosti.
      const clickTarget = el.classList.contains('timeline-item')
        ? el.querySelector('.timeline-content')
        : el.querySelector('.interstitial-card');
      if (!clickTarget) return;

      clickTarget.classList.add('has-player');
      clickTarget.setAttribute('role', 'button');
      clickTarget.setAttribute('tabindex', '0');
      clickTarget.title = `Zobrazit hráče ${playerName}`;

      const openPlayer = (e) => {
        // Klik na tlačítko meziudálosti necháme být (rozbaluje/sbaluje).
        if (e.target.closest('.interstitial-btn')) return;
        window.Players.openByName(playerName);
      };
      clickTarget.addEventListener('click', openPlayer);
      clickTarget.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.Players.openByName(playerName); }
      });
    });
  }
});