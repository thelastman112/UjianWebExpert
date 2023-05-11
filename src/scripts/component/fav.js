import CONFIG from '../config'
import database from '../favidb'
export const fav = async () => {
	const favitem = document.querySelector('.favitem')
	database.getFavoriteRestaurants().then(e => {
		e.forEach(async ev => {
			const idfetch = ev.id
			setTimeout(() => {
				forfetch(idfetch)
				setTimeout(() => {
					const fetchid = document.querySelectorAll('.favdetail')
					console.log(fetchid)
					fetchid.forEach((e) => {
						e.addEventListener('afterload', () => {
							const id = e.getAttribute('data-id')
							localStorage.clear()
							localStorage.setItem('ids', id)
						}, 1000)
					})
				}, 1000)
			})
		})
		async function forfetch (idfetch) {
			const fetched = await fetch(`${CONFIG.API_URL}/detail/${idfetch}`, {
				headers: {
					accept: 'application/json'
				}
			})
				.then(response => response.json())
				.catch(() => {
					return []
				})
			console.log(fetched)
			const rest = fetched.restaurant
			favitem.innerHTML += `
			<div class="cardMain" tabindex="0">
				<img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_MEDIUM + rest.pictureId}" class="lazyload" />
				<div class="cardContent">
					<div class="topCard">
						<h4 tabindex="0"><i class="fa-sharp fa-solid fa-location-dot"></i>${rest.city}</h4>
						<h4 tabindex="0"><i class="fa-solid fa-star"></i>${rest.rating}</h4>
					</div>
					<div class="mainContent"">
						<a href="restaurantdetail.html?id=${rest.id}" data-id="${rest.id}" class="favdetail">
							<h4 tabindex="0">${rest.name}</h4>
						</a>
						<p tabindex="0">${rest.description}</p>
					</div>
			</div>
			`
		}
	})
}
