const CACHE = 'taskflow-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];
const RUNTIME_CACHEABLE_HOSTS = ['unpkg.com'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isRuntimeCacheable = RUNTIME_CACHEABLE_HOSTS.includes(url.hostname);

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // Same-origin assets: only cache successful "basic" responses.
        // Cross-origin (e.g. Lucide CDN) responses are opaque but still cacheable.
        const okToCache = res && (res.type === 'basic' ? res.status === 200 : isRuntimeCacheable);
        if (okToCache) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
