//https://github.com/sindresorhus/grunt-sass

var conf = require('../../configuration.json');
var files = require('../../files.json');


module.exports = {
    options: {
        outputStyle: conf.sass.outputStyle,
        sourceMap: conf.sass.sourceMap,
        sourceComments: conf.sass.sourceComments,
        includePaths: files.sass.includePaths
    },

	dist: {
	    files:[{
        	expand: true,                  
        	cwd: conf.paths.sourcedir+'Scss/',                  
       		src: ['**/*.scss'],   
        	dest: conf.paths.destinationdir+'Assets/Css/', 
        	ext: '.temp.css'                
    	}]	
	}
};