// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.source %>assets/',
      src: ['**/*','!{scss,js}/**/*'],
      dest: '<%= paths.dist %>/assets/',
      filter: 'isFile'
    },{
      expand: true,
      cwd: '<%= paths.js %>',
      src: ['foundation/*.js'],
      dest: '<%= paths.dist %>assets/js',
      filter: 'isFile'
    },{
      src: '<%= paths.vendor %>jquery/jquery.min.js',
      dest: '<%= paths.dist %>/assets/js/jquery.min.js'
    },{

      //inoltre ti dovresti copiare anche i gemfile e gemfile.lock

      expand: true,
      cwd: '<%= paths.scss %>',
      src: '**/*.scss',
      dest: '<%= paths.source %>assets/',
      filter: 'isFile'
    },{
      src:'./<%= paths.vendor %>/myfoundation-scss-only/Gemfile',
      dest:'./Gemfile'
    },{
      src:'./<%= paths.vendor %>/myfoundation-scss-only/Gemfile.lock',
      dest:'./Gemfile.lock'

      //non ho idea del perchè faccia questo
      //io lo salto kkk (ricordati le graffe!)
      //src: ['bower.json', 'package.json'],
      //dest: '<%= paths.dist %>assets/'
    }]
  },

      //use this to backup scss and foundation javascript  files into another folder
      //please take note that you must do a diff after the update
      backup: { 
      files: [{
            expand:true, 
            cwd: './<%= paths.source %>/', 
            src: ['./**/*.*'], 
            dest: '<%= paths.bckdir %>/<%= date%>-version<%= pkg.version%>'
          }]            
      }

};
