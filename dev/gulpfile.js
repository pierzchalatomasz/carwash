var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var wrap = require("gulp-wrap");
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
autoprefix= new LessPluginAutoPrefix({ browsers: ["last 3 versions"] });

gulp.task('less', function () {
  return gulp.src('less/styles.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ],
    plugins: [ autoprefix ]
  }))
  .pipe(gulp.dest('../css'));
});

gulp.task('plugins', function() {
  return gulp.src('js/plugins/*.js')
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('../js/'))
  .pipe(uglify())
  .pipe(wrap('/*\n**\n** CarWash Plugins\n**\n*/\n\n<%= contents %>'))
  .pipe(gulp.dest('../js/'));
});

gulp.task('minify', function() {
  return gulp.src('../js/main.js')
  .pipe(gulp.dest('../js/'))
  .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
  .pipe(uglify())
  .pipe(wrap('/*\n**\n** CarWash Scripts\n**\n*/\n\n<%= contents %>'))
  .pipe(gulp.dest('../js/'));
});
