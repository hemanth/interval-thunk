'use strict';
var assert = require('assert');
var intervalThunk = require('./');

it('should ', function () {
  var interval = intervalThunk(function(){console.log('meow');})(5000);
  assert.equal(
      interval._idleTimeout,
      5000
  );
});
