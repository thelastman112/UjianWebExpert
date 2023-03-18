import 'lazysizes'
export const getCardList = async () => {
  const cardList = await fetch('/DATA.json', {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
      return []
    })
  const mapCard = cardList.restaurants
  mapCard.forEach(card => {
    console.log(card.pictureId)
    document.querySelector('.cardList').innerHTML +=
    `
      <div class="cardMain">
        <img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${card.pictureId}" class="lazyload" />
        <div class="cardContent">
          <div class="topCard">
            <h4>${card.city}</h4>
            <h4>Rating: ${card.rating}</h4>
          </div>
          <h4>${card.name}</h4>
          <p>${card.description}</p>
        </div>
      </div>
    `
  })
  console.log(mapCard)
}
