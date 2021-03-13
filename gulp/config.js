module.exports = {

  PATHS:{
  	'bckdir': './BCK/',
  	'destinationdir':'./dist/',
    'sourcedir':'./source/'
  },

  SASS_PATHS: [
    'node_modules/foundation-sites/scss/',
    'node_modules/motion-ui/'
  ],

  BANNER: ['/**',
  ' * @name <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @git last commit <%= git.long() %>',
  ' */',
  ''].join('\n')
  ,
  

  //some configs:
  CONNECT:{
		'port':'8092'
	},
  
  //Configuration for space linter
  SPACELINTER:{
    indentation: 'spaces',
    spaces: 4
  },


  //Optimization level for the postcss-clean task: `0`(disabled),`1`,`2`(maximum, includes rules reordering);
  POSTCSS: {
    clean:{
        'optimizationLevel':2
    }

  },
  //Optimization level for the imagemin task;
  IMAGEMIN :{
		'optimizationLevel':3
	},

  //Optimizations for the Terser 

  TERSER:{
        'comments': false, //can be false, 'some' or 'all'
        'compress': true,  
        'beautify': false,
        'mangle':true,
        'keep_classnames': false,
        'keep_fnames': false
  },


  // Assets; this array is used in the "copy" task; it excludes Js folder
  ASSETS_FILES: [
    'source/Assets/**/*',
    '!source/Assets/Js/**'
  ],


  JS_VENDOR_FILES: [
    'node_modules/jquery/dist/jquery.min.js'
  ],

  JS_FILES: [ 
    'node_modules/what-input/dist/what-input.js',
    'node_modules/foundation-sites/dist/js/foundation.js',
    'node_modules/motion-ui/dist/motion-ui.js',  
    'source/Assets/Js/app.js'        
      
  ],

  // Assets to deploy; this array is used in the "deploy" task; it excludes all the files that must be handled with a) sass and postcss, and b) uglify.
  //Also, Images/test/ is excluded from deploy
  DEPLOY_FILES:[
    '**/*',
    '!{Css,Images/test}/**',
    '!Js/app.js'

  ]

}
