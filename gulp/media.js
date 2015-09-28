/* media task */
var config = require('./_config.js');

module.exports = function (gulp) {

	gulp.task('media', function () {
	    gulp.src(config.media)
	        .pipe(gulp.dest("build/media"));
	});

}