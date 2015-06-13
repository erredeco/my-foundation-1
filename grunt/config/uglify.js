// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
  options: {
    preserveComments: 'some'
  },
  dist: {
    files: {
      
      //così non va bene! devo vedere!

      '<%= paths.dist %>assets/js/foundation.min.js': ['<%= files.js %>'],
      '<%= paths.dist %>assets/js/modernizr.min.js': ['<%= paths.vendor %>modernizr/modernizr.js'],
      '<%= paths.dist %>assets/js/all.min.js': [
        //non voglio concatenare jquery al resto!
        //'<%= paths.vendor %>jquery/dist/jquery.js', 
        '<%= files.js %>', '<%= paths.source %>assets/js/app.js'
      ]
    }
  },
  //mi sembra inutile!

  //vendor: {
  //  files: {
    //  '<%= paths.dist %>assets/js/vendor/jquery.js': '<%= paths.vendor %>jquery/dist/jquery.js',
    //  '<%= paths.dist %>assets/js/vendor/modernizr.min.js': '<%= paths.vendor %>modernizr/modernizr.js'
  //  }
  //}
};