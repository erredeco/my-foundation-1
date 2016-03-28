// https://github.com/gruntjs/grunt-contrib-cssmin

var config = require('../config');

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: config.destinationdir+'assets/css',
      src: ['*.css', '!*.min.css'],
      dest: config.destinationdir+'assets/css',
      ext: '.min.css'
    }]
  }
};