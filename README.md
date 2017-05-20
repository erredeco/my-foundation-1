# my-foundation-1
my foundation 1 is my first attempt to build a development enviroment using bower and grunt; it is still flawed

##Installation instructions 

####Install Grunt and Bower:  

`npm install -g grunt-cli bower (*)`




##copy from git


##Running instructions 

`npm install` (*)

`grunt bower:install`

`grunt` to create all

`grunt server` to fire the server


in the main folder, create a file called deploy.json; the file *must* contain the following lines:

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
	"directory":"../../xampp/htdocs/typo3.test7.it/typo3conf/ext/bhsiteconf/Resources/Public/"
}
```

on MAC:  the "istances" of my-foundation-1 are: `Users/riccardo/Progetti/`

e.g. `Users/riccardo/Progetti/Public_assets_for_typo3.7.development.it`

as the MAMP is in  `Users/riccardo/Sites/typo3.7.development.it/` the path deploydir must be:
```
{
	"directory":"../../Sites/typo3.7.development.it/typo3conf/ext/bhsiteconf/Resources/Public/"
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
##IMPORTANT!!! 

Due to a limitation of grunt-postcss, we had to include the "dist" path into the /grunt/postcss.js file!!

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



(*) run the command with "sudo " if it doesn't work



**Inclusion of the foundation js files

All files are included inside the files.json file, in the correct inclusion order. If you need only a _partial_ inclusion, refer to this documentation (ONE DAY I WILL USE THIS MAP TO INCLUDE THE FILES!):
look also at node_modules/foundation-sites/customizer/config.yml

```
{
  "abide":[
    "foundation.abide.js"
  ],
  
  "accordion": [
    "foundation.accordion.js",    
      "foundation.util.keyboard.js",
      "foundation.util.motion.js"
  ],
  "accordionMenu": [
    "foundation.accordionMenu.js",  
      "foundation.util.keyboard.js",
      "foundation.util.motion.js",
      "foundation.util.nest.js"
  ],
  "drilldown": [
    "foundation.drilldown.js",
      "foundation.util.keyboard.js",
      "foundation.util.motion.js",
      "foundation.util.nest.js"
  ],
  
  "dropdown": [
    "foundation.dropdown.js",
      "foundation.util.keyboard.js",
      "foundation.util.box.js",
      "foundation.util.triggers.js"
  ],  
  
  "dropdownMenu": [
    "foundation.dropdownMenu.js",
      "foundation.util.keyboard.js",
      "foundation.util.motion.js",
      "foundation.util.box.js",
      "foundation.util.nest.js"
  ],

  "equalizer": [
    "foundation.equalizer.js",    
      "foundation.util.mediaQuery.js",  
      "foundation.util.timerAndImageLoader.js",   
  ],

  "interchange": [
    "foundation.interchange.js",  
      "foundation.util.triggers.js",
      "foundation.util.timerAndImageLoader.js"
  ],
  "magellan": [
    "foundation.util.motion.js"
  ],
  "offcanvas": [
    "foundation.offcanvas.js"
  ],
  "orbit": [
    "foundation.orbit.js",  
      "foundation.util.motion.js",
      "foundation.util.timerAndImageLoader.js",
      "foundation.util.keyboard.js",
      "foundation.util.touch.js"
  ],
  "responsiveMenu": [
    "foundation.responsiveMenu.js",    
      "foundation.util.triggers.js",
      "foundation.util.mediaQuery.js"
  ],
  "responsiveToggle": [
    "foundation.responsiveToggle.js",  
      "foundation.util.mediaQuery.js"
  ],
  "reveal": [
    "foundation.reveal.js",  
      "foundation.util.box.js",
      "foundation.util.motion.js",
      "foundation.util.triggers.js",
      "foundation.util.mediaQuery.js",
      "foundation.util.keyboard.js"      
  ],
  "slider": [
    "foundation.slider.js",  
      "foundation.util.box.js",
      "foundation.util.motion.js",
      "foundation.util.triggers.js",
      "foundation.util.mediaQuery.js",
      "foundation.util.keyboard.js" 
  ],
  "sticky": [
    "foundation.sticky.js",    
      "foundation.util.triggers.js",
      "foundation.util.mediaQuery.js"
  ],
  "tabs": [
    "foundation.tabs.js",    
      "foundation.util.keyboard.js",
      "foundation.util.timerAndImageLoader.js"
  ],
  "toggler": [
    "foundation.toggler.js",     
      "foundation.util.motion.js"
  ],
  "tooltip": [
    "foundation.tooltip.js",       
      "foundation.util.box.js",
      "foundation.util.triggers.js",
      "foundation.util.mediaQuery.js",
      "foundation.util.motion.js"
  ],
}
```
It seems that
- core
- foundation.zf.responsiveAccordionTabs

are always present