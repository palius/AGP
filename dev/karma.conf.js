const webpackConfig = require("./webpack.config");

module.exports = function (config) {
	config.set({
		autoWatch: true,
		browsers: ["PhantomJS"],
		concurrency: Infinity,
		files: [ "__tests__/**/*.spec.ts" ],
		frameworks: ["mocha", "chai", "sinon"],
		preprocessors: { "__tests__/**/*.ts": ["webpack"] },
		singleRun: false,
		webpack: webpackConfig,
		webpackMiddleware: { noInfo: true }
	});
};
