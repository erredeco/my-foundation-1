//https://github.com/babel/grunt-babel
//Not used anymore, just keep it for a while

module.exports = {
    options: {
        sourceMap: false,
        compact: false
        
    },                      
  	foundation: {
    	files:[{ 
      		src: '<%= paths.tempjsdir %>foundation.all.js',
      		dest: '<%= paths.tempjsdir %>foundation.babelized.js'

      	}] 
	}

};