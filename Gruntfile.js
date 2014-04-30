module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      production: {
        options: {
          paths: ['css'],
          cleancss: true
        },
        files: {
          'src/css/style.css': 'src/css/less/style.less'
        }
      }
    },

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

    watch: {
      files: ['*', 'src/css/less/*', 'src/js/app.js'],
      tasks: ['less:production'],
      options: {
        livereload: true
      },
      less: {
        files: ['src/css/less/*', 'bootstrap-antlers/public/kss.less'],
        tasks: ['less:production']
      },
      static: {
        files: ['index.html']
      },
      config: {
        files: ['Gruntfile.js', 'package.json'],
        options: {
          reload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          base: '.'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
  
}