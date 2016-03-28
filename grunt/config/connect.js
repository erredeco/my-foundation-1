// https://github.com/gruntjs/grunt-contrib-connect
var config = require('../config');

module.exports = {
  server: {
    options: {
      port: 8090,
      hostname: 'localhost',
      base: config.destinationdir
    }
  }
};