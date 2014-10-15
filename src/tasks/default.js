 /**
 * This is the default gulp task, where it buils the
 * development branch of the project
 */

'use strict';

// Dependencies
var gulp          = require('gulp');
var gconf         = require('../../gulpconfig.json');
var runSequence   = require('run-sequence');

/**
 * This task will run a sequence of tasks to build the project
 */
gulp.task('default', function(callback) {
    console.log('###### --- Building the project... ---');
    return runSequence(
        'clean-dev',
        'styles-raw',
        'scripts-raw',
        'favicons',
        'images-raw',
        'views-raw',
        'fonts',
        'copy-dev',
        callback
    );
});
