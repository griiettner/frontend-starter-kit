/**
 * http server.
 *
 * @return {[type]} [description]
 */

'use strict';

var gulp          = require('gulp');
var gconf         = require('../../gulpconfig.json');
var browserSync   = require('browser-sync');

/**
 * Note: Make sure only one of the path variables is uncommented
 *
 */
//var path = gconf.pathProd; // uncomment this line to serve production ready content
var path          = gconf.pathDev; // uncomment this line to serve development/uncompressed content

var browserSyncOpt= {
                        server: {
                            baseDir: path,
                            directory: false,
                            index: "index.html"
                        },
                        port: 8080,
                        open: true
                    }

gulp.task('server', function() {
    console.log('###### --- Running webserver from ' + path + ' ---');
    browserSync(browserSyncOpt);
});

// add ['server-reload'] to your watch tasks to reload
gulp.task('server-reload', function() {
	browserSync.reload();
});

