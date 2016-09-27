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
    files: ['<%= paths.sourcedir %>assets/js/**/*.js', './grunt/config.js'],
    tasks: ['concat','newer:concat','babel','uglify','newer:uglify']       
  },
  
  modernizr:{
    files: ['./grunt/config/modernizr.js'], 
    tasks: ['modernizr']
  },

  compass: {
    files: '<%= paths.sourcedir %>scss/**/*.scss',
    tasks: ['compass:dist','newer:compass:dist']

  },
  postcss: {
    files: '<%= paths.destinationdir %>Assets/Css/*.css',
    tasks: ['postcss:dist','newer:postcss:dist']

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
      cwd: '<%= paths.sourcedir %>assets/',
      livereload: true
    },
    files: ['**/*', '!{scss,js}/**/*'],
    tasks: ['copy:dist']
  },  
  deploy: {
    options:{
      cwd: '<%= paths.destinationdir %>/Assets/',
      livereload: true    
    },
    files:['**/*'], 
    tasks:['copy:deploy']    
  }  
};




 


