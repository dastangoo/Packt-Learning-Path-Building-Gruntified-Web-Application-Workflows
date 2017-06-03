var fs = require('fs');
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
      jshint: {
        files: {
          src: ['js/**/*.js']
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
  
}
