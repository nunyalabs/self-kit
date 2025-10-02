// Service Worker for the Self-Administered Kit
// Cache versioning
const VERSION = 'self-kit-v1.0.0';
const STATIC_CACHE = `static-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;

// Minimal precache for offline-first experience
const PRECACHE_URLS = [
  './', // Alias for index.html
  './index.html',
  './app.js',
  './style.css',
  './manifest.json',
  './questionnaire_app.js',
  './audio.js',
  './pwa.js',
  './icon-512.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clear old caches
      const keys = await caches.keys();
      await Promise.all(keys.filter(k => !k.includes(VERSION)).map(k => caches.delete(k)));
      // Take control immediately
      await self.clients.claim();
      // Notify clients of update
      const clients = await self.clients.matchAll();
      clients.forEach(client => {
        client.postMessage({ type: 'SW_UPDATED', version: VERSION });
      });
    })()
  );
});

// Enhanced fetch strategy for robust offline experience
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Handle CDN resources
  if (url.origin !== self.location.origin) {
    if (isCDNResource(url.href)) {
      event.respondWith(cacheFirst(request));
    }
    return;
  }

  // Navigation requests - network first with cache fallback
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstWithFallback(request));
    return;
  }

  // Static assets - cache first with network fallback
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // API/Data requests - stale while revalidate
  event.respondWith(staleWhileRevalidate(request));
});

// Helper functions for resource identification
function isCDNResource(url) {
  return /cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|bootstrapcdn\.com/.test(url);
}

function isStaticAsset(request) {
  return request.destination === 'style' || 
         request.destination === 'script' || 
         request.destination === 'image' || 
         request.destination === 'font' ||
         request.url.includes('.css') ||
         request.url.includes('.js') ||
         request.url.includes('.png') ||
         request.url.includes('.jpg') ||
         request.url.includes('.jpeg') ||
         request.url.includes('.svg');
}

// Enhanced caching strategies
async function networkFirstWithFallback(request) {
  const cache = await caches.open(STATIC_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;

    // Fallback to the root index.html for any navigation request not in cache
    return cache.match('./index.html');
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // Return offline fallback for images
    if (request.destination === 'image') {
      return new Response('', { status: 200, statusText: 'OK' });
    }
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}

// Handle background sync for data persistence
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(syncOfflineData());
  }

async function syncOfflineData() {
  // Implement background sync logic for offline data
  console.log('Background sync triggered');
}
});
