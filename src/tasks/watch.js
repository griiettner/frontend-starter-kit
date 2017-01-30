'use strict';

var gulp          = require('gulp');
var runSequence   = require('run-sequence');

gulp.task('watch', function(callback) {

    runSequence(
        [
            'copy-watch',
            'styles-watch',
            'scripts-watch',
            'views-watch'
        ],
        'server',
        callback
    );
});