/* html task */
var config = require('./_config.js');

module.exports = function (gulp) {

	gulp.task('html', function () {
	    gulp.src(config.html)
	        .pipe(gulp.dest("build"));
	});

}