var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var console = require('better-console');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// Needed to use babel as a mocha compiler.
require('babel/register');

gulp.task('test', function () {
  return gulp.src('test/**/*.js')
  .pipe(mocha({
    compilers: {
      js: babel
    }
    //,reporter: 'nyan'
  }));
});

gulp.task('watch', function() {
  gulp.watch(['test/**/*.js', 'src/**/*.js'], ['clear:console', 'test']);
});

gulp.task('clear:console', function() {
  console.clear();
});

gulp.task('default', ['test', 'watch']);

gulp.task('test:phantom', function () {
  return gulp
    .src('test/runner.html')
    .pipe(mochaPhantomJS());
});

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify', function() {
    browserify({
      entries: 'src/index.js',
      debug: true
      //insertGlobals: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('all.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/**/*.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});
