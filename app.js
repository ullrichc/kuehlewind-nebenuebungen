/**
 * Nebenübungen App
 * Supports daily practice of Rudolf Steiner's Nebenübungen
 * with Georg Kühlewind's commentary
 */

// Exercise data
const exercises = [
    {
        "id": 1,
        "weekday": "Samstag",
        "steiner": "Auf seine Vorstellungen (Gedanken) achten. Nur bedeutsame Gedanken denken. Nach und nach lernen, in seinen Gedanken das Wesentliche vom Unwesentlichen, das Ewige vom Vergänglichen, die Wahrheit von der bloßen Meinung zu scheiden. Beim Zuhören der Reden der Mitmenschen versuchen, ganz still zu werden in seinem Innern und auf alle Zustimmung, namentlich alles abfällige Urteilen (Kritisieren, Ablehnen), auch in Gedanken und Gefühlen, zu verzichten.\n\nDies ist die sogenannte\n«richtige Meinung».",
        "kuehlewind": "Die richtige Vorstellung\n\nDie erste Übung besteht darin, daß wir Aufmerksamkeit und Sorgfalt auf unsere Vorstellungen, auf die Art und Weise ihrer Bildung wenden.\nGewöhnlich verläßt sich der Mensch diesbezüglich ganz auf den Zufall. Er hört, er sieht dieses oder jenes, und es bildet sich in ihm dementsprechend eine Vorstellung. So kann sich sein Erkennen nicht entwickeln; er muß sich in dieser Richtung erziehen. Er muß auf seine Vorstellungen achten lernen, in ihnen eine Nachricht der Außenwelt sehen; er darf sich mit Vorstellungen, die nicht diese Bedeutung haben, nicht zufrieden geben. Er soll seine ganze Begriffswelt so ausbilden, daß sie ein treuer Spiegel der Außenwelt werde, und danach streben, unrichtige Vorstellungen aus der Seele zu entfernen. Er bemühe sich, allmählich das Wesentliche vom Unwesentlichen, das Vergängliche vom Ewigen, die Wahrheit von der bloßen Meinung im Gedankenleben zu unterscheiden. Er versuche, beim Anhören der Rede anderer innerlich ganz still zu werden und auf jegliche Zustimmung, namentlich aber auf jedes abfällige Urteilen, jede Kritik, auch in Gedanken und im Gefühl zu verzichten.\n\nDer Mensch ist nicht gewohnt, seine Vorstellungen auf ihre Richtigkeit hin zu untersuchen, obwohl sie oft voreilig und unter Einfluß von Sympathien und Antipathien entstehen. Die Denkkonzentration lehrt uns die Möglichkeit, Vorstellungen allein willentlich zu bilden. Beim Vorstellungsbilden unter einem Eindruck muß das nicht-bewußte, spontane Hervorgehen ebenso ausgeschlossen werden wie in der Konzentrationsübung. Wenn ich zu der richtigen Vorstellung von einer Sache gelange, entsteht ein Gefühl: daß ich mit der Wahrheit, die sich auf die Sache bezieht, mit ihrem Entdecken, mit ihrem Sein identisch werde. Ist die gebildete Vorstellung falsch, dann entsteht zwischen der Tatsache und der Vorstellung eine andauernde, unangenehme, energieverbrauchende Auseinandersetzung und Spannung, solange die Tatsache nicht ganz in das falsche Bild eingeschlossen wird. Darauf baut sich dann eine Reihe weiterer falscher Vorstellungen auf.\n\nDie Forderung, das Ewige vom Vergänglichen, die Wahrheit von der subjektiven Meinung zu unterscheiden, scheint zunächst eine sehr hochgestellte Anforderung zu sein. Die tiefe Lebensbewegung der Seele hat aber eine Neigung zu dieser Unterscheidung, denn es ist für sie Arznei und Balsam, sie zu treffen.\n\nDie Bildung einer Meinung oder Vorstellung soll nicht von Gefühlen begleitet sein. Die Vorstellungen, die unabhängig von spontanen Gefühlen gebildet werden, entfachen dann die richtigen, entsprechenden Gefühle, die in Einklang und Identität mit der Wahrheit sind. Eigentlich sollte nur die Wahrheit Gefühle erwecken: die Harmonie der Gefühle mit der Wahrheit führt zur Heilung aller Krankheiten und Leiden, die den Menschen plagen und belasten."
    },
    {
        "id": 2,
        "weekday": "Sonntag",
        "steiner": "Nur aus begründeter voller Überlegung heraus selbst zu dem Unbedeutendsten sich entschließen. Alles gedankenlose Handeln, alles bedeutungslose Tun soll von der Seele ferngehalten werden. Zu allem soll man stets wohlerwogene Gründe haben. Und man soll unbedingt unterlassen, wozu kein bedeutsamer Grund drängt.\n\nIst man von der Richtigkeit eines gefaßten Entschlusses überzeugt, so soll auch daran festgehalten werden in innerer Standhaftigkeit.\n\nDies ist das sogenannte\n«richtige Urteil»,\n\ndas nicht von Sympathie und Antipathie abhängig gemacht wird.",
        "kuehlewind": "Der richtige Entschluss\n\nDer zweite Seelenvorgang, an dem zu arbeiten ist, ist das Sich-Entschließen. Man soll sich auch zum Unbedeutenden nur aus Überlegung entschließen. Alles gedankenlose Tun, alles bedeutungslose Handeln soll vermieden werden, man handle nur aus wohlerwogenen Gründen und unterlasse, wozu man durch Motive, die keine Wichtigkeit haben, geführt wird. Ist man von der Richtigkeit eines Entschlusses überzeugt, soll daran in innerer Standhaftigkeit festgehalten werden. Das ist das sogenannte richtige Urteil, das nicht von Sympathie oder Antipathie abhängig sein kann.\n\nDer Mensch handelt oft, ohne sich bewußt dazu zu entschließen, und er handelt auch oft gegen seinen Entschluß. Das zu bemerken, darauf zu achten ist der erste Schritt in dieser Übung, die den Menschen dazu führt, daß er aus bewußtem Entschluß handeln lernt. Dieser hat seine Quelle im Urteil, in der Beurteilung der Umstände. Die geübte Urteilsfähigkeit kann intuitiv sein – Geistesgegenwart -, und je folgerichtiger der Übende nach seinem Entschluß handelt, umso sicherer wird seine Urteilsfähigkeit funktionieren. Das Handeln gegen den gefaßten Entschluß, gegen das eigene Urteil beeinträchtigt diese Fähigkeit, besonders dann, wenn es nicht bemerkt wird oder wenn man das Urteil, den Entschluß nachträglich zur Rechtfertigung des Handelns ändert.\n\nTrotzdem wäre es nicht angebracht, alles Spielerische aus dem Leben zu verbannen. Der Mensch soll aber wissen: »Jetzt spiele ich.« Wenn man gegen die eigene Einsicht handelt, sollen die Quellen der dazu treibenden Impulse aufgesucht, angeschaut und nicht beschönigt werden. Man soll sich gegenüber den unterbewußten Impulsen weder in Illusionen wiegen noch sie gedanklich rechtfertigen. Wenn man ihnen folgt, soll das wenigstens in Bewußtheit geschehen – was nicht bequem ist.\n\nAus dem Kampf zwischen unserem Urteil und anderen Impulsen kann eine Liebe zur Urteilskraft entstehen, auf die der Mensch kaum mehr verzichten will, wenn er sie einmal erlebt hat. Das Funktionieren-Lassen der Urteilsfähigkeit gebiert diese Liebe zu ihr, und diese wiederum steigert diese Fähigkeit. Die Fähigkeit geht dann immer mehr in die Geistesgegenwärtigkeit über, in die helle Lebendigkeit der Urteilskraft, der die Liebe gilt und mit der zusammenzuwirken der innerste Wunsch des Menschen ist."
    },
    {
        "id": 3,
        "weekday": "Montag",
        "steiner": "Das Reden. Nur was Sinn und Bedeutung hat, soll von den Lippen desjenigen kommen, der eine höhere Entwickelung anstrebt. Alles Reden um des Redens willen - zum Beispiel zum Zeitvertreib - ist in diesem Sinne schädlich.\n\nDie gewöhnliche Art der Unterhaltung, wo alles bunt durcheinander geredet wird, soll vermieden werden; dabei darf man sich nicht etwa ausschließen vom Verkehr mit seinen Mitmenschen. Gerade im Verkehr soll das Reden nach und nach zur Bedeutsamkeit sich entwickeln. Man steht jedem Rede und Antwort, doch gedankenvoll, nach jeder Richtung hin überlegt. Niemals ohne Grund reden! Gerne schweigen. Man versuche, nicht zu viel und nicht zu wenig Worte zu machen. Zuerst ruhig hinhören und dann verarbeiten.\n\nMan heißt diese Übung auch:\n«das richtige Wort».",
        "kuehlewind": "Die richtige Rede\n\nDer dritte Vorgang ist das Reden. Man rede nur, wenn man wirklich etwas zu sagen hat. Alles Reden um des Redens willen, z.B. zum Zeitvertreib, ist in diesem Sinne schädlich, weil es den Strebenden von seinem Wege ablenkt. Die gewöhnliche Art der Unterhaltung, wo alles bunt durcheinander geredet wird, soll vermieden werden, aber man soll sich dabei vom Verkehr mit seinen Mitmenschen nicht ausschließen. Gerade im Verkehr soll sich das Reden allmählich zur Bedeutsamkeit entwickeln. Man stehe jedem Rede und Antwort, aber gedankenvoll und in jeder Richtung hin überlegt. Man rede nicht ohne Grund, eher schweige man gern. Man versuche nicht zu viel und nicht zu wenig Worte zu machen. Beim Sprechen anderer erst ruhig hinhören und dann verarbeiten.\n\nÜber die richtige Rede wurde im Kapitel 4.2 vieles ausgeführt. Wenn man die Übung in der Richtung der Meditation vertieft, erfährt man, daß sie wirklich alle anderen enthält: Konzentriertheit, Positivität, die richtige Vorstellung, den Entschluß, Standpunkt, die Erinnerung usw. Sie führt dazu, daß man sich der Sprache als Phänomen bewußt wird, den einzelnen Worten nachgeht, sie bis zu ihrer Urbedeutung verfolgt und versucht, die richtigen Worte für die sonst nur äußerlich benannten Naturphänomene zu finden: ihren »Sinn«, ihre »Funktion« in der Welt.\n\nAndererseits führt der Weg von dieser Übung aus zu einer neuen Gemeinschaftsbildung: durch die Pflege des wortlosen Wortes, das in der Meditation webt und das in seiner Gegenwärtigkeit die erste neue gemeinsame Geisteszone ist."
    },
    {
        "id": 4,
        "weekday": "Dienstag",
        "steiner": "Die äußeren Handlungen. Diese sollen nicht störend sein für unsere Mitmenschen. Wo man durch sein Inneres (Gewissen) veranlaßt wird zu handeln, sorgfältig erwägen, wie man der Veranlassung für das Wohl des Ganzen, das dauernde Glück der Mitmenschen, das Ewige, am besten entsprechen könne.\n\nWo man aus sich heraus handelt - aus eigener Initiative -, die Wirkungen seiner Handlungsweise im voraus auf das Gründlichste erwägen.\n\nMan nennt das auch\n«die richtige Tat».",
        "kuehlewind": "Die richtige Tat\n\nDie vierte Übung betrifft die Regelung der äußeren Handlungen. Diese sollen nicht störend sein für unsere Mitmenschen. Unser Tun soll sich harmonisch in unsere Umgebung, in unsere Lebenssituation usw. einfügen. Wenn wir von außen veranlaßt werden zu handeln, achten wir darauf, wie wir dem Anlaß am besten genüge tun können. Wenn wir aus eigenem Antrieb handeln, erwägen wir genau die Wirkung unseres Tuns, auch vom Gesichtspunkt des Menschheitlichen.\n\nDie äußeren Handlungen des Menschen sind die Fortsetzungen seiner Worte, sind worthaft, sofern sie menschliche Taten sind. Eben deshalb sind sie von menschheitlichem Interesse, meistens auch dann, wenn das dem Schein nach kaum anzunehmen ist. Weil die Taten Worte, Aussagen sind, sollten sie gehandhabt werden wie die richtige Rede: aus einer Klarheit der Absicht hervorgehen und durch die helle Erwägung der Handlungsart vollzogen werden. Die Taten verbinden – im Idealfall – ebenso Himmel und Erde wie das richtige Wort.\n\nHandeln und selbständige Worte reden: dazu ist für den Menschen das irdische Leben, die Erde gegeben; sonstwo wäre er dazu nicht fähig. Daher stammt die reine Freude beim irdischen Tun.\n\nWenn wir durch einen anderen oder durch äußere Umstände bewogen werden zu handeln, soll die Tat so lange besonnen werden, bis aus dem Sinnen eine eigene Initiative geboren wird. Die Helligkeit der Absicht soll die Handlung durchziehen, durchleuchten; so wird sie für den Handelnden und die anderen Menschen die Wort-Natur der Welt vermitteln und darstellen können."
    },
    {
        "id": 5,
        "weekday": "Mittwoch",
        "steiner": "Die Einrichtung des Lebens. Natur- und geistgemäß leben, nicht im äußeren Tand des Lebens auf gehen. Alles vermeiden, was Unruhe und Hast ins Leben bringt.\n\nNichts überhasten, aber auch nicht träge sein. Das Leben als ein Mittel zur Arbeit, zur Höherentwickelung betrachten und demgemäß handeln.\n\nMan spricht in dieser Beziehung auch vom\n«richtigen Standpunkt».",
        "kuehlewind": "Der richtige Standpunkt\n\nDer fünfte Gesichtspunkt ist die Einrichtung des ganzen Lebens. Wir versuchen, natur- und geistgemäß zu leben und uns nicht von äußeren Zwängen oder Äußerlichkeiten bestimmen zu lassen. Wir vermeiden alles, was Unruhe und Hast ins Leben bringt. Nichts soll der Mensch überhasten, aber er soll auch nicht träge sein. Er betrachte das Leben als Mittel und Gelegenheit zur Arbeit, zur Höherentwicklung und handle demgemäß. Die Pflege seiner Gesundheit, seiner Gewohnheiten richte er so ein, daß sich daraus ein harmonisches Leben ergibt.\n\nIm Hintergrund dieser Übung steht ein geistiges Grundgesetz: »Ich-Wesen können nur existieren, indem sie sich stets weiterentwickeln, auf der Stufenleiter der Wesen höhersteigen.« Sie haben kein bleibendes, statisches Sein wie die Naturwesen oder die menschengeschaffenen Dinge. Entwickelt sich ein Ich-Wesen nicht höher, in die Richtung, wo seine Bewußtseinsquellen – zunächst überbewußt – liegen, dann erkrankt es, sinkt es, verkommt es. Das Sich-Weiterentwickeln hat demnach ein Ziel, dem die Egoität widerspricht: es führt zu der Geburt des wahren Ich.\n\nDieser Gesichtspunkt soll die »Einrichtung des Lebens« durchbluten, und das Leben soll eine Einrichtung, ein bewußt gestaltetes Wie haben, denn spontan wird es dem Standpunkt der Weiterentwicklung nur bei den seltensten Menschen entsprechen. Es wird vielmehr der Trägheit und Bequemlichkeit und der Genußsucht der Egoität anheimfallen."
    },
    {
        "id": 6,
        "weekday": "Donnerstag",
        "steiner": "Das menschliche Streben. Man achte darauf, nichts zu tun, was außerhalb seiner Kräfte liegt, aber auch nichts zu unterlassen, was innerhalb derselben sich befindet.\n\nÜber das Alltägliche, Augenblickliche hinausblicken und sich Ziele (Ideale) stellen, die mit den höchsten Pflichten eines Menschen Zusammenhängen, zum Beispiel deshalb im Sinne der angegebenen Übungen sich entwickeln wollen, um seinen Mitmenschen nachher um so mehr helfen und raten zu können, wenn vielleicht auch nicht gerade in der allernächsten Zukunft.\n\nMan kann das Gesagte auch zusammenfassen in:\n«Alle vorangegangenen Übungen'\n'zur Gewohnheit werden lassen».",
        "kuehlewind": "Das richtige Streben\n\nDer sechste Gesichtspunkt ist die Richtung des menschlichen Strebens. Man untersuche seine Fähigkeiten, sein Wissen und lebe danach. Man achte darauf, nichts zu tun, was außerhalb der eigenen Kräfte liegt, aber auch nichts zu unterlassen, was innerhalb derselben zu leisten ist. Man blicke über das Alltägliche, Augenblickliche hinaus und setze sich Ziele, Ideale, die für die Gesundung und Weiterentwicklung der Menschheit förderlich sind. – Man kann das Gesagte auch zusammenfassen: Alle vorangehenden Übungen zur Gewohnheit werden lassen.\n\nDiese Übung ruft zur Bestimmung des nächsten Schrittes innerhalb der richtigen Einrichtung des Lebens auf. Lenkt jene den Blick mehr auf die allgemeine Gestaltung des Lebens, ist diese mit der mehr konkreten Richtung des Strebens gemäß der Entwicklungsphasen beschäftigt.\n\nDie konkrete Formulierung oder die Findung der nächsten Aufgaben kann am besten so durchgeführt werden, daß man sie wie aus dem Boden der vorangehenden Übungen herauswachsen läßt, wenn diese mehr und mehr zur Gewohnheit werden. Man denke dabei nicht an starre Gewohnheiten, die schon durch den Inhalt der Übungen ausgeschlossen sind; man könnte sagen: diese sollen ihren improvisierenden Charakter immer mehr auf den Tagesablauf ausbreiten, ohne daß dabei die Absichtlichkeit des Alltagsbewusstseins in den Prozeß eingreift."
    },
    {
        "id": 7,
        "weekday": "Freitag",
        "steiner": "Das Streben, möglichst viel vom Leben zu lernen.\n\nNichts geht an uns vorüber, das nicht Anlaß gibt, Erfahrungen zu sammeln, die nützlich sind für das Leben. Hat man etwas unrichtig oder unvollkommen getan, so wird das ein Anlaß, ähnliches später richtig oder vollkommen zu machen.\n\nSieht man andere handeln, so beobachtet man sie zu einem ähnlichen Ziele (doch nicht mit lieblosen Blicken). Und man tut nichts, ohne auf Erlebnisse zurückzublicken, die einem eine Hilfe sein können bei seinen Entscheidungen und Verrichtungen.\n\nMan kann von jedem Menschen, auch von Kindern, viel lernen, wenn man aufpasst.\n\nMan nennt diese Übung auch\n«das richtige Gedächtnis»\n\ndas heißt sich erinnern an das Gelernte, an die gemachten Erfahrungen.",
        "kuehlewind": "Die richtige Erinnerung\n\nDer siebente Gesichtspunkt im Leben der Seele ist, daß der Mensch bestrebt sei, vom Leben möglichst viel zu lernen. Alles kann zu bewußten Erfahrungen Anlaß sein, die uns in der weiteren Gestaltung des Lebens hilfreich sind. Man vergegenwärtige sich genau, wenn man etwas versäumt oder unvollkommen getan hat, um herauszufinden, wie man es hätte tun müssen. Sieht man andere handeln, so beobachte man sie in ähnlicher Absicht, doch nicht mit liebloser Kritik. Man kann von jedem Menschen, besonders von Kindern, viel lernen, wenn man aufpaßt. – Man nennt diese Übung auch das richtige Gedächtnis, man erinnert sich an das Gelernte, an die gemachten Erfahrungen."
    },
    {
        "id": 8,
        "weekday": "daily",
        "steiner": "Von Zeit zu Zeit Blicke in sein Inneres tun, wenn auch nur fünf Minuten täglich zur selben Zeit. Dabei soll man sich in sich selbst versenken, sorgsam mit sich zu Rate gehen, seine Lebensgrundsätze prüfen und bilden, seine Kenntnisse - oder auch das Gegenteil - in Gedanken durchlaufen, seine Pflichten erwägen, über den Inhalt und den wahren Zweck des Lebens nachdenken, über seine eigenen Fehler und Unvollkommenheiten ein ernstliches Mißfallen haben, mit einem Wort: das Wesentliche, das Bleibende herauszufinden trachten und sich entsprechende Ziele, zum Beispiel zu erwerbende Tugenden, ernsthaft vornehmen. (Nicht in den Fehler verfallen und denken, man hätte irgend etwas gut gemacht, sondern immer weiter streben, den höchsten Vorbildern nach.)\n\nMan nennt diese Übung auch\n«die richtige Beschaulichkeit».",
        "kuehlewind": "Zusammenfassung\n\nDie achte Übung ist endlich dies: Von Zeit zu Zeit nach innen schauen und prüfen, wie weit es gelungen ist, die eigenen Lebensgrundsätze zu befolgen, was man diesbezüglich zu ändern hat und wie diese Änderung erreicht werden könnte. Aus den meist vielen Fehlern und Schwächen bezeichnet man eine, die nächstens zu überwinden ist. Besondere Sorgfalt soll auf die innere Aufrichtigkeit, auf die Ehrlichkeit sich selbst gegenüber gewendet werden.\n\nMan erwäge, wie man mit seinem Leben in der Gesamtheit menschlicher Ziele steht. Man nennt diese Übung auch die richtige Beschaulichkeit.\n\nDie Beschaulichkeit richtet den inneren Blick auf den Kampf, der in jedem Menschen fortwährend vor sich geht: zwischen dem, was er in seinen erleuchteten Augenblicken als Gutes, als menschheitliches Ziel erfaßt, und dem, was ihn aus seiner Egoität, aus seinem Unterbewußten her impulsiert. Es ist nicht leicht, die Egoität in allen ihren Verkleidungen zu erkennen, im Gewand des Altruismus, des Helfenwollens, manchmal des Opfers. Was aber Schwäche ist, soll als solche erkannt werden, auch wenn sie sich als Stärke ausgibt.\n\nDer Vorgang der Selbsterkenntnis besteht darin, daß die kämpfenden Parteien in der Seele beide zum Reden kommen, beide angehört und anerkannt werden. Das Gewissen ist dieser Aufgabe nicht gewachsen, weil es nicht vom Ich gebildet wurde; daher kann die Gegenpartei nicht bemerkt werden, wenn das Gewissen »spricht«, und so bleibt die Auseinandersetzung mit ihr aus.\n\nDer aktuelle Gesichtspunkt in der Selbsterkenntnis lautet: was geschieht aus meiner Egoität und was als Beitrag zu menschheitlichen Zielen? Was ich tue, setzt sich meistens aus diesen zwei Komponenten zusammen. Wir können darauf achten, was uns in der Vollführung der Übungen fördert, was uns hindert: das kann für uns eine Orientierungshilfe sein in bezug auf die Kräfte, die in uns miteinander im Kampf um diese Frage liegen."
    }
];

