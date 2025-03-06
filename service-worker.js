const CACHE_NAME = 'eduadapt-offline-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/firebase.js',
  '/lessons/lesson1.json',
  '/lessons/lesson1_gu.json',
  '/assets/welcome.mp4',
  '/assets/icon.png',
  '/assets/placeholder40.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

self.addEventListener('push', (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, { body: data.body });
});