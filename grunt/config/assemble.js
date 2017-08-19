// https://github.com/assemble/assemble/

var conf = require('../../configuration.json');

module.exports = {
  dist: {
    options: {
      site: {
        base: conf.paths.destinationdir+'pages'
      }, 
      assets: conf.paths.destinationdir+'Assets',
      
      //if you want to retrieve data from files
      //data: [conf.assemble.datadir+'*.{json,yml}', 'package.json'],
      
      flatten: false,
      
      //non so se serve
      helpers: ['handlebars-helpers','handlebars-helper-rel',conf.paths.sourcedir+'Assets/helpers/*.js'],      
      layout: 'index.html',      
      layoutdir: conf.assemble.templatesdir+'layouts',
      partials: [conf.assemble.templatesdir+'includes/**/*.{html,hbs}']

    },
    expand: true,
    cwd:  conf.assemble.templatesdir+'pages',
    src:  '**/*.{html,md}',
    dest: conf.paths.destinationdir+'pages/'
  }
};