# 🗳️ Umfrage PWA auf GitHub Pages

Eine Progressive Web App (PWA) für Echtzeit-Umfragen, gehostet auf **GitHub Pages** mit **Firebase Realtime Database**.

## ✨ Features

- ✅ **Kostenlos hosten** via GitHub Pages
- ✅ **Echtzeit-Synchronisation** durch Firebase
- ✅ **Mehrere Nutzer gleichzeitig** - alle sehen sofort neue Stimmen
- ✅ **HTTPS automatisch** - GitHub Pages bietet kostenloses SSL
- ✅ **Offline-Funktionalität** - Funktioniert auch ohne Internet
- ✅ **Installierbar** - Als App auf Home-Screen installierbar

## 🚀 Schnellstart: In 5 Minuten online!

### Schritt 1: Repository erstellen

1. Gehe zu [GitHub](https://github.com) und erstelle ein **neues Repository**
2. Name: `umfrage-pwa` (oder beliebig)
3. Wähle **"Public"** (damit GitHub Pages funktioniert)
4. Klicke auf **"Create repository"**

### Schritt 2: Dateien hochladen

Lade alle Dateien aus diesem Ordner direkt auf GitHub hoch:

```
📁 Dein Repository:
├── 📄 index.html
├── 📄 manifest.json
├── 📄 sw.js
└── 📁 icons/
    └── (Icons hier einfügen)
```

**Option A: Drag & Drop**
1. Klicke auf "uploading an existing file"
2. Ziehe alle Dateien in den Browser

**Option B: Git Befehle**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN_USERNAME/umfrage-pwa.git
git push -u origin main
```

### Schritt 3: Firebase einrichten

1. Gehe zu [Firebase Console](https://console.firebase.google.com/)
2. Erstelle ein neues Projekt
3. Aktiviere **Realtime Database** (Testmodus)
4. Kopiere die Firebase-Konfiguration

### Schritt 4: Firebase Config einfügen

Bearbeite `index.html` auf GitHub:

1. Öffne die Datei im Repository
2. Klicke auf den ✏️ Stift (Edit)
3. Finde diesen Abschnitt (ca. Zeile 375):

```javascript
const firebaseConfig = {
    apiKey: "DEIN_API_KEY",
    authDomain: "DEIN_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://DEIN_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "DEIN_PROJECT_ID",
    storageBucket: "DEIN_PROJECT_ID.appspot.com",
    messagingSenderId: "DEINE_SENDER_ID",
    appId: "DEINE_APP_ID"
};
```

4. Ersetze die Platzhalter mit deinen Firebase-Daten
5. Scrolle nach unten und klicke **"Commit changes"**

### Schritt 5: GitHub Pages aktivieren

1. In deinem Repository: Klicke auf **"Settings"**
2. Scrolle zu **"Pages"** (links im Menü)
3. Unter **"Source"** wähle:
   - Branch: `main` (oder `master`)
   - Folder: `/ (root)`
4. Klicke **"Save"**

⏳ **Warte 2-5 Minuten**, dann ist deine Seite live!

### Schritt 6: Deine URL testen

Deine App ist erreichbar unter:
```
https://DEIN_USERNAME.github.io/umfrage-pwa/
```

Beispiel:
```
https://maxmustermann.github.io/umfrage-pwa/
```

## 🔧 Wichtige Einstellungen

### HTTPS erzwingen (empfohlen)

In Settings → Pages:
- ✅ Hacke bei **"Enforce HTTPS"** setzen

Das ist wichtig für:
- Service Worker (funktionieren nur mit HTTPS)
- Firebase (erfordert HTTPS)
- Sicherheit der Daten

### Firebase Security Rules

Für den Produktivbetrieb, passe die Rules in Firebase an:

```json
{
  "rules": {
    "votes": {
      ".read": true,
      ".write": true,
      "$option": {
        ".validate": "newData.isNumber() && newData.val() >= 0"
      }
    }
  }
}
```

## 📱 Als App installieren

### Android (Chrome):
1. Öffne die GitHub Pages URL
2. Menü (⋮) → "Zum Startbildschirm hinzufügen"

### iOS (Safari):
1. Öffne die GitHub Pages URL
2. Teilen (⬆️) → "Zum Home-Bildschirm"

### Desktop:
Chrome zeigt automatisch einen Install-Button in der Adressleiste an.

## 🔄 Updates veröffentlichen

Wenn du Änderungen machst:

1. Bearbeite die Dateien auf GitHub
2. Committe die Änderungen
3. **Warte 1-2 Minuten**
4. Aktualisiere die Seite (Ctrl+F5 für Hard-Reload)

## 🛠️ Fehlerbehebung

### "Firebase Error" wird angezeigt
- Prüfe, ob die Firebase-Konfiguration korrekt ist
- Stelle sicher, dass `databaseURL` mit `https://` beginnt

### Service Worker funktioniert nicht
- Stelle sicher, dass HTTPS erzwungen ist
- Prüfe die Browser-Konsole (F12)

### Seite wird nicht aktualisiert
- GitHub Pages braucht 1-2 Minuten für Updates
- Verwende Ctrl+F5 für Hard-Reload
- Lösche den Browser-Cache

### Icons werden nicht angezeigt
- Stelle sicher, dass die Icons im `icons/` Ordner sind
- Empfohlene Größen: 192x192 und 512x512 Pixel

## 📝 Lizenz

MIT License - Frei verwendbar!

## 🆘 Support

Bei Problemen:
1. Browser-Konsole (F12) auf Fehler prüfen
2. Firebase-Konfiguration verifizieren
3. HTTPS aktivieren in GitHub Pages Settings

**Wichtig:** Ohne korrekte Firebase-Konfiguration funktioniert die Echtzeit-Synchronisation nicht!