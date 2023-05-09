
import CONFIG from '../config'
export const fav = async () => {
	// const favitem = document.querySelector('.favitem')
	const resitem = document.querySelector('.resitem')

	const restlist = await fetch(`${CONFIG.API_URL}/list`, {
		headers: {
			Accept: 'application/json'
		}
	})
		.then((response) => response.json())
		.catch(() => {
			return []
		})
	const list = restlist.restaurants
	list.forEach(card => {
		resitem.innerHTML +=
			`
			<div class="resCard" tabindex="0">
				<img id="resImg" alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_SMALL + card.pictureId}" class="lazyload" />
				<div class="resCardContent">
					<div class="mainWrap">
						<div class="resMainContent"">
							<h2 tabindex="0">${card.name}</h2>
						</div>
						<div class="resTopCard">
							<h4 tabindex="0"><i class="fa-sharp fa-solid fa-location-dot"></i>${card.city}</h4>
							<h4 tabindex="0"><i class="fa-solid fa-star"></i>${card.rating}</h4>
						</div>
					</div>
					<div id="resButtonDiv">
						<button id="resDetailButton" data-id="${card.id}">More Detail</button>
					</div>
			</div>
		`
	})
}
