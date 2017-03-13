// https://github.com/gruntjs/grunt-contrib-copy

module.exports = {
  dist: {
    files: [{
      src: '<%= paths.vendor %>jquery/dist/jquery.min.js',
      dest:'<%= paths.destinationdir %>Assets/Js/Vendor/jquery.min.js'
    },
    {         
      expand:true,
      cwd: '<%= paths.sourcedir %>Assets/',
      src: ['**/*', '!Js/**/*'],
      dest:'<%= paths.destinationdir %>Assets/',  
      filter: 'isFile'
    }]
  },

  //use this to backup scss and  javascript  files into another folder
  //please take note that you must do a diff after the update
  backup: { 
    files: [{
      expand:true, 
      cwd: '<%= paths.sourcedir %>', 
      src: ['./**/*.*'], 
      dest:'<%= paths.bckdir %><%= date%>-version<%= pkg.version%>/source/'
    }]
  },
  
  deploy: {    
    files: [{
      expand:true, 
      cwd: '<%= paths.destinationdir %>Assets/',
      src: [
        '**/*',
        '!{Css,Images}/**/*',
        '<%= files.filestoexcludefromuglify%>' //excluding here the files that are already processed by uglify!
        ], 
      filter: 'isFile',
      dest:'<%= paths.deploydir %>Assets/'
    }]  
  }
};





