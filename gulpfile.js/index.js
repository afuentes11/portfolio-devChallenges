const { series, parallel } = require('gulp')
const { lintSass, compileSass, watchSass } = require('./gulpfile-css.js')
const { initBrowserSync, watchBrowserSync } = require('./gulpfile-browserSync.js')
const { transpileJS, watchJS } = require('./gulpfile-js')

exports.default = series(
  initBrowserSync,
  parallel(compileSass, transpileJS),
  parallel(watchSass, watchJS),
  watchBrowserSync
)
exports.lintSass = lintSass
