import 'lazysizes'
import CONFIG from '../config'
import database from '../favidb'

export const restdetail = async () => {
  let id = []
  if (localStorage.getItem('ids') != null) {
    id = localStorage.getItem('ids')
  }
  fetchingData(id)
  async function fetchingData (id) {
    const detailFetch = await fetch(`${CONFIG.API_URL}/detail/${id}`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .catch(() => {
        return []
      })
    const headdet = document.querySelector('.detailHeader')
    const contdet = document.querySelector('.detailContent')
    const maindrev = document.querySelector('.detailReview')
    const pict = detailFetch.restaurant.pictureId
    const name = detailFetch.restaurant.name
    const city = detailFetch.restaurant.city
    const desc = detailFetch.restaurant.description
    const cate = detailFetch.restaurant.categories
    const addr = detailFetch.restaurant.address
    const foods = detailFetch.restaurant.menus.foods
    const drinks = detailFetch.restaurant.menus.drinks
    const custrev = detailFetch.restaurant.customerReviews
    headdet.innerHTML =
    `
    <div class="divimg">
    <div class="setid" data-id=${id}></div>
      <div class="detailimg">
        <img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_LARGE + pict}" class="lazyload" />
      </div>
    </div>
      <div class="extradetail">
        <h2 class="name underline" tabindex="0">${name}</h3>
        <h3 tabindex="0"><i class="fa-sharp fa-solid fa-location-dot"></i>${city}</h4>
      </div>
    `
    contdet.innerHTML = `
    <div class="divcont">
      <div>
        <ul>
          <li>
            <h2 class="underline">Deskripsi</h2>
          </li>
          <li>
            <h3 class="desc">${desc}</h3>
          </li>
        </ul>
        <ul>
          <li>
            <h2 class="underline">Kategori</h2>
          </li>
          <li class="cate"></li>
        </ul>
        <ul>
          <li>
            <h2 class="underline">Alamat</h2>
          </li>
          <li>
            <h3 class="addr">${addr}</h3>
          </li>
        </ul>
        <ul>
          <li>
            <h2 class="underline">Menu</h2>
          </li>
          <li class="menu" >
          <h3 class="underline">Makanan</h3>
            <ul class="food">
            </ul>
            <h3 class="underline">Minuman</h3>
            <ul class="drink">
            </ul>
          </li>
        </ul>
      </div>
    </div>
    `
    const ccate = document.querySelector('.cate')
    const cfood = document.querySelector('.food')
    const cdrink = document.querySelector('.drink')
    cate.forEach(e => {
      ccate.innerHTML += `
        <h3>${e.name}</h3>  
      `
    })
    foods.forEach(e => {
      cfood.innerHTML += `
      <li><h4>${e.name}</h4></li>
      `
    })
    drinks.forEach(e => {
      cdrink.innerHTML += `
      <li><h4>${e.name}</h4></li>
      `
    })
    custrev.forEach(e => {
      maindrev.innerHTML += `
      <ul>
        <li>
          <div class="revcontent">
            <div class="revheader">
              <h4 tabindex="0">${e.name}</h4>
              <h5 tabindex="0">${e.date}</h5>
            </div>
            <div class="revbody">
              <p tabindex="0">${e.review}</p>
            </div>
          </div>
        </li>
      </ul>
      `
    })
    const favBtn = document.querySelector('.favButton')
    const data = {
      id
    }
    favBtn.addEventListener('click', () => {
      if (favBtn.className === 'favButton') {
        favBtn.className = 'redfavButton'
        database.addFavoriteRestaurant(data).then(() => {
          console.log('add success')
        }).catch(() => {
          console.log('add failed')
        })
      } else {
        favBtn.className = 'favButton'
        database.removeFavoriteRestaurant(data).then(() => {
          console.log('remove success')
        }).catch(() => {
          console.log('remove failed')
        })
      }
    })
    autofav(id)
    async function autofav (id) {
      database.getFavoriteRestaurant(id).then((e) => {
        if (e !== undefined) {
          favBtn.className = 'redfavButton'
        } else {
          favBtn.className = 'favButton'
        }
      })
    }
  }
}
