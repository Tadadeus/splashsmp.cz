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
     5. UDÁLOST → POPUP HRÁČE (automaticky podle zmínek v textu)
        Každé místo v ose, kde je hráč zmíněn, se dá rozkliknout a
        otevře jeho popup (data z players.js). Když je v jednom textu
        víc hráčů, vybere se ten, který má v celé ose nejméně zmínek
        (= pro daný text nejvýznamnější).
     ──────────────────────────────────────────────────────── */
  if (window.Players && Array.isArray(window.CLENI)) {
    window.Players.initModalControls();

    // Aliasy → jméno hráče v datech. Hledá se case-insensitive jako podřetězec,
    // proto stačí kořen slova (Adas → chytí i Adase/Adasem).
    const aliases = [
      { player: "Ardaros",        words: ["ardaros", "arda "] },
      { player: "SweepingAttack", words: ["sweep"] },
      { player: "Adas25",         words: ["adas"] },
      { player: "Tadadeus",       words: ["tadadeus", "tadadeuse"] },
      { player: "Tobiick",        words: ["tobiick", "tobi "] },
      { player: "Itzz_MaTk0",     words: ["matko"] },
      { player: "___HEADhunter___", words: ["headhunter", "head hunter"] },
      { player: "LukeBot345",     words: ["lukebot"] },
      { player: "Alexx_CZ",       words: ["king", "kinga"] },
      { player: "Karaklan",       words: ["karaklan"] },
      { player: "z0yn3_",         words: ["zydan"] },
      { player: "SindlSin",       words: ["šindl", "sindl"] },
      { player: "bratranec",      words: ["bratranec", "bratrance"] },
      { player: "Martinjefrajer", words: ["martin"] },
      { player: "Kripi33",        words: ["kripi"] },
      { player: "Gingo13",        words: ["gingo", "ging "] },
    ];

    // Spočti, kolikrát je každý hráč v ose zmíněn (pro výběr "nejvýznamnějšího").
    const allCards = [...document.querySelectorAll('.timeline-content, .interstitial-card')];
    const fullText = allCards.map(c => c.textContent.toLowerCase()).join("  ");
    const mentionCount = {};
    aliases.forEach(a => {
      mentionCount[a.player] = a.words.reduce((sum, w) => {
        return sum + fullText.split(w).length - 1;
      }, 0);
    });

    function playerForText(text) {
      const t = text.toLowerCase();
      const matches = aliases.filter(a => a.words.some(w => t.includes(w)));
      if (matches.length === 0) return null;
      // Vyber hráče s nejméně zmínkami v celé ose.
      matches.sort((a, b) => mentionCount[a.player] - mentionCount[b.player]);
      // Jen pokud na něj máme kartu v datech.
      const found = matches.find(m => window.Players.findByName(m.player));
      return found ? found.player : null;
    }

    allCards.forEach(card => {
      // Ruční přepis přes data-player na .timeline-item / .timeline-interstitial:
      //   data-player="Jmeno" → vždy tento hráč
      //   data-player=""       → žádný popup (vypnuto)
      const holder = card.closest('[data-player]');
      let playerName;
      if (holder) {
        const forced = holder.getAttribute('data-player').trim();
        if (forced === "") return;                 // popup vypnut
        playerName = window.Players.findByName(forced) ? forced : null;
      } else {
        playerName = playerForText(card.textContent);
      }
      if (!playerName) return;

      card.classList.add('has-player');
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.title = `Zobrazit hráče ${playerName}`;

      const open = (e) => {
        if (e && e.target && e.target.closest('.interstitial-btn')) return;
        window.Players.openByName(playerName);
      };
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    });
  }
});