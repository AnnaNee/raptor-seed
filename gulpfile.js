var gulp = require('gulp');
var install = require("gulp-install");
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var serve = require('gulp-serve');
var browserSync = require('browser-sync');

function css() {
  return gulp.src('app/assets/styles/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/assets/styles'));
}

gulp.task('css', function () {
  return css();
});

function html() {
  return gulp.src('app/views/**/*.html')
  .pipe(gulp.dest('public/views'));
}

gulp.task('html', function () {
  return html();
});

function js() {
  return gulp.src('app/assets/js/**/*.js')
  .pipe(gulp.dest('public/assets/js'));
}

gulp.task('js', function () {
  return js();
});

function controllers() {
  return gulp.src('app/controllers/**/*.js')
  .pipe(gulp.dest('public/controllers'));
}

gulp.task('controllers', function () {
  return controllers();
});

function mainJs() {
  return gulp.src('app/**/*.js')
  .pipe(gulp.dest('public'));
}

gulp.task('mainJs', function () {
  return mainJs();
});

gulp.task("watch", ["html", "css", "js", "controllers", "mainJs"], function() {
    gulp.watch("app/assets/**", function () {
        css();
    });
    gulp.watch("app/views/**", function () {
        html();
    });
    gulp.watch("app/controllers/**", function () {
        controllers();
    });
    gulp.watch("app/**", function () {
        mainJs();
    });
    gulp.watch("public/**", function () {
        browserSync.reload();
    });
});

gulp.task("serve", ["watch"], function() {
    browserSync.init({
        server: {
            baseDir: __dirname + "/public/",
            directory: false
        },
        ghostMode: false,
        notify: false,
        debounce: 200,
        index: "views/index.html"
    });
});