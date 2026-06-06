// ==========================================================================
// SDÍLENÁ DATA + POPUP HRÁČŮ
// Používá cleni.html (výpis karet) i historie.html (popup z časové osy).
// Data jsou JEN tady → žádné dvojí psaní.
//
// Pole CLENI: každý hráč = jeden objekt.
//   section:   "admin" | "hrac"
//   roleClass: "role--red" (Majitel), "role--blue" (Moderátor) …
//   role2 + roleClass2: volitelná druhá role
//   longDesc:  delší popis do popupu
//   skin / skinFull: přepsání skinu (jméno nebo přímá URL)
//   link:      odkaz na video (TikTok/YouTube)
//   hist:      id události v historie.html (#ev-...)
//   first / lore: řazení na stránce Členi
// POZN.: Když se skin nenačte, použije se náhradní "Lullible".
// ==========================================================================
window.CLENI = [
  // ── ADMIN TÝM ──
  { section: "admin", name: "Adas25",   role: "Majitel",   roleClass: "role--darkred",  desc: "Správce komunity a hlavní developer webu", quote: "Z objektivního hlediska jsem nejlepší.", longDesc: "Adas je majitel serveru, který už několikrát byl prezidentem nebo součástí vlády. Jeho vládnutí mnozí nemají rádi, ovšem z objektivního hlediska je na profesionální úrovni a srovnává se s těmi nejlepšími (Ardaros). Rád útočí na své politické oponenty a zveličuje jejich nedostatky – někdy mu chybí špetka sebereflexe. Dle výpovědí svědků byl spatřen v blízkosti lidí z tajné splashské organizace, jejíž jméno se nesmí vyslovit.", link: "https://youtu.be/7-tb8gA09W4?si=RlDds6umUIEBYAgB", hist: "ev-adas" },
  { section: "admin", name: "Tadadeus", role: "Majitel",   roleClass: "role--darkred", role2: "Soudce", roleClass2: "role--orange", desc: "Hlavní developer Minecraftu a tvůrce propagace", quote: "Vše dělám ve stínu a ví o tom jen Ardaros.", longDesc: "Tadadeus je majitel serveru, který pracuje jako soudce. Své činy a kšefty dělá ve stínu a ví o nich jen Ardaros. Dle nalezených spisů byl členem tajné splashské organizace, jejíž jméno se nesmí vyslovit. Za své vlády se snažil dostat SplashSMP z krize, do které ho zatáhl nekompetentní prezident King.", link: "https://www.tiktok.com/@splashsmp_/video/7511237050075467030", hist: "ev-tadadeus" },
  { section: "admin", name: "Tobiick",  role: "Majitel",   roleClass: "role--darkred",  desc: "Zakladatel SplashSMP a vedoucí discordu", quote: "Proč bych měl respektovat systém?", longDesc: "Tobi je majitel serveru, který někdy nerespektuje autority a snaží se jít proti systému. Nikdy ovšem neskončí u soudu a nikdo neví proč. Existuje teorie, že financoval Šindlovu nelegální místnost v jeho base, o které se nesmí mluvit.", link: "https://www.tiktok.com/@splashsmp_/video/7511603425285541142", hist: "ev-tobiick" },
  { section: "admin", name: "Nojmisek", role: "Moderátor", roleClass: "role--blue", desc: "Pomáhá s komunitou a vývojem serveru", quote: "Hlavně rád pomáhám.", longDesc: "Nojmisek rád pomáhá. Mezi jeho negativní vlastnosti patří main character syndrome, schizofrenie, autismus a papíry na hlavu, které mu vystavil sám doktor Luděk. I přesto je to platný moderátor, který se aktivně zapojuje do dění na serveru." },
  { section: "admin", name: "Itzz_MaTk0", role: "Moderátor", roleClass: "role--blue", desc: "Moderátor a PvP hráč", quote: "Matkova palička nezná slitování.", longDesc: "Matko (Itzz_MaTk0) je moderátor a PvP hráč. Pomáhá s komunitou, s nábory a v boji mu pomáhá jeho obávaná Matkova palička, o které bylo natočeno i video.", link: "https://www.tiktok.com/@splashsmp/video/7510101966102465814", hist: "ev-matko" },
  { section: "admin", name: "___HEADhunter___", role: "Helper", roleClass: "role--lightblue", desc: "OG člen, helper, builder a redstone inženýr", quote: "Arstotzka je vždy o krok napřed...", longDesc: "HEADhunter je OG člen serveru, helper, builder a redstone inženýr. Patří k legendám SplashSMP. Taktéž je bývalý Prezident.", link: "https://www.tiktok.com/@splashsmp_/video/7523331287650733334", hist: "ev-headhunter" },

  // ── HRÁČI SPECIAL ──
  { section: "hrac", name: "Ardaros", first: true, skin: "https://visage.surgeplay.com/bust/256/a0c52609df90475d93f3e8ad4ab9786c", skinFull: "https://visage.surgeplay.com/full/256/a0c52609df90475d93f3e8ad4ab9786c", role: "Hacker", roleClass: "role--red", desc: "Legendární hacker serveru, o kterém vznikla řada videí", quote: "Vykvasim ti kabanos...", longDesc: "Ardaros je nejznámější hacker v historii SplashSMP. Několikrát hacknul server, odpálil spawn a stal se tak doslova legendou – natočili jsme o něm několik videí. Jeho lore se postupně odhaluje napříč sezónami. Více o jeho řádění najdeš v sekci Historie.", link: "https://www.tiktok.com/@splashsmp_/video/7509549723007733014", hist: "ev-ardaros" },
  { section: "hrac", name: "SweepingAttack", skin: "e7ffx88eff", first: true, role: "Hacker", roleClass: "role--red", desc: "Duper, abuser creativu a Ardarosův rival", quote: "Z hlíny ti udělám diamanty.", longDesc: "SweepingAttack (dnes se v Minecraftu jmenuje e7ffx88eff) je proslulý duper a abuser creativu. Píše hackovací skripty a vytváří custom crafting recepty, které mění hlínu v diamanty (season 3/4). Je to hacker stejně jako Ardaros – a zároveň jeho největší rival.", link: "https://www.tiktok.com/@splashsmp_/video/7510269240646208790" },
  { section: "hrac", name: "Ludeng", skin: "Ludeng69", first: true, role: "Doktor", roleClass: "role--yellow", desc: "Doktor serveru", quote: "Hlasy mi poradí, co s tebou.", longDesc: "Ludeng (Luděk) zastává na serveru roli Doktora. Každý hráč, který měl co dočinění s Ardarosem, navštěvuje pana doktora, který ho pomocí zapovězených metod vyseká z traumatu způsobeného Ardovou přítomností. Existují důkazy, že Luděk slyší v hlavě hlasy, které mu našeptávají, co má při zákroku dělat.", link: "https://www.tiktok.com/@splashsmp_/video/7564650483743296770" },

  // — hráči s lore (řadí se nahoru) —
  { section: "hrac", name: "bratranec", skin: "Bratranec", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý prezident season 5", quote: "Posunul jsem SplashSMP dál.", longDesc: "Bratranec se jednou stal prezidentem v 5. sezóně. Někteří říkají, že mu to vlezlo do hlavy, ovšem pravda je, že se snažil dostat SplashSMP ještě výš, než kam ho dotáhla úspěšná vláda Tadadeuse a premiéra Adase. Jak moc se mu to dařilo dokládá fakt, že hned další volby ho vystřídal jiný prezident – ten ovšem server kvůli své nekompetenci ukončil do 2 týdnů.", link: "https://www.tiktok.com/@splashsmp_/video/7564650483743296770", hist: "ev-bratranec" },
  { section: "hrac", name: "TakyOndatra", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Předseda vlády", quote: "Vše mám pod kontrolou.", longDesc: "Někteří říkají, že TakyOndatra je nekompetentní předseda vlády. Jeho činy ale mluví za vše: při předvolební debatě byl pod vlivem omamných a psychotropních látek, které získal od jistého distributora ze Šindlovy base.", link: "https://www.tiktok.com/@splashsmp_/video/7564650483743296770" },
  { section: "hrac", name: "SindlSin", skin: "Ardaros", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Magor, který to s ardou opravdu umí", quote: "Za správnou cenu udělám cokoliv.", longDesc: "SindlSin je magor, ale s ardou to opravdu umí. Vlastnil nelegální místnost ve své base, kterou údajně financoval Tobiick. Je snadno podplatitelný, takže nikdy nevíš, kdy tě právě on zradí – a jestli náhodou nejsi jen jeho loutka.", link: "https://www.tiktok.com/@splashsmp_/video/7564650483743296770", hist: "ev-sindl" },
  { section: "hrac", name: "Tomjo19", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Stavitel \"Galerie z Mafie 1\"", quote: "Galerie bude hotová… někdy.", longDesc: "Tomjo je známý svou stavbou parkoviště na spawnu. On ji ovšem nazývá Galerií z Mafie 1 a pracuje na ní déle, než si sám pamatuje. Má své side byznysy, o kterých nerad mluví – ať už kvůli jejich nelegálnosti, nebo kvůli spojitosti s obávaným Ardarosem." },
  { section: "hrac", name: "Lupi1Xx", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý strážce prezidenta", quote: "PvP je moje pojistka.", longDesc: "Lupix několikrát zradil vládu, pro kterou pracoval jako strážce, přesto si udržel respekt – hlavně díky svému PvP knowhow. Možná je to síla Ardarose, možná fotek, které posílá panu prezidentovi do DMs." },
  { section: "hrac", name: "Alexx_CZ", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý prezident SplashSMP", quote: "Nic špatného jsem neudělal.", longDesc: "Alex (dříve známý jako King) je bývalý prezident SplashSMP. Mnoho hráčů jeho vládu neuznává a označuje ji za špatnou, on a jeho vláda ale umí tato tvrzení vyargumentovat tak, že nikdo nemá slov – právě proto, že na serveru neudělal nic špatného. Měl totiž 90 % mandátu dovolenou. Poslední zmínka o něm byla nalezena ve spisech šíleného doktora Luďka. Od té doby je nezvěstný.", link: "https://www.tiktok.com/@splashsmp_/video/7519070407203310870", hist: "ev-king" },
  { section: "hrac", name: "Karaklan", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Ardarosův komplic", quote: "S Legendou se domluvím jen já.", longDesc: "Karaklan je Ardarosův komplic a jediný člověk, který se s Legendou dokáže domluvit. Slouží jako most mezi Ardarosem a zbytkem serveru. Jeho role je nejasná a kontroverzní – vždy se objeví ve chvílích velkých událostí. Je to hráč s nepopiratelným vlivem, který pracuje v zákulisí.", link: "https://www.tiktok.com/@splashsmp_/video/7543904796890238230", hist: "ev-karaklan" },
  { section: "hrac", name: "DanDrak13", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Totální magor (na Discordu svickovaomacka)", quote: "Věk je jen číslo.", longDesc: "DanDrak13 (na Discordu svickovaomacka) je totální magor – na serveru nikdy není nuda, když je u toho on. Je to člověk svého druhu, kterej se na server dostal i přes nesplnění věkového limitu." },
  { section: "hrac", name: "kubakubikkula", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Crystal PvP a anarchista", quote: "Prezidentskou armádu si mažu na chleba.", longDesc: "Kuba je mistr v crystal PvP a srdcem anarchista. Pravidla a autority pro něj moc neznamenají – prezidentskou armádu si tak zvaně namaže na chleba. O teamu anarchistů vzniklo i video.", link: "https://www.tiktok.com/@splashsmp_/video/7511603425285541142" },
  { section: "hrac", name: "vitcs15", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Zakladatel teamu anarchisti", quote: "Tobiick mi ukradl team.", longDesc: "Vítek je zakladatel teamu anarchisti. Doteď se nevyrovnal s tím, že mu Tobiick team převzal, totálně zdegradoval a provedl na něm segregaci. Je mistr v crystal PvP, stejně jako kubakubikkula – má za sebou desítky, ne-li stovky soudů. O teamu anarchistech vzniklo i video.", link: "https://www.tiktok.com/@splashsmp_/video/7511603425285541142" },
  { section: "hrac", name: "Maxovator", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Cheater a sabotér (dříve Jan Král)", quote: "Volby? Ty si zařídím sám.", longDesc: "Maxovator (známý též jako Jan Král či Magorovator) rád cheatuje, odpaluje konferenční místnosti či sabotuje volby. O SplashSMP vydává videa na svůj YouTube, včetně songu.", link: "https://www.youtube.com/watch?v=vr1Cafj6xdQ&t" },
  { section: "hrac", name: "4Rampagerss", lore: true, role: "Hráč", roleClass: "role--gray", desc: "OG hráč, takzvaná známá firma", quote: "Prachů mám víc než dost.", longDesc: "Rampy je OG hráč, takzvaná známá firma. Měl na spawnu vlastní shop a ve třetí sezóně mu místo něj někdo pastnul world editem radnici. Je také pěkně zazobaný, peněz má víc než dost.", link: "https://www.tiktok.com/@splashsmp_/video/7513152734120512790" },
  { section: "hrac", name: "RileLevakus", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Hráč od 4. sezóny", quote: "Měl jsem práva, co jsem mít neměl.", longDesc: "Levák je na serveru zhruba od čtvrté sezóny. Zneužíval práva, která získal zapovězeným způsobem – měl vanish, teleport i příkaz na zjištění pozice hráčů a jejich base. Vzniklo o něm i video.", link: "https://www.tiktok.com/@splashsmp_/video/7644162264865541398" },
  { section: "hrac", name: "bury2024", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Kontroverzní hráč 6. sezóny", quote: "Pořád žádám o unban.", longDesc: "Bury se joinul na začátku 6. sezóny. Jeho přítomnost byla kontroverzní kvůli cheatům a podle některých hráčů kvůli toxicitě. Dostal ban a dodnes žádá o jeho zrušení." },
  { section: "hrac", name: "eragon_5", lore: true, role: "Hráč", roleClass: "role--gray", desc: "OG hráč z dob FajnSMP", quote: "S nikým nemám spory.", longDesc: "Eragon je OG hráč, který se joinul v dobách FajnSMP. Je to frajer, který s nikým nemá spory." },
  { section: "hrac", name: "Conki24", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Nováček, co hraje o sto šest", quote: "Hraju o sto šest.", longDesc: "Conki se joinul v období publicu a vytrval až dodnes. Zažil teror Zydana, což ho poznamenalo, a proto pravidelně navštěvuje doktora Luďka. Je jeden z nových hráčů, kteří na serveru hrají o sto šest." },
  { section: "hrac", name: "Natynaxx", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Jedna z mála žen na serveru", quote: "Hraju tu od dob publicu.", longDesc: "Natynaxx je jedna z mála žen na serveru, která na SplashSMP hraje od dob public serveru. Zydanovo vedení ji hodně poznamenalo, asi jako nás všechny, a proto také pravidelně navštěvuje doktora Luďka." },
  { section: "hrac", name: "LukeBot345", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý prezident season 3", quote: "Kandidovat už nesmím.", longDesc: "Lukebot je bývalý prezident 3. sezóny. Jeho vláda byla neschopná a nekompetentní až tak, že mu bylo zakázáno dále kandidovat.", link: "https://www.tiktok.com/@splashsmp_/video/7510865755861273878", hist: "ev-lukebot" },
  { section: "hrac", name: "nelatv", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Jedna z mála žen na serveru", quote: "Dabovala jsem Sáru.", longDesc: "Nela (známá též jako Troska) je jedna z mála žen na serveru. Dabovala i Sáru v našem vedlejším projektu Mafie v Minecraftu.", link: "https://youtube.com/playlist?list=PLbUgm4QGBjESfvUfwDMUrxPXlDMyYdcKN&si=RlXF4Qb3BkjOx3y7" },
  { section: "hrac", name: "Tutell69", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Magor, co si pořád brblá", quote: "Něco si tu blafnu…", longDesc: "Tutel je magor, kterej si neustále něco blafuje a brblá pod fousy." },
  { section: "hrac", name: "TytaCZ", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Ombudsman z Discordu", quote: "Server jsem nikdy nejoinul.", longDesc: "TytaCZ je ombudsmánek, kterej server nikdy nejoinul, ale na Discord se z nějakého důvodu dostal i bez náboru. A když je řeč o něm, nesmí chybět zmínka o kvantové fyzice, která ho fascinuje." },
  { section: "hrac", name: "Pokkyy07", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Hráč ze 4. sezóny", quote: "Base nejlíp ve dvou.", longDesc: "Pokkyy07 je na serveru od čtvrté sezóny a má společnou base s Krystofem200816. Společně tvoří sehranou dvojku." },
  { section: "hrac", name: "Krystof200816", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Hráč ze 4. sezóny", quote: "Base nejlíp ve dvou.", longDesc: "Krystof200816 je na serveru od čtvrté sezóny a má společnou base s Pokkyy07. Společně tvoří sehranou dvojku." },
  { section: "hrac", name: "z0yn3_", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Bývalý člen, který dvakrát dokvasil server", quote: "Dokvasil jsem to dvakrát.", longDesc: "Zydan je hráč, který 2x dokvasil celý server. Jednou vybanoval 100 lidí z Discord serveru, podruhé dokvasil public server. Jeho toxicita a arogance neznaly mezí, proto už není naším členem a nikdy nebude. Více o něm v sekci Historie.", link: "https://www.tiktok.com/@splashsmp_/video/7513797862203952406", hist: "ev-zydan" },
  { section: "hrac", name: "Martinjefrajer", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Zabanovaný frajer 4. sezóny", quote: "Jsem oblíbený femboy mezi goonery SplashSMP", longDesc: "Martin se připojil na čtvrtou sezónu SplashSMP. Už od začátku dělal problémy, což vedlo k jeho zabanování. Vzniklo o něm video, kde jsme mu lichotili, ovšem i přesto \"vyhrožoval\" paragrafy a točil na nás videa. Dnes už posílá donaty na streamu – členem serveru by se ovšem mohl stát znovu jen v případě, že by prošel náborem.", link: "https://www.tiktok.com/@splashsmp_/video/7533493429465009430", hist: "ev-martin" },
  { section: "hrac", name: "ubuhubu", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Král diamantů a x-rayer", quote: "30 stacků diablocků za 2 hodiny.", longDesc: "ubuhubu je doslova král diamantů. X-rayoval na serveru, a během asi 2 hodin měl 30 stacků diablocků – ani nevíme jak to dokázal, protože tak rychle to ani nejde, takže musel i duplikovat. Dostal ban a admini ho pořádně trollili.", link: "https://www.tiktok.com/@splashsmp_/video/7512429993645985046" },
  { section: "hrac", name: "myrr_", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Sběratel zakázaných itemů", quote: "Mám muzeum nelegálních itemů.", longDesc: "myrr_ je sběratel zakázaných itemů a enchantů. S Tadadeusem založil muzeum nelegálních itemů – byly jich tam stovky, ne-li tisíce, včetně command blocků. Taky rád hraje PvP.", link: "https://www.tiktok.com/@splashsmp_/video/7516768650519448854" },
  { section: "hrac", name: "davko987", lore: true, role: "Hráč", roleClass: "role--gray", desc: "Herec a dabér z Mafie v Minecraftu", quote: "Mám rád velký černý… o tom se nesmí mluvit, žeoo noooo.", longDesc: "Davko má dobré herecké výkony a zajímavý smysl pro humor (má rád velký černý… o tom se nesmí mluvit, žeoo noooo). Hrál a daboval v našem projektu Mafia v Minecraftu.", link: "https://youtu.be/7-tb8gA09W4?si=5gHXWfMe3IqtZTjQ" },

  // — hráči bez bližšího lore (řadí se dolů) —
  { section: "hrac", name: "kitty4111", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "kitty4111 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "SoftIsland57564", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "SoftIsland57564 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
  { section: "hrac", name: "vulok_Cz1", role: "Hráč", roleClass: "role--gray", desc: "Člen komunity SplashSMP", quote: "Jsem součástí serveru.", longDesc: "vulok_Cz1 patří mezi hráče SplashSMP a postupně si na serveru buduje své místo mezi ostatními." },
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

// ==========================================================================
// SDÍLENÉ POMOCNÉ FUNKCE + POPUP
// ==========================================================================
window.Players = (function () {
  const CLENI = window.CLENI;
  const FALLBACK_SKIN = "Lullible";

  function skinSrc(p, type, size) {
    if (type === "full" && /^https?:\/\//i.test(p.skinFull || "")) return p.skinFull;
    const skin = p.skin || p.name;
    if (/^https?:\/\//i.test(skin)) return skin;
    return `https://vzge.me/${type}/${size}/${encodeURIComponent(skin)}`;
  }
  function onErrFallback(type, size) {
    return `this.onerror=null; this.src='https://vzge.me/${type}/${size}/${FALLBACK_SKIN}';`;
  }
  function rolesHTML(p) {
    let html = `<span class="role-badge ${p.roleClass}">${p.role}</span>`;
    if (p.role2 && p.roleClass2) html += `<span class="role-badge ${p.roleClass2}">${p.role2}</span>`;
    return `<div class="role-badges">${html}</div>`;
  }
  function videoLinkHTML(p) {
    if (!p.link) return "";
    const yt = /youtu\.?be/i.test(p.link);
    const icon = yt ? "fa-youtube" : "fa-tiktok";
    const label = yt ? "Video na YouTube" : "Video na TikToku";
    const cls = yt ? "player-modal__link--yt" : "player-modal__link--tt";
    return `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="player-modal__link ${cls}"><i class="fab ${icon}"></i> ${label}</a>`;
  }
  // Odkaz na Historii – jen na stránce Členi (na Historii samotné nemá smysl).
  function histLinkHTML(p) {
    if (!p.hist || !p.showHistLink) return "";
    return `<a href="historie.html#${p.hist}" class="player-modal__link player-modal__link--hist"><i class="fas fa-clock-rotate-left"></i> Najdi ho v Historii</a>`;
  }

  function findByName(name) {
    const n = String(name).toLowerCase();
    return CLENI.find(p => p.name.toLowerCase() === n);
  }

  // Najde modal podle id; když není na stránce, nic nedělá.
  const modal = () => document.getElementById("playerModal");
  const modalBox = () => document.querySelector("#playerModal .player-modal__box");
  let modalHistoryPushed = false;

  /* ── COUNTER-SCALE PROTI ZOOMU (funguje pro zoom IN i OUT) ──
     Karta má pevnou velikost v px. Faktor zoomu spočítáme z poměru
     šířky layoutu k vizuální šířce. Kartu zmenšíme/zvětšíme 1/zoom,
     takže na obrazovce má pořád stejnou fyzickou velikost. */
  function pageZoom() {
    // Poměr vnější a vnitřní šířky okna = úroveň zoomu (funguje IN i OUT).
    if (window.outerWidth > 0 && window.innerWidth > 0) {
      const z = window.outerWidth / window.innerWidth;
      if (z > 0.2 && z < 6) return z;
    }
    return 1;
  }
  function applyZoom() {
    const box = modalBox();
    if (!box) return;
    const z = window.innerWidth <= 600 ? 1 : pageZoom();   // mobil neřešíme
    box.style.setProperty("--inv-zoom", (1 / z).toFixed(4));
    // Strop výšky tak, aby byl fyzicky ~90 % výšky okna (po counter-scale).
    box.style.setProperty("--box-maxh", Math.round(window.innerHeight * z * 0.9) + "px");
  }
  // Zoom v prohlížeči spouští resize i událost na visualViewport.
  window.addEventListener("resize", () => {
    const m = modal();
    if (m && m.classList.contains("is-open")) applyZoom();
  });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => {
      const m = modal();
      if (m && m.classList.contains("is-open")) applyZoom();
    });
  }

  function fillBody(p, opts) {
    const mBody = document.getElementById("playerModalBody");
    if (!mBody) return;
    const withHist = opts && opts.showHistLink;
    const links = videoLinkHTML(p) + (withHist ? histLinkHTML({ ...p, showHistLink: true }) : "");
    mBody.innerHTML = `
      <img class="player-modal__skin" src="${skinSrc(p, 'full', 384)}" alt="${p.name}"
           onerror="${onErrFallback('full', 384)}" />
      <h3 class="player-modal__name">${p.name}</h3>
      ${rolesHTML(p)}
      <p class="player-modal__desc">${p.longDesc || p.desc}</p>
      <p class="player-modal__quote"><i class="fas fa-quote-left"></i>${p.quote}</p>
      ${links ? `<div class="player-modal__links">${links}</div>` : ""}
    `;
  }

  function open(p, opts) {
    const m = modal();
    if (!p || !m) return;
    fillBody(p, opts);
    applyZoom();                 // counter-scale podle aktuálního zoomu
    m.classList.add("is-open");
    m.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
    if (!modalHistoryPushed) {
      history.pushState({ playerModal: true }, "");
      modalHistoryPushed = true;
    }
  }

  function close(fromPopstate) {
    const m = modal();
    if (!m || !m.classList.contains("is-open")) return;
    m.classList.remove("is-open");
    m.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
    if (!fromPopstate && modalHistoryPushed) {
      modalHistoryPushed = false;
      history.back();
    } else {
      modalHistoryPushed = false;
    }
  }

  // Otevře popup hráče podle jména (pro historii.html).
  function openByName(name, opts) {
    const p = findByName(name);
    if (p) open(p, opts);
    return !!p;
  }

  // Navěsí zavírání (křížek/pozadí/Esc/zpět). Volá se jednou po načtení.
  function initModalControls() {
    const m = modal();
    if (!m) return;
    m.querySelectorAll("[data-close]").forEach(el =>
      el.addEventListener("click", () => close())
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && m.classList.contains("is-open")) close();
    });
    window.addEventListener("popstate", () => {
      if (m.classList.contains("is-open")) close(true);
    });
  }

  return {
    data: CLENI,
    skinSrc, onErrFallback, rolesHTML, videoLinkHTML, histLinkHTML,
    findByName, open, close, openByName, initModalControls,
  };
})();
