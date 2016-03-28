// https://github.com/gruntjs/grunt-contrib-clean
var config = require('../config');

module.exports = {
	source: [config.sourcedir],
	cache: ['.sass-cache'],
	bower: [config.bowerdir],
	dist: [config.destinationdir]
};