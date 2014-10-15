# images.js
--------

This file has the tasks responsible to optimize the images and watch for any change with images folders

Requires ImageMagick which you can get through Brew with (Mac Only):

```
brew install imagemagick
```

Windows users can download the installer from [this link](http://www.imagemagick.org/script/binary-releases.php#windows)

## Tasks

It includes 5 different tasks and they are listed and explained below:

### images-rwi

This will process images inside of an specific folder `src/img/rwi` to make them responsive. All images inside this folder will be processed

> **NOTE**
> This feature can be enable or disable on the config area of the `images.js` file

It includes the following Gulp Plugins:

 - [rwi](https://www.npmjs.org/package/rwi)

#### Usage

`gulp images-rwi`

### images-raw

This task will copy all images within `src/img` folder to Development `dev/img` folder uncompressed

It includes the following Gulp Plugins:

 - [gulp-newer](https://www.npmjs.org/package/gulp-newer)

#### Usage

`gulp images-raw`

### images-min

This task will optimize images within `src/img`folder and copy a smaller version to  Production `dist/img`folder

It includes the following Gulp Plugins:

 - [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin)
 - [gulp-size](https://www.npmjs.org/package/gulp-size)

#### Usage

`gulp images`

### images-watch

Its initiate the watch process for the files listed on the options section of `images.js`. It does not start server, it only watches for changes on the files within the source folder.

#### Usage

`gulp images-watch`

### images

This task will start all the tasks to get images to Development `dev/img` and Production `dist/img` folders

#### Usage

`gulp images`
