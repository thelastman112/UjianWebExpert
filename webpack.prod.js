const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const WorkboxPlugin = require('workbox-webpack-plugin')
const path = require('path')

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
		new WorkboxPlugin.InjectManifest({
			swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
			swDest: './sw.bundle.js'
		})
	]
})
