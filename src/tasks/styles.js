/**
 * Process, minify and copy all style to build path.
 *
 * @return {[type]} [description]
 */

'use strict';

// Dependencies
var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

/* Variables to define paths and plugins options */

// Is it to watch for LESS changes?
var watch         = true;

// Folder where the CSS will be compiled
var outpuFolder   = 'css/'; // Must have foward slash at the end

// LESS compiled output file. It must have .css at the end
var outputFile    = 'style.css';

// LEES files to be compiled, it is an array and can be more than one
var files         = [
                        gconf.pathSrc + "less/style.less",
                        gconf.pathSrc + "less/theme.less"
                    ];

// Options for autoprefixer
var autoprefixerOpt = [
                        "android >= 4.4",
                        "bb >= 10",
                        "chrome >= 34",
                        "ff >= 30",
                        "ie >= 8",
                        "ie_mob >= 10",
                        "ios >= 7",
                        "opera >= 23",
                        "safari >= 7"
                    ];

var pleeeaseOpt   = {
                        rem: ["10px",
                            {
                                "replace": true
                            }
                        ],
                        next: false,
                        import: false,
                        opacity: true,
                        minifier: false,
                        mqpacker: true,
                        sourcemaps: true,
                        autoprefixer: true,
                        pseudoElements: true,
                        filters:
                        [
                            true,
                            {
                                "oldIE": true
                            }
                        ]
                    };

// Task to run in sequence on 'styles' and 'styles-watch'
var sequence      = [
                        "styles-raw",
                        "styles-min"
                    ];

// Options for gulp-cssbeautify
var cssbeautifyOpt= {
                        indent: '    ',
                        openbrace: 'end-of-line',
                        autosemicolon: true
                    };

// Options for gulp-less'
var lessOpt       = {
                        strictMath: true
                    };

// Options for gulp-minify-css
var minifyCssOpt  = {
                        keepSpecialComments: 0,
                        keepBreaks: false
                    };

// Array of file to watch
var watchFiles    = [
                        gconf.pathSrc + "less/**/*",
                        gconf.pathSrc + "less/*"
                    ];

// Paths
var devPath       = gconf.pathDev + outpuFolder; // Path to Dev folder
var prodPath      = gconf.pathProd + outpuFolder; // Path to Production folder
var cssPath       = devPath + outputFile; // Path to Unminified CSS

/**
* This task will generate a non minified CSS version with source maps to original
* LESS file to make easier to debug and find properties to edit using Chrome DevTools.
*/
gulp.task('styles-raw', function() {
    console.log('###### --- Creating Uninified Style Files in ' + cssPath +' ---');
    return gulp.src(files)
        .pipe(plugins.less(lessOpt))
        .pipe(plugins.pleeease(pleeeaseOpt))
        .pipe(plugins.cssbeautify(cssbeautifyOpt))
        .pipe(gulp.dest(devPath));
});

/**
* As you already figured out, this task will minify the CSS file for production and will
* generate the file on `dist/css/` folder. This has dependency of `style-raw` task,
* because the unminified CSS file is needed in order to minify it.
*/
gulp.task('styles-min', ['styles-raw'], function() {
    console.log('###### --- Creating Minified Style Files in ' + prodPath + '/' + outputFile +' ---');
    return gulp.src(cssPath)
        .pipe(plugins.minifyCss(minifyCssOpt))
        .pipe(gulp.dest(prodPath));
});


/**
* Its initiate the watch process for styles only. It does not start server, it only
* watches for changes on LESS files within the source folder.
*/
gulp.task('styles-watch', function () {

    if (watch == true) {
        gulp.watch(watchFiles, { interval: 500 }, ['styles-raw', 'server-reload']);
    } else {
        console.log('###### --- Not Watching Styles ---');
    }

});

/**
* It is the default task for styles.js, where it runs the main task to generate the
* unminified and minified version of CSS
*/
gulp.task('styles', ['styles-min']);
