import database from '../src/scripts/favidb'
import favFunc from '../src/scripts/util/favFunc'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

describe('testing favorit restaurant', () => {
	it('harusnya mengeklik favorite button untuk menambah favorite', async () => {
		document.body.innerHTML = `<div class="favorite" id="favorite">
            <button id="favToggle" class="worked"></button>
        </div>`

		document.querySelector('#favToggle').addEventListener('click', e => {
			const saveid = '123'
			const data = {
				id: saveid
			}
			favFunc.favadd(data)
		})
		const favTog = document.querySelector('#favToggle')

		document.querySelector('#favToggle').dispatchEvent(new Event('click'))
		const restaurant = await database.getFavoriteRestaurants()
		console.log('1 add:', restaurant)

		expect(restaurant).toEqual([{ id: '123' }])

		await database.removeFavoriteRestaurant({ id: '123' })
		console.log('1 remove:', await database.getFavoriteRestaurants())
	})

	it('harusnya mengklik favorite button untuk menghapus favorite', async () => {
		await new Promise((resolve) => setTimeout(resolve, 3000))
		await database.addFavoriteRestaurant({ id: '123' })
		console.log('2 add:', await database.getFavoriteRestaurants())

		document.body.innerHTML = `<div class="favorite" id="favorite">
			<button id="favToggle" class="worked"></button>
		</div>`

		document.querySelector('#favToggle').addEventListener('click', e => {
			const saveid = '123'
			const data = {
				id: saveid
			}
			favFunc.favrem(data)
		})

		document.querySelector('#favToggle').dispatchEvent(new Event('click'))

		const restaurant = await database.getFavoriteRestaurants()
		expect(restaurant).toEqual([])
		console.log('2 remove:', restaurant)
	})
})
