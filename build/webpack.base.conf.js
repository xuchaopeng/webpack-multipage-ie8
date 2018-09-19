const webpack = require('webpack')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')

// 获取所有入口文件
const glob = require('glob');
const getEntry = globPath => {
	const entries = {};

	glob.sync(globPath).forEach(function(entry) {
		const basename = path.basename(entry, path.extname(entry));
		entries[basename] = entry;
	});
	return entries;
}

const entries = getEntry('./src/js/page/**.js');

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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			// filename: 'js/[name].js',
			minChunks: 3,
			chunks: Object.keys(entries),   // 只提取page下的js公共部分
		}),
		new NamedModulesPlugin()
	]
}


Object.keys(entries).forEach(function(name, epath) {
	const plugin = new HtmlWebpackPlugin({
		filename: name + '.html',
		inject: true,
		chunks: ['common', 'vendor', name],
		hash: true,
		cache: true,
		template: './src/html/'+ name + '.html',
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
})

// 提取公共css或js文件
webpackConfig.entry['common'] = [
	'style/common/reset.css'
];
webpackConfig.entry['es5-polyfill'] = 'es5-polyfill';
webpackConfig.entry['babel-polyfill'] = 'babel-polyfill';
webpackConfig.entry = merge(webpackConfig.entry, entries);

module.exports = webpackConfig