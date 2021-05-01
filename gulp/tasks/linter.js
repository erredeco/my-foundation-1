const	gulp = require("gulp"),
		lintspaces = require("gulp-lintspaces"),
		CONFIG = require('../config.js'); 


gulp.task("htmllinter", function() {
    return gulp.src(CONFIG.PATHS.sourcedir+'Templates/**/*.html')
	    .pipe(lintspaces(CONFIG.SPACELINTER))
	    .pipe(lintspaces.reporter());
});		