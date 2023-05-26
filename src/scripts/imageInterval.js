export const imageTransition = () => {
	const imageChange = document.querySelector('.main-image')

	let heroImage = [
		'images/heros_resp/hero-image_1-L.jpg',
		'images/heros_resp/hero-image_2-L.jpg',
		'images/heros_resp/hero-image_3-L.jpg',
		'images/heros_resp/hero-image_4-L.jpg'
	]

	if (window.matchMedia('(max-width: 360px)').matches) {
		heroImage = [
			'images/heros_resp/hero-image_1-S.jpg',
			'images/heros_resp/hero-image_2-S.jpg',
			'images/heros_resp/hero-image_3-S.jpg',
			'images/heros_resp/hero-image_4-S.jpg'
		]
	}

	if (window.matchMedia('(max-width: 720px) and (min-width: 361px)').matches) {
		heroImage = [
			'images/heros_resp/hero-image_1-M.jpg',
			'images/heros_resp/hero-image_2-M.jpg',
			'images/heros_resp/hero-image_3-M.jpg',
			'images/heros_resp/hero-image_4-M.jpg'
		]
	}

	let i = 1
	setInterval(() => {
		imageChange.setAttribute('src', heroImage[i % heroImage.length])
		imageChange.classList.add('lazyload')
		i++
	}, 10000)
}
