import 'lazysizes'
import CONFIG from '../config'
export const getCardList = async () => {
	const cardList = await fetch(`${CONFIG.API_URL}/list`, {
		headers: {
			Accept: 'application/json'
		}
	})
		.then(response => response.json())
		.catch(() => {
			return []
		})
	const mapCard = cardList.restaurants
	mapCard.forEach(card => {
		document.querySelector('.cardList').innerHTML +=
		`
			<div class="cardMain" tabindex="0">
			<img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_MEDIUM + card.pictureId}" class="lazyload" crossorigin="anonymous" />
				<div class="cardContent">
					<div class="topCard">
						<h4 tabindex="0"><i class="fa-sharp fa-solid fa-location-dot"></i>${card.city}</h4>
						<h4 tabindex="0"><i class="fa-solid fa-star"></i>${card.rating}</h4>
					</div>
					<div class="mainContent"">
						<a href="restaurantdetail.html?id=${card.id}" data-id="${card.id}" class="iddetail">
						<h4 tabindex="0">${card.name}</h4>
						</a>
						<p tabindex="0">${card.description}</p>
					</div>
					<div id="buttonDiv">
						<button id="detailButton" data-id="${card.id}">More Detail...</button>
					</div>
				</div>
			</div>
        `
	})
	const fetchid = document.querySelectorAll('.iddetail')
	fetchid.forEach((e) => {
		e.addEventListener('click', () => {
			console.log('cek')
			const id = e.getAttribute('data-id')
			localStorage.clear()
			localStorage.setItem('ids', id)
		})
	})
}
