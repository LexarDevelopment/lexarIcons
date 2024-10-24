const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('copy-and-rename', function() {
  return gulp.src('style.css')
    .pipe(rename('lexarIcons.css'))
    .pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', gulp.series('copy-and-rename'));