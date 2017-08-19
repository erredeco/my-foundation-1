//https://github.com/modernizr/grunt-modernizr

var conf = require('../../configuration.json');
var files = require('../../files.json');

module.exports = {
	dist: {
		"dest" : conf.paths.destinationdir+'Assets/Js/Vendor/modernizr-custom.min.js',
		"parseFiles": false,
		"devFile": false,
    	"crawl" : false,
    	"uglify": conf.modernizr.uglify,		
		"customTests": [],
		"tests": files.js.modernizr.tests,		
		"options": files.js.modernizr.options
	}
};