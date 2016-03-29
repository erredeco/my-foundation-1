//https://github.com/modernizr/grunt-modernizr

var config = require('../config');

module.exports = {
	dist: {
		"dest" : config.destinationdir+'assets/js/vendor/modernizr-custom.min.js',
		"parseFiles": false,
		"customTests": [],
		"devFile": false,
		//qualsiasi test tu voglia includere, devi andare in https://modernizr.com/download e NON FIDARTI 
		// del codice generato! è meglio che tu vada sull'esempio in codepen a copiarti come si chiama il test
		// alla riga: * http://modernizr.com/download/?-WHATEVER !*/
		"tests": [    
			],
		"options": [
		    "html5shiv",
		    "setClasses"
			],
		"uglify": true
	}
};