// Exercise titles (derived from Kühlewind text)
const exerciseTitles = {
    1: "Die richtige Vorstellung",
    2: "Der richtige Entschluss",
    3: "Die richtige Rede",
    4: "Die richtige Tat",
    5: "Der richtige Standpunkt",
    6: "Das richtige Streben",
    7: "Die richtige Erinnerung",
    8: "Die richtige Beschaulichkeit"
};

// Weekday mapping (JavaScript getDay() returns 0 = Sunday)
const weekdayMap = {
    0: "Sonntag",
    1: "Montag",
    2: "Dienstag",
    3: "Mittwoch",
    4: "Donnerstag",
    5: "Freitag",
    6: "Samstag"
};

// ========================================
// Storage Service
// ========================================
class StorageService {
    constructor(prefix = 'nebenuebungen_') {
        this.prefix = prefix;
    }

    get(key) {
        try {
            const value = localStorage.getItem(this.prefix + key);
            return value ? JSON.parse(value) : null;
        } catch (e) {
            console.error('Storage get error:', e);
            return null;
        }
    }

    set(key, value) {
        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage set error:', e);
        }
    }
}

// ========================================
// App State & Logic
// ========================================
class NebenübungenApp {
    constructor() {
        this.storage = new StorageService();
        this.currentView = 'list';
        this.currentExerciseId = null;
        this.scrollPositions = {}; // Track scroll position per exercise

        // DOM elements
        this.listView = document.getElementById('listView');
        this.detailView = document.getElementById('detailView');
        this.exerciseList = document.getElementById('exerciseList');
        this.backBtn = document.getElementById('backBtn');
        this.headerTitle = document.getElementById('headerTitle');
        this.streakText = document.getElementById('streakText');

        // Detail elements
        this.detailWeekday = document.getElementById('detailWeekday');
        this.detailTitle = document.getElementById('detailTitle');
        this.detailKuehlewind = document.getElementById('detailKuehlewind');
        this.detailSteiner = document.getElementById('detailSteiner');

        this.init();
    }

