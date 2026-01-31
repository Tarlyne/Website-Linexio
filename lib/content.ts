import {
  LayoutDashboard,
  Users,
  Calculator,
  CheckSquare,
  Calendar,
  FolderOpen,
  GraduationCap,
  LayoutGrid,
  Dices,
  Settings,
  Info,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { FeatureItem, FeaturePageData, ContentStore } from '../types';

const isProd = process.env.NODE_ENV === 'production';
const BASE_PATH = isProd ? '/Website-Linexio' : '';
const EXTERNAL_IMAGE_BASE = `${BASE_PATH}/assets/`;

export const content: ContentStore = {
  brand: {
    name: "Linexio",
    tagline: "Ihr Unterricht. Ihre Daten. Ihr System.",
    logo: undefined
  },
  hero: {
    headline: "Der digitale Lehrer-Assistent für das iPad.",
    subheadline: "Schluss mit Zettelwirtschaft. Linexio organisiert Ihren Schulalltag intuitiv, effizient und 100% offline. Starten Sie jetzt einfach und",
    ctaPrimary: "Linexio installieren",
    ctaSecondary: "Features ansehen",
    badges: [
      "Optimiert für Tablets",
      "100% Offline",
      "DSGVO-Konform",
      "Kostenlos & Werbefrei",
      "Ohne Cloud-Zwang",
      "Kein Benutzerkonto nötig",
      "Sichere Backup-Funktion",
      "Regelmäßige Updates"
    ]
  },
  features: [
    {
      title: "Notenverwaltung",
      description: "Passen Sie die Notenverwaltung Ihren Wünschen an. Sparen Sie Stunden, um händisch Noten berechnen zu müssen.",
      icon: Calculator,
      colSpan: 2,
      slug: "noten"
    },
    {
      title: "Sitzplan",
      description: "Visueller Editor für Ihr Klassenzimmer. Schieben Sie Schüler per Drag & Drop auf ihre Plätze.",
      icon: LayoutGrid,
      colSpan: 1,
      slug: "sitzplan"
    },
    {
      title: "Checklisten",
      description: "Erstellen Sie Listen für Hausaufgaben, Elternbriefe oder Kopiergeld.",
      icon: CheckSquare,
      colSpan: 1,
      slug: "checklisten"
    },
    {
      title: "Gruppeneinteilung",
      description: "Bilden Sie in Sekunden homogene oder heterogene Gruppen nach Ihren Kriterien.",
      icon: Users,
      colSpan: 1,
      slug: "gruppen"
    },
    {
      title: "Zufallswahl",
      description: "Der faire Aufruf-Generator. Wählt Schüler zufällig aus und merkt sich, wer schon dran war.",
      icon: Dices,
      colSpan: 1,
      slug: "zufall"
    },
    {
      title: "Das Dashboard",
      description: "Termine, Geburtstags-Radar, Ferien-Countdown und offene Aufgaben auf einen Blick.",
      icon: LayoutDashboard,
      colSpan: 1,
      slug: "dashboard"
    },
    {
      title: "Persönlicher Bereich",
      description: "Machen Sie sich Notizen (Elterngespräche, Konferenzen,...) und vermerken Sie alle wichtigen Termine.",
      icon: Calendar,
      colSpan: 2,
      slug: "persoenlich"
    },
    {
      title: "Schülerakte",
      description: "Alles an einem Ort: Nachteilsausgleich, Förderbedarf, Notizen und Elternkontakte.",
      icon: FolderOpen,
      colSpan: 1,
      slug: "klassen"
    },
    {
      title: "Namen lernen",
      description: "Lernen Sie die Namen Ihrer SchülerInnen spielerisch mit Quiz oder Karteikarten.",
      icon: GraduationCap,
      colSpan: 1,
      slug: "namen"
    },
    {
      title: "Einstellungen",
      description: "Themes, Backups, Notenschlüssel und vieles mehr.",
      icon: Settings,
      colSpan: 1,
      slug: "einstellungen"
    }
  ],
  faq: [
    {
      title: "Allgemein",
      id: "general",
      icon: Info,
      questions: [
        {
          question: "Ist Linexio wirklich dauerhaft kostenlos?",
          answer: "Ja. Alle Funktionen sind kostenlos und werbefrei. Es gibt keinerlei Einschränkungen bezüglich Nutzungszeit oder Umfang. Wenn Sie das Projekt unterstützen möchten, können Sie dies durch eine freiwillige Spende direkt in der App tun."
        },
        {
          question: "Was hat es mit der Spende auf sich?",
          answer: "Wenn Ihnen die App gefällt, dann können Sie eine freiwillige Spende in beliebiger Höhe tätigen - wir würden uns sehr darüber freuen! Als kleines Dankeschön bekommen Sie ein zusätzliches Theme, eine persönliche Anrede auf dem Dashboard und die Nutzung der optionalen KI-Funktionen wird Ihnen freigeschaltet."
        },
        {
          question: "Muss ich ein Benutzerkonto erstellen?",
          answer: "Nein. Da Linexio ohne Server auskommt, gibt es auch kein direktes Benutzerkonto. Sie installieren die App, legen Ihr Passwort fest und können sofort mit der Arbeit beginnen. Ihre Daten bleiben anonym und lokal."
        },
        {
          question: "Ich habe mein Passwort vergessen - können Sie es zurücksetzen?",
          answer: "Nein. Ihre Daten liegen nicht auf einem Server und deshalb habe ich keinen Zugriff darauf. Es gibt aber eine Absicherung innerhalb der App (Erstellung einer Phrase), mit der Sie selbst das Passwort zurücksetzen können - vorausgesetzt, Sie haben die Phrase erstellt und sich gut hinterlegt."
        },
        {
          question: "Gibt es Linexio auch für Windows oder Mac?",
          answer: "Ja. Linexio ist als Progressive Web App (PWA) konzipiert. Sie können sie über moderne Browser auch auf Android-Tablets oder Computern installieren."
        },
        {
          question: "Kann ich Linexio auf mehreren Geräten nutzen und synchronisieren sich meine Daten?",
          answer: "Sie können Linexio auf mehreren Geräten installieren, ja. Aber es findet keine Synchronisierung der Daten statt, da die Daten nur auf Ihrem jeweiligen Gerät liegen und keine Server genutzt werden. Sie können sich Backups erstellen und diese dann auf einem anderen System laden. Aber dies birgt das Risiko, dass sie immer aufpassen müssen, wo sie welche Daten geändert haben."
        },
        {
          question: "Warum nutzt Linexio keine Server?",
          answer: "Der Fokus liegt derzeit darin, die App zu verbessern, damit Sie Ihnen bestmöglichst im Schulalltag helfen kann. Zum aktuellen Zeitpunkt ist also eine Umstellung auf Server noch nicht vorgesehen."
        }
      ]
    },
    {
      title: "Datenschutz & Sicherheit",
      id: "privacy",
      icon: ShieldCheck,
      questions: [
        {
          question: "Wie sicher sind meine Schülerdaten?",
          answer: "Maximal sicher. Linexio verfolgt einen 'Offline-First'-Ansatz. Alle Daten werden mit moderner Verschlüsselungstechnik und separatem Passwort ausschließlich im Speicher Ihres Endgeräts abgelegt. Es findet keine Synchronisation mit einer Cloud statt, es sei denn, Sie erstellen manuell ein Backup und laden dieses selbst hoch."
        },
        {
          question: "Brauche ich einen Auftragsverarbeitungsvertrag (AVV)?",
          answer: "Da ich keinen Zugriff auf Ihre Daten habe und diese nicht auf Servern verarbeitet werden, ist nach gängiger Rechtsauffassung kein AVV erforderlich. Die datenschutzrechtliche Verantwortung verbleibt vollständig bei Ihnen als Lehrkraft."
        },
        {
          question: "Was passiert, wenn mein iPad kaputt geht?",
          answer: "Da die Daten nur lokal auf Ihrem Gerät liegen, wären sie bei einem Totalverlust des Geräts ohne Backup verloren. Es wird daher dringend empfohlen, regelmäßig die integrierte Backup-Funktion zu nutzen und die verschlüsselte Datei an einem sicheren Ort zu speichern."
        }
      ]
    },
    {
      title: "Funktionen",
      id: "features",
      icon: Wrench,
      questions: [
        {
          question: "Kann ich Daten aus Excel importieren?",
          answer: "Ja. Linexio bietet eine intelligente Import-Funktion. Sie können Schülerlisten einfach in Excel als CSV-Datei exportieren oder direkt per Copy & Paste in Linexio einfügen. Die App erkennt die Struktur meist automatisch."
        },
        {
          question: "Unterstützt Linexio das Oberstufen-Punktesystem?",
          answer: "Absolut. Diese können Sie beim Erstellen der Lerngruppe einfach als Notensystem wählen."
        },
        {
          question: "Ich brauche ein anderes Notensystem - was mache ich nun?",
          answer: "Linexio wurde ursprünglich nur für mich selbst entwickelt. Ich benötige nur diese Notensysteme und habe keine Erfahrung mit anderen Systemen. Sie können mir aber sehr gerne schreiben, welches Notensystem Sie brauchen oder sich wünschen und ich gebe mir Mühe, dies schnellstmöglichst zu integrieren. Genau für solche Fragen und Wünsche sind wir in der Testphase! :)"
        },
        {
          question: "Wird es statt Noten auch ein Bewertungssystem mit +/- oder Smileys geben?",
          answer: "Dies ist nicht vorgesehen. Linexio arbeitet mit Formeln, die Ihnen Noten berechnen. Eine Bewertung mit Sonderzeichen oder Smileys halte ich für kritisch. Am Ende einer Bewertungsphase müssen Sie irgendwann Smileys oder Sonderzeichen übersetzen und ihnen einen Wert geben, um daraus eine Note zu formen. Das halte ich für schwierig und weniger rechtssicher. Vor allem aber interpretationsabhängig."
        },
        {
          question: "Kann ich Noten händisch ändern?",
          answer: "Ja. Sie können Zeugnisnoten händisch ändern. Linexio berechnet Ihnen die Noten mathematisch genau und sauber - aber manchmal ist eben die berechnete Note pädagogisch nicht die richtige Entscheidung. Alle anderen Noten (wie bspw. Klausurnoten) können nicht geändert werden."
        }
      ]
    }
  ],
  comparison: {
    headline: "Autonomie statt Cloud-Zwang.",
    subheadline: "Warum lokale Datenspeicherung für professionelle Lehrkräfte oft die bessere Wahl ist.",
    items: [
      {
        label: "Architektur",
        cloud: "Zentralisierte Cloud-Systeme",
        offline: "Zero-Knowledge / Lokal-First",
        isPositive: true
      },
      {
        label: "Verfügbarkeit",
        cloud: "Zwingende Internetverbindung",
        offline: "Uneingeschränkt (Flugmodus-ready)",
        isPositive: true
      },
      {
        label: "Verarbeitungsort",
        cloud: "Geteilte Server-Ressourcen",
        offline: "Dedizierte iPad-Performance",
        isPositive: true
      },
      {
        label: "Datenhoheit",
        cloud: "Abhängigkeit von Drittanbietern",
        offline: "Physikalisch in Ihrer Hand",
        isPositive: true
      }
    ]
  },
  pages: {
    "security": {
      slug: "security",
      hero: {
        headline: "Sicherheit ist unser Fundament.",
        subheadline: "Linexio wurde mit einem klaren Prinzip entwickelt: Ihre Schuldaten gehören Ihnen und verlassen niemals unverschlüsselt Ihr Gerät.",
        badge: "Datensicherheit"
      },
      sections: [
        {
          title: "Offline-First Ansatz",
          description: "Linexio nutzt keine externen Server. Alle Daten liegen auf Ihrem Endgerät. Wenn Sie die App schließen, sind die Daten sicher auf Ihrem Gerät verschlossen.",
          visualType: "security-lock"
        },
        {
          title: "Backup",
          description: "Erstellen Sie hochverschlüsselte Backups für externe Speicherorte.",
          visualType: "backup-lock",
          items: ["AES-256 Verschlüsselung", "Zusätzlich passwortgeschützt", "Vollständige Datenhoheit"]
        },
        {
          title: "Der Datenschutz-Wächter",
          description: "Unser einzigartiges Konzept anonymisiert Daten, bevor sie (optional) für intelligente Funktionen genutzt werden. Die KI erhält nur Platzhalter.",
          visualType: "abstract",
          image: `${EXTERNAL_IMAGE_BASE}feedback.webp`,
          items: ["Anonymisierte KI-Anfragen", "Kein Tracking", "DSGVO-konform"]
        }
      ]
    },
    "noten": {
      slug: "noten",
      hero: {
        headline: "Fair, transparent und präzise.",
        subheadline: "Von der mündlichen Note bis zum Zeugnis. Linexio nimmt Ihnen das Rechnen ab und sorgt für Transparenz und Übersichtlichkeit.",
        badge: "Notenverwaltung"
      },
      sections: [
        {
          title: "Übersicht",
          description: "Linexio bietet Ihnen übersichtliche Listen. Eine Gesamtübersicht zeigt alle von Ihnen erstellten Kategorien. Jede Kategorie hat eine eigene Seite, so dass alles übersichtlich bleibt und nicht in einer Tabelle aufgelistet werden muss.",
          visualType: "table",
          image: `${EXTERNAL_IMAGE_BASE}gesamtUebersicht.webp`,
          items: ["Gesamtübersicht", "Zeugnisnoten händisch änderbar", "Numpad-Eingabe für iPad"]
        },
        {
          title: "Gewichtung & Transparenz",
          description: "Sie entscheiden, was wie viel zählt. Stellen Sie die Gewichtung von allen Einzelnoten individuell ein.",
          visualType: "list",
          image: `${EXTERNAL_IMAGE_BASE}einzelFokus.webp`,
          items: ["Frei definierbare Kategorien", "Individuelle Gewichtung", "Automatische Berechnung", "Fokussierung auf einzelne SchülerIn"]
        },
        {
          title: "Exportfunktion aller Listen",
          description: "Generieren Sie mit einem Klick detaillierte Leistungsübersichten für jeden Schüler oder der gesamten Klasse. Zur Vorbereitung für Besprechungen, oder einfach als zusätzliches physisches Backup für Ihre Unterlagen.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}export1.webp`,
          items: ["PDF-Export pro Schüler", "PDF-Export der Gesamtübersicht", "Zusätzliches Backup"]
        },
        {
          title: "Auswertung der Leistungen",
          description: "Verschaffen Sie sich einen Überblick über die Gesamtleistung einer Kategorie oder einer Klassenarbeit.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}auswertung.webp`,
          items: ["Durchschnittlich erreichte Punktzahlen pro Aufgabe", "Hinweise zur Förderung", "Notenspiegel", "Theme: Amethyst"]
        },
        {
          title: "Feedback für Ihre SchülerInnen",
          description: "Erstellen Sie ein individuelles Feedback für Ihre SchülerInnen zu jedem Leistungsnachweis (egal, ob mündliche Note oder Klassenarbeit).",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}feedbackExport.webp`,
          items: ["Leistungsstand im Vergleich", "Vergleich zur vorherigen Leistung", "Schriftliches Feedback (auf Wunsch mit KI-Unterstützung)"]
        }
      ]
    },
    "dashboard": {
      slug: "dashboard",
      hero: {
        headline: "Ihr Cockpit für den Schultag.",
        subheadline: "Alles Wichtige auf einen Blick. Starten Sie gut informiert in den Morgen, ohne lange suchen zu müssen.",
        badge: "Dashboard"
      },
      sections: [
        {
          title: "Proaktive Informationen",
          description: "Vom Geburtstags-Radar über den Ferien-Countdown bis hin zu offenen Aufgaben – das Dashboard denkt mit.",
          visualType: "stat",
          image: `${EXTERNAL_IMAGE_BASE}dashboard.webp`,
          items: ["Geburtstags-Radar (7 Tage)", "Ferien-Countdown (für Ihr gewähltes Bundesland)", "Datierte Checklisten", "Backup-Erinnerung"]
        },
        {
          title: "Motivation & Übersicht",
          description: "Ein täglich wechselndes Zitat sorgt für Motivation oder regt zum Nachdenken an. Termine der nächsten 14 Tage werden Ihnen ebenfalls angezeigt.",
          visualType: "abstract",
          image: `${EXTERNAL_IMAGE_BASE}dashboard1.webp`,
          items: ["Tageszitate", "Terminübersicht", "Kalenderwoche", "Theme: Terranova"]
        }
      ]
    },
    "klassen": {
      slug: "klassen",
      hero: {
        headline: "Ihre Klassen, perfekt organisiert.",
        subheadline: "Verwalten Sie Lerngruppen flexibel. Importieren Sie Daten blitzschnell und behalten Sie die Schülerakte im Blick.",
        badge: "Lerngruppen"
      },
      sections: [
        {
          title: "Die digitale Schülerakte",
          description: "Stammdaten, Förderbedarf, Nachteilsausgleich und Notizen an einem Ort. Inklusive optionaler Foto-Funktion.",
          visualType: "list",
          image: `${EXTERNAL_IMAGE_BASE}akte.webp`,
          items: ["Import per Copy & Paste", "NTA-Hinterlegung", "Pädagogische Merkmale", "Fotofunktion"]
        },
        {
          title: "Archiv & Struktur",
          description: "Legen Sie beliebig viele Klassen oder Kurse an. Am Schuljahresende archivieren Sie alte Daten mit einem Klick.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}lerngruppen.webp`,
          items: ["Excel/CSV Schnittstelle", "Langzeit-Archiv", "Geschlechterverteilung"]
        }
      ]
    },
    "sitzplan": {
      slug: "sitzplan",
      hero: {
        headline: "Ihr Klassenzimmer im Blick.",
        subheadline: "Ein visueller Editor, der sich Ihrem Raum anpasst. Organisieren Sie Ihre Klasse intuitiv per Drag & Drop.",
        badge: "Sitzplan"
      },
      sections: [
        {
          title: "Interaktive Gestaltung",
          description: "Definieren Sie die Sitzplatzverteilung und schieben Sie Ihre SchülerInnen einfach mit dem Finger auf ihre Plätze. Sie können SchülerInnen an einen Platz fixieren (bspw. wegen einer Sehschwäche in der ersten Reihe), so dass diese(r) nicht aus Versehen hinten sitzt.",
          visualType: "abstract",
          image: `${EXTERNAL_IMAGE_BASE}sitzplan1.webp`,
          items: ["Drag & Drop Bedienung", "Platz-Fixierung"]
        },
        {
          title: "Intelligente Zuweisung",
          description: "Lassen Sie sich von Linexio helfen. Ob Zufallsverteilung, geschlechterwechselnd, oder aber von der KI nach Ihren Vorgaben.",
          visualType: "stat",
          image: `${EXTERNAL_IMAGE_BASE}sitzplan.webp`,
          items: ["Automatisches Mischen", "Zufall", "Geschlechter im Wechsel", "Intelligente Verteilung nach Vorgaben"]
        }
      ]
    },
    "checklisten": {
      slug: "checklisten",
      hero: {
        headline: "Nie wieder den Überblick verlieren.",
        subheadline: "Erfassen Sie Hausaufgaben, Elternbriefe oder Kopiergeld. Einfach abhaken und sofort sehen, wer noch fehlt.",
        badge: "Checklisten"
      },
      sections: [
        {
          title: "Status-Tracking in Echtzeit",
          description: "Erfassen Sie blitzschnell Ihre Listen. Sie können jeder Liste optional ein Abgabedatum geben - und werden nach Ablauf des Datums auf dem Dashboard erinnert, wie viele Abgaben noch überfällig sind.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}checklisteDatum.webp`,
          items: ["Voreinstellung", "Schnelles Abhaken", "Datums-Funktion"]
        },
        {
          title: "Vielfältige Anwendung",
          description: "Ob Kopiergeld, Elternbriefe oder Materialkontrolle – erstellen Sie individuelle Listen für jeden Zweck.",
          visualType: "list",
          image: `${EXTERNAL_IMAGE_BASE}checklisten.webp`,
          items: ["Schnelle Kontrolle", "Alles im Blick"]
        }
      ]
    },
    "gruppen": {
      slug: "gruppen",
      hero: {
        headline: "Gruppenbildung in Sekunden.",
        subheadline: "Schluss mit Diskussionen bei der Gruppenwahl. Erstellen Sie faire Gruppen nach Ihren persönlichen Kriterien.",
        badge: "Gruppeneinteilung"
      },
      sections: [
        {
          title: "Zufall & Kriterien",
          description: "Bilden Sie Gruppen nach Anzahl, Größe oder speziellen Kriterien. Ziehen Sie Ihre SchülerInnen einfach per Drag & Drop in Gruppen.",
          visualType: "list",
          image: `${EXTERNAL_IMAGE_BASE}gruppen.webp`,
          items: ["Zufalls-Modus", "Drag & Drop Bedienung", "Homogene Gruppen", "Heterogene Mischung"]
        },
        {
          title: "KI-Unterstützung",
          description: "Lassen Sie komplexe Konstellationen von der KI lösen, um z.B. bestimmte Schüler gezielt zu trennen oder zu paaren.",
          visualType: "stat",
          image: `${EXTERNAL_IMAGE_BASE}gruppenIntelligent.webp`,
          items: ["Ausschluss-Listen", "Partner-Fixierung", "Schnelles Neu-Würfeln"]
        },
        {
          title: "Benennung & Bewertung der Gruppen",
          description: "Geben Sie Ihren Gruppen spezielle Namen, um den Überblick zu behalten, welche Gruppe welches Thema bearbeitet. Bewerten Sie Gruppenarbeiten und vergeben Sie allen SchülerInnen einer Gruppe mit nur einem Klick eine Note.",
          visualType: "stat",
          image: `${EXTERNAL_IMAGE_BASE}gruppenBewertung.webp`,
          items: ["Schnelle Bewertung", "Namensvergabe", "Übersicht"]
        }
      ]
    },
    "zufall": {
      slug: "zufall",
      hero: {
        headline: "Gerechtigkeit per Zufall.",
        subheadline: "Der faire Aufruf-Generator für unterschiedlichste Situationen. Spannung inklusive.",
        badge: "Zufallsauswahl"
      },
      sections: [
        {
          title: "Das Fairness-Prinzip",
          description: "Linexio merkt sich, wer schon dran war, bis alle einmal aufgerufen wurden. So fühlt sich niemand benachteltigt. Abwesende SchülerInnen können zuvor markiert werden, so dass diese nicht berücksichtigt werden.",
          visualType: "stat",
          image: `${EXTERNAL_IMAGE_BASE}zufall1.webp`,
          items: ["Gedächtnis-Funktion", "Spotlight Animation", "Einfache Bedienung"]
        }
      ]
    },
    "namen": {
      slug: "namen",
      hero: {
        headline: "Namen lernen leicht gemacht.",
        subheadline: "Ein spielerischer Modus, um zu Schuljahresbeginn die Namen Ihrer SchülerInnen blitzschnell zu lernen.",
        badge: "Namenstraining"
      },
      sections: [
        {
          title: "Quiz & Karteikarten",
          description: "Wählen Sie zum Üben klassische, digitale Karteikarten oder testen Sie sich selbst in einem Quiz.",
          visualType: "abstract",
          image: `${EXTERNAL_IMAGE_BASE}namen.webp`,
          items: ["Foto-Unterstützung", "Gamification Ansatz", "Lernfortschritt"]
        },
        {
          title: "Mehrere Modi",
          description: "Wählen Sie einen von vier Modi aus, um sich selbst zu überprüfen und zu lernen. Ihr Fortschritt wird Ihnen am Ende jeder Runde angezeigt.",
          visualType: "list",
          image: `${EXTERNAL_IMAGE_BASE}namen1.webp`,
          items: ["Namen zu Bild", "Bild zu Namen", "Eingabe zu Bild", "Königsdisziplin: vollständiger Name zu Bild"]
        }
      ]
    },
    "persoenlich": {
      slug: "persoenlich",
      hero: {
        headline: "Ihr persönlicher Planer.",
        subheadline: "Notizen, Termine und Organisation an einem Ort. Damit Sie den Kopf für das Wesentliche frei haben.",
        badge: "Persönlicher Bereich"
      },
      sections: [
        {
          title: "Termin-Verknüpfung",
          description: "Verwalten Sie Klausuren, Konferenzen oder Elterngespräche. Linexio erinnert Sie daran, wenn es für eine Klausur SchülerInnen mit einem NTA gibt.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}termine.webp`,
          items: ["Automatische NTA-Erinnerung", "Kalender-Integration", "Bundeslandspezifische Feiertage", "Unterschiedliche Farben der Terminarten"]
        },
        {
          title: "Dienstliches Notizbuch",
          description: "Erstellen Sie Kategorien für Dienstbesprechungen, Ideen oder Protokolle.",
          visualType: "list",
          image: `${EXTERNAL_IMAGE_BASE}notizen.webp`,
          items: ["Kategorisierte Notizen", "Übersichtlich"]
        }
      ]
    },
    "einstellungen": {
      slug: "einstellungen",
      hero: {
        headline: "Linexio nach Maß.",
        subheadline: "Passen Sie die App an Ihre Arbeitsweise an. Von Themes bis zu Notenschlüsseln.",
        badge: "Einstellungen"
      },
      sections: [
        {
          title: "Design & Themes",
          description: "Wählen Sie aus verschiedenen modernen Themes wie 'Aurora', 'Solaris' oder 'Amethyst'.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}themes.webp`,
          items: ["Farb-Varianten", "Dark & Light Themes"]
        },
        {
          title: "Datenverwaltung & Notenschlüssel",
          description: "Hier haben Sie die volle Kontrolle über Ihre Backups und die Sicherheits-Einstellungen. Definieren Sie die prozentualen Notengrenzen, die für Ihr Fach gelten.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}notenschluessel1.webp`,
          items: ["Verschlüsselte Backups", "Sicherheits-Checkup", "Notengrenzen für Klausuren", "... und vieles mehr."]
        },
        {
          title: "Feedback",
          description: "Haben Sie einen Fehler gefunden? Haben Sie Wünsche oder Verbesserungsvorschläge? Nutzen Sie schnell und einfach das eingebaute Feature für Ihr Feedback.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}support.webp`,
          items: ["Schnelles & einfaches Feedback", "Screenshot-Einbindung", "Aktive Mitgestaltung der App-Zukunft"]
        }
      ]
    }
  },
  pricing: {
    headline: "Fairness & Transparenz",
    description: "Linexio ist ein privates Herzensprojekt in der Testphase. Mein Ziel ist es, den besten Assistenten für Ihren Schulalltag zu bauen – ehrlich, direkt und ohne Abofalle."
  }
};