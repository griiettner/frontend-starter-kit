// # scripts.js
// --------

// This file you can find all the tasks related to JavaScript, where it concatenates all JS files and minify the JS file for production.


'use strict';
// ##Dependencies

// Gulp
var gulp          = require('gulp');
// Gulp Plugins
var plugins       = require('gulp-load-plugins')();
// Configuration file
var gconf         = require('../../gulpconfig.json');

// ##Paths and plugins options

// Is it to watch for .js changes?
// Settting to `false` will stop the watch process for JavaScript files.
var watch         = true;

// Folder where the JavaScript will be compiled (Must have foward slash `/` at the end)
var outpuFolder   = 'js/';

// JavaScript concatenated output file (It must have `.js` at the end)
var outputFile    = 'script.js';

// JS files to be concatenated, it is an array and can be more than one
var files         = [
                        gconf.pathSrc + "js/config.js",
                        gconf.pathSrc + "js/main.js"
                    ];

// Array of file to watch
var watchFiles    = [
                        "src/js/**/*",
                        "src/js/*"
                    ];

// ###Paths

// Path to Dev folder
var devPath       = gconf.pathDev + outpuFolder;

// Path to Production folder
var prodPath      = gconf.pathProd + outpuFolder;

// Path to Unminified JS
var jsPath        = devPath + outputFile;



// ## Tasks

// It includes 4 different tasks and they are listed and explained below:
// ### scripts-raw
// This task will generate a non minified JS version with source maps to original JS files to make easier to debug and find properties to edit using Chrome DevTools.
// It includes the following Gulp Plugins:
//  - [gulp-jshint](https://www.npmjs.org/package/gulp-jshint)
//  - [gulp-concat](https://www.npmjs.org/package/gulp-concat)
//  - [gulp-sourcemaps](https://www.npmjs.org/package/gulp-sourcemaps)

// #### Usage
// `gulp scripts-raw`
// ####Task Description

// Start Task with dependency on `jshint` task, that must run first.
gulp.task('scripts-raw', ['jshint'], function() {
    // Verbose the output path
    console.log('###### --- Creating Dev Script Files in ' + jsPath + '---');
    // Source path
    return gulp.src(files)
        // Initiate Source Maps
        .pipe(plugins.sourcemaps.init())
        // Concatenating JS files
        .pipe(plugins.concat(outputFile))
        // Writing Source Maps
        .pipe(plugins.sourcemaps.write())
        // Create output file
        .pipe(gulp.dest(devPath));
});


// ###scripts-min
// As you already figured out, this task will minify the JS file for production and will generate the file on `dist/js/` folder. This has dependency of `scripts-raw` task, because the unminified JS file is needed in order to minify it.
//
// It includes the following Gulp Plugins:
//  - [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)
//
// #### Usage
// `gulp scripts-min`
// ####Task Description

// Start Task with dependency on `scripts-raw` task, that must run first.
gulp.task('scripts-min', ['scripts-raw'], function() {
    // Verbose the output path
    console.log('###### --- Creating Minified Script Files in ' + prodPath + outputFile + '---');
    // Source path
    return gulp.src(jsPath)
        // Remove any console log from JS
        .pipe(plugins.stripDebug())
        // Minify JS file
        .pipe(plugins.uglify())
        // Create output file
        .pipe(gulp.dest(prodPath));
});


// ### scripts-watch
// Its initiate the watch process for scripts only. It does not start server, it only watches for changes on JS files within the source folder.
// #### Usage
// `gulp scripts-watch`
// ####Task Description

// Start Task with no dependency.
gulp.task('scripts-watch', function () {

    if (watch == true) {
        // If `watch` is set to `true`, start watch process
        return gulp.watch(watchFiles, { interval: 500 }, ['scripts-raw', 'server-reload']);
    } else {
        // If `watch` is set to `false`, vernose not watching
        console.log('###### --- Not Watching Scripts ---');
        return;
    }

});

// ### scripts
// It is the default task for scripts.js, where it runs the main task to generate the unminified and minified version of JS
// #### Usage
// `gulp scripts`
// ####Task Description

// Start Task with dependency on `scripts-min` task, that must run first.
gulp.task('scripts', ['scripts-min']);