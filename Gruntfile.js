module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),





    clean: ['./dist/'],

    connect: {
      dist: {
        options: {
          port: 8080,
          base: './dist/',
          hostname: 'localhost'
        }
      }
    },

    assemble: {
      options: {
  
        flatten: false,
        assets: './dist/assets',
        partials: ['./source/includes/partials/**/*.{html,hbs}'],
        layoutdir: './source/layouts',
        layout: 'index.html',
      },
      pages: {
        expand: true,
        cwd: './source/pages',
        src: '**/*.{html,hbs}',
        dest: './dist/'
      }
    },



    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },
      assemble_all: {
        files: ['./source/{includes,layouts}/**/*.html'],
        tasks: ['assemble'],
        options: {livereload:true}
      },
      assemble_pages: {
        files: ['./source/pages/**/*.html'],
        tasks: ['newer:assemble'],
        options: {livereload:true}
      }


    }

  });

  /* load every plugin in package.json */

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean'); 
  grunt.loadNpmTasks('grunt-contrib-connect'); 
  grunt.loadNpmTasks( 'grunt-contrib-watch' );  
  grunt.loadNpmTasks('grunt-newer');


  /* grunt tasks */
  //see the foundation example on how to add other tasks here!!
  grunt.registerTask('build:assets', ['clean']); 
  grunt.registerTask('build', ['build:assets', 'assemble']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('server', ['connect:dist:keepalive']);

  // Serve presentation locally; must be the LAST!
  //grunt.registerTask( 'default', ['assemble', 'connect'] );
};