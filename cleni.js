// Data se všemi detaily hráčů projektu SplashSMP
const playerDetails = {
    "bratranec": {
        bio: "Bratranec se stal prezidentem season 5. Někdo říká že mu to vlezlo do hlavy, ale pravda je, že se snaží dostat splashsmp do ještě lepších míst než kde bylo za úspěšné vlády Tadadeuse. Je též členem tajné organizace KyS, o které se nesmí mluvit.", 
        role: "Prezident"
    },
    "Tadadeus": {
        bio: "Tadadeus je majitel serveru, který pracuje jako soudce. Jeho činy a kšefty na serveru dělá ve stínu a ví o nich jen Ardaros. Dle nalezených spisů byl členem tajné splashské organizace, jejíž jméno se nesmí vyslovit. Za jeho vlády se snažil dostat SplashSMP z krize, do které server zatáhl nekompetentní prezident KING.",
        role: "Soudce (majitel)"
    },
    "Tobiick": {
        bio: "Tobi je majitel serveru, který někdy nerespektuje autority a snaží se jít proti systému. Nikdy ovšem neskončí u soudu, nikdo neví proč. Existuje teorie, že Tobi financoval Sindlovu nelegální místnost v jeho base, o které se nesmí mluvit..",
        role: "Hráč (majitel)"
    },
    "TakyOndatra": {
        bio: "Nekteří říkají, že TakyOndatra je nekompetentní předseda vlády. Ovšem jeho činy mluví za vše: Při předvolební debatě byl pod vlivem omamných a psychotropních látek, které získal od jistého distributora z Sindlové base.",
        role: "Předseda vlády"
    },
    "Adas25": {
        bio: "Adas je majitel serveru, který již několikrát byl prezident či byl součástí vlády. Jeho vládnutí mnozí nemají rádi, ovšem z objektivního hlediska je na profesionální úrovni a srovnává se s těmi nejlepšími (Ardaros). Adas rád útočí na svoje politické oponenty a zveličuje jejich nedostatky. Někdy mu chybí špetka sebereflexe. Dle výpovědí svědků byl Adas viděn v blízkosti lidí, kteří patřili do tajné splashské organizace, jejíž jméno se nesmí vyslovit.",
        role: "Soudce (majitel)"
    },
    "tomjo18": {
        bio: "Tomjo je známý svou stavbu Galerie z Mafie 1, kterou staví déle než on sám pamatuje. Má své side bussineses, o kterých nerad mluví, ať už z důvodů jejich nelegálnosti nebo spojitosti s obávaným Ardarosem.",
        role: "Hráč"
    },
    "SindlSin": {
        bio: "SindlSin je magor. Ale s ardou to opravdu umí. Vlastnil nelegální místnost ve svojí base, kterou údajně financoval Tobiick. Je snadno podplatitelný, tudíž nikdy nevíte, kdy vás právě on zradí.. a jestli náhodou nejste jeho loutka.",
        role: "Hráč"
    },
    "Nojmisek": {
        bio: "Nojmisek rád pomáhá. Mezi jeho negativní vlastnosti patří main character syndrome, schizofrenie, autismus a papíry na hlavu, které mu byly vystaveny od Doktora Luďka.",
        role: "Hráč"
    },
    "Mart4s": {
        bio: "Mart4s je nový hráč, který se rychle přizpůsobil jevům ardarose, čímž se stal vášnivým minerem. Rád pomáhá lidem dodáním surovin když je potřeba. Jeho největším cílem je vykopat celý minecraft svět.",
        role: "Hráč"
    },
    "Lupi1Xx": {
        bio: "Lupix je strážce prezidenta, který má za úkol udržovat mír na serveru. Ovšem ne vždy se mu to daří, respektive ne vždy to tak chce. Několikrát svoji vládu zradil a zavraždil její členy, i přesto v ní stále setrvává. Možná síla Ardarose, možná fotky, které posílá panu prezidentovi do dms..",
        role: "Strážce"
    },
    "K1NG": {
        bio: "Kingoš je bývalý Prezident SplashSMP. Mnoho hráčů jeho vládu neuznává a označuje ji za špatnou. Ovšem King a jeho vláda umí tato tvrzení vyargumentovat tak, že nikdo nemá slov. Poslední zmínka o něm byla u návštěvy psychiatrické léčebny doktora luďka. Od té doby je nezvěstný..",
        role: "Hráč"
    },
    "Nurfis": {
        bio: "Nurfis je průzkumník a hledač tajemství. Většinu času tráví daleko od centra dění, kde odhaluje skrytá místa na mapě. Jeho objevy často vedou k novým zdrojům nebo lokacím pro ostatní. Je ceněný pro svou odvahu a touhu po dobrodružství. Nebojí se postavit žádné výzvě v divočině Minecraftu.",
        role: "Hráč"
    },
    "AkiZero": {
        bio: "AkiZero je novější člen s rychlým progressem. Rychle se adaptuje na pravidla serveru a aktivně se zapojuje do frakčního života. Je velmi komunikativní a snadno navazuje spojenectví. Jeho ambice ho ženou dopředu k dosažení velkých cílů na serveru. Má potenciál stát se jedním z klíčových hráčů.",
        role: "Hráč"
    },
    "zeleny_banan": {
        bio: "zeleny_banan je známý pro své neobvyklé a humorné stavby. Vnáší do hry lehkost a zábavu. I když se neúčastní velkých politických her, his přítomnost je vždy osvěžující. Má rád experimenty a nekonvenční řešení v Minecraftu. Je to oblíbený hráč, který přináší dobrou náladu.",
        role: "Hráč"
    },
    "tutell95": {
        bio: "Tutell je věrný hráč, který AŽ MOC mluví. Někdy se prořekne o činnostech Ardarose, jindy o receptu svíčkové. Je to magor.",
        role: "Hráč"
    },
    "Amonis": {
        bio: "Amonis je hráč, který se soustředí na budování podzemních komplexů a tajných základen. Je velmi opatrný a dbá na bezpečnost svých zdrojů. Je to spíše solitér, který se objevuje ve chvílích, kdy je potřeba rychlá akce. Má talent pro skrývání a nenápadnost. Je to strategický hráč.",
        role: "Hráč"
    },
    "z0yn3_": {
        bio: "Zydan dokvasil celý server, jeho učiněním bylo vybanováno 100 lidí z public discordu splashe. Po tomto incidentu navštívil chrám Gompa, kde ho TakyOndatra srovnal a momentálně je ve vedení serveru a pomáhá ho rozvíjet. Je o něm video na soc. sítích SplashSMP. Zydan byl též spatřen v kontaktu s HeadHunterem, který je zakladatel tajné splashské organizace, jejíž jméno se nesmí vyslovit. Toto tvrzení dokládají i dokumenty nalezené po prezidentovi Tadadeusovi v jeho kanceláři. Jakákoliv spojitost je čistě náhodná.",
        role: "Hráč"
    },
    "Screeny": {
        bio: "Screeny je člen teroristického teamu GNMT. Nebojí se odporovat autoritám, ovšem sám by ve vedení neuspěl díky jeho nekompetenci a hlouposti. Vztek si vylévá na hráče SindlSin, který poté trucuje v /jail.",
        role: "Hráč"
    },
    "Hikirito": {
        bio: "Hikirito je hráč zaměřený na rychlý ekonomický růst a obchod. Brzy se naučil pravidla obchodu a stal se významným obchodníkem. Využívá všechny dostupné prostředky k dosažení finanční dominance. Je to bystrý hráč, který myslí dopředu. Jeho impérium neustále roste a ovlivňuje trh.",
        role: "Hráč"
    },
    "Rosaldo": {
        bio: "Rosaldo je člověk všeho druhu. Arda mu heknul minecraft, takže polovinu season 4 nemohl hrát. Je to starej známej.",
        role: "Hráč"
    },
    "KreatinKing": {
        bio: "KreatinKing je aktivní hráč s velkou motivací. Jeho cílem je stát se jedním z nejlepších na serveru a tvrdě na tom pracuje. Je známý svou soutěživostí a odhodláním dosáhnout svých cílů. Často se účastní soutěží a výzev. Je příkladem pro ty, kteří chtějí dosáhnout nejvyšší úrovně hry.",
        role: "Hráč"
    },
    "Headhunter": {
        bio: "HeadHunter je zakladatel tajné splashské organizace, o které se nesmí mluvit. Založil ji již na fajnsmp, ovšem funguje i teď, na SplashSMP season 5. Jejich činnost je neznámá a pracují ve stínu. Každá událost je jimi sledovaná. Jednoduše: tato organizace hýbe figurkami celého serveru.",
        role: "Hráč"
    },
    "Tohik": {
        bio: "Tohik je spolehlivý hráč, který se zaměřuje na dlouhodobé projekty. Jeho přístup je pomalý, ale metodický a vždy vede k pevným výsledkům. Má rád pořádek a organizaci, což se odráží v jeho stavbách. Je to typ hráče, který vždy dokončí, co začal. Je stabilním prvkem komunity.",
        role: "Hráč"
    },
    "Bombero": {
        bio: "Bombero je hráč, který se specializuje na těžbu a získávání surovin ve velkém. Jeho hlavním cílem je nahromadit obrovské zásoby pro svou frakci. Je známý svou neúnavnou pracovitostí a efektivitou. Je klíčový pro jakýkoli projekt vyžadující velké množství materiálu.",
        role: "Hráč"
    },
    "Ludeng": {
        bio: "Ludeng zastává roli Doktora a je hlavním alchymistou serveru. Vyrábí a distribuuje léčivé a posilující lektvary. Je nepostradatelný v každém PvP souboji a expedici. Jeho specializací je také výzkum nových lektvarů a jejich efektů. Je to velmi cenný a klidný člen týmu.",
        role: "Doktor"
    },
    "nathmn": {
        bio: "nathmn je hráč, který se zaměřuje na budování infrastruktury a veřejných cest. Jeho snahou je propojit celý server funkční sítí. Je klíčový pro logistiku a usnadňuje cestování všem hráčům. Je to nesobecký hráč, který pracuje pro dobro celé komunity. Je známý svou precizností.",
        role: "Hráč"
    },
    "Spekac007": {
        bio: "Spekac007 je hráč, který vnáší do hry strategii a plánování. Každý jeho krok je promyšlený a má dlouhodobý dopad. Je to skvělý vůdce menších týmů a kooperativních projektů. Vyhýbá se zbytečným rizikům a preferuje stabilní postup. Je to rozvážný a ceněný člen komunity.",
        role: "Hráč"
    },
    "Lukebot": {
        bio: "Lukebot je hráč s technickým zaměřením, často experimentuje s redstone a složitými mechanismy. Jeho vynálezy pomáhají automatizovat mnoho herních procesů. I když má menší Playtime, jeho technický přínos je obrovský. Je to inovátor, který posouvá hranice možného na serveru.",
        role: "Hráč"
    },
    "Ardaros": {
        bio: "Ardaros je legenda serveru. Nesmí se o něm mluvit, takže nikdy nevíš kdy tě hekne. Při volebním proslovu je povinnost složit přísahu 'Přísahám na Ardarose, že server nikdy nezradím.' Tuto přísahu momentálně neporušuje nikdo, protože o toho kdo ji porušoval v minulosti, se postaral Ardaros..",
        role: "Legenda serveru (hacker)"
    },
    "Karaklan": {
        bio: "Karaklan je Ardarosův komplic a jediný, kdo se s Legendou dokáže domluvit. Slouží jako most mezi Legendou a zbytkem serveru. Jeho role je velmi nejasná a často kontroverzní. Vždy se objevuje ve chvílích velkých událostí. Je to hráč s nepopiratelným vlivem, který pracuje v zákulisí.",
        role: "Ardarosův komplic"
    }
};

