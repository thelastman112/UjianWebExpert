export const mobileNav = () => {
  const navButton = document.querySelector('#buttonbars')
  navButton.addEventListener('click', () => {
    console.log('cek')
    const nav = document.getElementById('nav')
    if (nav.className === 'nav') {
      nav.className += ' resp'
    } else {
      nav.className = 'nav'
    }
  })
}
