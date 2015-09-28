/* watchdog task */
var config = require('./_config.js');

module.exports = function (gulp) {

	gulp.task('watchdog', function () {
    	gulp.watch(config.script, ['script']);
    	gulp.watch(config.media, ['media']);
    	gulp.watch(config.html, ['html']);
	});
}