# views.js
--------

This file has the tasks responsible to compile the HTML files using [Nunjuck Template Engine](http://mozilla.github.io/nunjucks/) and minify it on production for better performance.

## Tasks

It includes 4 different tasks and they are listed and explained below:


### views-raw

This task will compile the HTML files using Nunjucks.

It includes the following Gulp Plugins:

 - [gulp-nunjucksRender](https://www.npmjs.org/package/gulp-nunjucks-render)

#### Usage

`gulp views-raw`

### views-min

As you already figured out, this task will minify the HTML file for production for better performance. This has dependency of `views-raw` task, because the unminified HTML file is needed in order to minify it.

It includes the following Gulp Plugins:

 - [gulp-minify-html](https://www.npmjs.org/package/gulp-minify-html)

#### Usage

`gulp viewss-min`

### scripts-watch

Its initiate the watch process for views only. It does not start server, it only watches for changes on HTML files within the source folder.

#### Usage

`gulp views-watch`

### views

It is the default task for views.js, where it runs the main task to compile the HTML using Nunjucks and minify it for production.

#### Usage

`gulp views`

