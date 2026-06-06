// ==========================================================================
// ČLENI – přidání nového člena = jeden řádek v poli `cleni`.
// roleClass: "role--red" (Majitel), "role--blue" (Moderátor) …
// ==========================================================================
const cleni = [
  { name: "Adas25",   role: "Majitel",   roleClass: "role--red",  desc: "Správce komunity a hlavní developer webu", quote: "Ardaros tahá se za nos" },
  { name: "Tadadeus", role: "Majitel",   roleClass: "role--red",  desc: "Hlavní developer Minecraftu",              quote: "Chlochtahegenteorgendepenerpulandova předmětvěc" },
  { name: "Tobiick",  role: "Majitel",   roleClass: "role--red",  desc: "Zakladatel a vedoucí discordu",            quote: "Karaklan si dam" },
  { name: "Nojmisek", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou a vývojem",             quote: "SplashSMP je nejlepší server" },
];

const grid = document.getElementById("cleniGrid");
if (grid) {
  grid.innerHTML = cleni.map(p => `
    <article class="cleni-card">
      <img class="cleni-card__skin" src="https://vzge.me/bust/256/${p.name}" alt="${p.name}" loading="lazy" />
      <h3 class="cleni-card__name">${p.name}</h3>
      <span class="role-badge ${p.roleClass}">${p.role}</span>
      <p class="cleni-card__desc">${p.desc}</p>
      <p class="cleni-card__quote"><i class="fas fa-quote-left"></i>${p.quote}</p>
    </article>
  `).join("");
}
