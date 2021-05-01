'use strict';


//Initialize var git
const   gulp = require('gulp'),
        gulpif = require('gulp-if'),
        postcss = require('gulp-postcss'),
        rename = require('gulp-rename'),
        replace = require('gulp-string-replace'),
        stripdebug = require('gulp-strip-debug'),
        clean = require('postcss-clean'),
        imagemin = require('gulp-imagemin'),
        minimist = require('minimist'),
        newer = require('gulp-newer'),
        CONFIG = require('../config.js'),
        LOCALCONFIG = require('../../localconfiguration.js'),
        imgdest = LOCALCONFIG.PATHS.deploydir+'/Assets/Images/',
        git = require('git-rev-sync'),
        pkg = require('../../package.json'),
        header = require('gulp-header'),
        terser = require('terser'),
        gulpTerser = require('gulp-terser');


var knownOptions = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'staging' }
};

var cmloption = minimist(process.argv.slice(2), knownOptions);

var terseroptions = {    
    format: {
        beautify: CONFIG.TERSER.beautify,
        comments: CONFIG.TERSER.comments,
    },
    compress:CONFIG.TERSER.compress, //in fact you should pass either false  or an object with the options - see terser documentation https://github.com/terser/terser#compress-options
    mangle: CONFIG.TERSER.mangle,
    keep_classnames: CONFIG.TERSER.keep_classnames,
    keep_fnames: CONFIG.TERSER.keep_fnames
};


gulp.task('copy:deploy', function() {                                 
    return gulp.src(CONFIG.DEPLOY_FILES, { cwd:CONFIG.PATHS.destinationdir+'/Assets/' })
        .pipe(gulp.dest(LOCALCONFIG.PATHS.deploydir+'/Assets'));
});

gulp.task('terser',function(){
    return gulp.src(['*.js','!*.min.js'], { cwd:CONFIG.PATHS.destinationdir+'/Assets/Js/' })
        .pipe(gulpif(cmloption.env === 'production', stripdebug()))
        .pipe(gulpif(cmloption.env === 'production', gulpTerser(terseroptions, terser.minify)))
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
    gulp.series(
        'terser',
        'postcss:deploy',
        'copy:deploy'
    )
);
