importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if(workbox){
  console.log("workBox berhasil");
} else {
  console.log("workBox gagal");
}

workbox.precaching.precacheAndRoute([
  {url:"/index.html", revision: "1" },
  {url:"/src/assets/aticon/apple-touch-icon-ipad-76x76.png", revision: "1" },
  {url:"/src/assets/aticon/apple-touch-icon-ipad-76x76.png", revision: "1" },
  {url:"/src/assets/aticon/apple-touch-icon-ipad-retina-152x152.png", revision: "1" },
  {url:"/src/assets/aticon/apple-touch-icon-iphone-60x60.png", revision: "1" },
  {url:"/src/assets/aticon/apple-touch-icon-iphone-retina-120x120.png", revision: "1" },
  {url:"/src/assets/images/banner.jpg", revision: "1" },
  {url:"/src/assets/images/premier-league.svg", revision: "1" },
  {url:"/src/assets/images/empty.svg", revision: "1" },
  {url:"/src/assets/logo/favicon.ico", revision: "1" },
  {url:"/src/assets/logo/logo-full.png", revision: "1" },
  {url:"/src/assets/logo/icont144x144.png", revision: "1" },
  {url:"/src/assets/logo/icont512x512.png", revision: "1" },
  {url:"/manifest.json", revision: "1" },
  {url:"https://fonts.googleapis.com/icon?family=Material+Icons", revision: "1" },
])

// cache pages
workbox.routing.registerRoute(
  new RegExp("src/pages/"),
    workbox.strategies.staleWhileRevalidate({
      cacheName: "pages"
    })
)
// css & js
workbox.routing.registerRoute(
  /\.(?:css|js)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "style and script",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 30 * 30 * 60 * 60
      })
    ]
  })
)


// fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'fonts',
  })
);
// api
workbox.routing.registerRoute(
  new RegExp("https://api.football-data.org"),
  new workbox.strategies.NetworkFirst({
    cacheName: "Football-API",
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24,
        maxEntries: 50
      })
    ]
  })
)



// const CACHE_NAME = "footballleague-v3";
// const urlToCache = [

// ];


// self.addEventListener("install", function(event){
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function(cache){
//       return cache.addAll(urlToCache);
//     })
//   );
// })

// self.addEventListener("fetch", function(event){

//   const baseUrl = "https://api.football-data.org/";

//   if(event.request.url.indexOf(baseUrl) > -1){
//     event.respondWith(
//       caches.open(CACHE_NAME).then(function(cache){
//         return fetch(event.request).then(function(response){
//           cache.put(event.request.url, response.clone());
//           return response;
//         })
//       })
//     );
//   }else{
//     event.respondWith(
//       caches.match(event.request).then(function(response){
//         return response || fetch(event.request);
//       })
//     );
//   }
// });

// self.addEventListener("activate", function(event){
//   event.waitUntil(
//     caches.keys().then(function(cachesNames){
//       return Promise.all(
//         cachesNames.map(function(cacheName){
//           if(cacheName !== CACHE_NAME && cacheName.startsWith("footballleague")){
//             console.log("ServiceWorker: cache " + cacheName + " dihapus");
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     })
//   );
// });

// handle push notification
self.addEventListener("push", function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body: body,
    icon: '/src/assets/logo/icont144x144.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});