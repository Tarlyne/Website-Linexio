import { LayoutDashboard, Users, Calculator, CheckSquare, Calendar, FolderOpen, GraduationCap } from 'lucide-react';
import { FeatureItem, FeaturePageData, ContentStore } from '../types';

/**
 * Dynamische Ermittlung des Pfades für GitHub Pages.
 * Nutzt Optional Chaining, um Abstürze zu verhindern, wenn env undefined ist.
 */
const getAssetPath = (path: string) => {
  // Sicherer Zugriff auf BASE_URL mit Fallback auf '/'
  const base = (import.meta as any).env?.BASE_URL || '/';
  
  // Saubere Zusammenführung von Base und Pfad
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

// Nutzt den neuen Ordnernamen 'images'
const IMG_FOLDER = "images/";

export const content: ContentStore = {
  brand: {
    name: "Linexio",
    tagline: "Ihr Unterricht. Ihre Daten. Ihr System.",
    logo: getAssetPath(`${IMG_FOLDER}logo.png`)
  },
  hero: {
    headline: "Der digitale Lehrer-Assistent für das iPad.",
    subheadline: "Schluss mit Zettelwirtschaft. Linexio organisiert Ihren Schulalltag intuitiv, effizient und 100% offline. Starten Sie jetzt einfach und",
    ctaPrimary: "Linexio installieren",
    ctaSecondary: "Features ansehen",
    badges: [
      "iPad Optimiert",
      "100% Offline",
      "DSGVO Konform"
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
      title: "Checklisten",
      description: "Erstellen Sie Listen für Hausaufgaben, Elternbriefe oder Kopiergeld und behalten Sie den Status im Blick.",
      icon: CheckSquare,
      colSpan: 1,
      slug: "checklisten"
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
      title: "Sitzplan & Gruppen",
      description: "Erstellen Sie Sitzpläne und Gruppen ganz nach Ihren Vorstellungen und Vorgaben.",
      icon: Users,
      colSpan: 1,
      slug: "sitzplan"
    },
    {
      title: "Digitale Schülerakte",
      description: "Alles an einem Ort: Nachteilsausgleich, Förderbedarf, Notizen und Elternkontakte.",
      icon: FolderOpen,
      colSpan: 1,
      slug: "klassen"
    },
    {
      title: "Namen lernen",
      description: "Lernen Sie die Namen Ihrer SchülerInnen als Karteikarten oder mit einem Quiz.",
      icon: GraduationCap,
      colSpan: 1,
      slug: "namen"
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
          description: "Linexio ist keine klassische Cloud-App. Alle Daten liegen auf Ihrem iPad. Wenn Sie die App schließen, sind die Daten sicher auf Ihrem Gerät verschlossen.",
          visualType: "stat",
          image: getAssetPath(`${IMG_FOLDER}security.webp`) 
        },
        {
          title: "Lokale Backups & Verschlüsselung",
          description: "Erstellen Sie hochverschlüsselte Backups, die Sie extern speichern können. Nur Sie kennen das Passwort zum Entschlüsseln.",
          visualType: "check",
          items: ["AES-256 Verschlüsselung", "Kein Cloud-Zwang", "Volle Datenhoheit"]
        },
        {
          title: "Fokussieren auf Schüler",
          description: "Blenden Sie beim Besprechen der Noten alle anderen Schüler aus, so dass Sie in Ruhe mit dem aktuellen Schüler alles durchgehen können, ohne die Noten der anderen zu zeigen.",
          visualType: "card"
        },
        {
          title: "Der KI-Datenschutz-Wächter",
          description: "Wenn Sie intelligente Funktionen nutzen (z.B. Sitzpläne), entfernt Linexio vorher alle Namen und ersetzt sie durch Platzhalter (z.B. 'Schüler A'). Sensible Schülerdaten verlassen somit niemals das Gerät und die KI kann keinen Bezug zu einer realen Person ziehen.",
          visualType: "abstract"
        }
      ]
    },
    "noten": {
      slug: "noten",
      hero: {
        headline: "Fair, transparent, präzise.",
        subheadline: "Von der mündlichen Note bis zum Zeugnis. Linexio nimmt Ihnen das Rechnen ab und sorgt für Übersichtlichkeit.",
        badge: "Notenverwaltung"
      },
      sections: [
        {
          title: "Alle Systeme, volle Flexibilität",
          description: "Linexio beherrscht mehrere Notensysteme. Erstellen Sie Ihre Notenberechnung nach Ihren Vorstellungen - inklusive Gewichtung für jeden Eintrag.",
          visualType: "table",
          image: getAssetPath(`${IMG_FOLDER}notenverwaltung.webp`)
        },
        {
          title: "Klausuren & Notenschlüssel",
          description: "Legen Sie Klausuren mit maximalen Rohpunkten an. Der individuell einstellbare Notenschlüssel berechnet die Note sofort. Unsere Numpad-Eingabe sorgt für blitzschnelles Eintragen.",
          visualType: "abstract"
        },
        {
          title: "PDF-Export für Ihre Unterlagen",
          description: "Generieren Sie mit einem Klick detaillierte Leistungsübersichten für jeden Schüler. Inklusive Notenentwicklung und Unterschriftenfeld – perfekt vorbereitet für jedes Gespräch.",
          visualType: "card"
        }
      ]
    },
    "checklisten": {
      slug: "checklisten",
      hero: {
        headline: "Nie wieder Zettelwirtschaft.",
        subheadline: "Ob Kopiergeld, Hausaufgaben oder Elternbriefe – behalten Sie den Überblick, wer was abgegeben hat.",
        badge: "Organisation"
      },
      sections: [
        {
          title: "Status-Tracking in Echtzeit",
          description: "Erfassen Sie blitzschnell Abhaklisten - mit Erinnerung auf dem Dashboard, wer noch etwas abzugeben hat.",
          visualType: "check",
          image: getAssetPath(`${IMG_FOLDER}checklisten.webp`)
        },
        {
          title: "Listen für alles",
          description: "Erstellen Sie blitzschnell neue Listen für jeden Anlass. Klassenfahrt-Geld, Rücklaufzettel, Buchrückgabe oder Material-Check.",
          visualType: "list",
          items: ["Hausaufgaben", "Elternbrief-Rücklauf", "Kopiergeld einsammeln"]
        }
      ]
    },
    "dashboard": {
      slug: "dashboard",
      hero: {
        headline: "Das Cockpit für Ihren Schultag.",
        subheadline: "Starten Sie gut informiert in den Morgen. Alles Wichtige auf einen Blick, ohne langes Suchen.",
        badge: "Übersicht"
      },
      sections: [
        {
          title: "Intelligente Übersicht",
          description: "Sehen Sie sofort, wie viele Klassen und Schüler Sie betreuen. Das Dashboard warnt Sie proaktiv vor offenen Aufgaben, wie z.B. ausstehenden Geldeinsammlungen oder längst fälligen Backups.",
          visualType: "stat",
          image: getAssetPath(`${IMG_FOLDER}dashboard.webp`)
        },
        {
          title: "Geburtstags-Radar & Ferien",
          description: "Verpassen Sie nie wieder einen Geburtstag. Linexio zeigt Ihnen die Geburtstagskinder der nächsten 7 Tage an. Ein automatischer Countdown zählt die Tage bis zu den nächsten Ferien in Ihrem Bundesland.",
          visualType: "list",
          items: ["Geburtstage (7 Tage Vorschau)", "Ferien-Countdown (Bundeslandspezifisch)", "Tageszitat zur Motivation"]
        }
      ]
    },
    "persoenlich": {
      slug: "persoenlich",
      hero: {
        headline: "Organisieren Sie sich selbst.",
        subheadline: "Ihr persönlicher Bereich für Termine, Notizen und alles, was nicht vergessen werden darf.",
        badge: "Persönliches"
      },
      sections: [
        {
          title: "Der Lehrer-Kalender",
          description: "Verwalten Sie Klausurtermine, Konferenzen oder Elterngespräche. Linexio erinnert Sie daran, wenn für eine Klausurklasse Nachteilsausgleiche zu beachten sind.",
          visualType: "card",
          image: getAssetPath(`${IMG_FOLDER}calendar.webp`)
        },
        {
          title: "Digitales Notizbuch",
          description: "Halten Sie Gedanken fest, protokollieren Sie Dienstbesprechungen oder speichern Sie Ideen für den Unterricht.",
          visualType: "list",
          items: ["Dienstbesprechungen", "Elterngesprächs-Protokolle", "Unterrichtsideen"]
        }
      ]
    },
    "sitzplan": {
      slug: "sitzplan",
      hero: {
        headline: "Klassenmanagement leicht gemacht.",
        subheadline: "Visuelle Sitzpläne, faire Zufallsgeneratoren und intelligente Gruppenbildung.",
        badge: "Tools"
      },
      sections: [
        {
          title: "Visueller Sitzplan-Editor",
          description: "Gestalten Sie im Raster Ihren individuellen Sitzplan für jede Lerngruppe. Schieben Sie Schüler per Drag & Drop auf ihre Plätze. 'Pinnen' Sie Schüler fest, die vorne sitzen müssen (z.B. wegen einer Sehschwäche), oder lassen Sie sich die Sitzordnung zufällig erstellen.",
          visualType: "abstract",
          image: getAssetPath(`${IMG_FOLDER}sitzplan.webp`)
        },
        {
          title: "KI-Gruppeneinteilung",
          description: "Lassen Sie die KI homogene oder heterogene Gruppen bilden. Sagen Sie einfach: 'Erstelle 5 Gruppen, aber setze Max nicht mit Moritz zusammen'.",
          visualType: "stat"
        },
        {
          title: "Fairer Zufallsgenerator",
          description: "Rufen Sie Schüler per Zufall auf, ohne jemanden zu benachteiligen. Der Generator merkt sich, wer schon dran war.",
          visualType: "check"
        }
      ]
    },
    "klassen": {
      slug: "klassen",
      hero: {
        headline: "Ihre Klassen, perfekt organisiert.",
        subheadline: "Verwalten Sie Schüler, Lerngruppen und Kurse flexibel und blitzschnell.",
        badge: "Verwaltung"
      },
      sections: [
        {
          title: "Die digitale Schülerakte",
          description: "Jeder Schüler hat eine eigene Akte. Hinterlegen Sie Stammdaten, Kontaktinfos der Eltern und Fotos. Archivieren Sie alte Klassen mit einem Klick.",
          visualType: "card",
          image: getAssetPath(`${IMG_FOLDER}schuelerakte.webp`)
        },
        {
          title: "Förderbedarf & NTA",
          description: "Behalten Sie den Überblick über Nachteilsausgleiche und pädagogische Merkmale. Linexio erinnert Sie vor Klausuren diskret daran.",
          visualType: "list",
          items: ["Stammdaten Import (CSV/Excel)", "Nachteilsausgleich (NTA)", "Private Notizen & Beobachtungen"]
        }
      ]
    },
    "namen": {
      slug: "namen",
      hero: {
        headline: "Nie wieder Namen vergessen.",
        subheadline: "Starten Sie perfekt in das neue Schuljahr und lernen Sie Ihre neuen Klassen im Rekordtempo.",
        badge: "Training"
      },
      sections: [
        {
          title: "Spielerischer Quiz-Modus",
          description: "Sehen Sie ein Foto und erraten Sie den Namen – oder umgekehrt. Das direkte Feedback hilft Ihnen dabei. Fordern Sie sich selbst heraus in vier unterschiedlichen Varianten!",
          visualType: "stat",
          image: getAssetPath(`${IMG_FOLDER}namen.webp`)
        },
        {
          title: "Karteikarten-System",
          description: "Wischen Sie durch digitale Karteikarten Ihrer Schüler. Ideal für die 5 Minuten vor Unterrichtsbeginn oder in Freistunden.",
          visualType: "card",
          image: getAssetPath(`${IMG_FOLDER}namen2.webp`)
        }
      ]
    }
  },
  pricing: {
    headline: "Linexio ist kostenlos nutzbar. Kein Abo, keine versteckten Kosten.",
    description: "Sämtliche Funktionen sind kostenfrei und uneingeschränkt nutzbar. Gefällt Ihnen die App, würden wir uns über eine Unterstützung freuen."
  }
};