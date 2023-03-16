const { watch } = require('gulp')
const browserSync = require('browser-sync').create()

/**
 * This function will initialize BrowserSync and serve the contents of the build directory.
 */
async function initBrowserSync () {
  browserSync.init({
    server: './build'
  })
}

/**
 * Watch for changes to the HTML files in the build directory and reload the browser when a change is
 * detected.
 */
async function watchBrowserSync () {
  watch('./build/*.html').on('change', browserSync.reload)
}

module.exports = {
  browserSync,
  initBrowserSync,
  watchBrowserSync
}
