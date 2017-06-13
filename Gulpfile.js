var gulp     = require('gulp-help')(require('gulp'));
var sassLint = require('gulp-sass-lint');

gulp.task('scss:lint', 'Check the SCSS files for codestyle warnings.', function () {
  return gulp.src('sass/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
