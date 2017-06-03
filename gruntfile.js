var fs = require('fs');
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
      jshint: {
        files: {
          src: ['js/**/*.js']
        }
      },
      coffee: {
        dist: {
          files: {
            'dist/js/package.js': 'coffee/**/*.coffee'
          }
        },
        options: {
          sourceMap: true
        }
      },
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
      cssmin: {
        dist: {
          files: {
            'dist/css/styles.min.css': 'dist/css/**/*.css'
          }
        },
        options: {
          sourceMap: true
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint', 'coffee', 'sass', 'uglify', 'cssmin']);

}
