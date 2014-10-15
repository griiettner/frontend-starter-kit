# fonts.js
--------

Encode base64 data from font-files and store the result in a css file

## Tasks

It includes 2 different tasks and they are listed and explained below:

### fonts

This task will convert fonts to base64

It includes the following Gulp Plugins:

 - [gulp-cssfont64](https://www.npmjs.org/package/gulp-cssfont64)
 - [gulp-cssbeutify](https://npmjs.org/package/gulp-cssbeautify/)

#### Usage

`gulp fonts`

### fonts-watch

Its initiate the watch process for fonts only. It does not start server, it only watches for changes on fonts files within the source folder.

#### Usage

`gulp fonts-watch`