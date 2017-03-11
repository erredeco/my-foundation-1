// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = {
    options: {
        preserveComments: false,
        compress: true,
        beautify: false
    },                      
    js: {
      files:[{ 
          expand: true,
          cwd: '<%= paths.destinationdir %>Assets/Js/',
          src: ['*.js','!**/*.min.js'],
          dest: '<%= paths.deploydir %>Assets/Js/',   
          ext: '.min.js'
        }] 
  }

};