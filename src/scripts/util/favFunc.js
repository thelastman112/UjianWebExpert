import database from '../favidb'

const favadd = (data) => {
	database.addFavoriteRestaurant(data).then(() => {
		console.log('add success')
	}).catch(() => {
		console.log('add failed')
	})
}

const favrem = (data) => {
	database.removeFavoriteRestaurant(data).then(() => {
		console.log('remove success')
	}).catch(() => {
		console.log('remove failed')
	})
}
export default { favadd, favrem }
