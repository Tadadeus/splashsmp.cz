// ==========================================================================
// ČLENI – přidání nového člena = jeden řádek v poli `cleni`.
// section:   "admin" = Admin tým, "hrac" = Hráči
// roleClass: "role--red" (Majitel), "role--blue" (Moderátor) …
// VOLITELNÉ: role2 + roleClass2 = druhá role (když chybí, nezobrazí se).
// longDesc:  delší popis, zobrazí se v popup okně po kliknutí na kartu.
// ==========================================================================
const cleni = [
  // ── ADMIN TÝM ──
  { section: "admin", name: "Adas25",   role: "Majitel",   roleClass: "role--darkred",  desc: "Správce komunity a hlavní developer webu", quote: "Ardaros tahá se za nos", longDesc: "Adas je správce komunity a hlavní developer webu SplashSMP. Stará se o chod serveru, propagaci a celkovou vizi projektu." },
  { section: "admin", name: "Tadadeus", role: "Majitel",   roleClass: "role--darkred", role2: "Soudce", roleClass2: "role--orange", desc: "Hlavní developer Minecraftu a tvůrce propagace", quote: "Chlochtahegenteorgende penerpulandova předmětvěc", longDesc: "Tadadeus je hlavní developer Minecraft části serveru a tvůrce propagačního obsahu. Zároveň zastává roli soudce na serveru SplashSMP." },
  { section: "admin", name: "Tobiick",  role: "Majitel",   roleClass: "role--darkred",  desc: "Zakladatel SplashSMP a vedoucí discordu", quote: "Karaklan si dam", longDesc: "Tobiick je zakladatel SplashSMP a vedoucí Discordu. Stojí za zrodem celého projektu a stará se o komunitu." },
  { section: "admin", name: "Nojmisek", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou a vývojem serveru", quote: "SplashSMP je nejlepší server", longDesc: "Nojmisek je moderátor, který pomáhá s komunitou i s vývojem serveru. Dohlíží na pořádek a aktivně se zapojuje do dění." },
  { section: "admin", name: "Itzz_MaTk0", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou, hraje PvP", quote: "Palička je moje síla", longDesc: "Itzz_MaTk0 je moderátor a vášnivý PvP hráč. Pomáhá s komunitou a v boji se neztratí." },
  { section: "admin", name: "___HEADhunter___", role: "Helper", roleClass: "role--lightblue", desc: "OG člen, helper, builder a redstone inženýr", quote: "Arstotzka je vždy o krok napřed...", longDesc: "HEADhunter je OG člen serveru, helper, builder a redstone inženýr. Patří k legendám SplashSMP." },

  // ── HRÁČI ──

];

// Sekce v pořadí, ve kterém se vykreslí.
const sections = [
  { key: "admin", title: "Admin tým" },
  { key: "hrac",  title: "Hráči" },
];

// Sestaví HTML pro role (jedna nebo dvě).
function rolesHTML(p) {
  let html = `<span class="role-badge ${p.roleClass}">${p.role}</span>`;
  if (p.role2 && p.roleClass2) {
    html += `<span class="role-badge ${p.roleClass2}">${p.role2}</span>`;
  }
  return `<div class="role-badges">${html}</div>`;
}

function cardHTML(p, index) {
  return `
    <article class="cleni-card" data-index="${index}" tabindex="0" role="button" aria-label="Zobrazit detail hráče ${p.name}">
      <img class="cleni-card__skin" src="https://vzge.me/bust/256/${p.name}" alt="${p.name}" loading="lazy" />
      <h3 class="cleni-card__name">${p.name}</h3>
      ${rolesHTML(p)}
      <p class="cleni-card__desc">${p.desc}</p>
      <p class="cleni-card__quote"><i class="fas fa-quote-left"></i>${p.quote}</p>
    </article>
  `;
}

const root = document.getElementById("cleniRoot");
if (root) {
  // Globální index pro provázání karet s polem `cleni`.
  let idx = 0;
  root.innerHTML = sections.map(sec => {
    const members = cleni
      .map((p, i) => ({ p, i }))
      .filter(x => x.p.section === sec.key);

    const body = members.length
      ? `<div class="cleni-grid">${members.map(x => cardHTML(x.p, x.i)).join("")}</div>`
      : `<p class="cleni-block__empty">Sekce se připravuje…</p>`;

    return `
      <div class="cleni-block">
        <h2 class="cleni-block__title">${sec.title}</h2>
        <div class="cleni-block__line"></div>
        ${body}
      </div>
    `;
  }).join("");

  /* ──────────────────────────────────────────────
     POPUP S DETAILEM HRÁČE
  ────────────────────────────────────────────── */
  const modal = document.getElementById("playerModal");
  const mBody = document.getElementById("playerModalBody");

  function openPlayer(i) {
    const p = cleni[i];
    if (!p || !modal) return;
    mBody.innerHTML = `
      <img class="player-modal__skin" src="https://vzge.me/full/384/${p.name}" alt="${p.name}" />
      <h3 class="player-modal__name">${p.name}</h3>
      ${rolesHTML(p)}
      <p class="player-modal__desc">${p.longDesc || p.desc}</p>
      <p class="player-modal__quote"><i class="fas fa-quote-left"></i>${p.quote}</p>
    `;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closePlayer() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Klik na kartu → otevřít detail.
  root.querySelectorAll(".cleni-card").forEach(card => {
    card.addEventListener("click", () => openPlayer(+card.dataset.index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPlayer(+card.dataset.index);
      }
    });
  });

  // Zavření: křížek, klik na pozadí, Esc.
  if (modal) {
    modal.querySelectorAll("[data-close]").forEach(el =>
      el.addEventListener("click", closePlayer)
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closePlayer();
    });
  }
}

/* ════════════════════════════════════════════════
   ČASOMÍRA SEASON 6 – počítá od 16.4.2026 19:00
════════════════════════════════════════════════ */
(function () {
  const el = document.getElementById("seasonTimer");
  if (!el) return;

  // 16. dubna 2026, 19:00 (lokální čas).
  const start = new Date(2026, 3, 16, 19, 0, 0); // měsíc je 0-indexovaný → 3 = duben

  function tick() {
    const diff = Date.now() - start.getTime();
    if (diff < 0) {
      el.textContent = "Season 6 ještě nezačala";
      return;
    }
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
