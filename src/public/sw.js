import CacheHelper from '../scripts/cacheHelper'

const assetsToCache = [
	'./',
	'./images/icons/icon.png',
	'./index.html',
	'./fav.html',
	'./restaurantdetail.html',
	'./images/favicon.ico',
	'./app~src_p.js',
	'./app.webmanifest',
	'./sw.js'
]
self.addEventListener('install', (event) => {
	console.log('Installing Service Worker ...')
	event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))
})

self.addEventListener('activate', (event) => {
	console.log('Activating Service Worker ...')
	event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('push', (event) => {
	console.log('Pushing Service Worker ...')
})
self.addEventListener('fetch', (event) => {
	event.respondWith(CacheHelper.revalidateCache(event.request))
})
