import { getCardList } from '../component/cardList'
import { imageTransition } from '../imageInterval'
import '../../styles/scss/body.scss'
import '../../styles/scss/footer.scss'

const main = () => {
  fetch()
  imageTransition()
}

const fetch = async () => {
  await getCardList()
}

export default main
