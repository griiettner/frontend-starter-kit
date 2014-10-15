# favicons.js
--------

This task will generate a multi-size favicon from a single image based on option set on `gulpconfig.json` file.

The base image can be found at `src/img/favicon.png` and have the size at least 400x400 px

Requires ImageMagick which you can get through Brew with (Mac Only):

```
brew install imagemagick
```

Windows users can download the installer from [this link](http://www.imagemagick.org/script/binary-releases.php#windows)

##Options

 - **I/O**
     - Source: The source image used to produce the favicon `string`
     - Dest: The destination path `string`
 - **Icons**
     - Android: create Android homescreen icon `boolean`
     - Apple: create Apple touch icons `boolean`
     - Coast: create Opera Coast icon `boolean`
     - Firefox: create Firefox OS icons `boolean`
 - **Miscellaneous**
     - HTML: optional file to write metadata links to string, typically    "index.html"
     - Background: background for Windows 8 tiles and Apple touch icons #`string`
     - TileBlackWhite: make white-only icon on Windows 8 tile `boolean`
     - Manifest: path to Firefox manifest you want to add links to icons string, typically "manifest.webapp"
     - TrueColor: use true color for favicon.ico or 256 сolor. True color is larger `boolean`
     - Logging: print logs to console `boolean`
     - Callback: function to execute upon completion function (params include 'response' and 'html')

## Tasks

It includes 1 single task and it is explained below:

### favicons

This task will generate all the favicons files

It includes the following Gulp Plugins:

 - [favicons](https://www.npmjs.org/package/favicons/)

#### Usage

`gulp favicons`