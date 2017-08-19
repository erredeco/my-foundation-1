// https://github.com/gruntjs/grunt-contrib-uglify

var conf = require('../../configuration.json');

module.exports = {
    options: {
        preserveComments: conf.uglify.preserveComments,
        compress: conf.uglify.compress,
        beautify: conf.uglify.beautify
    },                      
    js: {
      files:[{ 
          expand: true,
          cwd: conf.paths.destinationdir+'Assets/Js/',
          src: ['*.js','!**/*.min.js'],
          dest: conf.paths.deploydir+'Assets/Js/',   
          ext: '.min.js'
        }] 
  }

};