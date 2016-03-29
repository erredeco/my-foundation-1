// https://github.com/gruntjs/grunt-contrib-watch
var config = require('../config');


module.exports = {
  grunt: {
    options: {
      reload: true,
    },
    files: 'Gruntfile.js',
    tasks: 'build'
  },
  js: {
    files: [config.sourcedir+'assets/js/**/*.js', './grunt/config.js'],
    tasks: ['concat','newer:concat','babel','uglify','newer:uglify']       
  },
  
  modernizr:{
    files: ['./grunt/config/modernizr.js'], 
    tasks: ['modernizr']
  },

  compass: {
    files: config.sourcedir+'scss/**/*.scss',
    tasks: ['compass:dist','newer:compass:dist']

  },
  postcss: {
    files: config.destinationdir+'assets/css/*.css',
    tasks: ['postcss:dist','newer:postcss:dist']

  },

  assemble_all: {
    files: [config.sourcedir+'{includes,pages,layouts}/**/*.html',config.datadir+'*.json'],
    tasks: ['assemble','newer:assemble'],
    options: {
      livereload: true
    }
  },

  assets: {
    options: {
      cwd: config.sourcedir+'assets/',
      livereload: true
    },
    files: ['**/*', '!{scss,js}/**/*'],
    tasks: ['copy:dist']
  } 
};




 


