export const mobileNav = () => {
	const navButton = document.querySelector('#buttonbars')
	const nav = document.querySelector('.nav')
	navButton.addEventListener('click', () => {
		if (nav.className === 'nav') {
			nav.className += ' resp'
		} else {
			nav.className = 'nav'
		}
	})
	const PrevScroll = window.scrollY
	window.onscroll = () => {
		const currentScroll = window.scrollY
		if (PrevScroll < currentScroll && nav.className === 'nav') {
			document.getElementById('nav').style.top = '-60px'
		} else {
			document.getElementById('nav').style.top = '0'
		}
	}
}
