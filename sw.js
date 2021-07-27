const cacheName = 'mysite'

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/tayofront/',
          '/tayofront/index.html',
          '/tayofront/styles/style.css',
          '/tayofront/Scripts/script.js',
          '/tayofront/assets/img/bitmap.png',
          '/tayofront/assets/img/icon-192x192.png',
          '/tayofront/assets/img/maskable_icon_192x192.png',
          '/tayofront/assets/img/icon-256x256.png',
          '/tayofront/assets/img/icon-384x384.png',
          '/tayofront/assets/img/icon-512x512.png'
        ]
      );
    })
  );
});

self.addEventListener('activate', event => {
  
 
})



addEventListener('fetch', event => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function() {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);
    // Return it if we found one.
    if (cachedResponse) return cachedResponse;
    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  }());
});



