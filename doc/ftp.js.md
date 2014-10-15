# ftp.js
--------

Upload files to an FTP-server

## Options

**options.host**
*Required*
Type: `string`

**options.port**
Type: `number`
Default: `21`

**options.user**
Type: `string`
Default: `'anonymous'`

**options.pass**
Type: `string`
Default: `'@anonymous'`

**options.remotePath**
Type: `string`
Default: `'/'`

## Tasks

It includes 1 single task explained below:

### ftp

This task will initiate FTP transfer between local to server

It includes the following Gulp Plugins:

 - [gulp-ftp](https://www.npmjs.org/package/gulp-ftp)

#### Usage

`gulp ftp`