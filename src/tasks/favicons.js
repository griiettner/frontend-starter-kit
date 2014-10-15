/**
 * This task will generate all favicon files based on
 * option set on `gulpconfig.json` file
 */
'use strict';

var gulp          = require('gulp');
var gconf         = require('../../gulpconfig.json');
var fconf         = gconf.favicons;
var favicons      = require('favicons');

/**
 * This task will generate all the favicons files
 */
gulp.task('favicons', function() {
    console.log('###### --- Generating Favicons to ' + fconf.dest + ' ---');
    return favicons({
        // I/O
        source:         fconf.source,
        dest:           fconf.dest,

        // Icon Types
        android:        fconf.android,
        apple:          fconf.apple,
        coast:          fconf.coast,
        favicons:       fconf.favicons,
        firefox:        fconf.firefox,
        windows:        fconf.windows,

        // Miscellaneous
        html:           fconf.html,
        background:     fconf.background,
        tileBlackWhite: fconf.tileBlackWhite,
        manifest:       fconf.manifest,
        trueColor:      fconf.trueColor,
        logging:        fconf.logging,
        callback:       fconf.callback
    });
});
