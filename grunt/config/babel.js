//https://github.com/babel/grunt-babel

var config = require('../config');

module.exports = {
    options: {
        sourceMap: false,
        compact: false
        
    },                      
  	foundation: {
    	files:[{ 
      		src: config.tempjsdir+'foundation.all.js',
      		dest: config.sourcedir+'assets/js/foundation.babelized.js'

      	}] 
	}

};