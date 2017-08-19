// https://github.com/gruntjs/grunt-contrib-copy

var conf = require('../../configuration.json');
var files = require('../../files.json');

module.exports = {
  dist: {
    files: [{
      expand:true,
      flatten:true,      
      src: files.js.vendor,
      dest: conf.paths.destinationdir+'Assets/Js/Vendor/',

      filter: 'isFile'
    },
    {         
      expand:true,
      cwd: conf.paths.sourcedir+'Assets/',
      src: ['**/*', '!Js/**/*'],
      dest: conf.paths.destinationdir+'Assets/',  
      filter: 'isFile'
    }]
  },

  //use this to backup scss and  javascript  files into another folder
  //please take note that you must do a diff after the update
  backup: { 
    files: [{
      expand:true, 
      cwd: conf.paths.sourcedir, 
      src: ['./**/*.*'], 
      dest:conf.paths.bckdir+'<%= date%>-version<%= pkg.version%>/source/'
    }]
  },
  
  deploy: {    
    files: [{
      expand:true, 
      cwd: conf.paths.destinationdir+'Assets/',
      src: [
        '**/*',
        '!{Css,Images}/**/*',
        files.excludefromcopy
        ], 
      filter: 'isFile',
      dest: conf.paths.deploydir+'Assets/'
    }]  
  }
};





