// https://github.com/gruntjs/grunt-contrib-clean

module.exports = {
	cache: ['.sass-cache'],
	dist: ['<%= paths.destinationdir %>']
};