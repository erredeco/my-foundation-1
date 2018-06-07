# my-foundation-1
my foundation 1 is my first attempt to build a development enviroment using bower and grunt; it is still flawed

##Installation instructions 

####Install Nodejs

####Install yarn 


##copy from git


##Running instructions 

`yarn install` (1)
`grunt` to create all

`grunt server` to fire the server


in the main folder, create a file called localconfiguration.json; the file *must* contain the following lines:

```
{
  "deploydir":"../../Mamp-sites/typo3.7.development.it/typo3conf/ext/bhsiteconf/Resources/Public/"
}
```

that is the folder for the deploy. Please note that this file _IS NOT_ saved in git! 

on Windows, you should put all the "Istances" of my-foundation-1  inside `C:\Progetti\`
 
 e.g. ` "C:\Progetti\Public_assets_for_typo3.test7.it"`
 
 e.g. `"C:\Progetti\Public_assets_for_www.teci.it.upgrade.bhuman.it"`  
  
 as the XAMPP is in "C:\xampp\htdocs\typo3.test7.it", the path deploydir must be:

```
{
	"deploydir":"../../xampp/htdocs/typo3.test7.it/typo3conf/ext/bhsiteconf/Resources/Public/"
}
```

on MAC:  the "istances" of my-foundation-1 are: `Users/riccardo/Progetti/`

e.g. `Users/riccardo/Progetti/Public_assets_for_typo3.7.development.it`

as the MAMP is in  `Users/riccardo/Sites/typo3.7.development.it/` the path deploydir must be:
```
{
	"deploydir":"../../Sites/typo3.7.development.it/typo3conf/ext/bhsiteconf/Resources/Public/"
}
```

## About the postcss:main configuration

To emulate compass utilities like image-url and sprite generation, I have addes some postcss functions:

The full documentation is available at:

- https://github.com/borodean/postcss-assets
- https://github.com/2createStudio/postcss-sprites

About image-url (postcss-assets) you just have to put the images in /source/Assets/Images/ and write in your scss (css):


```
body{
 background-image: resolve('3771900.jpg');
}
```

for the sprite generation you can use the same prefix, and put all files in /source/Assets/Sprites/ e.g.

```
a.doc{
  background: resolve('doc.png') no-repeat 0 0;
}

a.pdf{
  background: resolve('pdf.png') no-repeat 0 0;

}
```

## available commands with grunt:

- grunt clean
	- deletes ./dist

- grunt build:assets
	- 	concat the foundation assets from source and uglifies them in dist folder
- grunt build:pages
	- build pages and prettify them into dist folder
- grunt
	- default task: shortcut for build:assets & build:pages

- grunt server
	- launch server

- grunt deploy
    - optimizes css via nano 
    - optimizes js via uglify
    - optimizes images via imagemin
    - copies all relevant files, including the js already optimized into the deploy folder.	



(1) run the command with "sudo " if it doesn't work



## Inclusion of the foundation js files
All files are included inside the files.json file;
By default, I include the complete foundation file. If you need only a _partial_ inclusion, you have to modify the array `"app"` in this way:
This is the complete list;

Look at the online documentation for what to include depending on the plugins you use.
Beware that all plugins require `foundation.core.js` and `foundation.util.mediaQuery.js` to be loaded _first._

Also beware that if you include everything and uglify it, the total file is _BIGGER_ that the one in 

`<%= paths.nodemodules %>foundation-sites/dist/js/foundation.js` so... I have warned you! ;)

```
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.core.js",    
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.box.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.keyboard.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js",      
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.motion.js",        
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.nest.js",   
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.timerAndImageLoader.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.touch.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.util.triggers.js",               
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.abide.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.accordion.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.accordionMenu.js",    
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.drilldown.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.dropdown.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.dropdownMenu.js",    
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.equalizer.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.interchange.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.magellan.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.offcanvas.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.orbit.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.responsiveMenu.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.responsiveToggle.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.reveal.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.slider.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.sticky.js",    
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.tabs.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.toggler.js",   
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.tooltip.js",
    "<%= paths.nodemodules %>foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.js"
```

look also at node_modules/foundation-sites/customizer/config.yml

