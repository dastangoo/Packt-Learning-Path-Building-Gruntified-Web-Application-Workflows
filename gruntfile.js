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
            'dist/package.js': 'coffee/**/*.coffee'
          }
        },
        options: {
          sourceMap: true
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['jshint', 'coffee']);

}
