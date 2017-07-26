var	gulp = require('gulp');
var plumber = require('gulp-plumber');
var extender = require('gulp-html-extend');
var config = require('../config');
var paths = config.paths;


gulp.task('html', function() {
	return gulp.src([paths.pages + '*.html'])
		.pipe(plumber())
		.pipe(extender({
			verbose:false,
			root:'./'
		}))
		.pipe(gulp.dest(paths.pagestout));
});