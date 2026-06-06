// ==========================================================================
// ČLENI – přidání nového člena = jeden řádek v poli `cleni`.
// section:   "admin" = Admin tým, "hrac" = Hráči
// roleClass: "role--red" (Majitel), "role--blue" (Moderátor) …
// ==========================================================================
const cleni = [
  // ── ADMIN TÝM ──
  { section: "admin", name: "Adas25",   role: "Majitel",   roleClass: "role--darkred",  desc: "Správce komunity a hlavní developer webu", quote: "Ardaros tahá se za nos" },
  { section: "admin", name: "Tadadeus", role: "Majitel",   roleClass: "role--darkred",  desc: "Hlavní developer Minecraftu a tvůrce propagace", quote: "Chlochtahegenteorgende penerpulandova předmětvěc" },
  { section: "admin", name: "Tobiick",  role: "Majitel",   roleClass: "role--darkred",  desc: "Zakladatel SplashSMP a vedoucí discordu", quote: "Karaklan si dam" },
  { section: "admin", name: "Nojmisek", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou a vývojem serveru", quote: "SplashSMP je nejlepší server" },
  { section: "admin", name: "Itzz_MaTk0", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou, hraje PvP", quote: "Palička je moje síla" },
  { section: "admin", name: "___HEADhunter___", role: "Helper", roleClass: "role--lightblue", desc: "OG člen, helper, builder a redstone inženýr", quote: "Arstotzka je vždy o krok napřed..." },

  // ── HRÁČI ──
  // Sem přidávej běžné hráče: { section: "hrac", name: "...", role: "Hráč", roleClass: "role--gray", desc: "...", quote: "..." },

];

// Sekce v pořadí, ve kterém se vykreslí.
const sections = [
  { key: "admin", title: "Admin tým" },
  { key: "hrac",  title: "Hráči" },
];

function cardHTML(p) {
  return `
    <article class="cleni-card">
      <img class="cleni-card__skin" src="https://vzge.me/bust/256/${p.name}" alt="${p.name}" loading="lazy" />
      <h3 class="cleni-card__name">${p.name}</h3>
      <span class="role-badge ${p.roleClass}">${p.role}</span>
      <p class="cleni-card__desc">${p.desc}</p>
      <p class="cleni-card__quote"><i class="fas fa-quote-left"></i>${p.quote}</p>
    </article>
  `;
}

const root = document.getElementById("cleniRoot");
if (root) {
  root.innerHTML = sections.map(sec => {
    const members = cleni.filter(p => p.section === sec.key);
    const body = members.length
      ? `<div class="cleni-grid">${members.map(cardHTML).join("")}</div>`
      : `<p class="cleni-block__empty">Sekce se připravuje…</p>`;
    return `
      <div class="cleni-block">
        <h2 class="cleni-block__title">${sec.title}</h2>
        <div class="cleni-block__line"></div>
        ${body}
      </div>
    `;
  }).join("");
}
