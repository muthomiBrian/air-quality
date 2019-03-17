const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const del = require('del');
const minify = require('gulp-minify');
const replace = require('gulp-replace');
const sass = require('gulp-sass');

function clean() {
  return del('dist');
}

function views() {
  return gulp.src('./src/views/*.html')
    .pipe(gulp.dest('./dist'));
}

function scripts() {
  return gulp.src(['./src/app/lib/**/!(*.spec.js)', './src/app/app.js'])
    .pipe(replace(/module.exports = [A-Za-z]+;/g, ''))
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist'));
}

function styles() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
}

function data() {
  return gulp.src('./src/data/*.json')
    .pipe(gulp.dest('./dist/data/'));
}

function assets() {
  return gulp.src('./src/assets/*.*')
    .pipe(gulp.dest('./dist/assets/'));
}

function watch() {
  return gulp.watch('./src', gulp.series(views, scripts, data, styles, assets));
}

gulp.task('default', gulp.series(clean, views, scripts, data, styles, assets));
gulp.task('watch', watch);