    init() {
        this.renderList();
        this.updateStreakDisplay();
        this.bindEvents();
    }

    // Get today's German weekday
    getTodayWeekday() {
        return weekdayMap[new Date().getDay()];
    }

    // Get today's date as YYYY-MM-DD
    getToday() {
        return new Date().toISOString().split('T')[0];
    }

    // Get yesterday's date as YYYY-MM-DD
    getYesterday() {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date.toISOString().split('T')[0];
    }

    // Update streak based on visit
    updateStreak() {
        const today = this.getToday();
        const yesterday = this.getYesterday();
        const lastVisitDate = this.storage.get('lastVisitDate');
        let streakCount = this.storage.get('streakCount') || 0;

        if (lastVisitDate === today) {
            // Already practiced today, no change
            return;
        } else if (lastVisitDate === yesterday) {
            // Consecutive day
            streakCount += 1;
        } else {
            // Streak broken, reset to 1
            streakCount = 1;
        }

        this.storage.set('streakCount', streakCount);
        this.storage.set('lastVisitDate', today);
        this.updateStreakDisplay();
    }

    updateStreakDisplay() {
        const streak = this.storage.get('streakCount') || 0;
        this.streakText.textContent = `Übungstage: ${streak}`;
    }

    // Check if exercise is today's exercise
    isToday(exercise) {
        if (exercise.weekday === 'daily') return true;
        return exercise.weekday === this.getTodayWeekday();
    }

