// https://github.com/assemble/assemble/

module.exports = {
  dist: {
    options: {
      site: {
        base: '<%= paths.destinationdir %>pages'
      }, 
      assets: '<%= paths.destinationdir %>/Assets',
      
      //if you want to retrieve data from files
      //data: ['<%= paths.datadir %>*.{json,yml}', 'package.json'],
      
      flatten: false,
      
      //non so se serve
      helpers: ['handlebars-helpers','handlebars-helper-rel','<%= paths.sourcedir %>assets/helpers/*.js'],
      
      layout: 'index.html',      
      layoutdir: '<%= paths.templatesdir %>layouts',
      partials: ['<%= paths.templatesdir %>includes/**/*.{html,hbs}']

    },
    expand: true,
    cwd:  '<%= paths.templatesdir %>pages',
    src:  '**/*.{html,md}',
    dest: '<%= paths.destinationdir %>pages/'
  }
};