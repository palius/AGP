var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('dist', function() {
    return webpack(require('./webpack.config.js'));
});

gulp.task('build', ['dist'], function() {
    return gulp
        .src('../dist/*')
        .pipe(gulp.dest('../demo'));
});