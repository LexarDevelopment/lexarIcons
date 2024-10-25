const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

const baseUrl = 'https://lexarprojects.blob.core.windows.net/lexaricons/';

gulp.task('copy-and-modify-css', function() {
  return gulp.src('src/style.css')
    .pipe(replace(/url\('fonts\//g, `url('${baseUrl}fonts/`))
    // .pipe(rename('lexarIcons.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-other-files', function() {
  return gulp.src(['src/**/*', '!src/style.css'])
    .pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', gulp.series('copy-and-modify-css', 'copy-other-files'));