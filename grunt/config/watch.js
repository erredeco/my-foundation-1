// https://github.com/gruntjs/grunt-contrib-watch

var conf = require('../../configuration.json');

module.exports = {
  grunt: {
    options: {
      reload: true,
    },
    files: 'Gruntfile.js',
    tasks: 'build'
  },
  js: {
    files: [conf.paths.sourcedir+'Assets/Js/**/*.js', './files.json'],
    tasks: ['concat','newer:concat']       
  },
  
  modernizr:{
    files: ['./file.json'], 
    tasks: ['modernizr']
  },

  sass: {
    files: conf.paths.sourcedir+'Scss/**/*.scss',
    tasks: ['sass','newer:sass','postcss:all','newer:postcss:all']

  },
 // I hope this is useless 
 // postcss: {
 //   cwd:conf.paths.destinationdir+'Assets/Css/',   
 //   files: '**/*.temp.css', 
 //   tasks: ['postcss:all','newer:postcss:all']
 //},

  assemble: {
    files: [conf.assemble.templatesdir+'{includes,pages,layouts}/**/*.html',conf.assemble.datadir+'*.json'],
    tasks: ['assemble','newer:assemble'],
    options: {
      livereload: true
    }
  },

  assets: {
    options: {
      cwd: conf.paths.sourcedir+'Assets/',
      livereload: true
    },
    files: ['**/*', '!{Js}/**/*'],
    tasks: ['copy:dist']
  }
};




 


