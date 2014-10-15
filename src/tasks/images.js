/**
 * Optimize Images.
 *
 * @return {[type]} [description]
 */

'use strict';

// Dependencies
var gulp          = require('gulp');
var rwi           = require('rwi');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

/* Variables to define paths and plugins options */

// Is it to watch for images changes?
var watch         = true;

// Lossless conversion to progressive (JPG).
var progressive   = true;

// Interlace gif for progressive rendering (GIF).
var interlaced    = true;

var path          = gconf.pathSrc + "/img";

// Path to files to be optimized
var files         = [
			            path + "/**/*",
			            path + "/*"
			        ];

// Output folder to copy compressed images
var outputPath    = "img/";

// Dev path
var srcPath       = gconf.pathSrc + outputPath;

// Dev path
var devPath       = gconf.pathDev + outputPath;

// Production path
var prodPath      = gconf.pathProd + outputPath;

// Enable or disable responsive image conversion
var rwiEnable     = true;
/**
 * Simply require the module and execute it with an optional array of configuration.
 *
 * Source: The source image (or images array) used to produce the responsive images.
 * Sizes: The image sizes you want to produce.
 * IMG: The destination path for the images.
 * CSS: The destination path and filename for the media query CSS.
 * Upscale: Whether to resize a smaller image to a larger image.
 * Logging: Print logs to console.
 * Lossy: Whether to compress PNGs losslessly or not.
 * Callback: Function to execute upon completion.
 *
 * Source can be a string, array, glob or array of globs. Defaults are shown below:
 * @type {Object}
 */
var rwiOpt        = {
                        source: srcPath + 'rwi/*',
                        sizes: [
                            '1200',
                            '992',
                            '768',
                            '500'
                        ],
                        img: srcPath,
                        css: gconf.pathSrc + 'less/rwi.css',
                        upscale: false,
                        logging: true,
                        lossy: true,
                        callback: null
                    };


/**
 * Responsive web images generator
 * @return {[type]} [description]
 */
gulp.task('images-rwi', function() {
    if (rwiEnable == true) {
        console.log('###### --- Resizing responsive images to ' + devPath);
        return rwi(rwiOpt);
    } else {
        console.log('###### --- No responsive images');
    }
});

/**
 * This task will copy all images within `src/img`folder
 * to`dev/img`folder uncompressed
 */
gulp.task('images-raw', ['images-rwi'], function() {
    console.log('###### --- Copy Images to' + devPath);
    return gulp.src(files)
        .pipe(plugins.newer(devPath))
        .pipe(gulp.dest(devPath));
})

/**
 * This task is the task to optimize images within
 * `src/img`folder and copy a smaller version to `dev/img`and `dist/img`folders
 */
gulp.task('images-min', function () {
    console.log('###### --- Optimizing Images');
    return gulp.src(files)
        .pipe(plugins.imagemin({
            progressive: progressive,
            interlaced: interlaced
        }))
        .pipe(gulp.dest(prodPath))
        .pipe(plugins.size({title: 'images'}));
});

/**
 * Its initiate the watch process for the files listed on the options
 * section of `images.js`. It does not start server, it only watches
 * for changes on the files within the source folder.
 */
gulp.task('images-watch', function () {

    if (watch == true) {
        return gulp.watch(files, { interval: 500 }, ['images-raw', 'server-reload']);
    } else {
        return console.log('###### --- Not Watching Images ---');
    }

});

gulp.task('images', ['images-raw', 'images-min']);