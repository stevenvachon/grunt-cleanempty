'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cleanempty = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var expected = grunt.file.read('tmp/default_options');
    test.equal(actual, false, 'should clean everything, except folder3/file');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var expected = grunt.file.read('tmp/custom_options');
    test.equal(actual, false, 'only folder2/folder/empty-folder/ should be cleaned');

    test.done();
  },
};
