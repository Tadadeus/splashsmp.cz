// ==========================================================================
// STRÁNKA ČLENI – vykreslení karet + popup (data jsou v players.js).
// Přidání/úprava hráče = players.js, NE tady.
// ==========================================================================
'use strict';

const CLENI = window.CLENI;
const P = window.Players;

// Sekce v pořadí, ve kterém se vykreslí.
const sections = [
  { key: "admin", title: "Admin tým", subtitle: "Tým, který stojí za SplashSMP – majitelé, vývojáři a moderátoři komunity." },
  { key: "hrac",  title: "Hráči", subtitle: "Hráči, kteří tvoří srdce serveru a dělají SplashSMP tím, čím je." },
];

function cardHTML(p, index) {
  return `
    <article class="cleni-card" data-index="${index}" tabindex="0" role="button" aria-label="Zobrazit detail hráče ${p.name}">
      <img class="cleni-card__skin" src="${P.skinSrc(p, 'bust', 256)}" alt="${p.name}" loading="lazy"
           onerror="${P.onErrFallback('bust', 256)}" />
      <h3 class="cleni-card__name">${p.name}</h3>
      ${P.rolesHTML(p)}
      <p class="cleni-card__desc">${p.desc}</p>
      <p class="cleni-card__quote"><i class="fas fa-quote-left"></i>${p.quote}</p>
    </article>
  `;
}

const root = document.getElementById("cleniRoot");
if (root) {
  root.innerHTML = sections.map(sec => {
    const members = CLENI
      .map((p, i) => ({ p, i }))
      .filter(x => x.p.section === sec.key);

    // Hráči – řazení do skupin (stabilní):
    //   0) first: true (Ardaros, Sweep, Ludeng…) – vždy první, v pořadí pole
    //   1) hráči s videem (link) – seskupení tak, aby stejný link byl vedle sebe
    //   2) hráči s delším lore (bez videa)
    //   3) ostatní (bez lore)
    if (sec.key === "hrac") {
      const rank = (p) => {
        if (p.first) return 0;
        if (p.link)  return 1;
        if (p.lore)  return 2;
        return 3;
      };
      members.forEach((x, i) => { x._i = i; });
      members.sort((a, b) => {
        const ra = rank(a.p), rb = rank(b.p);
        if (ra !== rb) return ra - rb;
        if (ra === 1 && a.p.link !== b.p.link) return a.p.link < b.p.link ? -1 : 1;
        return a._i - b._i;
      });
    }

    const gridClass = sec.key === "admin" ? "cleni-grid cleni-grid--3col" : "cleni-grid";
    const body = `<div class="${gridClass}">${members.map(x => cardHTML(x.p, x.i)).join("")}</div>`;

    const subtitle = sec.subtitle ? `<p class="cleni-block__subtitle">${sec.subtitle}</p>` : "";
    const note = sec.key === "hrac"
      ? `<p class="cleni-block__note"><em>Pozn.: ne všichni zobrazení hráči jsou aktuálně na whitelistu – někteří hráli v minulých sezónách.</em></p>`
      : "";

    return `
      <div class="cleni-block">
        <h2 class="cleni-block__title">${sec.title}</h2>
        <div class="cleni-block__line"></div>
        ${subtitle}
        ${note}
        ${body}
      </div>
    `;
  }).join("");

  // Klik na kartu → popup (na stránce Členi ukážeme i odkaz do Historie).
  root.querySelectorAll(".cleni-card").forEach(card => {
    const idx = +card.dataset.index;
    const openIt = () => P.open(CLENI[idx], { showHistLink: true });
    card.addEventListener("click", openIt);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openIt(); }
    });
  });

  P.initModalControls();
}

/* ════════════════════════════════════════════════
   ČASOMÍRA SEASON 6 – počítá od 16.4.2026 19:00
════════════════════════════════════════════════ */
(function () {
  const el = document.getElementById("seasonTimer");
  if (!el) return;
  const start = new Date(2026, 3, 16, 19, 0, 0); // 16.4.2026 19:00

  function tick() {
    const diff = Date.now() - start.getTime();
    if (diff < 0) { el.textContent = "Season 6 ještě nezačala"; return; }
    const totalSec = Math.floor(diff / 1000);
    const days  = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins  = Math.floor((totalSec % 3600) / 60);
    const secs  = totalSec % 60;
    el.textContent = `Season 6 běží: ${days} dní ${hours} hodin ${mins} minut ${secs} sekund`;
  }
  tick();
  setInterval(tick, 1000);
})();
