module.exports = function(grunt) {
  // Define project configuration
  var project = {
    //Put current date into a variable.
    date: grunt.template.today("yyyy-mm-dd-HH.MM.ss"), 
    
    //Define all paths
    paths: {
      //Paths for the external components
      nodemodules: grunt.file.readJSON('.noderc').directory + '/',
      vendor: grunt.file.readJSON('.bowerrc').directory + '/',

      //Local paths
      bckdir: './BCK/',

      datadir: './data',

      // see README!!!!
      deploydir: grunt.file.readJSON('deploy.json').directory,
      
      destinationdir: './dist/',
      foundationdir: '.<%= paths.nodemodules %>foundation-sites/',
      mydir: './localsource',
      sourcedir: './source/',
      tempjsdir:'<%= paths.sourcedir %>assets/js/temp/',
      templatesdir:'./templates/',

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
      
      //Define all files in files.json
      foundationjs: grunt.file.readJSON('files.json').foundationjs,
      appjs:  grunt.file.readJSON('files.json').appjs
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

