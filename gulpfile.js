var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var AutoPrefixPlugin = require('less-plugin-autoprefix');
var autoprefix = new AutoPrefixPlugin({
	browsers: ['last 2 versions']
});

var HTML = '*.html';
var IMAGES = './libs/img/**/*';
var STYLES = './libs/styles/**/*.less';
var SCRIPTS = './libs/scripts/**/*.js';
var FONTS = './libs/fonts/**/*';

gulp.task('img', function() {
	return gulp.src(IMAGES)
		.pipe(plumber())
		.pipe(gulp.dest('./out/img'));
});

gulp.task('html', function() {
	return gulp.src(HTML)
		.pipe(plumber())
		.pipe(gulp.dest('./out'));
});

gulp.task('fonts', function() {
	return gulp.src(FONTS)
		.pipe(plumber())
		.pipe(gulp.dest('./out/fonts'));
});

gulp.task('scripts', function() {
	return gulp.src(SCRIPTS)
		.pipe(plumber())
		.pipe(gulp.dest('./out/scripts'));
});

gulp.task('styles', function() {
	return gulp.src(STYLES)
		.pipe(plumber())
		.pipe(less({
			plugins: [autoprefix]
		}))
		// .pipe(minifyCSS())
		.pipe(gulp.dest('./out/css'));
});

gulp.task('watch', function() {
  gulp.watch(HTML, ['html']);
  gulp.watch(IMAGES, ['img']);
  gulp.watch(STYLES, ['styles']);
  gulp.watch(SCRIPTS, ['scripts']);
});

gulp.task('default', ['img', 'styles', 'scripts', 'fonts', 'html']);
