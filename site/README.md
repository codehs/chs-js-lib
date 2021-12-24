## The Static Site

This directory contains the files needed to generate the static site, which is hosted at codehs.github.io/chs-js-lib.

This site is built using a tool called eleventy, which will generate a site from templates. For more on eleventy, [see the documentation](https://www.11ty.dev/docs/).

## Building the Static Site

To build the static site, run `npm run site:watch`, which will do the following:

1. build the library and copy it into the `site/assets` folder
2. build documentation using `jsdoc` and copy it into the `site/docs` folder
3. run eleventy in "watch" mode, which will automatically rebuild when the templates change.

You can then run the site locally by navigating to `_site` and running a static server. If you have Python 2 installed, you should be able to run `python -m SimpleHTTPServer`, or with `node` you can run `npm install -g http-server` and `http-server`.

## Templates

The templates used for the static site are in the `_includes` folder as `.11ty.js` files. These are JavaScript files that export a function that will take data and return HTML from it.

## Content

Any `.md` or `.html` file in the `site` folder is turned into HTML (including this page!).

Directives at the top of the `.html` or `.md` file are used to describe the data that should be passed into the template and the template file which should be used.
