https://github.com/sindresorhus/grunt-sass

module.exports = {
    options: {
        outputStyle:'<%= sassOutputStyle %>',
        sourceMap: true,
        sourceComments:true,
        includePaths:  ['node_modules/foundation-sites/scss','node_modules/motion-ui/src'],		
    },

	dist: {
	        files: {
	            '<%= paths.destinationdir %>Assets/Css/app.css': '<%= paths.sourcedir %>scss/app.scss'
		}
	
	}
};