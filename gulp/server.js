/* server task */
var gls = require('gulp-live-server');

module.exports = function (gulp) {

	gulp.task('server', function(){
		var server = gls.static('./build', 3001);
		server.start();
	});
}