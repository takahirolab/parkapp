'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
    //gulp.watch('./sass/**/*.scss', ['sass']);  // Gulp3
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  });
