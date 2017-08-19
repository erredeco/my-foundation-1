// https://github.com/jonschlinkert/grunt-prettify

var conf = require('../../configuration.json');

module.exports = {
  options: {
      config: '.prettifyrc'
    }, 
  all: {
      expand: true,
      cwd: conf.paths.destinationdir+'pages/',
      ext: '.html',
      src: ['./**/*.html'],
      dest: conf.paths.deploydir+'pages/'
    }
};