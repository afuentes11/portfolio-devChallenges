# GULP

Gulp is a tool that allows you to automate repetitive tasks in your web development workflow, such as CSS and JS file compilation, image optimization, automatic browser reloading and much more.

Imagine having to perform repetitive tasks like compiling your SASS files to CSS, concatenating and minifying your JS files, and optimizing your images for the web. Doing these tasks manually can be tedious and time-consuming, especially if you have a lot of files to manage.

Gulp allows you to automate these tasks by defining a series of "tasks" in a Gulp configuration file. These tasks can be configured to run automatically when they detect a change in the source files. In this way, you can save time and avoid errors by automating tasks that you previously had to do manually.

To learn more about gulp this is [the official documentation.](https://gulpjs.com/)
This tutorial was written following the following [youtube tutorial](https://www.youtube.com/playlist?list=PLM-Y_YQmMEqBscmoT5y_W91oUnr_D4ulf).

_The project must already be initialized with **npm init**_

## Installation

Install gulp globally and subsequently in the project with npm

```bash
npm install -g gulp
npm install gulp --save-dev
```

To use gulp in the project there are two options, with all the code in a single file gulpfile.js or in a folder called gulpfile.js whose entry point is an index.js file.

## Uses

Gulp allows to chain different automation actions. Thanks to this, it allows us to use a large number of libraries with which it is compatible, and thus be able to create workflows according to our specifications.
In order to make use of these libraries, gulp comes with a set of methods and functions that will allow us to create our workflows.

- **task**: Defines a Gulp task that can perform a variety of tasks, such as compiling Sass to CSS, minifying JS files or compressing images.
- **src**: Specifies the path to the files to be processed. This method returns a stream of files that can be used in the tasks.
- **dest**: Specifies the destination path for the processed files. This method is followed by a task that is responsible for processing the files.
- **watch**: Monitors changes to the specified files and executes a task when a change is detected.
- **series**: Used to execute tasks in series. The tasks are executed sequentially, one after the other.
- **parallel**: Used to execute tasks in parallel. The tasks are executed simultaneously.
- **pipe() method**: used in Gulp to connect tasks and transfer data from one stream to another.

## Usage/Examples

the following example reflects a workflow that automates the compilation of sass code to css and minification of the code. For this you will use multiple libraries, each one performing a different action.

To be able to use them it is important to install the libraries only in the development environment.

```bash
npm install --save-dev gulp-plumber gulp-sass gulp-clean-css gulp-autoprefixer gulp-concat gulp-sourcemaps
```

```javascript
const { src, dest, watch } = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");

/**
 * CompileSass() is an async function that takes the scss files in the scss folder, compiles them, adds
 * vendor prefixes, concatenates them into one file, minifies them, writes the sourcemaps, and outputs
 * them to the build/css folder.
 * @returns the result of the src() function.
 */
async function compileSass() {
  return src("./scss/**/*.scss")
    .pipe(sourcemaps.init()) /* It initializes the sourcemaps. */
    .pipe(
      plumber()
    ) /* It prevents the watch task from stopping when an error occurs. */
    .pipe(sass().on("error", sass.logError)) /* compile sass code. */
    .pipe(autoprefixer()) /* It adds vendor prefixes to the css code. */
    .pipe(
      concat("style.css")
    ) /* It concatenates all the css files into one file called style.css. */
    .pipe(cleanCSS()) /* It minifies the css code. */
    .pipe(
      sourcemaps.write(".")
    ) /* It writes the sourcemaps to the same directory as the css file. */
    .pipe(
      dest("./build/css")
    ); /* Taking the stream and writing it to the build/css folder. */
}
```

There are several ways to execute the function, the first is to execute it only once, and the second is to execute it every time changes are made to the selected file.

for both options it is important that the export of the final function is done in the gulpfile.js file or, failing that, in the index file of the gulpfile.js folder.

#### Run once only

```javascript
exports.compileSass = compileSass;
```

To execute the command would be as follows

```bash
npx gulp compileSass
```

#### Run each time one or more files are modified according to the specified path

```javascript
async function watchSass() {
  watch("./scss/**/*.scss", compileSass);
}

exports.watchSass = watchSass;
```

To execute the command would be as follows

```bash
npx gulp watchSass
```
