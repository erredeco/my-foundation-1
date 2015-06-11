// https://github.com/assemble/assemble/
module.exports = {
  dist: {
    options: {
      flatten: false,
      assets: '<%= paths.dist %>/assets',
      //non so a cosa serve
      //data: ['<%= paths.source %>data/*.json'],
      
      //non so a cosa serve
      //helpers: ['<%= paths.source %>helpers/*.js'],
      partials: ['<%= paths.source %>includes/**/*.{html,scss}'],
      layoutdir: '<%= paths.source %>layouts',
      layout: 'index.html'
    },
    expand: true,
    cwd: '<%= paths.source %>pages',
    src: '**/*.{html,md}',
    dest: '<%= paths.dist %>pages/'
  }
};