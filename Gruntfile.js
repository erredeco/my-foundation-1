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
        layout: 'index.html'
      },
      pages: {
        expand: true,
        cwd: './source/pages',
        src: '**/*.{html,hbs}',
        dest: './dist/'
      },
      samples: {
        expand: true,
        cwd: './source/samples',
        src: '**/*.{html,hbs}',
        dest: './dist/samples/'
      }

    },

    //Get components from bower
    bower: {
      install: {
        options: {
          copy: false    

        }
      }
    },

    copy: {
      dist: {
        files: [
          {src: './<%= vendor %>/modernizr/modernizr.js', dest: './dist/assets/js/modernizr.js'},
          {expand:true, cwd: './<%= vendor %>/bower-foundation/js/', src: ['foundation/*.js'], dest: './dist/assets/js', filter: 'isFile'},
          {src: './<%= vendor %>/jquery/dist/jquery.js', dest: './dist/assets/js/jquery.js'}
        ]
      },
      scss: {
        files: [
          {expand:true, cwd: './<%= vendor %>/myfoundation-scss-only/source/', src: ['scss/**/*.scss'], dest: './source/assets/'},
          {src:'./<%= vendor %>/myfoundation-scss-only/Gemfile',dest:'./Gemfile'},
          {src:'./<%= vendor %>/myfoundation-scss-only/Gemfile.lock',dest:'./Gemfile.lock'}

        ]
      }
    },

    concat: {
      dist: {
        files: {
          'dist/assets/js/foundation.js':'<%= foundation.js %>'
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
          './dist/assets/js/modernizr.min.js': ['./dist/assets/js/modernizr.js'],
          './dist/assets/js/jquery.min.js': ['./dist/assets/js/jquery.js'],
          './dist/assets/js/app.min.js': ['./source/assets/js/app.js']
        }
      },

    },
    
  prettify: {
    options: {
      config: '.prettifyrc'
    },
    all: {
        expand: true,
        cwd: './dist/',
        ext: '.html',
        src: ['./**/*.html'],
        dest: './dist/'
      }
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
        files: ['dist/assets/js/**/*.js'],
        tasks: ['copy','concat','uglify'],
        options: {livereload:true}
      },


      assemble_all: {
        files: ['./source/{includes,layouts}/**/*.html'],
        tasks: ['assemble'],
        options: {livereload:true}
      },
      assemble_pages: {
        files: ['./source/pages/**/*.html','./source/samples/**/*.html'],
        tasks: ['newer:assemble'],
        options: {livereload:true}
      },
      
      prettify: {
        files: ['./dist/**/*.html'],
        tasks: ['newer:prettify:all'],
        options: {livereload:true}
      },



    }


  });

  /* load plugin in package.json */

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean'); 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect'); 
  grunt.loadNpmTasks('grunt-contrib-copy'); 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );  
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-prettify');
  
  /* grunt tasks */
  //see the foundation example on how to add other tasks here!!
  grunt.registerTask('build:assets', ['clean','bower:install','copy','concat','uglify']); 
  grunt.registerTask('build', ['build:assets', 'assemble','prettify']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('server', ['connect:dist:keepalive']);
};