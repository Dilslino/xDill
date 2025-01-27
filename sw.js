const CACHE_NAME = 'xdill-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/images/favicon-32x32.png',
    '/images/favicon-16x16.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
}); 