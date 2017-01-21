/**
 * Created by dengqiming on 21/01/2017.
 */

var add = require('./add.js').add;
var Foo = require('./add.js').Foo;
var foo = require('./add.js').foo;
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('相等或不等', function() {
    expect(4 + 5).to.be.equal(9);
    expect(4 + 5).to.be.not.equal(10);
    expect(foo).to.be.deep.equal({ bar: 'baz'});
  });

  it('布尔值为true', function() {
    expect('everthing').to.be.ok;
    expect(false).to.not.be.ok;
  });

  it('typeof', function() {
    expect('test').to.be.a('string');
    expect({ foo: 'bar'}).to.be.an('object');
    expect(foo).to.be.an.instanceof(Foo);
  });

  it('include', function() {
    expect([1, 2, 3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
  });

  it('empty', function() {
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;
  });

  it('match', function() {
    expect('foobar').to.match(/^foo/);
  })


});
