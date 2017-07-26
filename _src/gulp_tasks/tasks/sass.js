var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config');

var browsers = config.browsers;
var paths = config.paths;

gulp.task('sass', function () {
  gulp.src(['*.scss', '!_*.scss', 'helpers/*.scss', '!helpers/_*.scss'], {cwd: paths.sass})
    .pipe(sass({
    	outputStyle: 'expanded'
    }).on('error', sass.logError))
		.pipe(autoprefixer({
      browsers: browsers,
      cascade: true,
      remove: false
    }))
    .pipe(gulp.dest(paths.css));
});
