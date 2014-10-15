 /**
 * Compile nunjucks templates
 *
 * @return
 */

'use strict';

var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

/* Variables to define paths and plugins options */

// Is it to watch for images changes?
var watch         = true;

// Source path
var pathSrc       = gconf.pathSrc;

// Dev path
var pathDev       = gconf.pathDev;

// Production path
var pathProd      = gconf.pathProd;

// Context to pass to the template
var context       = {
                        "config": {
                            "app_name": "App Name",
                            "webapp": true,
                            "base_url": "http://localhost:8080/",
                            "base_path": "",
                            "template_path": "templates/",
                            "facebook": {
                                "app_id": "[FB_APP_ID]"
                            },
                            "twitter": {
                                "site": "[TW_SITE]",
                                "site_id": "[TW_SITE_ID]"
                            },
                            "favicons": {
                                "enable": gconf.favicons.favicons,
                                "path": "img/favicons/",
                                "aplle": {
                                    "enable": gconf.favicons.apple
                                },
                                "android": {
                                    "enable": gconf.favicons.android
                                },
                                "windows": {
                                    "enable": gconf.favicons.windows
                                },
                                "coast": {
                                    "enable": gconf.favicons.coast
                                }
                            }
                        }
                    };

// Output path for the HTML files
var outputPath    = "";

// Files to be compiled
var files         = [
                        gconf.pathSrc + "views/**/*.html"
                    ];

// Array of file to watch
var watchFiles    = [
                        gconf.pathSrc + "views/**/*",
                        gconf.pathSrc + "views/*"
                    ];

// HTML minification options
var minifyHtmlOpt = {
                        "empty": true,
                        "cdata": true,
                        "comments": false,
                        "conditionals": true,
                        "spare": true,
                        "quotes": true
                    };

plugins.nunjucksRender.nunjucks.configure([pathSrc + "views/"]);

/**
* This task will compile the HTML templates using nunJuck template engine
*/
gulp.task('views-raw', function () {
    console.log('###### --- Creating Dev View Files in ' + pathDev + ' ---');
    return gulp.src(files)
        .pipe(plugins.nunjucksRender(context))
        .pipe(gulp.dest(pathDev));
});

/**
 * This task will get the generated HTML files and minify its code. It has
 * dependency in the task 'views-raw'
 */
gulp.task('views-min', ['views-raw'],function () {
    console.log('###### --- Creating Prod View Files in ' + pathProd + ' ---');
    return gulp.src(pathDev + '*.html')
        .pipe(plugins.minifyHtml(minifyHtmlOpt))
        .pipe(gulp.dest(pathProd));
});

/**
* Its initiate the watch process for views only. It does not start server, it only
* watches for changes on HTML files within the source folder.
*/
gulp.task('views-watch', function () {

    if (watch == true) {
        return gulp.watch(watchFiles, { interval: 500 }, ['views-raw', 'server-reload']);
    } else {
        return console.log('###### --- Not Watching Views ---');
    }

});

/**
* It is the default task for views.js, where it runs the main task to compile and
* generate the unminified and minified version of HTML
*/
gulp.task('views', ['views-min']);