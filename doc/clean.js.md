# clean.js
--------

This task is responsible to wipe out all the content within folders `dev` and `dist`, so each time you have fresh files inside.

> **Note**:
> This can use some resource from your machine and can be turned off on the options variables within `clean.js`file.


## Tasks

It includes 3 different tasks and they are listed and explained below:


### clean-dev

This task will wipe out all files within `dev`folder

It includes the following Gulp Plugins:

 - [gulp-rimraf](https://www.npmjs.org/package/gulp-rimraf)

#### Usage

`gulp clean-dev`

### clean-dist

This task is very similar to `clean-dev`, matter effect, it is identical, the only difference is that it will wipe the `dist`folder.

> **Note**:
> One can argue why add 2 taks that does the same thing... The answer is that we want to give freedom to people to run separated task when ever they want.

It includes the following Gulp Plugins:

 - [gulp-rimraf](https://www.npmjs.org/package/gulp-rimraf)

#### Usage

`gulp clean-dist`

### clean

It is the default task for clean.js, where it runs both tasks mentioned above.

#### Usage

`gulp clean`