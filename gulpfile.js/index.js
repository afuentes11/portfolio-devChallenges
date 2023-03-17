const { series, parallel } = require('gulp')
const { lintSass, compileSass, watchSass } = require('./gulpfile-css.js')
const { initBrowserSync, watchBrowserSync } = require('./gulpfile-browserSync.js')
const { transpileJS, watchJS } = require('./gulpfile-js.js')
const { imgWebp, imgAvif, imgSameFormat } = require('./gulpfile-img.js')
const { minifyHtml, watchHtml } = require('./gulpfile-html.js')

exports.default = series(
  initBrowserSync,
  parallel(compileSass, transpileJS, minifyHtml),
  parallel(watchSass, watchJS, watchHtml),
  watchBrowserSync
)
exports.img = parallel(imgWebp, imgAvif, imgSameFormat)
exports.lintSass = lintSass
