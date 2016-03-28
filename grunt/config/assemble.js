// https://github.com/assemble/assemble/

var config = require('../config');

module.exports = {
  dist: {
    options: {
      flatten: false,
      assets: config.destinationdir+'/assets',
      //non so a cosa serve
      //data: ['<%= paths.templates %>data/*.json'],
      
      //non so a cosa serve
      //helpers: ['<%= paths.templates %>helpers/*.js'],
      partials: [config.templatesdir+'includes/**/*.{html,hbs}'],
      layoutdir: config.templatesdir+'layouts',
      layout: 'index.html'
    },
    expand: true,
    cwd: config.templatesdir+'pages',
    src: '**/*.{html,md}',
    dest: config.destinationdir+'pages/'
  }
};