var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var manifest = require('gulp-appcache');

var AutoPrefixPlugin = require('less-plugin-autoprefix');
var autoprefix = new AutoPrefixPlugin({
	browsers: ['last 2 versions']
});

var MARKUP = '*.php';
var IMAGES = './libs/img/**/*';
var FONTS = './libs/fonts/**/*';
var STYLES = './libs/styles/**/*.less';
var SCRIPTS = './libs/scripts/**/*.js';
var OUT = './out/**/*';

gulp.task('img', function() {
	return gulp.src(IMAGES)
		.pipe(plumber())
		.pipe(gulp.dest('./out/img'));
});

gulp.task('fonts', function() {
	return gulp.src(FONTS)
		.pipe(plumber())
		.pipe(gulp.dest('./out/fonts'));
});

gulp.task('markup', function() {
	return gulp.src(MARKUP)
		.pipe(plumber())
		.pipe(gulp.dest('./out'));
});

gulp.task('scripts', function() {
	return gulp.src(SCRIPTS)
		.pipe(plumber())
		.pipe(gulp.dest('./out/scripts'));
});

gulp.task('styles', function() {
	return gulp.src([STYLES])
		.pipe(plumber())
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./out/css'));
});

gulp.task('manifest', function(){
  gulp.src(OUT)
    .pipe(manifest({
      hash: true,
      preferOnline: true,
      network: ['http://*', 'https://*', '*'],
      filename: 'cache.manifest',
      exclude: ['cache.manifest', 'sendmail.php']
     }))
    .pipe(gulp.dest('./out'));
});

gulp.task('watch', function() {
  gulp.watch(MARKUP, ['markup']);
  gulp.watch(IMAGES, ['img']);
  gulp.watch(STYLES, ['styles']);
  gulp.watch(FONTS, ['fonts']);
  gulp.watch(SCRIPTS, ['scripts']);
});

gulp.task('default', ['img', 'styles', 'fonts', 'scripts', 'markup']);
