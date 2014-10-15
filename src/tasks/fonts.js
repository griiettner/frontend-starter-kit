/**
 * Convert font files to Base64 winthin CSS
 *
 * @return {[type]} [description]
 */

'use strict';

// Dependencies
var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

/* Variables to define paths and plugins options */

// Is it to watch for filechanges?
var watch         = true;

// Dev path
var devPath       = gconf.pathDev;

var destPath      = gconf.pathSrc + "less/fonts/";

var files         = [
                        gconf.pathSrc + "vendors/bootstrap/fonts/*.ttf",
                        gconf.pathSrc + "fonts/*.ttf"
                    ];

// Options for gulp-cssbeautify
var cssbeautifyOpt= {
                        indent: '    ',
                        openbrace: 'end-of-line',
                        autosemicolon: true
                    };

/**
 * This task will convert fonts to base64
 */
gulp.task('fonts', function () {
    console.log('###### --- Converting fonts to base64 on CSS ---');
    return gulp.src(files)
        .pipe(plugins.cssfont64())
        .pipe(plugins.cssbeautify(cssbeautifyOpt))
        .pipe(gulp.dest(destPath));
});

/**
 * Its initiate the watch process for fonts only. It does not start server,
 * it only watches for changes on fonts files within the source folder.
 */
gulp.task('fonts-watch', function () {

    if (watch == true) {
        gulp.watch(files, { interval: 500 }, ['fonts', 'server-reload']);
    } else {
        console.log('###### --- Not Watching Fonts ---');
    }

});