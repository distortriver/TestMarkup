var gulp = require('gulp');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var config = require('../config');

var paths = config.paths;

gulp.task('concat:vendorJs', function() {
  return gulp.src([paths.localjs + '**/*.html'])
    .pipe(concat('_vendor-js.html'))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('concat:otherJs', function() {
  var targets = [paths.localjs + '**/*.js'];
  return gulp.src(targets)
    .pipe(gulp.dest(paths.js));
});

gulp.task('concat:blockJs', function() {
	var targets = [paths.blocks + '**/*.js', paths.helpers+'blockTrigger.js'];
	 targets.push('!' + paths.blocks +'**/*.dummy.js');

  return gulp.src(targets)
    .pipe(concat('blocks.js'))
    .pipe(gulp.dest(paths.js));
});

gulp.task('concat:scss', function() {
  return gulp.src([paths.blocks + '**/*.scss'])
    .pipe(concat('_blocks.scss'))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('concat:copyimg', function() {
  return gulp.src([paths.localimg + '**/*.*'])
    .pipe(gulp.dest(paths.img));
});
gulp.task('concat', ['concat:blockJs', 'concat:otherJs', 'concat:vendorJs', 'concat:scss', 'concat:copyimg']);
