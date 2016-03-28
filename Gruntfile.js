module.exports = function(grunt) {
  // Define project configuration
  var project = {
    date: grunt.template.today("yyyy-mm-dd-HH.MM.ss"), 
    paths: {
      get config() {
        return this.grunt + 'config/';
      },
      grunt: 'grunt/'
    },
    files: {
      get config() {
        return project.paths.config + '*.js';
      },
      grunt: 'Gruntfile.js'
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

