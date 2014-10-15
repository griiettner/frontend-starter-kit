/* Humans.txt generator
 *
 * @return
 */

// Dependencies
var gulp          = require('gulp');
var humans        = require('humans-generator');
var gconf         = require('../../gulpconfig.json');

// Dev path
var devPath       = gconf.pathProd;

/**
 * Simply require the module and execute it with an optional array of configuration.
 *
 * Header: Your website's title to be converted to ASCII art!
 * Team: Details about you and your team.
 * Thanks: People you'd like to thank.
 * Site: Details about the site (standards, components and software);
 * Note: A small note to add at the end.
 * Out: The destination path.
 * Callback: Function to execute upon completion (parameters are 'error', 'response' and 'data').
 *
 * Team, Thanks, Site and Note can be a String, Array or Hash. Defaults are shown below:
 * @type {Object}
 */
var humansOpt     = {
                        header: 'Site Name Here',
                        team: {
                            'Jon Doe': {
                                'Role': 'Developer',
                                'Twitter': '@JonDoe',
                                'Email': 'jdoe@besentient.com'
                            },
                            'Jane Doe': {
                                'Role': 'Producer',
                                'Twitter': '@JaneDoe',
                                'Email': 'jadoe@besentient.com'
                            },
                            'Jack Doe': {
                                'Role': 'Designer',
                                'Twitter': '@JaneDoe',
                                'Email': 'jadoe@besentient.com'
                            }
                        },
                        thanks: [
                            'Rohan Tucker <rtucker@besentient.com>'
                        ],
                        site: {
                            'Standards': 'HTML5, CSS3',
                            'Components': 'jQuery, Normalize.css',
                            'Software': 'Sublime, Node.JS, Gulp, Chrome DevTools'
                        },
                        note: 'Built with love by Sentient Interactive team (http://besentient.com).',
                        out: devPath
                    };

gulp.task('humans', function() {
    return humans(humansOpt);
});