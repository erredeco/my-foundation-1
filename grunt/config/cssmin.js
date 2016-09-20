// https://github.com/gruntjs/grunt-contrib-cssmin

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.destinationdir %>Assets/Css',
      src: ['*.css', '!*.min.css'],
      dest:'<%= paths.destinationdir %>Assets/Css',
      ext: '.min.css'
    }]
  }
};