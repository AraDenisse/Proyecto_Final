const staticDevCoffee = "site-v1"
const assets = [
  
  "index.html",
  "css/stilos.css",
  "js/nucleo.js",
  "images/fondo.jpeg",
  "images/nube.png",
  "images/oso.png",
  "images/suelo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevSite).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })