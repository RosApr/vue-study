"use strict"
var gulp = require("gulp"),
    livereload = require("gulp-livereload"),
    less = require("gulp-less"),
    watch = require("gulp-watch"),
    uglify = require("gulp-uglify"),
    minifycss = require("gulp-minify-css"),
    jshint = require("gulp-jshint");

gulp.task("styles", function(){
    gulp.src("less/index.less")
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest("assets/css"))
});

gulp.task("scripts", function(){
    gulp.src("assets/js/index.js")
        .pipe(jshint())
        .pipe(uglify())
        .pipe(gulp.dest("build"));
});

gulp.task("watch", function(){
   var watcherCss = gulp.watch("less/index.less", ["styles"]);
   var watcherJs = gulp.watch("assets/js/index.js");
    var watcherHtml = gulp.watch("index.html");
   livereload.listen();
   watcherCss.on("change", livereload.changed);
   watcherJs.on("change", livereload.changed);
    watcherHtml.on("change", livereload.changed);
});

gulp.task("default", ["watch"]);
gulp.task("dist", ["scripts"]);