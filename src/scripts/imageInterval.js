export const imageTransition = () => {
	const imageChange = document.querySelector('.main-image')

	const heroImage = [
		'images/heros/hero-image_1.jpg',
		'images/heros/hero-image_2.jpg',
		'images/heros/hero-image_3.jpg',
		'images/heros/hero-image_4.jpg'
	]

	let i = 1
	setInterval(() => {
		imageChange.setAttribute('src', heroImage[i % heroImage.length])
		imageChange.classList.add('lazyload')
		i++
	}, 10000)
}
