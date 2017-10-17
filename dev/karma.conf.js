const webpackConfig = require("./webpack.config");

module.exports = function (config) {
	config.set({
		autoWatch: false,
		browsers: ["PhantomJS"],
		concurrency: Infinity,
		files: [ "__tests__/**/*.spec.ts" ],
		frameworks: ["mocha", "chai", "sinon"],
		preprocessors: { "__tests__/**/*.ts": ["webpack"] },
		singleRun: true,
		webpack: webpackConfig,
		webpackMiddleware: { noInfo: true }
	});
};
