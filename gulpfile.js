var gulp = require('gulp');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var karma   = require('gulp-karma');

gulp.task('default', ['minify-js', 'minify-css', 'minify-html'], function() {
});

gulp.task('default', ['minify-js', 'minify-css', 'minify-html'], function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});

gulp.task('test', function() {
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
 });

gulp.task('minify-js', function() {
 gulp.src(['vendor/*.js', '*.js', 'test/*.js', '*.js'])
   .pipe(minify({
       exclude: ['tasks'],
       ignoreFiles: ['.combo.js', '-min.js']
   }))
   .pipe(gulp.dest('minified'))
});

gulp.task('minify-css', function() {
 return gulp.src(['*.css','vendor/*.css'])
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('minified'));
})

gulp.task('minify-html', function() {
 return gulp.src('*.html','test/*.html')
   .pipe(htmlmin({collapseWhitespace: true}))
   .pipe(gulp.dest('minified'))
});

gulp.task('clean', function () {
	return gulp.src('minified/*', {read: false})
		.pipe(clean());
});
