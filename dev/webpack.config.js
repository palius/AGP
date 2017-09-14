const webpack = require('webpack');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: "babel-loader!ts-loader"
		}, {
			test: /\.jsx$/,
			exclude: [/(node_modules)/],
			use: {
				loader: 'babel-loader',
				options: {
					compact: false,
					presets: ['babel-preset-es2015'],
					plugins: ['babel-plugin-transform-node-env-inline']
				}
			}
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
	devtool: "source-map",
	resolve: {
        extensions: [".ts", ".tsx"]
    },
	output: {
		filename: '../dist/index.js'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
