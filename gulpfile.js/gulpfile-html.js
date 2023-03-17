const { src, dest, watch } = require('gulp')
const htmlmin = require('gulp-htmlmin')

async function minifyHtml () {
  return src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./build'))
}

async function watchHtml () {
  watch('./index.html', minifyHtml)
}

module.exports = {
  minifyHtml,
  watchHtml
}
