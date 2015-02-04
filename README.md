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

## available commands with grunt:

- grunt clean
	- deletes ./dist
- grunt inizialize
	- performs clean, downloads dependencies from bower, copies relevant js and scss files to source folder
- grunt build:assets
	- 	concat the foundation assets from source and uglifies them in dist folder
- grunt build:pages
	- build pages and prettify them into dist folder
- grunt
	- default task: shortcut for build:assets & build:pages

- grunt server
	- launch server

bundle exec compass watch to build css from sass source

(*) run the command with "sudo " if it doesn't work

