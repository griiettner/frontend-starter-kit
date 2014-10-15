# styles.js
--------

Here you can find all the tasks related to CSS, where it compile LESS files, Auto Prefix properties with appropriate vendors prefixes and minify the CSS file for production.


## Tasks

It includes 4 different tasks and they are listed and explained below:


### styles-raw

This task will generate a non minified CSS version with source maps to original LESS file to make easier to debug and find properties to edit using Chrome DevTools.

It includes the following Gulp Plugins:

 - [gulp-less](https://www.npmjs.org/package/gulp-less)
 - [gulp-pleeease](https://www.npmjs.org/package/gulp-pleeease)
 - [gulp-cssbeautify](https://www.npmjs.org/package/gulp-cssbeautify)

#### Usage

`gulp styles-raw`

### styles-min

As you already figured out, this task will minify the CSS file for production and will generate the file on `dist/css/` folder. This has dependency of `styles-raw` task, because the unminified CSS file is needed in order to minify it.

It includes the following Gulp Plugins:

 - [gulp-minify-css](https://www.npmjs.org/package/gulp-minify-css)

#### Usage

`gulp styles-min`

### styles-watch

Its initiate the watch process for styles only. It does not start server, it only watches for changes on LESS files within the source folder.

#### Usage

`gulp styles-watch`

### styles

It is the default task for styles.js, where it runs the main task to generate the unminified and minified version of CSS

#### Usage

`gulp styles`

