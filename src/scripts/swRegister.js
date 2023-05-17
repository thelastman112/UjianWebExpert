import * as WorkboxWindow from 'workbox-window'

const swRegister = async () => {
	if (!('serviceWorker' in navigator)) {
		console.log('Browser tidak mendukung Service Worker')
		return
	}

	const wb = new WorkboxWindow.Workbox('sw.js')

	try {
		wb.register()
		console.log('Service worker registered')
	} catch (error) {
		console.log('Failed to register service worker', error)
	}
}

export default swRegister
