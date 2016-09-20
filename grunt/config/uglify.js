// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = {
    options: {
        preserveComments: false,
        compress: true
    },                      
    js: {
      files:[{ 
          src: ['<%= paths.tempjsdir %>foundation.babelized.js','<%= files.appjs %>'],
          dest: '<%= paths.destinationdir %>Assets/Js/all.min.js'   


      /*  better separate the foundation files from the others?  
          src: '<%= paths.tempjsdir %>assets/js/foundation.babelized.js', dest: '<%= paths.destinationdir %>assets/js/vendor/foundation.min.js'

        },{
          src: ['<%= files.appjs %>'], dest: '<%= paths.destinationdir %>assets/js/app.min.js'  
        */
        }] 
  }

};