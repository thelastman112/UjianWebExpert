import CONFIG from './config'

export const testing = async () => {
	const getFetch = await fetch(`${CONFIG.API_URL}/list`, {
		headers: {
			Accept: 'application/json'
		}
	})
		.then((response) => console.log(response))
		.catch(() => {
			return []
		})
}
