const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const imageminMozjpeg = require('imagemin-mozjpeg')
const path = require('path')

module.exports = {
	entry: {
		app: path.resolve('src/scripts/index.js')
	},
	output: {
		filename: '[name].js',
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
					to: path.resolve('dist/'),
					globOptions: {
						ignore: ['**/images/heros/**']
					}
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
		}),
		new BundleAnalyzerPlugin({
			reportFilename: 'report.html',
			analyzerMode: 'static',
			openAnalyzer: false
		})
	]
}
