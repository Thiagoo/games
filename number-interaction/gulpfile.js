var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('compile-less', function () {
  return gulp
    .src(['*.less', 'assets/*.less'])
    .pipe(
      less().on('error', function (err) {
        console.log(err);
      })
    )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('monitoring', function () {
  gulp.watch(['*.less', 'assets/*.less'], gulp.series('compile-less'));
});

gulp.task('babel', function () {
  gulp
    .src('assetscode.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('assets'));
});

gulp.task('default', gulp.series('monitoring'));
//gulp.task('default',gulp.series('monitoring','gulp-babel'));
