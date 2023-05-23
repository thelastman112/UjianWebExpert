import 'lazysizes'
import CONFIG from '../config'
import database from '../favidb'
import addReview from './addReview'
import favFunc from '../util/favFunc'

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
		const fetched = detailFetch.restaurant
		const cate = fetched.categories
		const foods = fetched.menus.foods
		const drinks = fetched.menus.drinks
		const custrev = fetched.customerReviews
		headdet.innerHTML =
    `
    <div class="divimg">
    <div class="setid" data-id=${id}></div>
      <div class="detailimg">
        <img id="imgContent" alt="stockImage" src="images/noimg.jpg" data-src="${CONFIG.URL_IMAGE_LARGE + fetched.pictureId}" class="lazyload" crossorigin="anonymous" />
      </div>
    </div>
      <div class="extradetail">
        <h2 class="name underline" id="name" tabindex="0">${fetched.name}</h3>
        <h3 tabindex="0"><i class="fa-sharp fa-solid fa-location-dot"></i>${fetched.city}</h4>
      </div>
    `
		contdet.innerHTML = `
    <div class="divcont">
      <div>
        <ul>
          <li>
            <h2 class="underline" tabindex="0">Deskripsi</h2>
          </li>
          <li>
            <h3 tabindex="0" class="desc">${fetched.description}</h3>
          </li>
        </ul>
        <ul>
          <li>
            <h2 class="underline" tabindex="0">Kategori</h2>
          </li>
          <li class="cate"></li>
        </ul>
        <ul>
          <li>
            <h2 class="underline" tabindex="0">Alamat</h2>
          </li>
          <li>
            <h3 tabindex="0" class="addr">${fetched.address}</h3>
          </li>
        </ul>
        <ul>
          <li>
            <h2 class="underline" tabindex="0">Menu</h2>
          </li>
          <li class="menu" >
          <h3 class="underline" tabindex="0">Makanan</h3>
            <ul class="food">
            </ul>
            <h3 class="underline" tabindex="0">Minuman</h3>
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
        <h3 tabindex="0">${e.name}</h3>  
      `
		})
		foods.forEach(e => {
			cfood.innerHTML += `
      <li><h4 tabindex="0">${e.name}</h4></li>
      `
		})
		drinks.forEach(e => {
			cdrink.innerHTML += `
      <li><h4 tabindex="0">${e.name}</h4></li>
      `
		})
		custrev.forEach(e => {
			maindrev.innerHTML += `
		<ul>
			<li>
			<div class="revcontent">
				<div class="revheader">
				<h4 id="reviewnama" tabindex="0">${e.name}</h4>
				<h5 id="reviewtgl"  tabindex="0">${e.date}</h5>
				</div>
				<div class="revbody">
				<p id="reviewisi" tabindex="0">${e.review}</p>
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
				favFunc.favadd(data)
			} else {
				favBtn.className = 'favButton'
				favFunc.favrem(data)
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
		const backButton = document.querySelector('.backButton')
		backButton.addEventListener('click', () => {
			localStorage.clear()
		})
		const input = document.querySelector('.inputReview')
		input.innerHTML =
		`
			<form action="">
			<input type="hidden" name="id" id="review-id" value="${id}">
				<div class="form">
					<label for="namereview">Name</label>
					<input class="form-control" id="namereview" placeholder="Name" required="">
					<label for="review">Review</label>
					<textarea class="form-textarea" id="review" placeholder="Enter Review" rows="3" required=""></textarea>
				</div>
				<button type="submit" class="btnSubmit">Submit</button>
			</form>
		`
		const btnSubmit = document.querySelector('.btnSubmit')
		btnSubmit.addEventListener('click', e => {
			const namaform = document.querySelector('#namereview').value
			const revform = document.querySelector('#review').value
			const idform = document.querySelector('#review-id').value
			const revData = {
				id: idform,
				name: namaform,
				review: revform
			}
			addReview(revData)
			window.location.reload()
		})
	}
}
