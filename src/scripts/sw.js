import 'regenerator-runtime'
import CacheHelper from './cacheHelper'

const assetsToCache = [
	'./',
	'./images/icons/icon.png',
	'./index.html',
	'./fav.html',
	'./restaurantdetail.html',
	'./images/favicon.ico',
	'./app~src_p.bundle.js',
	'./app.webmanifest',
	'./sw.bundle.js'
]
// console.log(self)
// self.addEventListener('install', (event) => {
// console.log('Installing Service Worker ...')
// event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))
// })

self.addEventListener('activate', (event) => {
	console.log('Activating Service Worker ...')
	// event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('push', (event) => {
	console.log('Pushing Service Worker ...')
})
// self.addEventListener('fetch', (event) => {
// event.respondWith(CacheHelper.revalidateCache(event.request))
// })
