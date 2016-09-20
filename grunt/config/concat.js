// https://github.com/gruntjs/grunt-contrib-concat

module.exports = { 
    options: {
        sourceMap: false
    }, 
  	foundation: {
    	files:[{
      		src: ['<%= files.foundationjs %>'], 
      		dest: '<%= paths.foundationdir %>foundation.all.js'
      	}]
	}
};