const { parallel } = require('gulp')
const compileSass = require('./compileSass.js')

exports.default = parallel(compileSass)
