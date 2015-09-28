/* config for gulp variables */
var gulp = require('gulp');
module.exports = {
	 html: "src/*.html",
    media: "src/media/**/*",
    script: "src/script/**/*.js", 
    mainFile: "src/script/main.js",
    browserifyConfig: {
    	transform: ["reactify"],
    	debug:!gulp.env.production
    }
}

