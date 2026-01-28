
sw_content = '''const CACHE_NAME = 'umfrage-pwa-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.0/firebase-database-compat.js'
];

// Installations-Event: Cache erstellen
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache geöffnet');
                return cache.addAll(urlsToCache);
            })
            .catch((err) => console.log('Cache failed:', err))
    );
    self.skipWaiting();
});

// Aktivierungs-Event: Alte Caches löschen
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Alter Cache wird gelöscht:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch-Event: Netzwerk-Requests abfangen
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then((response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Wichtig: Response klonen, da sie nur einmal konsumiert werden kann
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => {
                        // Offline-Fallback
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Background Sync für Offline-Stimmen
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-votes') {
        event.waitUntil(syncVotes());
    }
});

async function syncVotes() {
    // Hier könnte Logik für das Synchronisieren von Offline-Stimmen stehen
    console.log('Synchronisiere Stimmen...');
}'''

with open('/mnt/kimi/output/firebase-pwa/sw.js', 'w', encoding='utf-8') as f:
    f.write(sw_content)

print("✅ sw.js (Service Worker) erstellt")
