// https://github.com/gruntjs/grunt-contrib-connect

var conf = require('../../configuration.json');

module.exports = {
  server: {
    options: {
      port: conf.connect.port,
      hostname: conf.connect.hostname,
      base: conf.paths.destinationdir
    }
  }
};