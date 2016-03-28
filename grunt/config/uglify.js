// https://github.com/gruntjs/grunt-contrib-uglify

var config = require('../config');
module.exports = {
    options: {
        preserveComments: false,
        compress: true
    },                      
    js: {
      files:[{ 
          src: [config.sourcedir+'assets/js/foundation.babelized.js',config.appjs],
          dest: config.destinationdir+'assets/js/all.min.js'   


      /*  better separate the foundation files from the others?  
          src: config.sourcedir+'assets/js/foundation.babelized.js', dest: config.destinationdir+'assets/js/vendor/foundation.min.js'

        },{
          src: [config.appjs], dest: config.destinationdir+'assets/js/app.min.js'  
        */
        }] 
  }

};