const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const target = path.resolve(__dirname, 'src/public/images/heros_resp')
const destination = path.resolve(__dirname, 'src/public/images/heros')

if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination)
}

fs.readdirSync(target)
	.forEach((image) => {
		sharp(`${target}/${image}`)
			.resize(1024)
			.toFile(path.resolve(__dirname, `${destination}/${image.split('.')
				.slice(0, -1)
				.join('.')}-L.jpg`))

		sharp(`${target}/${image}`)
			.resize(720)
			.toFile(path.resolve(__dirname, `${destination}/${image.split('.')
				.slice(0, -1)
				.join('.')}-M.jpg`))

		sharp(`${target}/${image}`)
			.resize(360)
			.toFile(path.resolve(__dirname, `${destination}/${image.split('.')
				.slice(0, -1)
				.join('.')}-S.jpg`))
	})
