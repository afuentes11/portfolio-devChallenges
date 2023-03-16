const { src, dest, watch } = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const { browserSync } = require('./gulpfile-browserSync.js')

/**
 * Transpile and minify the JavaScript code.
 * @returns The result of the src() function.
 */
function transpileJS () {
  return src('./js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(plumber()) /* It prevents the watch task from stopping when an error occurs. */
    .pipe(babel({
      presets: ['@babel/env'] /* Transpiling the JavaScript code to ES5. */
    }))
    .pipe(uglify()) /* It minifies the JavaScript code. */
    .pipe(rename({ suffix: '.min' })) /* It adds the `.min` suffix to the minified JavaScript file. */
    .pipe(sourcemaps.write('.')) /* It creates a sourcemap file for the minified JavaScript file. */
    .pipe(dest('./build/js')) /* Saving the transpiled and minified JavaScript code to the `./build/js` folder. */
    .pipe(browserSync.stream()) /* It reloads the browser when the JavaScript code is transpiled and minified. */
}

/**
 * Watch for changes in the JavaScript code.
 */
function watchJS () {
  watch('./js/**/*.js', transpileJS)
}

module.exports = {
  transpileJS,
  watchJS
}