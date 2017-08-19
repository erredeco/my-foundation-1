// https://github.com/gruntjs/grunt-contrib-imagemin

var conf = require('../../configuration.json');

module.exports = {
	imagemin: {
      options: {                       
        optimizationLevel: conf.imagemin.optimizationLevel,
        svgoPlugins: [{ removeViewBox: false }]
      },

                     
    files: [{
        expand: true,                  
        cwd: conf.paths.destinationdir+'Assets/',                  
        src: ['Images/**/*.{png,jpg,gif,svg,jpeg}'],   
        dest: conf.paths.deploydir+'Assets/'                 
    }]


	}
};