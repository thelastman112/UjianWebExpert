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

const main = () => {
	fetch()
	imageTransition()
	mobileNav()
	restdetail()
	fav()
}

const fetch = async () => {
	await getCardList()
	modal()
}

export default main
