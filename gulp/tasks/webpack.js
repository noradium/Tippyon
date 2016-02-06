var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var named = require('vinyl-named');
var config = require('../config');

gulp.task('webpack', function () {
    gulp.src(config.webpack.entry, {base: config.webpack.base})
        .pipe(named())
        .pipe(webpack())
        // .pipe(rename(function(path) {
        //   // path.dirname += 'page';
        //   // path.basename += '-world';
        //   // path.extname = '.md';
        //   console.log(path);
        // }))
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.js.dest));
});
