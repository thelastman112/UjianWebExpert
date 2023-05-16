const { InjectManifest } = require('workbox-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')
const path = require('path')
const { merge } = require('webpack-merge')
module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			}
		]
	},
	plugins: [
		new InjectManifest({
			swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
			swDest: 'sw.js'
		}),
		new CleanWebpackPlugin()
	]
})
