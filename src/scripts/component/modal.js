import 'lazysizes'
import CONFIG from '../config'
export const modal = async () => {
	const modalStructure =
  `
  <div class="modaldiv">
    <div class="modal-content">
      <div data-id="id">
      </div>          
      <div class="modal-header">
        <h3 class="name" tabindex="0"></h3>
        <div class="restdet">
        </div>
        <button class="close">&times;</button>
      </div>
      <div class="img"></div>
      <div class="modal-body">
        <table>
          <tbody class="tbody">
            <tr tabindex="0">
              <td>Deskripsi</td>
              <td class="desc"></td>
            </tr>
            <tr tabindex="0">
              <td>Kategori</td>
              <td class="cate"></td>
            </tr>
            <tr tabindex="0">
              <td>Alamat</td>
              <td class="address"></td>
            </tr>
            <tr class="bordered" tabindex="0">
              <td>Menu</td>
              <td>
                <span>Makanan</span>
                <ul class="food"></ul>
                <span>Minuman</span>
                <ul class="drink"></ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 class="revname" tabindex="0">Review</h2>
        <ul class="review"></ul>
      </div>
    </div>
  </div>
  `
	document.querySelector('.modal').innerHTML += modalStructure
	const btnDetail = document.querySelectorAll('#detailButton')
	document.querySelector('.resmodal').innerHTML += modalStructure
	const resbtnDetail = document.querySelectorAll('#resDetailButton')
	const modal = document.querySelector('.modal')
	const close = document.querySelector('.close')
	let id = []
	btnDetail.forEach(e => {
		e.addEventListener('click', () => {
			id = e.getAttribute('data-id')
			fetchingData(id)
			modal.style.display = 'block'
		})
	})
	resbtnDetail.forEach(e => {
		e.addEventListener('click', () => {
			console.log('cek')
			// id = e.getAttribute('data-id')
			// fetchingData(id)
			// modal.style.display = 'block'
		})
	})
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
		// console.log(detailFetch)
		const name = detailFetch.restaurant.name
		const pict = detailFetch.restaurant.pictureId
		const desc = detailFetch.restaurant.description
		const cate = detailFetch.restaurant.categories
		const addr = detailFetch.restaurant.address
		const city = detailFetch.restaurant.city
		const foods = detailFetch.restaurant.menus.foods
		const drinks = detailFetch.restaurant.menus.drinks
		const custrev = detailFetch.restaurant.customerReviews
		const restdet = document.querySelector('.restdet')
		const cimg = document.querySelector('.img')
		const cname = document.querySelector('.name')
		const cdesc = document.querySelector('.desc')
		const ccate = document.querySelector('.cate')
		const caddress = document.querySelector('.address')
		const cfood = document.querySelector('.food')
		const cdrink = document.querySelector('.drink')
		const creview = document.querySelector('.review')
		restdet.innerHTML = `
      <a href="restaurantdetail.html?id=${id}" class="showfull" tabindex="0">Show Full Page</a>
    `
		cname.innerHTML = `
      ${name}
    `
		cimg.innerHTML = `
      <img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_MEDIUM + pict}" class="lazyload" />
    `
		cdesc.innerHTML = `
      ${desc}
    `
		cate.forEach((cate) => {
			ccate.innerHTML += `
        <li>${cate.name}</li>
      `
		})
		caddress.innerHTML = `
      ${addr}, ${city}
    `
		foods.forEach((food) => {
			cfood.innerHTML += `
        <li>${food.name}</li>
      `
		})
		drinks.forEach((drink) => {
			cdrink.innerHTML += `
        <li>${drink.name}</li>
      `
		})
		custrev.forEach((rev) => {
			creview.innerHTML += `
      <li>
        <div class="revcontent">
          <div class="revheader">
            <h4 tabindex="0">${rev.name}</h4>
            <h5 tabindex="0">${rev.date}</h5>
          </div>
          <div class="revbody">
            <p tabindex="0">${rev.review}</p>
          </div>
        </div>
      </li>
      `
		})
		close.addEventListener('click', () => {
			modal.style.display = 'none'
			ccate.innerHTML = ''
			cfood.innerHTML = ''
			cdrink.innerHTML = ''
			creview.innerHTML = ''
		})
		window.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none'
				ccate.innerHTML = ''
				cfood.innerHTML = ''
				cdrink.innerHTML = ''
				creview.innerHTML = ''
			}
		})
	}
}
