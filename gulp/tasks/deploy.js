'use strict';


//Initialize var git
const gulp = require('gulp'),
      gulpif = require('gulp-if'),
      postcss = require('gulp-postcss'),
      rename = require('gulp-rename'),
      replace = require('gulp-string-replace'),
      stripdebug = require('gulp-strip-debug'),
      clean = require('postcss-clean'),
      imagemin = require('gulp-imagemin'),
      uglify = require('gulp-uglify'),
      minimist = require('minimist'),
      newer = require('gulp-newer'),
      CONFIG = require('../config.js'),
      LOCALCONFIG = require('../../localconfiguration.js'),
      imgdest = LOCALCONFIG.PATHS.deploydir+'/Assets/Images/',
      git = require('git-rev-sync'),
      pkg = require('../../package.json'),
      header = require('gulp-header');


var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'staging' }
};
var cmloption = minimist(process.argv.slice(2), knownOptions);
var uglifyoptions = {
    output: {
        comments: CONFIG.UGLIFY.comments,
        beautify: CONFIG.UGLIFY.beautify

    },
    compress: CONFIG.UGLIFY.compress,
    mangle: CONFIG.UGLIFY.mangle
};


gulp.task('copy:deploy', function() {                                 
  return gulp.src(CONFIG.DEPLOY_FILES, { cwd:CONFIG.PATHS.destinationdir+'/Assets/' })
    .pipe(gulp.dest(LOCALCONFIG.PATHS.deploydir+'/Assets'));
});




gulp.task('uglify',function(){
    return gulp.src(['*.js','!*.min.js'], { cwd:CONFIG.PATHS.destinationdir+'/Assets/Js/' })
      .pipe(gulpif(cmloption.env === 'production', stripdebug()))
      .pipe(gulpif(cmloption.env === 'production', uglify(uglifyoptions)))
      .pipe(header(CONFIG.BANNER, { pkg : pkg, git: git } ))        
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(LOCALCONFIG.PATHS.deploydir+'/Assets/Js/'));
});


gulp.task('imagemin',function(){
    return gulp.src(['**/*.*'], { cwd:CONFIG.PATHS.destinationdir+'/Assets/Images/' })
      .pipe(newer(imgdest))
      .pipe(gulpif(cmloption.env === 'production', imagemin(
      [
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: CONFIG.IMAGEMIN.optimizationLevel}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
                ]
            })
        ]
      ))) 
      .pipe(gulp.dest(imgdest));
});



gulp.task('postcss:deploy',function(){
    var plugins = [
        clean({
            level: CONFIG.POSTCSS.clean.optimizationLevel
        })
    ];
    return gulp.src(['*.css','!*.min.css' ], { cwd:CONFIG.PATHS.destinationdir+'/Assets/Css/' })
      .pipe(postcss(plugins))
      .pipe(header(CONFIG.BANNER, { pkg : pkg, git: git } ))        
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(LOCALCONFIG.PATHS.deploydir+'/Assets/Css/'));
});


//aggiungi imagemin dopo copy:deploy se vuoi

gulp.task ('deploy',
    gulp.series('uglify',
                'postcss:deploy',
                'copy:deploy')
                );
