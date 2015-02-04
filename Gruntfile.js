module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,
    sourcedir: './source',
    foundation: {
          js: ['<%= sourcedir %>/assets/js/vendor/foundation/foundation.js', '<%= sourcedir %>/assets/js/vendor/foundation/foundation.*.js']
        },
    assemble: {
      options: {
        flatten: false,
        assets: './dist/assets',
        partials: ['<%= sourcedir %>/includes/partials/**/*.{html,hbs}'],
        layoutdir: '<%= sourcedir %>/layouts',
        layout: 'index.html'
      },
      pages: {
        expand: true,
        cwd: '<%= sourcedir %>/pages',
        src: '**/*.{html,hbs}',
        dest: './dist/'
      },
      samples: {
        expand: true,
        cwd: '<%= sourcedir %>/samples',
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
          {src: './<%= vendor %>/modernizr/modernizr.js', dest: '<%= sourcedir %>/assets/js/vendor/modernizr.js'},
          {expand:true, cwd: './<%= vendor %>/bower-foundation/js/', src: ['foundation/*.js'], dest: '<%= sourcedir %>/assets/js/vendor/', filter: 'isFile'},
          {src: './<%= vendor %>/jquery/dist/jquery.js', dest: '<%= sourcedir %>/assets/js/vendor/jquery.js'}
        ]
      },
      scss: {
        files: [
          {expand:true, cwd: './<%= vendor %>/myfoundation-scss-only/source/', src: ['scss/**/*.scss'], dest: '<%= sourcedir %>/assets/'},
          {src:'./<%= vendor %>/myfoundation-scss-only/Gemfile',dest:'./Gemfile'},
          {src:'./<%= vendor %>/myfoundation-scss-only/Gemfile.lock',dest:'./Gemfile.lock'}

        ]
      }
    },

    concat: {
      dist: {
        files: {
          '<%= sourcedir %>/assets/js/vendor/foundation.js':'<%= foundation.js %>'
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
          './dist/assets/js/modernizr.min.js': ['<%= sourcedir %>/assets/js/vendor/modernizr.js'],
          './dist/assets/js/jquery.min.js': ['<%= sourcedir %>/assets/js/vendor/jquery.js'],
          './dist/assets/js/app.min.js': ['<%= sourcedir %>/assets/js/app.js']
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
          port: 8090,
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
        files: ['<%= sourcedir %>/assets/js/**/*.js'],
        tasks: ['concat','uglify'],
        options: {livereload:true}
      },


      assemble_all: {
        files: ['./source/**/*.html'],
        tasks: ['assemble','newer:assemble'],
        options: {livereload:true}
      },

      
      prettify: {
        files: ['./dist/**/*.html'],
        tasks: ['prettify:all','newer:prettify:all'],
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