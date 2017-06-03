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
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['jshint', 'coffee', 'sass']);

}
