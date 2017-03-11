https://github.com/sindresorhus/grunt-sass

module.exports = {
    options: {
        // Possible values for `sassOutputStyle` : `nested`, `expanded`, `compact`, `compressed`.
        outputStyle:'expanded',
        sourceMap: true,
        sourceComments:true,
        includePaths:  ['node_modules/foundation-sites/scss','node_modules/motion-ui/src'],		
    },

	dist: {
	    files:[{
        	expand: true,                  
        	cwd: '<%= paths.sourcedir %>scss/',                  
       		src: ['**/*.scss'],   
        	dest: '<%= paths.destinationdir %>Assets/Css/', 
        	ext: '.css'                
    	}]	
	}
};