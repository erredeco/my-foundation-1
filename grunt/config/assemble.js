// https://github.com/assemble/assemble/
module.exports = {
  dist: {
    options: {
      flatten: false,
      assets: '<%= paths.dist %>/assets',
      //non so a cosa serve
      //data: ['<%= paths.templates %>data/*.json'],
      
      //non so a cosa serve
      //helpers: ['<%= paths.templates %>helpers/*.js'],
      partials: ['<%= paths.templates %>includes/**/*.{html,hbs}'],
      layoutdir: '<%= paths.templates %>layouts',
      layout: 'index.html'
    },
    expand: true,
    cwd: '<%= paths.templates %>pages',
    src: '**/*.{html,md}',
    dest: '<%= paths.dist %>pages/'
  }
};