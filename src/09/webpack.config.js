const webpack = require('webpack');

var config = {
	context: __dirname + '/src',
	entry: {
		app: './src/index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	}
}

module.exports = config;