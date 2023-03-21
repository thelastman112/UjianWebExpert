import 'lazysizes'
export const getCardList = async () => {
  const cardList = await fetch('/DATA.json', {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch(() => {
      return []
    })
  const mapCard = cardList.restaurants
  mapCard.forEach(card => {
    document.querySelector('.cardList').innerHTML +=
    `
      <div class="cardMain">
        <img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${card.pictureId}" class="lazyload" />
        <div class="cardContent">
          <div class="topCard">
            <h4><i class="fa-sharp fa-solid fa-location-dot"></i>${card.city}</h4>
            <h4><i class="fa-solid fa-star"></i>${card.rating}</h4>
          </div>
          <h4>${card.name}</h4>
          <p>${card.description}</p>
        </div>
      </div>
    `
  })
}
