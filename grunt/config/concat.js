// https://github.com/gruntjs/grunt-contrib-concat

var conf = require('../../configuration.json');
var files = require('../../files.json');

module.exports = { 
    options: {
        sourceMap: false
    }, 

	all: {
		files:[{
			src: files.js.app, 
			dest: conf.paths.destinationdir+'Assets/Js/all.js'
		}]

	}
};