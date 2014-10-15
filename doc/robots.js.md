# robots.js
--------

Robots.txt generator. Produces a simple, valid robots.txt to be parsed by web crawlers. Adheres to the specification provided by Google, however currently only supports one User-Agent rule.

## Options

**options.useragent**
Type: `string`
Default: `*`
Desc: A means of identifying a specific crawler or set of crawlers

**options.allow**
Type: `string` or `array`
Default: `null`
Desc: A directory or set of directories that a crawler is allowed to access

**options.disallow**
Type: `string` or `array`
Default: `cgi-bin/`
Desc:  A directory or set of directories that a crawler is not allowed to access

**options.url**
Type: `string`
Default: `null`
Desc:  Website's URL (required, used for sitemap reference)

**options.out**
Type: `string`
Defaut: `''`
Desc:  The destination path

**options.callback**
Type: `string`
Defaut: `null`
Desc:  Function to execute upon completion (parameters are 'error' and 'response')

**An example of the output file**
````
User-agent: *
Disallow: cgi-bin/
```
## Tasks

It includes 1 single task explained below:

### robots

This task will generate the robots.txt based on the params.

It includes the following Gulp Plugins:

 - [gulp-robots](https://www.npmjs.org/package/gulp-robots)

#### Usage

`gulp robots`