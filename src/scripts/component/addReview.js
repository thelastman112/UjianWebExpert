import CONFIG from '../config'

const addReview = async (revData) => {
	console.log(revData)
	const posted = await fetch(`${CONFIG.API_URL}/review`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(revData)
	})
		.then(response => response.json())
		.catch((err) => {
			console.error(err)
			return []
		})
}
export default addReview
