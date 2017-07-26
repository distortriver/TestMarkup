var gulp = require('gulp');
var	watcher = require('gulp-watch');
var	runSequence = require('run-sequence');
var config = require('../config');


var paths = config.paths;

gulp.task('watch', function() {
	watcher([paths.blocks + '**/*.scss'], function () {
		gulp.start('concat:scss');
	});

	watcher(paths.blocks + '**/*.js', function () {
		runSequence('concat:blockJs', 'concat:otherJs');
	});

	watcher(paths.localimg + '**/*.*', function () {
		gulp.start('concat:copyimg');
	});
	watcher([paths.sass + '**/*.scss', paths.tmp + '**/*.scss'], function () {
		gulp.start('sass');
	});

	watcher([paths.pages + '**/*.html', paths.blocks + '**/*.html'], function () {
		gulp.start('html');
	});
});
