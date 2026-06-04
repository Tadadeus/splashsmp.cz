'use strict';

document.addEventListener('DOMContentLoaded', () => {

if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.preventDefault(); // Zamezí skákání stránky, pokud je to href="#"
    
    console.log("Hamburger menu úspěšně přepnuto!");
    
    // Používáme bezpečnější toggle pro všechny prvky současně
    hamburger.classList.toggle('active');
    if (navbarNav) navbarNav.classList.toggle('active');
    if (navbarHeader) navbarHeader.classList.toggle('active');
  }); // <--- Odstraň to "true" na konci, běžný bubbling bohatě stačí
}
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

      // Oprava: karta s backdrop-filter (Ardaros easter egg) se po změně
      // výšky někdy nepřekreslí a zmizí. Nepatrný "nudge" transformu
      // donutí kompozitor kartu překreslit – bez viditelné změny.
      const eggCard = document.querySelector('.ardaros-card');
      if (eggCard) {
        const nudge = () => {
          eggCard.style.transform = 'translateZ(0) scale(1.0001)';
          requestAnimationFrame(() => {
            eggCard.style.transform = 'translateZ(0)';
          });
        };
        nudge();              // hned
        setTimeout(nudge, 320); // po doběhnutí přechodu max-height (0.3s)
      }
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
});