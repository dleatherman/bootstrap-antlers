module.exports = function(grunt) {
  grunt.initConfig({

    kss: {
      options: {
        includeType: 'less',
        includePath: 'src/css/less/style.less',
        template: 'bootstrap-antlers'
      },
      dist: {
          files: {
            'styleguide': ['src']
          }
      }
    },

  });

  grunt.loadNpmTasks('grunt-kss');

}