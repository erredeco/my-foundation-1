// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
	imagemin: {
      options: {                       
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }]
      },

                     
    files: [{
        expand: true,                  
        cwd: '<%= paths.destinationdir %>Assets/',                  
        src: ['Images/**/*.{png,jpg,gif,svg,jpeg}'],   
        dest: '<%= paths.deploydir %>Assets/'                 
    }]


	}
};