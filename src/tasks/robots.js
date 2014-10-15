/* robots.txt generator
 *
 * @return
 */

// Dependencies
var gulp          = require('gulp');
var robots        = require('robots-generator');
var gconf         = require('../../gulpconfig.json');

// Dev path
var devPath       = gconf.pathProd;

/**
 * Simply require the module and execute it with an optional array of configuration.
 *
 * User-Agent: A means of identifying a specific crawler or set of crawlers.
 * Allow: A directory or set of directories that a crawler is allowed to access.
 * Disallow: A directory or set of directories that a crawler is not allowed to access.
 * URL: Your website's URL (required, used for sitemap reference).
 * Out: The destination path.
 * Callback: Function to execute upon completion (parameters are 'error' and 'response').
 *
 * Allow and Disallow can be an array, a string or null (not added to the file). Defaults are shown below:
 * @type {Object}
 */
var robotsOpt     = {
                        useragent: '*',
                        allow: null,
                        disallow: 'cgi-bin/',
                        url: null,
                        out: devPath,
                        callback: null
                    };

gulp.task('robots', function() {
    return robots(robotsOpt);
});