// https://github.com/nDmitry/grunt-postcss

module.exports = {
options: {
      processors: [
        require('autoprefixer')({
        	browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
        })
      ]
    },
    dist: {
      src: '<%= paths.destinationdir %>Assets/Css/*.css'
    }
};