import { getCardList } from '../component/cardList'
import { imageTransition } from '../imageInterval'
import '../tabbedContent'
import '../../styles/scss/body.scss'
import '../../styles/scss/modal.scss'
import '../../styles/scss/navbar.scss'
import '../../styles/scss/restdet.scss'
import '../../styles/scss/fav.scss'
import '../../styles/scss/media-query.scss'
import { modal } from '../component/modal'
import { mobileNav } from '../component/mobileNav'
import { restdetail } from '../component/restdetail'
import { fav } from '../component/fav'
import swRegister from '../swRegister'
import Loading from '../component/loading'

const main = () => {
	if (document.readyState !== 'complete') {
		const loadingSpin = document.createElement('loader')
		document.body.appendChild(loadingSpin)

		swRegister()
		mobileNav()
		if (window.location.pathname === '/') {
			fetch()
			imageTransition()
		}
		if (window.location.pathname === '/restaurantdetail.html') {
			restdetail()
		}
		if (window.location.pathname === '/fav.html') {
			favmod()
		}
	} else {
		window.Location.reload()
	}
}

const fetch = async () => {
	await getCardList()
	modal()
}

const favmod = async () => {
	await fav()
}

export default main
