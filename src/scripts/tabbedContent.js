const tabbedContentBody = document.querySelectorAll('#tabbedContent *, .helper')
const tabbedContent = document.querySelector('#tabbedContent')

tabbedContentBody.forEach(tab => {
	tab.addEventListener('focus', () => {
		if (tab.parentElement.getAttribute('id') !== 'tabbedContent') {
			tab.style.top = '0'
		} else {
			tabbedContent.style.top = '0'
		}
	})
	tab.addEventListener('blur', () => {
		if (tab.parentElement.getAttribute('id') !== 'tabbedContent') {
			tab.style.top = '-100%'
		} else {
			tabbedContent.style.top = '-100%'
		}
	})
})
