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
		    processors: [
		        require('autoprefixer')({
		        	browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
		        }),
		        
		        require('postcss-assets')({
		        	cachebuster: true,
		        	loadPaths: ['Img_layout/','Img_sprites'],
		        	relative: true,
		        	// does not work with <%= paths.destinationdir %> for unknown reasons.
		        	// https://github.com/borodean/postcss-assets/issues/66
		        	// http://stackoverflow.com/questions/42602482/configure-grunt-postcss-assets-paths-relative
		        	basePath:'./dist/Assets/'
		        }),

		        require('postcss-sprites')({
				    // does not work with <%= paths.destinationdir %> for unknown reasons.
				    spritePath: './dist/Assets/Img_layout/',
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


				    // use only images inside Img_sprites
					filterBy: function(image) {
					        
					        if (!/Img_sprites\//.test(image.url)) {
					            return Promise.reject();
					        }

					        return Promise.resolve('Img_sprites');
					    }

					    

					    


		        }),



				
		    ]			
    	},
    	src: '<%= paths.destinationdir %>Assets/Css/*.css'
    },

    nano:{
    	options:{
			map: true, 
		    processors: [
				require('cssnano')()
		    ]			
    	},
    	src: '<%= paths.destinationdir %>Assets/Css/*.css'
    }
};