// ==========================================================================
// SEZÓNNÍ ČASOVAČ (TIMERS)
// ==========================================================================
function updateSeasonTimer() {
    // --- SEASON 5 ---
    const s5Text = "Season 5 trvala: 76 dní, 1 hodina, 30 minut a 0 sekund";

    // --- SEASON 6 (Automatický výpočet od 1. března 2026) ---
    const startDateS6 = new Date("2026-03-01T19:00:00").getTime(); 
    const now = new Date().getTime();
    const distance = now - startDateS6;

    let s6Text = "";

    if (distance < 0) {
        s6Text = "Season 6 trvá: X dní (zatím nezačala, playtime se počítá do 1.11 2025 v době season 5)";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Gramatické ošetření češtiny pro dny
        let dnySlovo = "dní";
        if (days === 1) dnySlovo = "den";
        else if (days >= 2 && days <= 4) dnySlovo = "dny";

        s6Text = `Season 6 trvá: ${days} ${dnySlovo}, ${hours} hodin, ${minutes} minut a ${seconds} sekund.`;
    }

    const timerElement = document.getElementById("season-timer");
    if (timerElement) {
        timerElement.innerHTML = s5Text + "<br>" + s6Text;
    }
}

// Spuštění časovače ihned po načtení a pak každou sekundu
updateSeasonTimer(); 
setInterval(updateSeasonTimer, 1000);

