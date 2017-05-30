// https://github.com/nDmitry/grunt-postcss
// https://github.com/postcss/autoprefixer
// https://github.com/borodean/postcss-assets
// https://github.com/2createStudio/postcss-sprites
// https://github.com/ben-eb/cssnano
var postcss = require('postcss');
var updateRule = require('postcss-sprites/lib/core').updateRule;

module.exports = {

    all:{
    	options:{
			map: true,
      map: {
          inline: false
      },
		    processors: [
		        require('autoprefixer')({
		        	browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
		        }),
		        
		        require('postcss-assets')({
		        	cachebuster: true,
		        	loadPaths: ['Images/','Sprites'],
		        	relative: true,
		        	// does not work with <%= paths.destinationdir %>
		        	// https://github.com/borodean/postcss-assets/issues/66
		        	// http://stackoverflow.com/questions/42602482/configure-grunt-postcss-assets-paths-relative
		        	basePath:'./dist/Assets/'
		        }),

		        require('postcss-sprites')({
				    // does not work with <%= paths.destinationdir %>
				    spritePath: './dist/Assets/Sprites/',
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
<<<<<<< HEAD
=======
      
>>>>>>> 0f1043c45b7eb308cd85668057f94e87a7751414
	    files:[{
        	expand: true,                  
        	cwd: '<%= paths.destinationdir %>Assets/Css/',                  
       		src: '**/*.temp.css',  
        	dest: '<%= paths.destinationdir %>Assets/Css/', 
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
        	cwd: '<%= paths.destinationdir %>Assets/Css/',                  
<<<<<<< HEAD
       		src: ['**/*.css','!**/*.min.css','!**/*.temp.css'],   
=======
       		src: ['**/*.css','!**/*.temp.css'],   
>>>>>>> 0f1043c45b7eb308cd85668057f94e87a7751414
        	dest: '<%= paths.deploydir %>Assets/Css/', 
        	ext: '.min.css'                
    	}]
    }
};