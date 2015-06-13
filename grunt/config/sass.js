// https://github.com/gruntjs/grunt-contrib-sass

//questo va rivisto, ammesso che lo vuoi usare al posto del solito compass
module.exports = {
  dist: {
    options: {
      loadPath: ['<%= paths.sassLoad %>'],
      bundleExec: true,
      compass: true,
      lineNumbers:true
    },
    files: {
      //'<%= paths.dist %>assets/css/foundation.css': '<%= files.scss %>',
      '<%= paths.dist %>assets/css/normalize.css': '<%= paths.source %>assets/scss/normalize.scss',
      '<%= paths.dist %>assets/css/app.css': '<%= paths.source %>assets/scss/app.scss'
    }
  }
};