# Example hologram style guide
=========

This is an open source project to help developer start their fontend development fast and easy, allowing tools to do the har work, such as compile LESS, concatenate JS, generate Favicons, create a development folder `/dev` (where all files such as CSS, JS and HTML are not compressed and have source maps) and a distribution folder `dist` (where all files are minified and compressed for performance).

Dependencies
=========

NPM, Gulp and Bower globally.

```
sudo npm install -g gulp bower
```

Getting Started
=========

Clone this as the base of your new project (then remove the .git directory)

```
git clone https://github.com/griiettner/frontend-starter-kit.git YOUR_PROJECT
cd YOUR_PROJECT
rm -rf .git
```

Install the dependencies for your project.

```
npm install
```
Now just run ```gulp watch``` and open ```http://127.0.0.1:8080``` in a browser.

or any of the specific tasks

```
gulp
gulp watch
gulp build
gulp clean
gulp clean-dev
gulp clean-dist
gulp copy
gulp copy-dev
gulp copy-dist
gulp copy-watch
gulp favicons
gulp fonts
gulp fonts-watch
gulp ftp
gulp humans
gulp robots
gulp images
gulp images-rwi
gulp images-raw
gulp images-min
gulp images-watch
gulp jshint
gulp pagespeed
gulp scripts
gulp scripts-raw
gulp scripts-min
gulp scripts-watch
gulp server
gulp server-reload
gulp styles
gulp styles-raw
gulp styles-min
gulp styles-watch
gulp views
gulp views-raw
gulp viewss-min
gulp views-watch

```

Note: If you have Atom(http://atom.io) install the NPM Install and Gulp Helper packages. You will then just have to open the project and npm will install all the packages automatically, then press CTRL + OPTION(ALT) + G for gulp watch to run in the inline terminal.

Documentation
=========

Please refer to `doc` folder to find the documentation for each tasks, so you can have better understanting of what you can do.

Contribution
=========

We are open to hear what you have to say and to accept your help.

# License

This project is licensed under the MIT license.