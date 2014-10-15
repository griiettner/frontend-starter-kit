# server.js
--------

You are able to start your own local server for development using Node Module called BrowserSync, that enables you to sync the browse experience across multiples devices and browsers.


## Tasks

It includes 2 different tasks and they are listed and explained below:


### server

This task will start the server using default port `8080`, but you can change this and other parameters on `server.js`

It includes the following Gulp Plugins:

 - [browserSync](https://www.npmjs.org/package/browserSync)

#### Usage

`gulp server`

### server-reload

This task works as a dependency task to other tasks such as script and style, because it reload the browser on any change.

It includes the following Gulp Plugins:

 - [browserSync](https://www.npmjs.org/package/browserSync)

#### Usage

`gulp server-reload`