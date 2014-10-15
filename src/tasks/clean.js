gulp /**
 * Clear directory before compiling.
 *
 * @return {[type]} [description]
 */

'use strict';

// Dependencies
var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

/* Variables to define paths and plugins options */

// To enable clean = true, to disable it = false
var clean         = true;

// Path of development folder to be wiped
var devPath       = gconf.pathDev + '*';

// Path to production folder to be wiped
var prodPath      = gconf.pathProd + '*';

// Sequence of tasks
var sequence      = [
                        "clean-dev",
                        "clean-dist"
                    ];

/**
 * This task will wipe out all files within `dev`folder
 */
gulp.task('clean-dev', function() {
    if (clean == true) {
        console.log('###### --- Cleaning Dev Folder ' + devPath + ' ---');
        return gulp.src(devPath, { read: false })
            .pipe(plugins.rimraf());
    } else {
        console.log('###### --- Cleaning Dev Folder is Disabled ---');
        return;
    };
});

/**
 * This task is very similar to `clean-dev`, matter effect, it is
 * identical, the only difference is that it will wipe the `dist`folder.
 */
gulp.task('clean-dist', function() {
    if (clean == true) {
        console.log('###### --- Cleaning Prod Folder ' + prodPath + ' ---');
        return gulp.src(prodPath, { read: false })
            .pipe(plugins.rimraf());
    } else {
        console.log('###### --- Cleaning Dist Folder is Disabled ---');
        return;
    };
});

/**
 * It is the default task for clean.js, where it runs both tasks above.
 */
gulp.task('clean', sequence);