    // Render exercise list
    renderList() {
        const todayWeekday = this.getTodayWeekday();
        const lastViewedId = this.storage.get('lastViewedId');

        this.exerciseList.innerHTML = exercises.map(exercise => {
            const isToday = this.isToday(exercise);
            const isLastViewed = exercise.id === lastViewedId;
            const weekdayDisplay = exercise.weekday === 'daily' ? 'Täglich' : exercise.weekday;

            let classes = 'exercise-card';
            if (isToday) classes += ' today';
            if (isLastViewed) classes += ' last-viewed';

            return `
                <li class="${classes}" data-id="${exercise.id}">
                    <div class="last-viewed-indicator"></div>
                    <div class="exercise-card-header">
                        <span class="exercise-weekday">${weekdayDisplay}</span>
                        <span class="today-badge">Heute</span>
                    </div>
                    <div class="exercise-title">${exerciseTitles[exercise.id]}</div>
                </li>
            `;
        }).join('');
    }

    // Show exercise detail
    showDetail(exerciseId) {
        const exercise = exercises.find(e => e.id === exerciseId);
        if (!exercise) return;

        // Save scroll position of current exercise before leaving
        if (this.currentExerciseId !== null && this.currentView === 'detail') {
            this.scrollPositions[this.currentExerciseId] = window.scrollY;
        }

        // Save as last viewed and update streak
        this.storage.set('lastViewedId', exerciseId);
        this.updateStreak();

        // Update UI
        const weekdayDisplay = exercise.weekday === 'daily' ? 'Täglich' : exercise.weekday;
        this.detailWeekday.textContent = weekdayDisplay;
        this.detailTitle.textContent = exerciseTitles[exercise.id];
        this.detailKuehlewind.textContent = exercise.kuehlewind;
        this.detailSteiner.textContent = exercise.steiner;

        // Switch views
        this.listView.classList.add('hidden');
        this.detailView.classList.remove('hidden');
        this.backBtn.classList.add('visible');
        this.headerTitle.textContent = 'Achtgliedriger Pfad';

        // Reset Steiner section
        document.querySelector('.steiner-section').removeAttribute('open');

        // Handle scroll position
        const previousExerciseId = this.currentExerciseId;
        this.currentExerciseId = exerciseId;

        if (previousExerciseId === exerciseId && this.scrollPositions[exerciseId] !== undefined) {
            // Returning to same exercise - restore scroll position
            requestAnimationFrame(() => {
                window.scrollTo(0, this.scrollPositions[exerciseId]);
            });
        } else {
            // New exercise - scroll to top
            window.scrollTo(0, 0);
        }

        this.currentView = 'detail';
    }

