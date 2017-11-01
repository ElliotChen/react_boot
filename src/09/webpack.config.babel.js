import webpack from 'webpack';
import path from 'path';

export default {
	context: path.resolve('src'),
	entry: {
		index: path.resolve('src/index.js')
	},
	output: {
		path: path.resolve('dist'),
		filename: '[name].bundle.js'
	},
	devServer: {
		open: true,
		contentBase: path.resolve('src')
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: { extensions: [".jsx", ".js", ".json"] }
};