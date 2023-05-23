import CONFIG from '../src/scripts/config'
import 'jasmine-ajax'

describe('API TEST', () => {
	it('harusnya mengembalikan list restaurant yang ada', async () => {
		const fetchingrest = await fetch(`${CONFIG.API_URL}/list`, {
			headers: {
				accept: 'application/json'
			}
		})
			.then((data) => {
				expect(data.status).toBe(200)
				// expect(data.message).toBe('success')
			})
			.catch((error) => {
				console.error(error)
				expect(error).toEqual(null)
			})
	})
})
