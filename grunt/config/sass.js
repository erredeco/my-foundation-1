//https://github.com/sindresorhus/grunt-sass

module.exports = {
    options: {
        // Possible values for `sassOutputStyle` : `nested`, `expanded`, `compact`, `compressed`.
        outputStyle:'expanded',
        sourceMap: true,
        sourceComments:true,
        includePaths:  [
            '<%= paths.nodemodules %>foundation-sites/scss/',
            '<%= paths.nodemodules %>motion-ui/src/'
            ],		
    },

	dist: {
	    files:[{
        	expand: true,                  
        	cwd: '<%= paths.sourcedir %>Scss/',                  
       		src: ['**/*.scss'],   
        	dest: '<%= paths.destinationdir %>Assets/Css/', 
        	ext: '.temp.css'                
    	}]	
	}
};