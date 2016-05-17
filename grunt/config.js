/**
 * Grunt configuration
 */

'use strict';


module.exports = {

	//paths, global
	
	bckdir: './BCK/',
	bowerdir: './bower_components/',
	datadir: './data',
  destinationdir: './dist/',
	foundationdir: './node_modules/foundation-sites/',
  mydir: './localsource',
	sourcedir: './source/',
  tempjsdir:'./source/assets/js/temp/',
  templatesdir:'./templates/',
  
  // this is the only thing that should change!
  deploydir:'../../typo3.test7.it/typo3conf/ext/bhsiteconf/Resources/Public/'
  
  
	
	//Compoents: my js (App js)
	appjs:[
		'./source/assets/js/app.js'
	],
	//Components: Foundation, js:
	// THIS IS THE CORRECT ORDER OF INCLUSION! DO NOT CHANGE IT!

	/*
		ONE DAY I WILL USE THIS MAP TO INCLUDE THE FILES

{
  "accordion": [
    "foundation.util.keyboard.js",
    "foundation.util.motion.js"
  ],
  "accordionMenu": [
    "foundation.util.keyboard.js",
    "foundation.util.motion.js",
    "foundation.util.nest.js"
  ],
  "drilldown": [
    "foundation.util.keyboard.js",
    "foundation.util.motion.js",
    "foundation.util.nest.js"
  ],
  "dropdownMenu": [
    "foundation.util.keyboard.js",
    "foundation.util.motion.js",
    "foundation.util.box.js",
    "foundation.util.nest.js"
  ],
  "dropdown": [
    "foundation.util.keyboard.js",
    "foundation.util.box.js",
    "foundation.util.triggers.js"
  ],
  "interchange": [
    "foundation.util.triggers.js",
    "foundation.util.timerAndImageLoader.js"
  ],
  "magellan": [
    "foundation.util.motion.js"
  ],
  "offcanvas": [
    "foundation.util.motion.js",
    "foundation.util.triggers.js"
  ],
  "orbit": [
    "foundation.util.motion.js",
    "foundation.util.timerAndImageLoader.js",
    "foundation.util.keyboard.js",
    "foundation.util.touch.js"
  ],
  "responsiveMenu": [
    "foundation.util.triggers.js",
    "foundation.util.mediaQuery.js",
    "foundation.accordionMenu.js",
    "foundation.drilldown.js",
    "foundation.dropdownMenu.js",
    "foundation.util.nest.js"
  ],
  "responsiveToggle": [
    "foundation.util.mediaQuery.js"
  ],
  "reveal": [
    "foundation.util.box.js",
    "foundation.util.motion.js",
    "foundation.util.triggers.js",
    "foundation.util.mediaQuery.js"
  ],
  "slider": [
    "foundation.util.triggers.js",
    "foundation.util.motion.js",
    "foundation.util.keyboard.js",
    "foundation.util.touch.js"
  ],
  "sticky": [
    "foundation.util.triggers.js",
    "foundation.util.mediaQuery.js"
  ],
  "tabs": [
    "foundation.util.keyboard.js",
    "foundation.util.timerAndImageLoader.js"
  ],
  "toggler": [
    "foundation.util.motion.js"
  ],
  "tooltip": [
    "foundation.util.box.js",
    "foundation.util.triggers.js",
    "foundation.util.mediaQuery.js",
    "foundation.util.motion.js"
  ],
  "motion-ui": [
    "foundation.util.motion.js"
  ]
}
	*/


	foundationjs: [
        './node_modules/foundation-sites/js/foundation.core.js',    
        './node_modules/foundation-sites/js/foundation.util.box.js',
        './node_modules/foundation-sites/js/foundation.util.keyboard.js',
        './node_modules/foundation-sites/js/foundation.util.mediaQuery.js',      
        './node_modules/foundation-sites/js/foundation.util.motion.js',        
        './node_modules/foundation-sites/js/foundation.util.nest.js',   
        './node_modules/foundation-sites/js/foundation.util.timerAndImageLoader.js',
        './node_modules/foundation-sites/js/foundation.util.touch.js',
        './node_modules/foundation-sites/js/foundation.util.triggers.js',               
        './node_modules/foundation-sites/js/foundation.abide.js',
        './node_modules/foundation-sites/js/foundation.accordion.js',
        './node_modules/foundation-sites/js/foundation.accordionMenu.js',    
        './node_modules/foundation-sites/js/foundation.drilldown.js',
        './node_modules/foundation-sites/js/foundation.dropdown.js',
        './node_modules/foundation-sites/js/foundation.dropdownMenu.js',    
        './node_modules/foundation-sites/js/foundation.equalizer.js',
        './node_modules/foundation-sites/js/foundation.interchange.js',
        './node_modules/foundation-sites/js/foundation.magellan.js',
        './node_modules/foundation-sites/js/foundation.offcanvas.js',
        './node_modules/foundation-sites/js/foundation.orbit.js',
        './node_modules/foundation-sites/js/foundation.responsiveMenu.js',
        './node_modules/foundation-sites/js/foundation.responsiveToggle.js',
        './node_modules/foundation-sites/js/foundation.reveal.js',
        './node_modules/foundation-sites/js/foundation.slider.js',
        './node_modules/foundation-sites/js/foundation.sticky.js',    
        './node_modules/foundation-sites/js/foundation.tabs.js',
        './node_modules/foundation-sites/js/foundation.toggler.js',   
        './node_modules/foundation-sites/js/foundation.tooltip.js'

	]
};