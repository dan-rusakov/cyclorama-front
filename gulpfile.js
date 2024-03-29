const { src, series, parallel, dest, watch } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const gulpAutoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const inject = require('gulp-inject');
const compiler = require('webpack');
const webpack = require('webpack-stream');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const isDev = process.env.NODE_ENV === 'development';
const autoprefixerRules = ['> 1%', 'not ie 11', 'not dead'];


function html() {
  return src('./src/*.html')
    .pipe(inject(src('./dist/js/*.js', {read: false}), {
      transform: function (filepath) {
        return `<script src="${filepath.slice(5)}"></script>`;
      }
    }))
    .pipe(inject(src('./dist/css/*.css', {read: false}), {
      transform: function (filepath) {
        return `<link rel="stylesheet" href="${filepath.slice(5)}">`;
      }
    }))
    .pipe(dest('./dist/'))
    .pipe(browserSync.stream())
}

function css() {
  if (isDev) {
    return src('./src/css/app.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulpAutoprefixer())
      .pipe(sourcemaps.write())
      .pipe(rename('main.css'))
      .pipe(dest('./dist/css/'))
      .pipe(postcss([tailwindcss, autoprefixer]))
      .pipe(concat({ path: 'main.css'}))
      .pipe(dest('./dist/css/'))
      .pipe(browserSync.stream())
  } else {
    return src('./src/css/app.scss')
      .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(gulpAutoprefixer(autoprefixerRules))
      .pipe(rename('main.min.css'))
      .pipe(dest('./dist/css/'))
      .pipe(postcss([tailwindcss, autoprefixer(autoprefixerRules)]))
      .pipe(concat({ path: 'main.min.css'}))
      .pipe(cleanCSS())
      .pipe(dest('./dist/css/'))
  }
}

function js() {
  return src('./src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')), compiler)
    .pipe(dest('./dist/js'))
    .pipe(browserSync.stream());
}

function bundleJs() {
  return src('./src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(dest('./dist/js'))
}

function fonts() {
  return src('./src/fonts/**/*')
    .pipe(dest('./dist/fonts/'))
    .pipe(browserSync.stream())
}

function cleanDist() {
  return src('./dist/', { read: false, allowEmpty: true })
    .pipe(clean())
}

function img() {
  if (isDev) {
    return src('./src/img/*')
      .pipe(dest('./dist/img/'))
      .pipe(browserSync.stream())
  } else {
    return src('./src/img/*')
      .pipe(imagemin())
      .pipe(dest('./dist/img/'))
  }
}

function server() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
}

function watchFiles() {
  watch(['./src/css/**/*.scss'], css);
  watch(['./src/js/*.js'], js);
  watch(['./src/fonts/**/*'], fonts);
  watch(['./src/img/*'], img);
  watch(['./src/*.html'], series(html, css));
  server();
}

exports.build = series(cleanDist, parallel(css, fonts, img, bundleJs), html);
exports.default = series(cleanDist, parallel(css, fonts, img, js), html, watchFiles);
