import 'lazysizes'
import CONFIG from '../config'
import database from '../favidb'
export const fav = async () => {
	const favitem = document.querySelector('.favitem')
	database.getFavoriteRestaurants().then(e => {
		e.forEach(async id => {
			const fetched = await fetch(`${CONFIG.API_URL}/detail/${id.id}`, {
				headers: {
					accept: 'application/json'
				}
			})
				.then(response => response.json())
				.catch(() => {
					return []
				})
			const rest = fetched.restaurant
			favitem.innerHTML += `
			<div class="favCard" tabindex="0">
				<img alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_SMALL + rest.pictureId}" class="favImg lazyload" />
				<div class="favContent">
					<div class='favMain'>
						<div class="favHeader"">
							<h1 tabindex="0">${rest.name}</h4>
						</div>
						<div class="favBody">
							<h4 tabindex="0">Rating: ${rest.rating}</h4>
							<h4 tabindex="0">${rest.city}</h4>
						</div>
					</div>
					<div id="favButton">
						<button class="fullpage" data-id="${rest.id}">Full Page</button>
					</div>
				</div>
		  	</div>
			`
		})
		const fetchid = document.querySelectorAll('.fullpage')
		fetchid.forEach((e) => {
			e.addEventListener('click', () => {
				const id = e.getAttribute('data-id')
				localStorage.clear()
				localStorage.setItem('ids', id)
			})
		})
	})
}
