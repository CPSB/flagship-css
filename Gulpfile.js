'use strict';

var gulp     = require('gulp-help')(require('gulp'));
var sassLint = require('gulp-sass-lint');
var sass     = require('gulp-sass');


gulp.task('sass:lint', 'Check the SASS files for codestyle warnings.', function () {
  return gulp.src('sass/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('sass:render', 'Generate the CSS file from SASS.', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
