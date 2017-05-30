// https://github.com/gruntjs/grunt-contrib-watch


module.exports = {
  grunt: {
    options: {
      reload: true,
    },
    files: 'Gruntfile.js',
    tasks: 'build'
  },
  js: {
    files: ['<%= paths.sourcedir %>Assets/Js/**/*.js', './files.json'],
    tasks: ['concat','newer:concat','babel']       
  },
  
  modernizr:{
    files: ['./grunt/config/modernizr.js'], 
    tasks: ['modernizr']
  },

  sass: {
    files: '<%= paths.sourcedir %>Scss/**/*.scss',
    tasks: ['sass','newer:sass','postcss:all','newer:postcss:all']

  },
  assemble: {
    files: ['<%= paths.templatesdir %>{includes,pages,layouts}/**/*.html','<%= paths.datadir %>*.json'],
    tasks: ['assemble','newer:assemble'],
    options: {
      livereload: true
    }
  },

  assets: {
    options: {
      cwd: '<%= paths.sourcedir %>Assets/',
      livereload: true
    },
    files: ['**/*', '!{Js}/**/*'],
    tasks: ['copy:dist']
  }
};




 


