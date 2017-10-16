var gulp = require("gulp");
var webpack = require("webpack-stream");
var Server = require("karma").Server;

gulp.task("build", function() {
    return gulp
        .src("")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("../dist"))
        .pipe(gulp.dest("../demo"));
});

gulp.task("test", function() {
    new Server({
        configFile: __dirname + "/karma.conf.js"
    }).start();
});