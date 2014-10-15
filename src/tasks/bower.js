/**
 * Run bower update on current directory.
 * Uses bower.json in root directory
 *
 * @param
 * @returns
 */

'use strict';

var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy: false});
var gconf = require('../../gulpconfig.json');
var bower_ran = false;

gulp.task('bower', function() {
    if (!bower_ran) {
        return plugins.bower();
        bower_ran = true;
    } else {
        return;
    }
});