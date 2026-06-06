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
  { section: "admin", name: "Nojmisek", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou a vývojem serveru", quote: "Hlavně rád pomáhám.", longDesc: "Nojmisek rád pomáhá. Mezi jeho negativní vlastnosti patří main character syndrome, schizofrenie, autismus a papíry na hlavu, které mu vystavil sám doktor Luděk. I přesto je to platný moderátor, který se aktivně zapojuje do dění na serveru." },
  { section: "admin", name: "Itzz_MaTk0", role: "Moderátor", roleClass: "role--blue", desc: "Moderátor a PvP hráč", quote: "Matkova palička nezná slitování.", longDesc: "Matko (Itzz_MaTk0) je moderátor a PvP hráč. Pomáhá s komunitou, s nábory a v boji mu pomáhá jeho obávaná Matkova palička, o které bylo natočeno i video.", link: "https://www.tiktok.com/@splashsmp/video/7510101966102465814" },
  { section: "admin", name: "___HEADhunter___", role: "Helper", roleClass: "role--lightblue", desc: "OG člen, helper, builder a redstone inženýr", quote: "Arstotzka je vždy o krok napřed...", longDesc: "HEADhunter je OG člen serveru, helper, builder a redstone inženýr. Patří k legendám SplashSMP. Taktéž je bývalý Prezident." },

  // ── HRÁČI ──
  { section: "hrac", name: "Ardaros", skin: "https://visage.surgeplay.com/bust/256/a0c52609df90475d93f3e8ad4ab9786c", skinFull: "https://visage.surgeplay.com/full/256/a0c52609df90475d93f3e8ad4ab9786c", role: "Hacker", roleClass: "role--red", desc: "Legendární hacker serveru, o kterém vznikla řada videí", quote: "Vykvasim ti kabanos...", longDesc: "Ardaros je nejznámější hacker v historii SplashSMP. Několikrát hacknul server, odpálil spawn a stal se tak doslova legendou – natočili jsme o něm přes 10 videí. Jeho lore se postupně odhaluje napříč sezónami. Více o jeho řádění najdeš v sekci Historie." },

  // — hráči s lore (řadí se nahoru) —
  { section: "hrac", name: "bratranec", skin: "Bratranec", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý prezident season 5", quote: "Posunul jsem SplashSMP dál.", longDesc: "Bratranec se jednou stal prezidentem v 5. sezóně. Někteří říkají, že mu to vlezlo do hlavy, ovšem pravda je, že se snažil dostat SplashSMP ještě výš, než kam ho dotáhla úspěšná vláda Tadadeuse a premiéra Adase. Jak moc se mu to dařilo dokládá fakt, že hned další volby ho vystřídal jiný prezident – ten ovšem server kvůli své nekompetenci ukončil do 2 týdnů." },
  { section: "hrac", name: "TakyOndatra", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Předseda vlády", quote: "Vše mám pod kontrolou.", longDesc: "Někteří říkají, že TakyOndatra je nekompetentní předseda vlády. Jeho činy ale mluví za vše: při předvolební debatě byl pod vlivem omamných a psychotropních látek, které získal od jistého distributora ze Šindlovy base." },
  { section: "hrac", name: "SindlSin", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Magor, který to s ardou opravdu umí", quote: "Za správnou cenu udělám cokoliv.", longDesc: "SindlSin je magor, ale s ardou to opravdu umí. Vlastnil nelegální místnost ve své base, kterou údajně financoval Tobiick. Je snadno podplatitelný, takže nikdy nevíš, kdy tě právě on zradí – a jestli náhodou nejsi jen jeho loutka." },
  { section: "hrac", name: "Tomjo19", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Stavitel \"Galerie z Mafie 1\"", quote: "Galerie bude hotová… někdy.", longDesc: "Tomjo je známý svou stavbou parkoviště na spawnu. On ji ovšem nazývá Galerií z Mafie 1 a pracuje na ní déle, než si sám pamatuje. Má své side byznysy, o kterých nerad mluví – ať už kvůli jejich nelegálnosti, nebo kvůli spojitosti s obávaným Ardarosem." },
  { section: "hrac", name: "Lupi1Xx", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý strážce prezidenta", quote: "PvP je moje pojistka.", longDesc: "Lupix několikrát zradil vládu, pro kterou pracoval jako strážce, přesto si udržel respekt – hlavně díky svému PvP knowhow. Možná je to síla Ardarose, možná fotek, které posílá panu prezidentovi do DMs." },
  { section: "hrac", name: "Alexx_CZ", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý prezident SplashSMP", quote: "Nic špatného jsem neudělal.", longDesc: "Alex (dříve známý jako King) je bývalý prezident SplashSMP. Mnoho hráčů jeho vládu neuznává a označuje ji za špatnou, on a jeho vláda ale umí tato tvrzení vyargumentovat tak, že nikdo nemá slov – právě proto, že na serveru neudělal nic špatného. Měl totiž 90 % mandátu dovolenou. Poslední zmínka o něm byla nalezena ve spisech šíleného doktora Luďka. Od té doby je nezvěstný." },
  { section: "hrac", name: "Ludeng", skin: "Ludeng69", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Doktor serveru", quote: "Hlasy mi poradí, co s tebou.", longDesc: "Ludeng (Luděk) zastává na serveru roli Doktora. Každý hráč, který měl co dočinění s Ardarosem, navštěvuje pana doktora, který ho pomocí zapovězených metod vyseká z traumatu způsobeného Ardovou přítomností. Existují důkazy, že Luděk slyší v hlavě hlasy, které mu našeptávají, co má při zákroku dělat." },
  { section: "hrac", name: "Screenatyouruse", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý člen teroristického týmu GNMT", quote: "Autority jsou tu od toho, aby padaly.", longDesc: "Screeny byl člen teroristického teamu GNMT, který před časem zanikl. Nebojí se odporovat autoritám, sám by ale ve vedení neuspěl. Vztek si vylévá na Šindla, který poté trucuje v /jail." },
  { section: "hrac", name: "Karaklan", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Ardarosův komplic", quote: "S Legendou se domluvím jen já.", longDesc: "Karaklan je Ardarosův komplic a jediný člověk, který se s Legendou dokáže domluvit. Slouží jako most mezi Ardarosem a zbytkem serveru. Jeho role je nejasná a kontroverzní – vždy se objeví ve chvílích velkých událostí. Je to hráč s nepopiratelným vlivem, který pracuje v zákulisí." },
  { section: "hrac", name: "DanDrak13", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Totální magor (na Discordu svickovaomacka)", quote: "Věk je jen číslo.", longDesc: "DanDrak13 (na Discordu svickovaomacka) je totální magor – na serveru nikdy není nuda, když je u toho on. Je to člověk svého druhu, kterej se na server dostal i přes nesplnění věkového limitu." },
  { section: "hrac", name: "kubakubikkula", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Crystal PvP a anarchista", quote: "Prezidentskou armádu si mažu na chleba.", longDesc: "Kuba je mistr v crystal PvP a srdcem anarchista. Pravidla a autority pro něj moc neznamenají – prezidentskou armádu si tak zvaně namaže na chleba. O teamu anarchistů vzniklo i video.", link: "https://www.tiktok.com/@splashsmp_/video/7511603425285541142" },
  { section: "hrac", name: "vitcs15", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Zakladatel teamu anarchisti", quote: "Tobiick mi ukradl team.", longDesc: "Vítek je zakladatel teamu anarchisti. Doteď se nevyrovnal s tím, že mu Tobiick team převzal, totálně zdegradoval a provedl na něm segregaci. Je mistr v crystal PvP, stejně jako kubakubikkula – má za sebou desítky, ne-li stovky soudů. O teamu anarchistech vzniklo i video.", link: "https://www.tiktok.com/@splashsmp_/video/7511603425285541142" },
  { section: "hrac", name: "Maxovator", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Cheater a sabotér (dříve Jan Král)", quote: "Volby? Ty si zařídím sám.", longDesc: "Maxovator (známý též jako Jan Král) rád cheatuje, odpaluje konferenční místnosti či sabotuje volby. O SplashSMP vydává videa na svůj YouTube, včetně songu.", link: "https://www.youtube.com/watch?v=vr1Cafj6xdQ&t" },
  { section: "hrac", name: "4Rampagerss", lore: true, role: "Hráč", roleClass: "role--gray", desc: "OG hráč, takzvaná známá firma", quote: "Prachů mám víc než dost.", longDesc: "Rampy je OG hráč, takzvaná známá firma. Měl na spawnu vlastní shop a ve třetí sezóně mu místo něj někdo pastnul world editem radnici. Je také pěkně zazobaný, peněz má víc než dost." },
  { section: "hrac", name: "RileLevakus", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Hráč od 4. sezóny", quote: "Měl jsem práva, co jsem mít neměl.", longDesc: "Levák je na serveru zhruba od čtvrté sezóny. Zneužíval práva, která získal zapovězeným způsobem – měl vanish, teleport i příkaz na zjištění pozice hráčů a jejich base. Vzniklo o něm i video.", link: "https://www.tiktok.com/@splashsmp_/video/7644162264865541398" },
  { section: "hrac", name: "bury2024", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Kontroverzní hráč 6. sezóny", quote: "Pořád žádám o unban.", longDesc: "Bury se joinul na začátku 6. sezóny. Jeho přítomnost byla kontroverzní kvůli cheatům a podle některých hráčů kvůli toxicitě. Dostal ban a dodnes žádá o jeho zrušení." },
  { section: "hrac", name: "eragon_5", lore: true, role: "Hráč", roleClass: "role--gray", desc: "OG hráč z dob FajnSMP", quote: "S nikým nemám spory.", longDesc: "Eragon je OG hráč, který se joinul v dobách FajnSMP. Je to frajer, který s nikým nemá spory." },
  { section: "hrac", name: "Conki24", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Nováček, co hraje o sto šest", quote: "Hraju o sto šest.", longDesc: "Conki se joinul v období publicu a vytrval až dodnes. Zažil teror Zydana, což ho poznamenalo, a proto pravidelně navštěvuje doktora Luďka. Je jeden z nových hráčů, kteří na serveru hrají o sto šest." },
  { section: "hrac", name: "Natynaxx", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Jedna z mála žen na serveru", quote: "Hraju tu od dob publicu.", longDesc: "Natynaxx je jedna z mála žen na serveru, která na SplashSMP hraje od dob public serveru. Zydanovo vedení ji hodně poznamenalo, asi jako nás všechny, a proto také pravidelně navštěvuje doktora Luďka." },
  { section: "hrac", name: "LukeBot345", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý prezident season 3", quote: "Kandidovat už nesmím.", longDesc: "Lukebot je bývalý prezident 3. sezóny. Jeho vláda byla neschopná a nekompetentní až tak, že mu bylo zakázáno dále kandidovat." },
  { section: "hrac", name: "nelatv", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Jedna z mála žen na serveru", quote: "Dabovala jsem Sáru.", longDesc: "Nela (známá též jako Troska) je jedna z mála žen na serveru. Dabovala i Sáru v našem vedlejším projektu Mafie v Minecraftu.", link: "https://youtube.com/playlist?list=PLbUgm4QGBjESfvUfwDMUrxPXlDMyYdcKN&si=RlXF4Qb3BkjOx3y7" },
  { section: "hrac", name: "Tutell69", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Magor, co si pořád brblá", quote: "Něco si tu blafnu…", longDesc: "Tutel je magor, kterej si neustále něco blafuje a brblá pod fousy." },
  { section: "hrac", name: "TytaCZ", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Ombudsman z Discordu", quote: "Server jsem nikdy nejoinul.", longDesc: "TytaCZ je ombudsmánek, kterej server nikdy nejoinul, ale na Discord se z nějakého důvodu dostal i bez náboru. A když je řeč o něm, nesmí chybět zmínka o kvantové fyzice, která ho fascinuje." },

  // — hráči bez bližšího lore (řadí se dolů) —
  { section: "hrac", name: "kitty4111", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "kitty4111 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "SoftIsland57564", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "SoftIsland57564 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "vulok_Cz1", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "vulok_Cz1 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Pokkyy07", role: "Hráč", roleClass: "role--gray", desc: "Hráč ze 4. sezóny", quote: "Base nejlíp ve dvou.", longDesc: "Pokkyy07 je na serveru od čtvrté sezóny a má společnou base s Krystofem200816. Společně tvoří sehranou dvojku." },
  { section: "hrac", name: "Krystof200816", role: "Hráč", roleClass: "role--gray", desc: "Hráč ze 4. sezóny", quote: "Base nejlíp ve dvou.", longDesc: "Krystof200816 je na serveru od čtvrté sezóny a má společnou base s Pokkyy07. Společně tvoří sehranou dvojku." },
  { section: "hrac", name: "sanar0", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "sanar0 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "medvidek", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "medvidek patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "night_drag0n", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "night_drag0n patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "sutomatyas", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "sutomatyas patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "milnos", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "milnos patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Chlochtanbagel", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Chlochtanbagel patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "ZetaSitetampo", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "ZetaSitetampo patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "kxbuxrich_1590", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "kxbuxrich_1590 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Ultraantcatcher", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Ultraantcatcher patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "nudamen123", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "nudamen123 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "baltazar696969", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "baltazar696969 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "rewnexlou", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "rewnexlou patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Vasicek_Cz132", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Vasicek_Cz132 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "Raphaelcze", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "Raphaelcze patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "krtecek_m2", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "krtecek_m2 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "_Matomik_", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "_Matomik_ patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "pepa12341234", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "pepa12341234 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "TepigCZ", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "TepigCZ patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "ovocnycajik", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "ovocnycajik patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },

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

    // Hráči: ti s lore (lore: true) nahoru, ostatní dolů (stabilní řazení).
    if (sec.key === "hrac") {
      members.sort((a, b) => (b.p.lore ? 1 : 0) - (a.p.lore ? 1 : 0));
    }

    // Admin tým má 6 karet → mřížka omezená na 3 sloupce (3×2).
    const gridClass = sec.key === "admin" ? "cleni-grid cleni-grid--3col" : "cleni-grid";
    const body = `<div class="${gridClass}">${members.map(x => cardHTML(x.p, x.i)).join("")}</div>`;

    const subtitle = sec.subtitle
      ? `<p class="cleni-block__subtitle">${sec.subtitle}</p>`
      : "";

    // Poznámka jen u sekce Hráči – ne všichni jsou aktuálně na whitelistu.
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

  /* ──────────────────────────────────────────────
     POPUP S DETAILEM HRÁČE
  ────────────────────────────────────────────── */
  const modal = document.getElementById("playerModal");
  const mBody = document.getElementById("playerModalBody");

  // Sleduje, jestli je v historii náš stav pro otevřený popup.
  let modalHistoryPushed = false;

  // Tlačítko na video (TikTok / YouTube) – jen pokud má hráč "link".
  function videoLinkHTML(p) {
    if (!p.link) return "";
    const yt = /youtu\.?be/i.test(p.link);
    const icon = yt ? "fa-youtube" : "fa-tiktok";
    const label = yt ? "Video na YouTube" : "Video na TikToku";
    const cls = yt ? "player-modal__link--yt" : "player-modal__link--tt";
    return `
      <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="player-modal__link ${cls}">
        <i class="fab ${icon}"></i> ${label}
      </a>`;
  }

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
      ${videoLinkHTML(p)}
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
