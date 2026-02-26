const CACHE_NAME = "heetdevlab-global-v2";
const OFFLINE_URL = "/Webtools/offline.html";

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/Webtools/offline.html",
        "/Webtools/index.html",
        "/Webtools/tools/password-checker.html",
        "/Webtools/tools/pin-generator.html",
        "/Webtools/tools/password-generator.html",
        "/Webtools/tools/jwt-decoder.html"
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(OFFLINE_URL);
    })
  );
});

// 🔥 Listen for skip waiting message
self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
