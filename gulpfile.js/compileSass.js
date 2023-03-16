const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

async function compileSass () {
  return src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./built/css'))
}

module.exports = compileSass
