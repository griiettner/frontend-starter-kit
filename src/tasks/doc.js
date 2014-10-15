/**
 * http server.
 *
 * @return {[type]} [description]
 */

'use strict';

var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

// Path of development folder to be wiped
var devPath       = gconf.pathDev;

var jsPath        = devPath + 'js/*.js';
var cssPath       = devPath + 'css/*.js';
var tasksPath     = 'src/tasks/*.js';

// Path to production folder to be wiped
var jsDocPath       = './doc/js';
var cssDocPath      = './doc/css';
var tasksDocPath    = './doc/tasks';

gulp.task('doc-js', function() {
    gulp.src(jsPath)
      .pipe(plugins.docco())
      .pipe(gulp.dest(jsDocPath));
});

gulp.task('doc-tasks', function() {
    gulp.src('src/tasks/*.js')
      .pipe(plugins.docco({layout: 'parallel'}))
      .pipe(gulp.dest(tasksDocPath));
});

gulp.task('hologram', function() {
    gulp.src('hologram_config.yml')
        .pipe(plugins.hologram({logging: true}));
});

