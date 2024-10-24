const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('copy-all', function() {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('rename-css', function() {
  return gulp.src('src/style.css')
    .pipe(rename('lexarIcons.css'))
    .pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', gulp.series('copy-all', 'rename-css'));