# my-foundation-1
my foundation 1 is my first attempt to build a development enviroment using bower and grunt; it is still flawed

##Installation instructions 
####Install Ruby
gem install sass (*)

gem install compass (*)

gem install bundler (*)

bundle install

####Install Grunt and Bower:  
npm install -g grunt-cli bower (*)

##copy from git


##Running instructions 

npm install (*)


in the main folder, create a file called deploy.json; the file will contain the folder for the deploy, e.g.

```
{
	"directory":"../../Sites/typo3.7.development.it/typo3conf/ext/bhsiteconf/Resources/Public/"
}
```

Please note that this file _IS NOT_ saved in git! 

on Windows, you should put all the "Istances" of my-foundation-1  inside 

```C:\Progetti\
 
 e.g. ``` "C:\Progetti\Public_assets_for_typo3.test7.it"
 
 e.g. ``` "C:\Progetti\Public_assets_for_www.teci.it.upgrade.bhuman.it"  
  
 as the XAMPP is in "C:\xampp\htdocs\typo3.test7.it", the path deploydir must be:

```
{
	"directory":"../../xampp/htdocs/typo3.test7.it/typo3conf/ext/bhsiteconf/Resources/Public/"
}
```

on MAC:  the "istances" of my-foundation-1 are: ```Users/riccardo/Progetti/

e.g. ```Users/riccardo/Progetti/Public_assets_for_typo3.7.development.it

as the MAMP is in  ```Users/riccardo/Sites/typo3.7.development.it/ the path deploydir must be:
```
{
	"directory":"../../Sites/typo3.7.development.it/typo3conf/ext/bhsiteconf/Resources/Public/"
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
	- build assets and copy them into the deploy folder.	

bundle exec compass watch to build css from sass source

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