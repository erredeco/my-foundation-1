// https://github.com/nDmitry/grunt-postcss
var config = require('../config');

module.exports = {
options: {
      processors: [
        require('autoprefixer')({
        	browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
        })
      ]
    },
    dist: {
      src: config.destinationdir+'Assets/Css/*.css'
    }
};