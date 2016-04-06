 var gulp    = require('gulp'),
 gutil   = require('gulp-util');
 var ghPages = require('gulp-gh-pages');

 gulp.task('deploy', function() {
  return gulp.src(['./*.css', './*.txt', './*.md', './*.js', './*.html'])
     .pipe(ghPages());
  });
