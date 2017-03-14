// https://github.com/gruntjs/grunt-contrib-clean

module.exports = {
	cache: ['.sass-cache'],
	bower: ['<%= paths.vendor %>'],
	dist: ['<%= paths.destinationdir %>']
};