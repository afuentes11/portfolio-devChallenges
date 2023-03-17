const { src, dest } = require('gulp')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const avif = require('gulp-avif')

async function imgSameFormat () {
  return src('img/**/*.{jpg,png,gif,svg}')
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({ plugins: [{ removeViewBox: false }] })
    ]))
    .pipe(dest('build/img'))
}

async function imgWebp () {
  return src('./img/**/*.*')
    .pipe(webp({ quality: 75 }))
    .pipe(dest('build/img'))
}

async function imgAvif () {
  return src('img/**/*.*')
    .pipe(avif({ quality: 75 }))
    .pipe(dest('build/img'))
}

module.exports = {
  imgSameFormat,
  imgAvif,
  imgWebp
}
