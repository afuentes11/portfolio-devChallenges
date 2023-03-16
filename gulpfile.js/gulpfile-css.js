const { src, dest, watch } = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const sassLint = require('gulp-sass-lint')
const sourcemaps = require('gulp-sourcemaps')
const { browserSync } = require('./gulpfile-browserSync.js')

/**
 * LintSass() is an async function that takes all the .scss files in the scss directory and its
 * subdirectories, pipes them through sassLint, formats the results, and fails the build if there are
 * any errors.
 * @returns The return value of the function is the stream that is being piped to.
 */
async function lintSass () {
  return src('./scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
}

/**
 * CompileSass() is an async function that takes the scss files in the scss folder, compiles them, adds
 * vendor prefixes, concatenates them into one file, minifies them, writes the sourcemaps, and outputs
 * them to the build/css folder.
 * @returns the result of the src() function.
 */
async function compileSass () {
  return src('./scss/**/*.scss')
    .pipe(sourcemaps.init()) /* It initializes the sourcemaps. */
    .pipe(plumber()) /* It prevents the watch task from stopping when an error occurs. */
    .pipe(sass().on('error', sass.logError)) /* compile sass code. */
    .pipe(autoprefixer()) /* It adds vendor prefixes to the css code. */
    .pipe(concat('style.css')) /* It concatenates all the css files into one file called style.css. */
    .pipe(cleanCSS()) /* It minifies the css code. */
    .pipe(sourcemaps.write('.')) /* It writes the sourcemaps to the same directory as the css file. */
    .pipe(dest('./build/css')) /* Taking the stream and writing it to the build/css folder. */
    .pipe(browserSync.stream()) /* It tells browserSync to reload the page when the css file is updated. */
}

/**
 * WatchSass() is an async function that initializes browserSync, watches for changes to the scss
 * files, and compiles the sass files.
 */
async function watchSass () {
  watch('./scss/**/*.scss', compileSass)
}

module.exports = {
  lintSass,
  compileSass,
  watchSass
}
