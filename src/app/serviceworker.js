
import {manifest, version} from '@parcel/service-worker';

async function install() {
  const cache = await caches.open(version);
  let newManifest =[]
  manifest.map((i) => {

   if(!newManifest.includes(i)){
    newManifest.push(i)
    }
  
  })

  await cache.addAll(newManifest);

}

addEventListener('install', e => e.waitUntil(install()));

async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(key => key !== version && caches.delete(key))
  );
}

addEventListener('activate', e => e.waitUntil(activate()));


self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(version);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });