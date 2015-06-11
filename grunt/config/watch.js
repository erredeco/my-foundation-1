// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
  grunt: {
    options: {
      reload: true
    },
    files: ['Gruntfile.js']
  },
  sass: {
    files: ['<%= paths.scss %>**/*.scss', '<%= paths.doc %>assets/**/*.scss'],
    tasks: ['sass'],
    options: {
      livereload:true
    }
  },
  js: {
    files: ['<%= paths.js %>**/*.js', '<%= paths.doc %>assets/js/**/*.js'],
    tasks: ['copy', 'concat', 'uglify'],
    options: {
      livereload: true
    }
  },
  assemble_all: {
    files: ['<%= paths.source %>{includes,layouts}/**/*.html'],
    tasks: ['assemble'],
    options: {
      livereload: true
    }
  },
  assemble_pages: {
    files: ['<%= paths.source %>pages/**/*.html'],
    tasks: ['newer:assemble'],
    options: {
      livereload: true
    }
  },
  assets: {
    options: {
      cwd: '<%= paths.source %>assets/',
      livereload: true
    },
    files: ['**/*', '!{scss,js}/**/*'],
    tasks: ['copy']
  },
};