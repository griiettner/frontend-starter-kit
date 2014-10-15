# humans.js
--------

Humans.txt generator. Produces a simple, valid humans.txt for you and your team.

## Options

**options.header**
Type: `string`
Desc: Your website's title to be converted to ASCII art!

**options.team**
Type: `object`
Desc: Details about you and your team

**options.thanks**
Type: `array`
Desc: People you'd like to thank

**options.site**
Type: `object`
Desc:  Details about the site (standards, components and software)

**options.note**
Type: `string`
Desc:  A small note to add at the end

**options.out**
Type: `string`
Desc:  The destination path

**An example of the output file**
````
  ____  _ _         _   _                        _   _
 / ___|(_) |_ ___  | \ | | __ _ _ __ ___   ___  | | | | ___ _ __ ___
 \___ \| | __/ _ \ |  \| |/ _` | '_ ` _ \ / _ \ | |_| |/ _ \ '__/ _ \
  ___) | | ||  __/ | |\  | (_| | | | | | |  __/ |  _  |  __/ | |  __/
 |____/|_|\__\___| |_| \_|\__,_|_| |_| |_|\___| |_| |_|\___|_|  \___|



/* TEAM */
Jon Doe:
	Role: Developer
	Twitter: @JonDoe
	Email: jdoe@besentient.com
Jane Doe:
	Role: Producer
	Twitter: @JaneDoe
	Email: jadoe@besentient.com
Jack Doe:
	Role: Designer
	Twitter: @JaneDoe
	Email: jadoe@besentient.com

/* THANKS */
Rohan Tucker <rtucker@besentient.com>

/* SITE */
Standards: HTML5, CSS3
Components: jQuery, Normalize.css
Software: Sublime, Node.JS, Gulp, Chrome DevTools

/* NOTE */
Built with love by Sentient Interactive team (http://besentient.com).
```
## Tasks

It includes 1 single task explained below:

### humans

This task will generate the human.txt based on the params.

It includes the following Gulp Plugins:

 - [gulp-humans](https://www.npmjs.org/package/gulp-humans)

#### Usage

`gulp humans`