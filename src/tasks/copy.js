/**
 *  This task is responsible to copy all static files
 *  from `src/`folder to `dev/`and `dist/`folders.
 *  Because it is using the Gulp plugin `newer` it will
 *  pass through only those source files that are newer
 *  than corresponding destination files.
 */

// Dependencies
var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');

/* Variables to define paths and plugins options */

// Is it to watch for filechanges?
var watch         = true;

// Dev path
var devPath       = gconf.pathDev;

// Production path
var prodPath      = gconf.pathProd;

// Destination path. It is an array and can be more than one
var path          = [devPath, prodPath];

// Object with a list of files to be copied
var copyFiles     = {
                        "" : {
                            "files": [
                                gconf.pathSrc + "img/*"
                            ]
                        }
                    };

/**
 * This is the task to copy all static files from
 * `src/`folder to `dev/` folder only.
 */
gulp.task('copy-dev', function() {

    for (var outputPath in copyFiles) {
        console.log('###### --- Copying Dev Files to ' + devPath);
        gulp.src(copyFiles[outputPath].files)
            //.pipe(plugins.newer(devPath))
            .pipe(plugins.copy(devPath))
            .pipe(gulp.dest(devPath));
    }
    return;
});

/**
 * This is the task to copy all static files from
 * `src/`folder to `dist/` folder only.
 */
gulp.task('copy-dist', function() {

    for (var outputPath in copyFiles) {
        console.log('###### --- Copying Productions Files to ' + prodPath);
        gulp.src(copyFiles[outputPath].files)
            .pipe(plugins.newer(prodPath))
            .pipe(gulp.dest(prodPath));
    }
    return;
});

/**
 * This is the task that runs both previous tasks to
 * copy all static files from `src/`folder to `dev/`and `dist/`folders
 */
gulp.task('copy', ['copy-dev', 'copy-dist']);

/**
 * Its initiate the watch process for the files listed on the
 * options section above. It does not start server,
 * it only watches for changes on the files within the source folder.
 */
gulp.task('copy-watch', function () {

    if (watch == true) {
        for (var finalPath in path) {
            console.log('###### --- Copying Dev Files to ' + path[finalPath]);

            for (var outputPath in copyFiles) {
                return gulp.watch(copyFiles[outputPath].files, { interval: 500 }, ['copy', 'server-reload']);
            }
        }
        return;
    } else {
        return console.log('###### --- Not Watching Copy ---');
    }

});