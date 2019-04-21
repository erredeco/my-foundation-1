const   gulp = require('gulp'),
        browser = require('browser-sync'),
        CONFIG = require('./gulp/config.js'),
        port = process.env.SERVER_PORT || CONFIG.CONNECT.port,
        requireDir = require('require-dir');

requireDir('./gulp/tasks');

function browserReloadSync(done) {
  browser.reload();
  done();
}



// Builds the assets
gulp.task('build:assets', gulp.series('copy-vendor-js','copy','concat','sass'));

gulp.task('build:assemble', gulp.series('assemble'));

// Starts a BrowerSync instance
gulp.task('serve', gulp.series('build:assets','build:assemble', function(done){
  browser.init({server: CONFIG.PATHS.destinationdir, port: port, open:false});
  done();
}));

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('./gulp/config.js', gulp.series('concat', browserReloadSync));
  gulp.watch('./source/Assets/**/*', gulp.series('copy','concat', browserReloadSync)); 
  gulp.watch('./source/Assets/Sprites/*.png', gulp.series('copy','sass',browserReloadSync));
  gulp.watch('./source/Templates/**/*', gulp.series('assemble', browserReloadSync));
  gulp.watch(['./source/Scss/**/*.scss', 'node_modules/foundation-sites/scss/**/*'], gulp.series('sass', browserReloadSync));
});

gulp.task ('deploy',gulp.series('build:assets','deploy'));
gulp.task('default', gulp.series('serve', 'watch'));