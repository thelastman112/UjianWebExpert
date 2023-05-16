const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const WebpackPwaManifest = require('webpack-pwa-manifest')
const imageminMozjpeg = require('imagemin-mozjpeg')
const path = require('path')

module.exports = {
	entry: {
		app: path.resolve('src/scripts/index.js'),
		sw: path.resolve('src/scripts/sw.js')
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 20000,
			maxSize: 70000,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: '~',
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(sc|c)ss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve('src/templates/index.html'),
			minify: true
		}),
		new HtmlWebpackPlugin({
			filename: 'fav.html',
			template: path.resolve('src/templates/fav.html'),
			minify: true
		}),
		new HtmlWebpackPlugin({
			filename: 'restaurantdetail.html',
			template: path.resolve('src/templates/restaurantdetail.html'),
			minify: true
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve('src/public/'),
					to: path.resolve('dist/')

				}
			]
		}),
		new WebpackPwaManifest({
			name: 'Pangananku',
			short_name: 'Panganku',
			description: 'Looking for a quick and easy way to find the best restaurants in your area? Look no further than Pangananku, the ultimate web app for restaurant search! With our user-friendly interface and powerful search algorithms, we make it easy for you to discover new dining experiences, compare menus and prices, and read reviews from real customers. Whether youre in the mood for Italian, Chinese, or something in between, Pangananku has you covered. Our extensive database of restaurants includes all types of cuisines, from fast food chains to high-end fine dining establishments. And with our convenient filters and sorting options, you can easily narrow down your search to find exactly what youre looking for. But thats not all – Pangananku also offers a range of other helpful features, including maps and directions to each restaurant, user-generated photos and videos, and exclusive deals and discounts. Plus, with our mobile app, you can search for restaurants on the go and never miss out on a great meal again.So why wait? Sign up for Pangananku today and start discovering the best restaurants in your area!',
			background_color: '#222831',
			theme_color: '#393E46',
			display: 'standalone',
			start_url: '.',
			icons: [
				{
					src: path.resolve('src/public/images/icons/icon.png'),
					sizes: [96, 128, 192, 256, 384, 512]
				},
				{
					src: path.resolve('src/public/images/icons/icon.png'),
					size: '1024x1024'
				},
				{
					src: path.resolve('src/public/images/icons/icon.png'),
					size: '1024x1024',
					purpose: 'maskable'
				}
			]
		}),
		new ImageminPlugin({
			plugins: [
				imageminMozjpeg({
					quality: 50,
					progressive: true
				})
			]
		})
	]
}
