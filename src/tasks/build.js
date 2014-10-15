 /**
 * This is the default gulp task, where it buils de entire project
 *
 * @return
 */

'use strict';

// Dependencies
var gulp          = require('gulp');
var gconf         = require('../../gulpconfig.json');
var runSequence   = require('run-sequence');

/**
 * This task will run a sequence of tasks to build the project
 */
gulp.task('build', function(callback) {
    console.log('###### --- Building the project... ---');
    return runSequence(
        'clean',
        'styles',
        'scripts',
        'favicons',
        'images',
        'views',
        'copy',
        'humans',
        'robots',
        callback
    );
});
