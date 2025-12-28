# Anleitung: Wie bringe ich diese Webseite ins Internet?

Diese Datei erklärt dir Schritt für Schritt, wie du aus dem Code eine echte Webseite machst.

---

## 🗺️ Die richtige Ordnerstruktur (WICHTIG!)

Damit GitHub deine Website automatisch bauen kann, müssen die Dateien **exakt** so liegen:

```text
Mein-Projekt-Ordner/
├── .github/
│   └── workflows/
│       └── deploy.yml      <-- MUSS GENAU HIER LIEGEN!
├── lib/
│   └── content.ts
├── public/
├── index.html
├── App.tsx
└── package.json
```

**Hinweis:** Der Ordner `.github` beginnt mit einem Punkt. Auf Windows oder Mac kann dieser manchmal versteckt sein.

---

## Methode A: Automatisches Deployment via GitHub (Empfohlen)

### Schritt 1: Automatisierung aktivieren
Die Datei `.github/workflows/deploy.yml` sorgt dafür, dass GitHub deine Seite baut. Falls du sie manuell auf der GitHub-Webseite erstellst:
1. Klicke auf **Add file** -> **Create new file**.
2. Name: `.github/workflows/deploy.yml` (GitHub erstellt die Unterordner automatisch).
3. Inhalt reinkopieren und speichern (**Commit changes**).

### Schritt 2: GitHub Pages Einstellungen
1. Gehe zu deinem Repository auf GitHub.
2. Klicke auf **Settings** -> **Pages**.
3. Unter **Build and deployment** -> **Source** wähle: **GitHub Actions**.

---

## 🛠️ Fehlerbehebung (Troubleshooting)

### Problem: "Failed to push some refs" (Der 2. Push schlägt fehl)
Das passiert oft, wenn du Dateien direkt auf der GitHub-Webseite geändert hast (z.B. die `deploy.yml` erstellt hast), aber diese Änderungen noch nicht auf deinem Computer sind.

**Lösung:**
1. Öffne dein Terminal.
2. Tippe: `git pull` (Das lädt die neuen Dateien von GitHub auf deinen PC).
3. Jetzt kannst du wieder ganz normal `git push` machen.

### Problem: "Dependencies lock file is not found"
Dieser Fehler im GitHub Build-Prozess bedeutet, dass die Datei `package-lock.json` fehlt. 
*   **Lösung:** Ich habe die `deploy.yml` so angepasst, dass sie auch ohne diese Datei funktioniert. Ein einfacher neuer Push sollte das Problem jetzt beheben.

### Problem: Weiße Seite nach dem Deploy
Da wir einen **HashRouter** nutzen, sollte alles funktionieren. Falls nicht, prüfe unter **Settings** -> **Pages**, ob die Website wirklich als "Live" angezeigt wird.

---

## Methode B: Manueller Upload via Netlify

1.  **Build ausführen:** Tippe `npm run build` in deinem Terminal.
2.  **Hochladen:** Ziehe den neu entstandenen Ordner **`dist`** per Drag & Drop auf [app.netlify.com](https://app.netlify.com).
