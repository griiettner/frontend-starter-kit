/**
 * Lint JavaScript.
 *
 * @return {[type]} [description]
 */

'use strict';

// Dependencies
var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');
var browserSync   = require('browser-sync');

/* Variables to define paths and plugins options */

// Enable JS linting = true, to disable = false
var linting       = true;

// Path of folder to lint JS
var lintPath      = gconf.pathSrc + "js/**/*.js";

// Path of folders to be ignored
var lintIgnore    = gconf.pathSrc + "js/vendor/**/*";

/**
 * Initiate the process of JS linting
 * It has an if statement taht can be changed in the variables above
 */
gulp.task('jshint', function () {
    if (linting == true) {
        console.log('###### --- Linting JavaScript at ' + lintPath + ' ---');
        return gulp.src([lintPath, '!' + lintIgnore])
            .pipe(browserSync.reload({stream: true, once: true}))
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('jshint-stylish'))
            .pipe(plugins.if(!browserSync.active, plugins.jshint.reporter('fail')));
    } else {
        console.log('###### --- JS Lintings is Disabled ---');
        return;
    };
});