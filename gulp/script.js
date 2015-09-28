/* script task*/

var config = require('./_config.js');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

module.exports = function (gulp) {
	gulp.task('script', function() {
    // Single entry point to browserify
    gulp.src(config.mainFile)
        .pipe(browserify(config.browserifyConfig))
        .pipe(uglify())
        .pipe(gulp.dest("build"));
	});

} 