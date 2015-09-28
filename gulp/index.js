
var gulp = require('gulp');

// load & register tasks
var server = require('./server')(gulp);
var script = require('./script')(gulp);
var html   = require('./html')(gulp);
var media  = require('./media')(gulp);
var watchdog = require ('./watchdog')(gulp);


// group loaded tasks
gulp.task("watch", ["script", "html", "media", "watchdog", "server"]);
gulp.task("prod", ["script", "html", "media"]);
gulp.task("default", ["script", "html", "media"]);
