
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
  Settings 
} from 'lucide-react';
import { FeatureItem, FeaturePageData, ContentStore } from '../types';

/**
 * Basis-URL für externe Assets (Bilder).
 * Die Bilder liegen im offiziellen Linexio-Assets Repository.
 */
const EXTERNAL_IMAGE_BASE = "https://raw.githubusercontent.com/tarlyne/linexio-assets/main/";

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
          description: "Linexio ist keine klassische Cloud-App. Alle Daten liegen physisch auf dem Speicherchip Ihres iPads. Wenn Sie die App schließen, sind die Daten sicher auf Ihrem Gerät verschlossen.",
          visualType: "stat",
          image: `${EXTERNAL_IMAGE_BASE}security.webp`
        },
        {
          title: "Backup & Biometrie",
          description: "Erstellen Sie hochverschlüsselte Backups für externe Speicherorte und schützen Sie die App im Lehrerzimmer per FaceID oder TouchID.",
          visualType: "check",
          items: ["AES-256 Verschlüsselung", "FaceID / TouchID Support", "Vollständige Datenhoheit"]
        },
        {
          title: "Der Datenschutz-Wächter",
          description: "Unser einzigartiges Konzept anonymisiert Daten, bevor sie (optional) für intelligente Funktionen genutzt werden. Die KI erhält nur Platzhalter.",
          visualType: "abstract",
          items: ["Anonymisierte KI-Anfragen", "Kein Tracking", "DSGVO-konform"]
        }
      ]
    },
    "noten": {
      slug: "noten",
      hero: {
        headline: "Fair, transparent und präzise.",
        subheadline: "Von der mündlichen Note bis zum Zeugnis. Linexio nimmt Ihnen das Rechnen ab und sorgt für Rechtssicherheit durch transparente Gewichtung.",
        badge: "Notenverwaltung"
      },
      sections: [
        {
          title: "Intelligente Berechnung",
          description: "Linexio beherrscht sowohl das klassische Notensystem (1-6) als auch das Oberstufen-Punktesystem (0-15).",
          visualType: "table",
          image: `${EXTERNAL_IMAGE_BASE}noten.webp`,
          items: ["Individuelle Gewichtung", "Rohpunkte-Rechner", "Numpad-Eingabe für iPad"]
        },
        {
          title: "Gewichtung & Transparenz",
          description: "Sie entscheiden, wie viel zählt. Stellen Sie das Verhältnis von schriftlichen zu mündlichen Leistungen präzise ein.",
          visualType: "list",
          items: ["Frei definierbare Kategorien", "Notentendenzen (+/-)", "Automatischer Notenschlüssel"]
        },
        {
          title: "Der Elternsprechtag-Retter",
          description: "Generieren Sie mit einem Klick detaillierte Leistungsübersichten für jeden Schüler. Dokumentieren Sie die Notenentwicklung rechtssicher.",
          visualType: "check",
          items: ["PDF-Export pro Schüler", "Unterschriftenfelder integriert", "Klausur-Übersichten"]
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
          items: ["Geburtstags-Radar (7 Tage)", "Ferien-Countdown", "Backup-Erinnerung"]
        },
        {
          title: "Motivation & Übersicht",
          description: "Ein täglich wechselndes Zitat sorgt für Motivation, während Sie sofort sehen, wie viele Klassen Sie heute betreuen.",
          visualType: "abstract",
          items: ["Tageszitate", "Klassen-Status", "Quick-Actions"]
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
          image: `${EXTERNAL_IMAGE_BASE}klassen.webp`,
          items: ["Import per Copy & Paste", "NTA-Hinterlegung", "Pädagogische Merkmale"]
        },
        {
          title: "Archiv & Struktur",
          description: "Legen Sie beliebig viele Klassen oder Kurse an. Am Schuljahresende archivieren Sie alte Daten mit einem Klick.",
          visualType: "check",
          items: ["Excel/CSV Schnittstelle", "Langzeit-Archiv", "Sicherer Fotoupload"]
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
          description: "Schieben Sie Schüler einfach mit dem Finger auf ihre Plätze. Definieren Sie das Lehrerpult und fixieren Sie Schüler.",
          visualType: "abstract",
          image: `${EXTERNAL_IMAGE_BASE}sitzplan.webp`,
          items: ["Drag & Drop Bedienung", "Platz-Fixierung (z.B. Brille)", "Vorder- & Rückansicht"]
        },
        {
          title: "Intelligente Zuweisung",
          description: "Nutzen Sie optionale Logik, um Sitzpläne nach Kriterien zu erstellen, wie z.B. das Trennen von Unruhe-Herden.",
          visualType: "stat",
          items: ["Automatisches Mischen", "Raum-Vorlagen", "Positions-Sperren"]
        }
      ]
    },
    "checklisten": {
      slug: "checklisten",
      hero: {
        headline: "Nie wieder den Überblick verlieren.",
        subheadline: "Erfassen Sie Hausaufgaben, Elternbriefe oder Kopiergeld. Einfach abhacken und sofort sehen, wer noch fehlt.",
        badge: "Checklisten"
      },
      sections: [
        {
          title: "Status-Tracking in Echtzeit",
          description: "Erfassen Sie nicht nur 'Erledigt', sondern auch 'Fehlt' oder 'Entschuldigt'. So wissen Sie immer genau, was noch offen ist.",
          visualType: "check",
          image: `${EXTERNAL_IMAGE_BASE}checklisten.webp`,
          items: ["Mehrstufige Status-Farben", "Schnelles Abhacken", "Klassenübersicht"]
        },
        {
          title: "Vielfältige Anwendung",
          description: "Ob Kopiergeld, Elternbriefe oder Materialkontrolle – erstellen Sie individuelle Listen für jeden Zweck.",
          visualType: "list",
          items: ["Einfaches Duplizieren", "Export-Funktion", "Historie"]
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
          description: "Bilden Sie Gruppen nach Anzahl, Größe oder speziellen Kriterien wie Geschlecht oder Leistung.",
          visualType: "list",
          image: `${EXTERNAL_IMAGE_BASE}gruppen.webp`,
          items: ["Zufalls-Modus", "Homogene Gruppen", "Heterogene Mischung"]
        },
        {
          title: "KI-Unterstützung",
          description: "Lassen Sie komplexe Konstellationen von der KI lösen, um z.B. bestimmte Schüler gezielt zu trennen oder zu paaren.",
          visualType: "stat",
          items: ["Ausschluss-Listen", "Partner-Fixierung", "Schnelles Neu-Würfeln"]
        }
      ]
    },
    "zufall": {
      slug: "zufall",
      hero: {
        headline: "Gerechtigkeit per Zufall.",
        subheadline: "Der faire Aufruf-Generator für mündliche Abfragen und Beiträge. Spannung inklusive.",
        badge: "Zufallsauswahl"
      },
      sections: [
        {
          title: "Das Fairness-Prinzip",
          description: "Linexio merkt sich, wer schon dran war, bis alle einmal aufgerufen wurden. So fühlt sich kein Schüler benachteiligt.",
          visualType: "stat",
          image: `${EXTERNAL_IMAGE_BASE}zufall.webp`,
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
          description: "Wählen Sie zwischen einem interaktiven Quiz oder klassischen digitalen Karteikarten zum Wischen.",
          visualType: "abstract",
          image: `${EXTERNAL_IMAGE_BASE}namen.webp`,
          items: ["Foto-Unterstützung", "Gamification Ansatz", "Lernfortschritt"]
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
          description: "Verwalten Sie Klausuren, Konferenzen oder Elterngespräche. Linexio warnt Sie automatisch bei NTA-Überschneidungen.",
          visualType: "check",
          items: ["Automatischer NTA-Warner", "Kalender-Integration", "Ferien-Import"]
        },
        {
          title: "Dienstliches Notizbuch",
          description: "Erstellen Sie Kategorien für Dienstbesprechungen, Ideen oder Protokolle. Alles durchsuchbar und lokal gesichert.",
          visualType: "list",
          items: ["Kategorisierte Notizen", "Schnellsuche", "Kein Cloud-Zwang"]
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
          items: ["Farb-Varianten", "Dark & Light Mode", "Individuelle Akzentfarben"]
        },
        {
          title: "Datenverwaltung",
          description: "Hier haben Sie die volle Kontrolle über Ihre Backups und die Sicherheits-Einstellungen.",
          visualType: "check",
          items: ["Verschlüsselte Backups", "Sicherheits-Checkup", "Versions-Historie"]
        }
      ]
    }
  },
  pricing: {
    headline: "Fairness & Transparenz",
    description: "Linexio ist ein privates Herzensprojekt in der Testphase. Mein Ziel ist es, den besten Assistenten für Ihren Schulalltag zu bauen – ehrlich, direkt und ohne Abofalle."
  }
};
