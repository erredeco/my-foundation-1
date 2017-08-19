// https://github.com/nDmitry/grunt-postcss
// https://github.com/postcss/autoprefixer
// https://github.com/borodean/postcss-assets
// https://github.com/2createStudio/postcss-sprites
// https://github.com/ben-eb/cssnano
var postcss = require('postcss');
var updateRule = require('postcss-sprites/lib/core').updateRule;
  
var conf = require('../../configuration.json');

module.exports = {

    all:{
    	options:{
			map: true,
      map: {
          inline: false
      },
		    processors: [
		        require('autoprefixer')({
		        	browsers: conf.postcss.autoprefixer	
		        }),
		        
		        require('postcss-assets')({
		        	cachebuster: true,
		        	loadPaths: ['Images/','Sprites'],
		        	relative: true,
		        	// does not work with <%= paths.destinationdir %>
		        	// https://github.com/borodean/postcss-assets/issues/66
		        	// http://stackoverflow.com/questions/42602482/configure-grunt-postcss-assets-paths-relative
		        	basePath: conf.paths.destinationdir+'Assets/'
		        }),

		        require('postcss-sprites')({
				    // does not work with <%= paths.destinationdir %>
				    spritePath: conf.paths.destinationdir+'Assets/Sprites/',
					retina: true,
					hooks: {	
				        onUpdateRule: function(rule, token, image) {
				            // Use built-in logic for background-image & background-position
				            updateRule(rule, token, image);

				            ['width', 'height'].forEach(function(prop) {
				                var value = image.coords[prop];
				                if (image.retina) {
				                    value /= image.ratio;
				                }
				                rule.insertAfter(rule.last, postcss.decl({
				                    prop: prop,
				                    value: value + 'px'
				                }));
				            });
				        }
			    	},


				    // use only images inside Sprites
					filterBy: function(image) {
					        
				        if (!/Sprites\//.test(image.url)) {
				            return Promise.reject();
				        }
					    return Promise.resolve('Sprites');
					}
		        })
				
		    ]			
    	},
	    files:[{
        	expand: true,                  
        	cwd: conf.paths.destinationdir+'Assets/Css/',                  
       		src: '**/*.temp.css',  
        	dest: conf.paths.destinationdir+'Assets/Css/', 
        	ext: '.css'                
    	}]
    },

    deploy:{
    	options:{
			map:  true, 
		    processors: [
				require('cssnano')({
					safe: true	
				})
		    ]			
    	},

	    files:[{
        	expand: true,                  
        	cwd: conf.paths.destinationdir+'Assets/Css/',
       		src: ['**/*.css','!**/*.min.css','!**/*.temp.css'],   
        	dest: conf.paths.destinationdir+'Assets/Css/', 
        	ext: '.min.css'                
    	}]
    }
};