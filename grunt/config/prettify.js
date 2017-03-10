// https://github.com/jonschlinkert/grunt-prettify

module.exports = {
  options: {
      config: '.prettifyrc'
    }, 
  all: {
      expand: true,
      cwd: '<%= paths.destinationdir %>pages/',
      ext: '.html',
      src: ['./**/*.html'],
      dest: '<%= paths.deploydir %>pages/'
    }
};