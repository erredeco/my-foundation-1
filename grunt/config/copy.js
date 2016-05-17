// https://github.com/gruntjs/grunt-contrib-copy

var config = require('../config');

module.exports = {
  dist: {
    files: [{
      src: config.bowerdir+'jquery/dist/jquery.min.js',
      dest: config.destinationdir+'Assets/Js/Vendor/jquery.min.js'
    },
    {         
      expand:true,
      cwd: config.sourcedir+'assets/',
      src: ['**/*', '!{scss,js}/**/*'],
      dest: config.destinationdir+'Assets/',  
      filter: 'isFile'
    }]
  },

  local: {
    files: [{
      expand:true, 
      cwd: config.foundationdir, 
      src: ['scss/settings/_settings.scss'], 
      dest: config.sourcedir
      },{
      expand:true, 
      cwd: config.mydir, 
      src: ['**/*.*'], 
      dest: config.sourcedir
      }]
  },

  update: {
    files: [{
      // copy the configuration file from foundation dir to sourcedir
      expand:true, 
      cwd: config.foundationdir, 
      src: ['scss/settings/_settings.scss'], 
      dest:config.sourcedir     
    }]

  },

  //use this to backup scss and  javascript  files into another folder
  //please take note that you must do a diff after the update
  backup: { 
    files: [{
      expand:true, 
      cwd: config.sourcedir, 
      src: ['./**/*.*'], 
      dest: config.bckdir+'<%= date%>-version<%= pkg.version%>/source/'
    }]
  },
  
  deploy: {
    files: [{
      expand:true, 
      cwd: config.destinationdir+'Assets/',
      src: ['./**/*.*'],     
      dest: config.deploydir
    }]  
  }
};





