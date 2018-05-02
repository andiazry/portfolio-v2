var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', ['sass'], function() {
  bs.init({
    server: {
      baseDir: './'
    },
    browser: 'google chrome'
  });
});

gulp.task('sass', function() {
  return gulp
    .src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('*.html').on('change', bs.reload);
});
