const webpack = require('webpack')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')

let entries = require('../config/page.js');

// 如果没有配置文件打包入口配置则遍历入口文件
if(!entries || !entries.length) {
	// 获取所有入口文件
	const glob = require('glob');
	const getEntry = globPath => {
		const entries = [];

		glob.sync(globPath).forEach(function(entry) {
			const basename = path.basename(entry, path.extname(entry));
			entries.push({
				'name': basename,
				'entry': entry,
				'template': './src/html/'+basename+'.html',
				'outputHtmlname': basename,
			})
		});
		return entries;
	}
	entries = getEntry('./src/js/page/**.js');
}

const webpackConfig = {
	entry: {},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].async.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	resolve: {
		symlinks: true,
		extensions: ['.js', '.ts', '.html', '.css'],
		alias: {
			static: path.join(__dirname, '../static'),
			assets: path.join(__dirname, '../src/assets'),
			templates: path.join(__dirname, '../src/templates'),
			page: path.join(__dirname, '../src/js/page'),
			common: path.join(__dirname, '../src/js/common'),
			utils: path.join(__dirname, '../src/js/utils'),
			components: path.join(__dirname, '../src/js/components'),
			style: path.join(__dirname, '../src/style'),
			images: path.join(__dirname, '../src/images'),
			html: path.join(__dirname, '../src/html')
		}
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.tag$/,
			exclude: /node_modules/,
			loader: 'riotjs-loader'
		}, {
			test: /\.ts?$/,
			exclude: /node_modules/,
			use: [
				'babel-loader', {
					loader: 'ts-loader',
					options: {
						onlyCompileBundledFiles: true
					}
				}
			]
		}, {
			test: /\.html$/,
			exclude: /node_modules/,
			loader: 'underscore-template-loader',
			query: {
				prependFilenameComment: __dirname,
				strict: false
			}
		}, {
			test: /\.tpl|ejs$/,
			exclude: /node_modules/,
			loader: 'ejs-loader'
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			'riot': 'riot',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			// filename: 'js/[name].js',
			minChunks: 3,
			chunks: entries.map(e => e.name),   // 提取入口文件的公共部分
		}),
		new NamedModulesPlugin()
	]
}

var entryJs = {};
entries.forEach(function(item) {
	const plugin = new HtmlWebpackPlugin({
		filename: item.outputHtmlname + '.html',
		inject: true,
		chunks: ['common', 'vendors', item.name],
		hash: true,
		cache: true,
		template: item.template,
		// template: './src/html/'+name+'.js',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true
		},
		chunksSortMode: 'manual'
	});
	webpackConfig.plugins.push(plugin);
	entryJs[item.name] = item.entry;
})

// 提取公共css或js文件
webpackConfig.entry['common'] = [
	'style/common/reset.css'
];

webpackConfig.entry['babel-polyfill'] = 'babel-polyfill';


webpackConfig.entry = merge(webpackConfig.entry, entryJs);

module.exports = webpackConfig;