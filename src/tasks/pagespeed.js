/**
 * Run PageSpeed Insights.
 *
 * @return {[type]} [description]
 */

'use strict';

var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var gconf         = require('../../gulpconfig.json');
var pagespeed     = require('psi');

var pagespeedOpt  = {
				        url: "http://besentient.com",
				        strategy: "mobile"
				    };

gulp.task('pagespeed', pagespeed.bind(null, pagespeedOpt));