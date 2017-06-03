module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    running: {
      taskOwner: 'Hamed'
    },
    multi: {
      config1: {
        message: 'This is config1'
      },
      config2: {
        message: 'This is config2'
      }
    }
  });
  grunt.registerTask('running', 'An example task', function (arg1) {
    var done = this.async();
    grunt.config.requires('running.taskOwner');
    grunt.log.writeln('grunt working....' + this.name, grunt.config.get('running.taskOwner'));
    done();
  });
  grunt.registerMultiTask('multi', 'An example multi task', function (){
    grunt.log.writeln(this.data.message);
  });
  grunt.registerTask('run', 'Run all the tasks', ['running']);
}
