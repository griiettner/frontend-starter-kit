# scripts.js
--------

This file you can find all the tasks related to JavaScript, where it concatenates all JS files and minify the JS file for production.


## Tasks

It includes 4 different tasks and they are listed and explained below:


### scripts-raw

This task will generate a non minified JS version with source maps to original JS files to make easier to debug and find properties to edit using Chrome DevTools.

It includes the following Gulp Plugins:

 - [gulp-jshint](https://www.npmjs.org/package/gulp-jshint)
 - [gulp-concat](https://www.npmjs.org/package/gulp-concat)
 - [gulp-sourcemaps](https://www.npmjs.org/package/gulp-sourcemaps)

#### Usage

`gulp scripts-raw`

### scripts-min

As you already figured out, this task will minify the JS file for production and will generate the file on `dist/js/` folder. This has dependency of `scripts-raw` task, because the unminified JS file is needed in order to minify it.

It includes the following Gulp Plugins:

 - [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)

#### Usage

`gulp scripts-min`

### scripts-watch

Its initiate the watch process for scripts only. It does not start server, it only watches for changes on JS files within the source folder.

#### Usage

`gulp scripts-watch`

### scripts

It is the default task for scripts.js, where it runs the main task to generate the unminified and minified version of JS

#### Usage

`gulp scripts`