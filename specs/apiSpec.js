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
				expect(data.statusText).toBe('OK')
			})
			.catch((error) => {
				console.error(error)
				expect(error).toEqual(null)
			})
	})
	it('harusnya mengembalikan restaurant yang dipilih berdasarkan ID', async () => {
		const detailId = 'rqdv5juczeskfw1e867'
		const fetchingrest = await fetch(`${CONFIG.API_URL}/detail/${detailId}`, {
			headers: {
				accept: 'application/json'
			}
		})
			.then((data) => {
				expect(data.ok).toBe(true)
				expect(data.status).toBe(200)
				expect(data.statusText).toBe('OK')
				expect(data.url).toBe(`${CONFIG.API_URL}/detail/${detailId}`)
			})
			.catch((error) => {
				console.error(error)
				expect(error).toEqual(null)
			})
	})
})
