
# 4. Setup-Anleitung (README.md)
readme_content = '''# 🔥 Umfrage PWA mit Firebase

Eine Progressive Web App (PWA) für Echtzeit-Umfragen mit Firebase Realtime Database.

## ✨ Features

- ✅ **Echtzeit-Synchronisation** - Alle Geräte sehen sofort neue Stimmen
- ✅ **Offline-Funktionalität** - Funktioniert auch ohne Internetverbindung
- ✅ **Installierbar** - Kann wie eine native App auf dem Home-Screen installiert werden
- ✅ **Responsiv** - Funktioniert auf Desktop, Tablet und Smartphone
- ✅ **Live-Updates** - Diagramm aktualisiert sich automatisch

## 🚀 Schnellstart

### Schritt 1: Firebase Projekt erstellen

1. Gehe zu [Firebase Console](https://console.firebase.google.com/)
2. Klicke auf "Projekt hinzufügen"
3. Gib deinem Projekt einen Namen (z.B. "umfrage-pwa")
4. Deaktiviere Google Analytics (optional)
5. Klicke auf "Projekt erstellen"

### Schritt 2: Realtime Database aktivieren

1. Wähle im linken Menü "Realtime Database"
2. Klicke auf "Datenbank erstellen"
3. Wähle **"Im Testmodus starten"** (für Entwicklung)
4. Wähle einen Standort (z.B. "europe-west1")
5. Klicke auf "Fertig"

### Schritt 3: Firebase Config kopieren

1. Klicke auf das Zahnrad (⚙️) neben "Projektübersicht"
2. Wähle "Projekteinstellungen"
3. Gehe zum Tab "Allgemein"
4. Scrolle zu "Deine Apps" und klicke auf das Web-Symbol (</>)
5. Gib der App einen Namen (z.B. "Umfrage Web")
6. Kopiere die Firebase-Konfiguration

### Schritt 4: Config in index.html einfügen

Öffne `index.html` und ersetze die Firebase-Konfiguration:

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

### Schritt 5: Firebase Hosting einrichten (Optional)

Für öffentlichen Zugriff:

```bash
# Firebase CLI installieren
npm install -g firebase-tools

# Einloggen
firebase login

# Projekt initialisieren
firebase init

# Wähle:
# - Hosting
# - Dein Projekt
# - Public directory: . (Punkt für aktuelles Verzeichnis)
# - Single-page app: Yes

# Deploy
firebase deploy
```

## 📱 Als PWA installieren

### Android (Chrome):
1. Öffne die URL in Chrome
2. Tippe auf das Menü (⋮)
3. Wähle "Zum Startbildschirm hinzufügen"

### iOS (Safari):
1. Öffne die URL in Safari
2. Tippe auf das Teilen-Symbol (⬆️)
3. Wähle "Zum Home-Bildschirm"

### Desktop (Chrome/Edge):
1. Klicke auf das Install-Symbol in der Adressleiste
2. Oder gehe zu Menü → "App installieren"

## 🔒 Sicherheit (Produktion)

Für den Produktivbetrieb solltest du die Security Rules anpassen:

Gehe in Firebase Console → Realtime Database → Rules:

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

## 📊 Datenstruktur

Die Daten werden in Firebase so gespeichert:

```json
{
  "votes": {
    "A": 15,  // Ja-Stimmen
    "B": 8    // Nein-Stimmen
  }
}
```

## 🛠️ Technologien

- **Firebase Realtime Database** - Echtzeit-Datensynchronisation
- **Chart.js** - Interaktive Diagramme
- **Service Worker** - Offline-Funktionalität
- **Web App Manifest** - Installierbarkeit

## 📝 Lizenz

MIT License - Frei verwendbar und anpassbar!

## 🆘 Support

Bei Problemen:
1. Prüfe die Browser-Konsole (F12) auf Fehler
2. Vergewissere dich, dass die Firebase-Konfiguration korrekt ist
3. Stelle sicher, dass die Datenbank-URL mit "https://" beginnt

**Wichtig:** Für den Testmodus muss die Datenbank-URL auf `.firebaseio.com` enden!'''

with open('/mnt/kimi/output/firebase-pwa/README.md', 'w', encoding='utf-8') as f:
    f.write(readme_content)

print("✅ README.md erstellt")
