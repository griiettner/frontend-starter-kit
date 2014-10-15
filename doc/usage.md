# Usage

Once you have cloned or downloaded HTML5 Boilerplate, creating a site or app
usually involves the following:

1. Set up the basic structure of the site.
2. Add some content, style, and functionality.
3. Run your site locally to see how it looks (`gulp watch`).
4. (Optionally run a build script to automate the optimization of your site.
5. Deploy your site (`gulp build`).


## Basic structure

A basic build initially looks something like this:

```
.
├── css
│   └── style.css
├── img
│   ├── favicon.png
│   └── favicons
├── js
│   ├── script.js
│   └── vendor
│       ├── jquery.min.js
│       └── modernizr.min.js
├── .htaccess
├── 404.html
├── index.html
├── humans.txt
└── robots.txt
```

What follows is a general overview of each major part and how to use them.

### css

This directory should contain all your project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](css.md).

### js

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.md).

### .htaccess

The default web server configs are for Apache.

### 404.html

A helpful custom 404 to get you started.

### index.html

This is the default HTML skeleton that should form the basis of all pages on
your site. If you are using a server-side templating framework, then you will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Analytics, make sure that you edit the corresponding
snippet at the bottom to include your analytics ID.

### humans.txt

Edit this file to include the team that worked on your site/app, and the
technology powering it.

### robots.txt

Edit this file to include any pages you need hidden from search engines.

### Favicons

This will be generated automatically out of `img/favicon.png` using `gulp favicon` gulp task.
