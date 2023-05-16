import 'regenerator-runtime'
import CacheHelper from './cacheHelper'
import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

const assetsToCache = [
	'./',
	'./images/icons/icon.png',
	'./index.html',
	'./fav.html',
	'./restaurantdetail.html',
	'./images/favicon.ico',
	'./app.webmanifest',
	'./sw.js'
]
self.addEventListener('install', (event) => {
	console.log('Installing Service Worker ...')
	event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))
	event.skipWaiting()
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
