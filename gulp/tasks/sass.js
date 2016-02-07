/**
 * Created by yusuke_hosono on 2016/02/07.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var named = require('vinyl-named');
var rename = require('gulp-rename');
var config = require('../config');

gulp.task('sass', function () {
    gulp.src(config.sass.entry, {base: config.sass.base})
        .pipe(named())
        .pipe(sass())
        .on('error', function(err) {
            console.log(err.message);
        })
         .pipe(rename(function(path) {
           path.dirname = '';
         }))
        .pipe(gulpif(config.sass.uglify, uglify()))
        .pipe(gulp.dest(config.sass.dest));
});
