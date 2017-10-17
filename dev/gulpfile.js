var gulp = require("gulp");
const karma = require("karma").Server;
const webpack = require("webpack-stream");

gulp.task(
    "build-docs",
    () => {
        const webpackConfig = require("./webpack.config.js");
        webpackConfig.output.filename = "../docs/index.js";

        return gulp
            .src("")
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest("../docs"));
    }
);

gulp.task(
    "build-dist",
    () => {
        const webpackConfig = require("./webpack.config.js");

        return gulp
            .src("")
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest("../dist"));
    }
);

gulp.task(
    "build",
    ["build-dist", "build-docs"],
    () => {}
);

gulp.task(
    "test",
    () => {
        new karma({
            configFile: __dirname + "/karma.conf.js"
        }).start();
    }
);

gulp.task(
    "test-watch",
    () => {
        new karma({
            configFile: __dirname + "/karma.conf.js",
            singleRun: false,
            autoWatch: true
        }).start();
    }
);
