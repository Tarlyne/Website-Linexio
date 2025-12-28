# Anleitung: Wie bringe ich diese Webseite ins Internet?

Diese Datei erklärt dir Schritt für Schritt, wie du aus dem Code, den wir hier geschrieben haben, eine echte Webseite machst, die jeder aufrufen kann.

## Das Grundverständnis
Wir haben hier **Quellcode** (React). Browser können diesen Code nicht direkt verstehen. Er muss erst in "normales" HTML übersetzt werden. Diesen Vorgang nennt man **"Builden"**.

---

## Methode A: Der einfachste Weg (Kostenlos via Netlify)

Diese Methode ist am besten, wenn du noch nie mit Code gearbeitet hast.

### Schritt 1: Vorbereitung auf deinem Computer
1.  Du musst ein kleines Hilfsprogramm installieren: **Node.js**.
    *   Gehe auf [nodejs.org](https://nodejs.org/) und lade die "LTS"-Version herunter.
    *   Installiere es einfach wie jedes andere Programm (immer auf "Weiter" klicken).

### Schritt 2: Die Dateien herunterladen
1.  Lade alle Dateien aus diesem Chat herunter.
2.  Erstelle einen neuen Ordner auf deinem Desktop, z.B. `linexio-website`.
3.  Packe alle Dateien dort hinein.

### Schritt 3: Die "Übersetzung" starten (Der Build)
1.  Öffne das Programm **"Terminal"** (auf Mac) oder **"Eingabeaufforderung" / "PowerShell"** (auf Windows).
2.  Du musst dem Terminal sagen, wo dein Ordner ist. Tippe ein:
    `cd Desktop/linexio-website`
    (Drücke Enter. Wenn dein Pfad anders heißt, musst du ihn anpassen).
3.  Tippe nun nacheinander folgende zwei Befehle ein (warte jeweils, bis er fertig ist):
    
    *   Befehl 1: `npm install`
        *(Das lädt die Werkzeuge herunter, die wir brauchen. Es werden viele Textzeilen durchlaufen, das ist normal.)*
        
    *   Befehl 2: `npm run build`
        *(Das erstellt die fertige Webseite.)*

4.  Wenn das fertig ist, schau in deinen Ordner `linexio-website`. Dort gibt es jetzt einen **neuen Unterordner namens `dist`**.
    *   Dieser `dist` Ordner IST deine fertige Webseite!

### Schritt 4: Online stellen
1.  Gehe auf [app.netlify.com](https://app.netlify.com) und erstelle einen kostenlosen Account.
2.  Nach dem Einloggen siehst du ein Feld: **"Drag and drop your site output folder here"**.
3.  Zieh den **`dist`** Ordner (nicht den ganzen Projektordner, nur `dist`!) einfach in dieses Feld im Browser.
4.  Warte ein paar Sekunden. **Fertig!** Netlify gibt dir sofort einen Link (z.B. `linexio-coolsite.netlify.app`), unter dem deine Seite erreichbar ist.

---

## Methode B: Wenn du einen Profi beauftragst

Wenn du jemanden hast, der das für dich macht, gib ihm einfach den Ordner mit allen Dateien (oder einen Link zu diesem Chat) und sage ihm folgendes:

> "Das ist ein Standard Vite-React Projekt mit Tailwind CSS.
> Bitte einfach `npm install` und `npm run build` ausführen.
> Der Output liegt dann im `dist` Ordner und kann auf jedem statischen Hoster (Vercel, Netlify, FTP) deployt werden."

---

## Häufige Fragen

**Was mache ich, wenn ich später etwas ändern will?**
Du änderst den Text im Code (z.B. in der `content.ts`), führst dann wieder `npm run build` aus und ziehst den neuen `dist` Ordner wieder zu Netlify. Die Seite wird dann sofort aktualisiert.

**Brauche ich einen Server?**
Nein. Da wir eine "Statische Seite" gebaut haben, brauchst du keinen teuren Server. Kostenlose Hoster wie Netlify oder Vercel reichen völlig aus.
