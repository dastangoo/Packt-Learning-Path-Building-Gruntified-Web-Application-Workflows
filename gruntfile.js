var fs = require('fs');
module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      sass: {
        dist: {
          files: {
            'dist/css/styles.css': 'sass/**/*.scss'
          }
        },
        options: {
          sourceMap: true
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/js/package.min.js': 'dist/js/**/*.js'
          }
        },
        options: {
          sourceMap: true,
          sourceManIn: 'dist/js/package.js.map'
        }
      },
      requirejs: {
        dist: {
          options: {
            baseUrl: 'js',
            out: 'dist/js/app.js',
            include: 'main',
            name: 'vendor/almond'
          }
        }
      },
      cssmin: {
        dist: {
          files: {
            'dist/css/styles.min.css': 'dist/css/**/*.css'
          }
        },
        options: {
          sourceMap: true
        }
      },
      copy: {
        dev: {
          files: [
            {
              src: 'node_modules/grunt-contrib-requirejs/node_modules/requirejs/requirejs',
              dest: 'dist/js/vendor/require.js'
            }, {
              expand: true,
              src: ['js/**'],
              dest: 'dist'
            }
          ]
        }
      },
      htmlbuild: {
        dist: {
          src: 'index.html',
          dest: 'dist/index.html',
          options: {
            prefix: 'dist/',
            relative: true,
            scripts: {
              package: ['dist/js/package.min.js', 'dist/js/app.js']
            },
            styles: {
              css: 'dist/css/styles.min.css'
            }
          }
        },
        dev: {
          src: 'index.html',
          dest: 'dist/index.html',
          options: {
            prefix: 'dist/',
            relative: true,
            scripts: {
              package: 'dist/js/package.js'
            },
            styles: {
              css: 'dist/css/styles.css'
            }
          }
        }
      },
      connect: {
        server: {
          options: {
            base: './dist/',
            keepalive: true,
            open: true
          }
        }
      },
      karma: {
        unit: {
          configFile: 'karma.conf.js'
        }
      },
      gitadd: {
        dist: {
          options: {
            all: true
          }
        }
      },
      gitcommit: {
        dist: {
          options: {
            message: grunt.option('commit-message')
          }
        }
      },
      gitcheckout: {
        dist: {
          bransh: 'master'
        }
      },
      gitrebase: {
        dist: {
          options: {
            branch: ''
          }
        }
      },
      get_branchname: {
        dist: {
          options: {
            target: 'gitrebase.dist.options.branch',
            quiet: true
          }
        }
      }
  });
  
  grunt.registerTask('get-branch', function () {
    var done = this.async();
    grunt.util.spawn({
      cmd: 'git',
      args: ['symbolic-ref', 'HEAD', '--short']
    }, function (error, result){
      console.log(result.stdout);
      done();
    });
  });


  grunt.registerTask('jshint', ['jshint']);

  grunt.loadTasks('grunt');

  grunt.registerTask('default', ['jshint', 'clean', 'coffee', 'sass', 'uglify', 'requirejs', 'cssmin', 'copy', 'htmlbuild:dev', 'connect']);
  grunt.registerTask('pre-build', ['jshint', 'karma', 'clean', 'coffee', 'sass']);
  grunt.registerTask('compress', ['uglify', 're quirejs','cssmin']);
  grunt.registerTask('build:deve', ['pre-build', 'compress', 'copy', 'htmlbuild:dev', 'connect']);
  grunt.registerTask('build:dist', ['pre-build', 'compress', 'htmlbuild:dist', 'git', 'connect']);
  grunt.registerTask('git', ['gitadd', 'gitcommit', 'git-branch', 'gitcheckout'])

}
