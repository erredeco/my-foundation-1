// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = {
    options: {
        preserveComments: '<%=uglifyOutputStylePreserveComments%>',
        compress: '<%=uglifyOutputStyleCompress%>',
        beautify:'<%=uglifyOutputStyleBeautify%>'
    },                      
    js: {
      files:[{ 
          src: ['<%= files.touglifyjs %>'],
          dest: '<%= paths.destinationdir %>Assets/Js/all.min.js'   


      /*  better separate the foundation files from the others?  
          src: '<%= paths.tempjsdir %>assets/js/foundation.babelized.js', dest: '<%= paths.destinationdir %>assets/js/vendor/foundation.min.js'

        },{
          src: ['<%= files.appjs %>'], dest: '<%= paths.destinationdir %>assets/js/app.min.js'  
        */
        }] 
  }

};