// ==========================================================================
// MOBILNÍ HAMBURGER MENU
// ==========================================================================
const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ==========================================================================
// FUNKCE PRO MODÁLNÍ OKNO (POPUP)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Přidání event listeneru na všechny karty hráčů
    document.querySelectorAll('.player-card').forEach(card => {
        card.addEventListener('click', (event) => {
            
            // Pokud hráč klikne přímo na ikonu sociálních sítí, neotevírat modal
            if (event.target.closest('.player-socials a')) {
                return; 
            }
            
            const name = card.querySelector('.player-name').textContent.trim();
            const skinUrl = card.querySelector('.player-skin').src;
            const playtime = card.querySelector('.player-playtime').textContent.trim();
            
            openModal(name, skinUrl, playtime);
        });
    });

    // Zavření pomocí tlačítka X v modalu
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Zavření kliknutím na overlay pozadí modalu
    const modalOverlay = document.getElementById('playerModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});

function openModal(playerName, skinUrl, playtime) {
    const details = playerDetails[playerName];
    
    if (!details) {
        console.error('Nenalezeny detaily v databázi pro hráče:', playerName);
        return;
    }

    // Naplnění dat do modalu
    document.getElementById('modalSkin').src = skinUrl;
    document.getElementById('modalName').textContent = playerName;
    document.getElementById('modalRole').textContent = details.role;
    document.getElementById('modalBio').textContent = details.bio;
    document.getElementById('modalPlaytime').textContent = playtime;
    
    // Otevření modalu pomocí CSS třídy
    document.getElementById('playerModal').classList.add('is-open');
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.getElementById('playerModal').classList.remove('is-open');
    document.body.classList.remove('modal-open');
}

// Zavření modalu pomocí klávesy ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && document.getElementById('playerModal').classList.contains('is-open')) {
        closeModal();
    }
});