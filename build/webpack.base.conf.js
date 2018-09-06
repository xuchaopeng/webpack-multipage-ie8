const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')

const webpackConfig = {
	entry: {},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	resolve: {
		symlinks: true,
		extensions: ['.js', '.ts', '.html', '.css'],
		alias: {
			static: path.join(__dirname, '../static'),
			assets: path.join(__dirname, '../src/assets'),
			components: path.join(__dirname, '../src/components'),
			page: path.join(__dirname, '../src/js/page'),
			common: path.join(__dirname, '../src/js/common'),
			less: path.join(__dirname, '../src/less'),
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
		}]
	},
	plugins: [
		new NamedModulesPlugin()
	]
}


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

Object.keys(entries).forEach(function(name, epath) {
	const plugin = new HtmlWebpackPlugin({
		filename: name + '.html',
		inject: true,
		chunks: ['common', name],
		hash: true,
		template: './src/html/'+ name + '.html',
		// template: './index.html',
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

webpackConfig.entry['common'] = [
	'static/css/reset.css'
];
webpackConfig.entry['es5-polyfill'] = 'es5-polyfill';
webpackConfig.entry['babel-polyfill'] = 'babel-polyfill';
webpackConfig.entry = merge(webpackConfig.entry, entries);

module.exports = webpackConfig