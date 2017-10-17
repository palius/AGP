const del = require("del");
const gulp = require("gulp");
const karma = require("karma").Server;
const runSequence = require("run-sequence");
const webpack = require("webpack-stream");

gulp.task(
    "clean:docs",
    () => del(["../docs/index.js.map", "../docs/index.js"], {force: true})
);

gulp.task(
    "build:docs",
    ["clean:docs"],
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
    "clean:dist",
    () => del(["../dist/index.js.map", "../dist/index.js"], {force: true})
);

gulp.task(
    "build:dist",
    ["clean:dist"],
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
    () => {
        runSequence("build:dist", "build:docs");
    }
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
    "test:watch",
    () => {
        new karma({
            configFile: __dirname + "/karma.conf.js",
            singleRun: false,
            autoWatch: true
        }).start();
    }
);
