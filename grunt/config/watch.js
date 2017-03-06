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
    files: ['<%= paths.sourcedir %>assets/js/**/*.js', './files.json'],
    tasks: ['concat','newer:concat','babel','uglify','newer:uglify']       
  },
  
  modernizr:{
    files: ['./grunt/config/modernizr.js'], 
    tasks: ['modernizr']
  },

  sass: {
    files: '<%= paths.sourcedir %>scss/**/*.scss',
    tasks: ['sass','newer:sass']

  },
  postcss: {
    files: '<%= paths.destinationdir %>Assets/Css/*.css',
    tasks: ['postcss:all','newer:postcss:all']

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
    files: ['**/*', '!{scss,js}/**/*'],
    tasks: ['copy:dist']
  }
};




 


