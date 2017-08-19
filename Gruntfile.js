module.exports = function(grunt) {
  // Define project configuration
  var project = {
    //Put current date into a variable.
    date: grunt.template.today("yyyy-mm-dd-HH.MM.ss"), 
    
    //Define all paths
    paths: {
      //Paths for the external components
      nodemodules: grunt.file.readJSON('.noderc').directory + '/',

      //Local paths
      // see README!!!!
      deploydir: grunt.file.readJSON('localconfiguration.json').deploydir,
      sourcedir: grunt.file.readJSON('configuration.json').paths.sourcedir,

      get config() {
        return this.grunt + 'config/';
      },
      grunt: 'grunt/'
    },
    files: {
      get config() {
        return project.paths.config + '*.js';
      },
      grunt: 'Gruntfile.js',
    },
    
    pkg: grunt.file.readJSON('package.json')
  };

  // Load Grunt configurations and tasks
  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), project.paths.config),
    data: project,
    jitGrunt: {
      staticMappings: {
      }
    }
  });
};

