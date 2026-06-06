// ==========================================================================
// ČLENI – přidání nového člena = jeden řádek v poli `cleni`.
// section:   "admin" = Admin tým, "hrac" = Hráči
// roleClass: "role--red" (Majitel), "role--blue" (Moderátor) …
// VOLITELNÉ: role2 + roleClass2 = druhá role (když chybí, nezobrazí se).
// longDesc:  delší popis, zobrazí se v popup okně po kliknutí na kartu.
// skin:      přepíše skin – buď jiné jméno (hráč co změnil nick),
//            nebo přímo celá URL obrázku (začíná "http") pro KARTU (bust).
// skinFull:  volitelná celá URL pro POPUP (full model). Když chybí a "skin"
//            je URL, použije se "skin" i v popupu.
//            Když nic z toho, skin se bere podle "name".
// POZN.: Když skin neexistuje (obrázek se nenačte), automaticky se použije
//        náhradní skin "Lullible" (viz FALLBACK_SKIN / onerror).
// ==========================================================================
const cleni = [
  // ── ADMIN TÝM ──
  { section: "admin", name: "Adas25",   role: "Majitel",   roleClass: "role--darkred",  desc: "Správce komunity a hlavní developer webu", quote: "Z objektivního hlediska jsem nejlepší.", longDesc: "Adas je majitel serveru, který už několikrát byl prezidentem nebo součástí vlády. Jeho vládnutí mnozí nemají rádi, ovšem z objektivního hlediska je na profesionální úrovni a srovnává se s těmi nejlepšími (Ardaros). Rád útočí na své politické oponenty a zveličuje jejich nedostatky – někdy mu chybí špetka sebereflexe. Dle výpovědí svědků byl spatřen v blízkosti lidí z tajné splashské organizace, jejíž jméno se nesmí vyslovit." },
  { section: "admin", name: "Tadadeus", role: "Majitel",   roleClass: "role--darkred", role2: "Soudce", roleClass2: "role--orange", desc: "Hlavní developer Minecraftu a tvůrce propagace", quote: "Vše dělám ve stínu a ví o tom jen Ardaros.", longDesc: "Tadadeus je majitel serveru, který pracuje jako soudce. Své činy a kšefty dělá ve stínu a ví o nich jen Ardaros. Dle nalezených spisů byl členem tajné splashské organizace, jejíž jméno se nesmí vyslovit. Za své vlády se snažil dostat SplashSMP z krize, do které ho zatáhl nekompetentní prezident King." },
  { section: "admin", name: "Tobiick",  role: "Majitel",   roleClass: "role--darkred",  desc: "Zakladatel SplashSMP a vedoucí discordu", quote: "Proč bych měl respektovat systém?", longDesc: "Tobi je majitel serveru, který někdy nerespektuje autority a snaží se jít proti systému. Nikdy ovšem neskončí u soudu a nikdo neví proč. Existuje teorie, že financoval Šindlovu nelegální místnost v jeho base, o které se nesmí mluvit." },
  { section: "admin", name: "Nojmisek", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou a vývojem serveru", quote: "Hlavně rád pomáhám.", longDesc: "Nojmisek rád pomáhá. Mezi jeho slabší stránky patří main character syndrome a pořádný kus chaosu v hlavě, na který mu prý vystavil papíry sám doktor Luděk. I přesto je to platný moderátor, který se aktivně zapojuje do dění na serveru." },
  { section: "admin", name: "Itzz_MaTk0", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou, hraje PvP", quote: "Palička je moje síla.", longDesc: "Itzz_MaTk0 je moderátor a vášnivý PvP hráč. Pomáhá s komunitou a v boji se neztratí – jeho palička je na serveru pojem." },
  { section: "admin", name: "___HEADhunter___", role: "Helper", roleClass: "role--lightblue", desc: "OG člen, helper, builder a redstone inženýr", quote: "Arstotzka je vždy o krok napřed...", longDesc: "HEADhunter je OG člen serveru, helper, builder a redstone inženýr. Patří k legendám SplashSMP. Taktéž je bývalý Prezident." },

  // ── HRÁČI ──
  { section: "hrac", name: "Ardaros", skin: "https://visage.surgeplay.com/bust/256/a0c52609df90475d93f3e8ad4ab9786c", skinFull: "https://visage.surgeplay.com/full/256/a0c52609df90475d93f3e8ad4ab9786c", role: "Hacker", roleClass: "role--red", desc: "Legendární hacker serveru, o kterém vznikla řada videí", quote: "Vykvasim ti kabanos...", longDesc: "Ardaros je nejznámější hacker v historii SplashSMP. Několikrát hacknul server, odpálil spawn a stal se tak doslova legendou – natočili jsme o něm přes 10 videí. Jeho lore se postupně odhaluje napříč sezónami. Více o jeho řádění najdeš v sekci Historie." },

  { section: "hrac", name: "bratranec", skin: "Bratranec", role: "Hráč", roleClass: "role--gray", desc: "Prezident season 5", quote: "Posunu SplashSMP dál.", longDesc: "Bratranec se stal prezidentem v 5. sezóně. Někteří říkají, že mu to vlezlo do hlavy, ovšem pravda je, že se snaží dostat SplashSMP ještě výš, než kam ho dotáhla úspěšná vláda Tadadeuse. Je také členem tajné organizace KyS, o které se nesmí mluvit." },
  { section: "hrac", name: "TakyOndatra", role: "Hráč", roleClass: "role--gray", desc: "Bývalý předseda vlády", quote: "Vše mám pod kontrolou.", longDesc: "Někteří TakyOndatru považují za nekompetentního předsedu vlády, jeho činy ale mluví za vše. Při předvolební debatě byl údajně pod vlivem omamných a psychotropních látek, které měl získat od jistého distributora ze Šindlovy base." },
  { section: "hrac", name: "SindlSin", skin: "Ardaros", role: "Hráč", roleClass: "role--gray", desc: "Magor, který to s ardou opravdu umí", quote: "Za správnou cenu udělám cokoliv.", longDesc: "SindlSin je magor, ale s ardou to opravdu umí. Vlastnil nelegální místnost ve své base, kterou údajně financoval Tobiick. Je snadno podplatitelný, takže nikdy nevíš, kdy tě právě on zradí – a jestli náhodou nejsi jen jeho loutka." },
  { section: "hrac", name: "Tomjo19", role: "Hráč", roleClass: "role--gray", desc: "Stavitel Galerie z Mafie 1", quote: "Galerie bude hotová… někdy.", longDesc: "Tomjo je známý svou stavbou Galerie z Mafie 1, na které pracuje déle, než si sám pamatuje. Má své side byznysy, o kterých nerad mluví – ať už kvůli jejich nelegálnosti, nebo kvůli spojitosti s obávaným Ardarosem." },
  { section: "hrac", name: "Lupi1Xx", role: "Hráč", roleClass: "role--gray", desc: "Bývalý strážce prezidenta", quote: "Mír udržím… většinou.", longDesc: "Lupix je strážce prezidenta, jehož úkolem je udržovat na serveru mír. Ne vždy se mu to ale daří – respektive ne vždy o to stojí. Několikrát svou vládu zradil a zavraždil její členy, přesto v ní stále setrvává. Možná je za tím síla Ardarose, možná fotky, které posílá panu prezidentovi do DMs." },
  { section: "hrac", name: "Alexx_CZ", role: "Hráč", roleClass: "role--gray", desc: "Bývalý prezident SplashSMP", quote: "Moje vláda měla smysl.", longDesc: "Alexx (dříve známý jako King) je bývalý prezident SplashSMP. Mnoho hráčů jeho vládu neuznává a označuje ji za špatnou, on a jeho lidé ale umí svá tvrzení vyargumentovat tak, že nikdo nemá slov. Po čase si změnil nick a vrátil se zpět do dění na serveru." },
  { section: "hrac", name: "zeleny_banan", skin: "zeleny_banan_", role: "Hráč", roleClass: "role--gray", desc: "Tvůrce neobvyklých a vtipných staveb", quote: "Hlavně ať je sranda.", longDesc: "zeleny_banan je známý svými neobvyklými a humornými stavbami. Vnáší do hry lehkost a zábavu, a i když se neúčastní velkých politických her, jeho přítomnost je vždy osvěžující. Má rád experimenty a nekonvenční řešení – je to oblíbený hráč, který přináší dobrou náladu." },
  { section: "hrac", name: "Ludeng", skin: "Ludeng69", role: "Hráč", roleClass: "role--gray", desc: "Doktor a hlavní alchymista serveru", quote: "Mám lektvar na všechno.", longDesc: "Ludeng zastává roli Doktora a je hlavním alchymistou serveru. Vyrábí a distribuuje léčivé i posilující lektvary a je nepostradatelný v každém PvP souboji i expedici. Jeho specializací je také výzkum nových lektvarů a jejich efektů – je to velmi cenný a klidný člen týmu." },
  { section: "hrac", name: "Screenatyouruse", role: "Hráč", roleClass: "role--gray", desc: "Člen teroristického týmu", quote: "Autority jsou tu od toho, aby padaly.", longDesc: "Screeny je člen teroristického teamu GNMT. Nebojí se odporovat autoritám, sám by ale ve vedení neuspěl. Vztek si vylévá na hráče SindlSin, který poté trucuje v /jail." },
  { section: "hrac", name: "Karaklan", role: "Hráč", roleClass: "role--gray", desc: "Ardarosův komplic", quote: "S Legendou se domluvím jen já.", longDesc: "Karaklan je Ardarosův komplic a jediný, kdo se s Legendou dokáže domluvit. Slouží jako most mezi Ardarosem a zbytkem serveru. Jeho role je velmi nejasná a často kontroverzní – vždy se objeví ve chvílích velkých událostí. Je to hráč s nepopiratelným vlivem, který pracuje v zákulisí." },

  // ── HRÁČI (whitelist – zatím bez bližšího popisu) ──
  { section: "hrac", name: "kitty4111", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "kitty4111 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "SoftIsland57564", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "SoftIsland57564 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Dandrak13", role: "Hráč", roleClass: "role--gray", desc: "Totální magor", quote: "Normální? To neznám.", longDesc: "Dandrak13 je totální magor. Na serveru nikdy není nuda, když je u toho on." },
  { section: "hrac", name: "vulok_Cz1", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "vulok_Cz1 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Pokkyy07", role: "Hráč", roleClass: "role--gray", desc: "Hráč ze 4. sezóny", quote: "Base nejlíp ve dvou.", longDesc: "Pokkyy07 je na serveru od čtvrté sezóny a má společnou base s Krystofem200816. Společně tvoří sehranou dvojku." },
  { section: "hrac", name: "sanar0", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "sanar0 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "kubakubikkula", role: "Hráč", roleClass: "role--gray", desc: "Crystal PvP a anarchista", quote: "Žádná pravidla, jen crystaly.", longDesc: "kubakubikkula je mistr crystal PvP a srdcem anarchista. Pravidla a autority pro něj moc neznamenají – nejlíp se cítí v souboji s totemy a krystaly v ruce." },
  { section: "hrac", name: "medvidek", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "medvidek patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "night_drag0n", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "night_drag0n patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "sutomatyas", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "sutomatyas patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "milnos", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "milnos patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "TytaCZ", role: "Hráč", roleClass: "role--gray", desc: "Stavitel a fanoušek kvantové fyziky", quote: "Postavím to a ještě ti vysvětlím kvantovku.", longDesc: "TytaCZ rád staví a má slabost pro kvantovou fyziku. Na serveru je už od čtvrté sezóny a patří k pevné části komunity." },
  { section: "hrac", name: "Chlochtanbagel", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Chlochtanbagel patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "ZetaSitetampo", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "ZetaSitetampo patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Krystof200816", role: "Hráč", roleClass: "role--gray", desc: "Hráč ze 4. sezóny", quote: "Base nejlíp ve dvou.", longDesc: "Krystof200816 je na serveru od čtvrté sezóny a má společnou base s Pokkyy07. Společně tvoří sehranou dvojku." },
  { section: "hrac", name: "kxbuxrich_1590", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "kxbuxrich_1590 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Ultraantcatcher", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Ultraantcatcher patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Maxovator", role: "Hráč", roleClass: "role--gray", desc: "Hráč SplashSMP (dříve Jan Kral)", quote: "Pomalu, ale jistě.", longDesc: "Maxovator (dříve známý jako Jan Kral) je hráč SplashSMP, který si na serveru buduje jméno a svým klidným přístupem zapadá do komunity." },
  { section: "hrac", name: "4Rampagerss", role: "Hráč", roleClass: "role--gray", desc: "OG hráč, takzvaná známá firma", quote: "Prachů mám dost.", longDesc: "4Rampagerss je OG hráč, takzvaná známá firma. Měl na spawnu vlastní shop a ve třetí sezóně mu místo něj Pastel world editem postavil radnici. Je také pěkně zazobaný, peněz má víc než dost." },
  { section: "hrac", name: "nudamen123", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "nudamen123 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "RileLevakus", role: "Hráč", roleClass: "role--gray", desc: "Hráč ze starších sezón", quote: "Měl jsem práva, co jsem mít neměl.", longDesc: "RileLevakus je na serveru zhruba od třetí sezóny. Zneužíval práva, která získal zapovězeným způsobem – měl vanish, teleport i příkaz na zjištění pozice hráčů a jejich base." },
  { section: "hrac", name: "baltazar696969", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "baltazar696969 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "rewnexlou", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "rewnexlou patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Vasicek_Cz132", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Vasicek_Cz132 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Raphaelcze", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Raphaelcze patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "bury2024", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "bury2024 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "krtecek_m2", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "krtecek_m2 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "_Matomik_", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "_Matomik_ patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "pepa12341234", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "pepa12341234 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "TepigCZ", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "TepigCZ patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "eragon_5", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "eragon_5 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "ovocnycajik", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "ovocnycajik patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "conki24", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "conki24 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },

];

// Sekce v pořadí, ve kterém se vykreslí.
const sections = [
  { key: "admin", title: "Admin tým", subtitle: "Tým, který stojí za SplashSMP – majitelé, vývojáři a moderátoři komunity." },
  { key: "hrac",  title: "Hráči", subtitle: "Hráči, kteří tvoří srdce serveru a dělají SplashSMP tím, čím je." },
];

// Náhradní skin, když hráč/skin neexistuje (nenačte se obrázek).
const FALLBACK_SKIN = "Lullible";

// URL skinu.
//   type = "bust" (karta) | "full" (popup), size = px
// Pro full model dáme přednost "skinFull", pak "skin", pak jménu.
function skinSrc(p, type, size) {
  // Popup (full): pokud je zadaná samostatná URL, použij ji.
  if (type === "full" && /^https?:\/\//i.test(p.skinFull || "")) return p.skinFull;

  const skin = p.skin || p.name;
  if (/^https?:\/\//i.test(skin)) return skin;        // přímá URL obrázku
  return `https://vzge.me/${type}/${size}/${encodeURIComponent(skin)}`;
}

// URL náhradního skinu (Lullible) – použije se v onerror, když se skin nenačte.
function fallbackSrc(type, size) {
  return `https://vzge.me/${type}/${size}/${FALLBACK_SKIN}`;
}

// onerror atribut: při selhání obrázku přepne na náhradní skin (jen jednou).
function onErrFallback(type, size) {
  return `this.onerror=null; this.src='${fallbackSrc(type, size)}';`;
}

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
      <img class="cleni-card__skin" src="${skinSrc(p, 'bust', 256)}" alt="${p.name}" loading="lazy"
           onerror="${onErrFallback('bust', 256)}" />
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

    // Admin tým má 6 karet → mřížka omezená na 3 sloupce (3×2).
    const gridClass = sec.key === "admin" ? "cleni-grid cleni-grid--3col" : "cleni-grid";
    const body = `<div class="${gridClass}">${members.map(x => cardHTML(x.p, x.i)).join("")}</div>`;

    const subtitle = sec.subtitle
      ? `<p class="cleni-block__subtitle">${sec.subtitle}</p>`
      : "";

    return `
      <div class="cleni-block">
        <h2 class="cleni-block__title">${sec.title}</h2>
        <div class="cleni-block__line"></div>
        ${subtitle}
        ${body}
      </div>
    `;
  }).join("");

  /* ──────────────────────────────────────────────
     POPUP S DETAILEM HRÁČE
  ────────────────────────────────────────────── */
  const modal = document.getElementById("playerModal");
  const mBody = document.getElementById("playerModalBody");

  // Sleduje, jestli je v historii náš stav pro otevřený popup.
  let modalHistoryPushed = false;

  function openPlayer(i) {
    const p = cleni[i];
    if (!p || !modal) return;
    mBody.innerHTML = `
      <img class="player-modal__skin" src="${skinSrc(p, 'full', 384)}" alt="${p.name}"
           onerror="${onErrFallback('full', 384)}" />
      <h3 class="player-modal__name">${p.name}</h3>
      ${rolesHTML(p)}
      <p class="player-modal__desc">${p.longDesc || p.desc}</p>
      <p class="player-modal__quote"><i class="fas fa-quote-left"></i>${p.quote}</p>
    `;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");

    // Přidáme stav do historie → tlačítko/gesto "zpět" zavře popup,
    // místo aby odešlo z celé stránky.
    if (!modalHistoryPushed) {
      history.pushState({ playerModal: true }, "");
      modalHistoryPushed = true;
    }
  }

  // closePlayer(fromPopstate): když zavírá uživatel (křížek/Esc/pozadí),
  // vrátíme se i v historii. Když přišlo "zpět" (popstate), jen schováme.
  function closePlayer(fromPopstate) {
    if (!modal || !modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");

    if (!fromPopstate && modalHistoryPushed) {
      modalHistoryPushed = false;
      history.back();          // spotřebuje náš stav, historie zůstane čistá
    } else {
      modalHistoryPushed = false;
    }
  }

  // Tlačítko / gesto "zpět" na mobilu i PC → zavře popup, nikam neodejde.
  window.addEventListener("popstate", () => {
    if (modal && modal.classList.contains("is-open")) closePlayer(true);
  });

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
      el.addEventListener("click", () => closePlayer())
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
