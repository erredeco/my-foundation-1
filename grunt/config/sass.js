// https://github.com/gruntjs/grunt-contrib-sass

//questo va rivisto, ammesso che lo vuoi usare al posto del solito compass
module.exports = {
  dist: {
    options: {
      loadPath: ['<%= paths.sassLoad %>'],
      bundleExec: true
    },
    files: {
      '<%= paths.dist %>assets/css/foundation.css': '<%= files.scss %>',
      '<%= paths.dist %>assets/css/normalize.css': '<%= paths.scss %>normalize.scss',
      '<%= paths.dist %>docs/assets/css/docs.css': '<%= paths.doc %>assets/scss/docs.scss'
    }
  }
};