    // Show list view
    showList() {
        // Save scroll position of current exercise before leaving
        if (this.currentExerciseId !== null && this.currentView === 'detail') {
            this.scrollPositions[this.currentExerciseId] = window.scrollY;
        }

        this.detailView.classList.add('hidden');
        this.listView.classList.remove('hidden');
        this.backBtn.classList.remove('visible');
        this.headerTitle.textContent = 'Achtgliedriger Pfad';

        // Re-render to update last-viewed indicator and today highlights
        this.renderList();

        // Scroll list view to top
        window.scrollTo(0, 0);

        this.currentView = 'list';
    }

    // Bind event handlers
    bindEvents() {
        // Back button
        this.backBtn.addEventListener('click', () => this.showList());

        // Exercise card clicks
        this.exerciseList.addEventListener('click', (e) => {
            const card = e.target.closest('.exercise-card');
            if (card) {
                const id = parseInt(card.dataset.id, 10);
                this.showDetail(id);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentView === 'detail') {
                this.showList();
            }
        });

        // Re-render list when page becomes visible (handles day change)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.currentView === 'list') {
                this.renderList();
            }
        });

        // Re-render on window focus (handles returning to tab)
        window.addEventListener('focus', () => {
            if (this.currentView === 'list') {
                this.renderList();
            }
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NebenübungenApp();
});
