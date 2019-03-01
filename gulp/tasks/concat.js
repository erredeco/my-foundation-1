'use strict';

const   gulp = require('gulp'),
        concat = require('gulp-concat'),
        CONFIG = require('../config.js'); 

gulp.task('app-js', function() {
  return gulp.src(CONFIG.JS_FILES,{allowEmpty: true })
    .pipe(concat('app.js'))
    .pipe(gulp.dest(CONFIG.PATHS.destinationdir+'Assets/Js/'));
});


gulp.task('concat', gulp.parallel('app-js'));