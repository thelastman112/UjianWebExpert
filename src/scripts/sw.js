import 'regenerator-runtime'
import cacheHelper from './cacheHelper'

const { assets } = './'
self.addEventListener('install', (event) => {
	console.log('Installing Service Worker ...')
	event.waitUntil(cacheHelper.cachingAppShell([...assets], './'))
})
self.addEventListener('activate', (event) => {
	console.log('Activating Service Worker ...')
	event.waitUntil(cacheHelper.deleteOldCache())
})
self.addEventListener('fetch', (event) => {
	event.respondWith(cacheHelper.revalidateCache(event.request))
})
