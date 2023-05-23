export const imageTransition = () => {
	const imageChange = document.querySelector('.main-image')

	let heroImage = [
		'images/heros/hero-image_1-L.jpg',
		'images/heros/hero-image_2-L.jpg',
		'images/heros/hero-image_3-L.jpg',
		'images/heros/hero-image_4-L.jpg'
	]

	if (window.matchMedia('(max-width: 375px)').matches) {
		heroImage = [
			'images/heros/hero-image_1-S.jpg',
			'images/heros/hero-image_2-S.jpg',
			'images/heros/hero-image_3-S.jpg',
			'images/heros/hero-image_4-S.jpg'
		]
	}

	if (window.matchMedia('(max-width: 767px) and (min-width: 376px)').matches) {
		heroImage = [
			'images/heros/hero-image_1-M.jpg',
			'images/heros/hero-image_2-M.jpg',
			'images/heros/hero-image_3-M.jpg',
			'images/heros/hero-image_4-M.jpg'
		]
	}

	let i = 1
	setInterval(() => {
		imageChange.setAttribute('src', heroImage[i % heroImage.length])
		imageChange.classList.add('lazyload')
		i++
	}, 10000)
}
