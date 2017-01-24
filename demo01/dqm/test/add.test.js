/**
 * Created by dengqiming on 21/01/2017.
 */

var add = require('../add.js').add;
var Foo = require('../add.js').Foo;
var foo = require('../add.js').foo;
var expect = require('chai').expect;

describe('加法函数的测试', function () {

  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

});
