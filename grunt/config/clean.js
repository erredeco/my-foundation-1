// https://github.com/gruntjs/grunt-contrib-clean

var conf = require('../../configuration.json');
module.exports = {
	cache: ['.sass-cache'],
	dist: conf.paths.destinationdir
};