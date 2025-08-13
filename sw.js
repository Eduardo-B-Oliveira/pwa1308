const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/pwa1308/',
    '/pwa1308/index.html',
    '/pwa1308/style.css',
    '/pwa1308/manifest.json',
    '/pwa1308/icons/icon-192x192.png',
    '/pwa1308/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
