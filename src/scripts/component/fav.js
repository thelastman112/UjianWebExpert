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
				<img alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_SMALL + rest.pictureId}" class="favImg lazyload" crossorigin="anonymous" />
				<div class="favContent">
					<div class='favMain'>
						<div class="favHeader"">
							<h2 tabindex="0">${rest.name}</h2>
						</div>
						<div class="favBody">
							<h4 tabindex="0">Rating: ${rest.rating}</h4>
							<h4 tabindex="0">${rest.city}</h4>
						</div>
					</div>
					<button class="fullpage" onclick="location.href='restaurantdetail.html?id=${rest.id}'" data-id="${rest.id}">Full Page</button>
				</div>
			</div>
			`
			openrest()
		})
	})
	const restitem = document.querySelector('.restitem')
	const fetchall = await fetch(`${CONFIG.API_URL}/list`, {
		headers: {
			accept: 'application/json'
		}
	})
		.then(response => response.json())
		.catch(() => {
			return []
		})
	const list = fetchall.restaurants
	list.forEach(item => {
		restitem.innerHTML += `
		<div class="favRestCard" tabindex="0">
			<img alt="stockRestImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_SMALL + item.pictureId}" class="favRestImg lazyload" crossorigin="anonymous" />
			<div class="favRestContent">
				<div class='favRestMain'>
					<div class="favRestHeader"">
						<h2 tabindex="0">${item.name}</h2>
					</div>
					<div class="favRestBody">
						<h4 tabindex="0">Rating: ${item.rating}</h4>
						<h4 tabindex="0">${item.city}</h4>
					</div>
				</div>
				<button class="fullpage" onclick="location.href='restaurantdetail.html?id=${item.id}'" data-id="${item.id}">Full Page</button>
			</div>
		</div>
		`
		openrest()
	})
	async function openrest () {
		const fetchid = document.querySelectorAll('.fullpage')
		fetchid.forEach((e) => {
			e.addEventListener('click', () => {
				const id = e.getAttribute('data-id')
				localStorage.clear()
				localStorage.setItem('ids', id)
			})
		})
	}
}
