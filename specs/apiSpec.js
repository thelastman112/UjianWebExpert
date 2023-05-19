import CONFIG from '../src/scripts/config'
import { describe, it, expect } from 'jasmine'
import $ from 'jquery'

describe('API TEST', () => {
	it('harusnya mengembalikan list restaurant yang ada', async () => {
		const fetchingrest = await fetch(`${CONFIG.API_URL}/list`, {
			headers: {
				accept: 'application/json'
			}
		})
			.then((data) => {
				expect(data.restaurants.length).toBe(20)
				expect(data.count).toBe(20);
				expect(data.status).toBe('200');
				expect(data.message).toBe('success');
			})
			.catch((error) => {
				console.error(error)
				expect(error).toBe(null)
			})
	})
})
