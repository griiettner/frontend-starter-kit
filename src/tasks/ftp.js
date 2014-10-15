 /**
 * Upload files to an FTP-server
 *
 * @return
 */

'use strict';

var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

// Production path
var pathProd      = gconf.pathProd + "/*";

var ftpOpt        = {
                        host:       'website.com',
                        user:       'johndoe',
                        pass:       '1234',
                        port:       '21',
                        remotePath: 'htdocs'
                    };

/**
 * This task will initiate FTP transfer between local to server
 */
gulp.task('ftp', function () {
    return gulp.src(pathProd)
        .pipe(plugins.ftp(ftpOpt));
});