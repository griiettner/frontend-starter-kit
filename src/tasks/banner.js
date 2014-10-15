'use strict';

function banner() {
  var stamp = [
    '/**',
    //' * <%= pkg.name %> - <%= pkg.description %>',
    //' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>',
    ' * @version v<%= pkg.version %>',
    ' * @link http://besentient.com',
    ' * @license BSD',
    ' */',
    ''
  ].join('\n');

  return plugins.header(stamp, {
    pkg: pkg
  });
}