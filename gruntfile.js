module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('running', 'An example task', function (arg1) {
    var done = this.async();
    grunt.log.writeln('grunt working....' + this.name);
    done();
  });

  grunt.registerTask('run', 'Run all the tasks', ['running']);
}
