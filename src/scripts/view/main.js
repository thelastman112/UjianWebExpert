import { getCardList } from '../component/cardList'
import { imageTransition } from '../imageInterval'
import '../tabbedContent'
import '../../styles/scss/body.scss'
import '../../styles/scss/modal.scss'
import { modal } from '../component/modal'

const main = () => {
  fetch()
  imageTransition()
}

const fetch = async () => {
  await getCardList()
  modal()
}

export default main
