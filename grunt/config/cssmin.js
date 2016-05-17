// https://github.com/gruntjs/grunt-contrib-cssmin

var config = require('../config');

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: config.destinationdir+'Assets/Css',
      src: ['*.css', '!*.min.css'],
      dest: config.destinationdir+'Assets/Css',
      ext: '.min.css'
    }]
  }
};