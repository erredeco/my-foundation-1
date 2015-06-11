module.exports = function(grunt) {
  // Define project configuration
  var project = {
    paths: {
      get config() {
        return this.grunt + 'config/';
      },
      dist: 'dist/',
      source: 'source/',
      grunt: 'grunt/',
      js: 'js/',
      sassLoad: __dirname + '/scss',
      scss: 'scss/',

      //non so se questo spec serve a qualcosa a me
      spec: 'spec/',
      vendor: grunt.file.readJSON('.bowerrc').directory + '/'
    },
    files: {
      get config() {
        return project.paths.config + '*.js';
      },
      grunt: 'Gruntfile.js',
      js: ['js/foundation/foundation.js', 'js/foundation/*.js'],
      scss: ['scss/foundation.scss', 'scss/settings.scss']
    },
    pkg: grunt.file.readJSON('package.json')
  };

  // Load Grunt configurations and tasks
  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), project.paths.config),
    data: project,
    jitGrunt: {
      staticMappings: {
        bower: 'grunt-bower-task'
      }
    }
  });
};

