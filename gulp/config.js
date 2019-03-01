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

  //some configs:
  CONNECT:{
		'port':'8092'
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

  UGLIFY:{
        'comments': false,
        'compress': true,
        'beautify': false,
        'mangle':true
	},

  REPLACE:{
    'from':'../../Assets/Json/events.json',
    'stagingmilano':'http://pre.unicatt.it/campuses-milan_2018/json_events.json',
    'productionmilano':'http://unicatt.it/campuses-milan_2018/campuses-json_events.json',
    'stagingbrescia':'http://pre.unicatt.it/campuses-brescia_2018/json_events.json',
    'productionbrescia':'http://unicatt.it/campuses-brescia_2018/campuses-json_events.json',
    'stagingroma':'http://pre.unicatt.it/campuses-rome_2018/json_events.json',
    'productionroma':'http://unicatt.it/campuses-rome_2018/campuses-json_events.json',
    'stagingpiacenzacremona':'http://pre.unicatt.it/campuses-piacenza_2018/json_events.json',
    'productionpiacenzacremona':'http://unicatt.it/campuses-piacenza_2018/campuses-json_events.json'
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
