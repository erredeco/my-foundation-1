// https://github.com/gruntjs/grunt-contrib-concat
var config = require('../config');


module.exports = { 
    options: {
        sourceMap: false
    }, 
  	foundation: {
    	files:[{
      		src: [config.foundationjs], 
      		dest: config.tempjsdir+'foundation.all.js'
      	}]
	}
};