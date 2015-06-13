module.exports = function(grunt) {
  // Define project configuration
  var project = {
    date: grunt.template.today("yyyy-mm-dd-HH.MM.ss"), 
    paths: {
      get config() {
        return this.grunt + 'config/';
      },
      bckdir: 'bck/', 
      dist: 'dist/',
      grunt: 'grunt/',
      js: '<%= paths.vendor%>bower-foundation/js/',      
      
      sassLoad: __dirname + '/scss',
      scss: '<%= paths.vendor%>myfoundation-scss-only/source/',
      source: 'source/',
      templates: 'templates/',
      //non so se questo spec serve a qualcosa a me
      //spec: 'spec/',
      vendor: grunt.file.readJSON('.bowerrc').directory + '/'
    },
    files: {
      get config() {
        return project.paths.config + '*.js';
      },
      grunt: 'Gruntfile.js',
      js: grunt.file.readJSON('foundationfiles.json').js,
      scss: grunt.file.readJSON('foundationfiles.json').scss

      //scss: ['scss/foundation.scss', 'scss/settings.scss']
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

