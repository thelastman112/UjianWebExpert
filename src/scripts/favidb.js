import { openDB } from 'idb'
const db = 'favrestdb'
const favstore = 'favreststore'

const dbProm = openDB(db, 1, {
	upgrade (db) {
		db.createObjectStore(favstore, {
			keyPath: 'id',
			autoIncrement: true
		})
	}
})

const database = {
	async getFavoriteRestaurants () {
		const db = await dbProm
		const tx = db.transaction(favstore)
		const store = tx.objectStore(favstore)
		const restaurants = await store.getAll()
		return restaurants
	},
	async getFavoriteRestaurant (id) {
		const db = await dbProm
		const tx = db.transaction(favstore)
		const store = tx.objectStore(favstore)
		const restaurant = await store.get(id)
		return restaurant
	},
	async addFavoriteRestaurant (restaurant) {
		const db = await dbProm
		const tx = db.transaction(favstore, 'readwrite')
		const store = tx.objectStore(favstore)
		await store.add(restaurant)
		await tx.complete
	},
	async removeFavoriteRestaurant (restaurant) {
		const db = await dbProm
		const tx = db.transaction(favstore, 'readwrite')
		const store = tx.objectStore(favstore)
		await store.delete(restaurant.id)
		await tx.complete
	}
}

export default database
