// import 'regenerator-runtime'
// import CacheHelper from './cacheHelper'
const CONFIG = {
	// API_URL: 'https://restaurant-api.dicoding.dev',
	// URL_IMAGE_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
	// URL_IMAGE_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
	// URL_IMAGE_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
	CACHE_NAME: new Date().toISOString()
}
const CacheHelper = {
	async cachingAppShell (requests) {
		const cache = await this._openCache()
		cache.addAll(requests)
	},

	async deleteOldCache () {
		const cacheNames = await caches.keys()
		cacheNames
			.filter((name) => name !== CONFIG.CACHE_NAME)
			.map((filteredName) => caches.delete(filteredName))
	},

	async revalidateCache (request) {
		const response = await caches.match(request)

		if (response) {
			this._fetchRequest(request)
			return response
		}
		return this._fetchRequest(request)
	},

	async _openCache () {
		return caches.open(CONFIG.CACHE_NAME)
	},

	async _fetchRequest (request) {
		const response = await fetch(request)

		if (!response || response.status !== 200) {
			return response
		}

		await this._addCache(request)
		return response
	},

	async _addCache (request) {
		const cache = await this._openCache()
		cache.add(request)
	}
}

const assetsToCache = [
	'./',
	'./images/icons/icon.png',
	'./index.html',
	'./fav.html',
	'./restaurantdetail.html',
	'./images/favicon.ico',
	'./app~src_p.bundle.js',
	'./app.webmanifest',
	// './sw.bundle.js',
	'./sw.js'
]
// console.log(self)
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
