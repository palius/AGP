const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		app: "./src/app/app.ts",
		worker: "./src/worker/worker.ts"
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: [/(node_modules)/],
			loader: "babel-loader!ts-loader"
		}, {
			test: /\.jsx$/,
			exclude: [/(node_modules)/],
			use: {
				loader: "babel-loader",
				options: {
					compact: false,
					presets: ["babel-preset-es2015"],
					plugins: ["babel-plugin-transform-node-env-inline"]
				}
			}
		}, {
			test: /\.scss$/,
			exclude: [/(node_modules)/],
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
		extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
	output: {
		library: "metal",
		libraryTarget: "this",
		filename: "../dist/[name].js"
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
