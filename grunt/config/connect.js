// https://github.com/gruntjs/grunt-contrib-connect
module.exports = {
  server: {
    options: {
      port: 8090,
      hostname: 'localhost',
      base: '<%= paths.dist %>'
    }
  }
};