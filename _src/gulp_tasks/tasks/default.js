var gulp = require('gulp');
var	runSequence = require('run-sequence');
var config = require('../config');

gulp.task('default', function() {
	return runSequence(
		'concat',
		'html',
		'sass',
		'watch'
	);
});
