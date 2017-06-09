define(function (require) {
  var feature = require('modules/feature');

  describe('the #version property', function () {
    it('contains a version string', fucntion() {
      var version = feature.version;
       expect(typeof version).toBe('string');
    });
  });
});
