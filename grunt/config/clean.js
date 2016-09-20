// https://github.com/gruntjs/grunt-contrib-clean

module.exports = {
	source: ['<%= paths.sourcedir %>'],
	cache: ['.sass-cache'],
	bower: ['<%= paths.vendor %>'],
	dist: ['<%= paths.destinationdir %>']
};