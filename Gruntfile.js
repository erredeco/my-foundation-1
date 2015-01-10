module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,

    foundation: {
          js: ['./<%= vendor %>/bower-foundation/js/foundation/foundation.js', './<%= vendor %>/bower-foundation/js/foundation/foundation.*.js']
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

    //Get components from bower
    bowercopy: {
      options: {            
        srcPrefix: '<%= vendor %>',
        clean: false
      },

      // Javascript libraries
      libs: {
        options: {
          destPrefix: './dist/assets/js/vendor'
        },
        files: {
          'jquery.js': 'jquery/dist/jquery.js',
          'modernizr.js': 'modernizr/modernizr.js',
          'foundation': 'bower-foundation/js/foundation'
          },
      },
    },

    concat: {
      dist: {
        files: {
          'dist/assets/js/vendor/foundation.js':'<%= foundation.js %>'
        }
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        files: {
          './dist/assets/js/foundation.min.js': ['<%= foundation.js %>'],
          './dist/assets/js/modernizr.min.js': ['<%= vendor %>/modernizr/modernizr.js'],
          './dist/assets/js/jquery.min.js': ['<%= vendor %>/jquery/dist/jquery.js']
        }
      },

    },

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

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      js: {
        files: ['<%= vendor %>/**/*.js', 'dist/assets/js/**/*.js'],
        tasks: ['bowercopy','concat','uglify'],
        options: {livereload:true}
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

  /* load plugin in package.json */

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean'); 
  grunt.loadNpmTasks('grunt-contrib-connect'); 
  grunt.loadNpmTasks( 'grunt-contrib-watch' );  
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /* grunt tasks */
  //see the foundation example on how to add other tasks here!!
  grunt.registerTask('build:assets', ['clean','bowercopy','concat','uglify']); 
  grunt.registerTask('build', ['build:assets', 'assemble']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('server', ['connect:dist:keepalive']);
};