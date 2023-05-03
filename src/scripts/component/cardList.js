import 'lazysizes'
import CONFIG from '../config'
export const getCardList = async () => {
  const cardList = await fetch(`${CONFIG.API_URL}/list`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch(() => {
      return []
    })
  const mapCard = cardList.restaurants
  const dataId = mapCard.map((id) => id.pictureId)
  const imageList = await fetch(`${CONFIG.URL_IMAGE_MEDIUM}/${dataId}`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch(() => {
      return []
    })
  mapCard.forEach(card => {
    document.querySelector('.cardList').innerHTML +=
    `
      <div class="cardMain" tabindex="0">
        <img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${card.pictureId}" class="lazyload" />
        <div class="cardContent">
          <div class="topCard">
            <h4 tabindex="0"><i class="fa-sharp fa-solid fa-location-dot"></i>${card.city}</h4>
            <h4 tabindex="0"><i class="fa-solid fa-star"></i>${card.rating}</h4>
          </div>
          <h4 tabindex="0">${card.name}</h4>
          <p tabindex="0">${card.description}</p>
        </div>
        <div id="buttonDiv">
          <button id="detailButton" data-id="${card.id}">More Detail...</button>
        </div>
      </div>
    `
  })
}
