/**
 * Created by dengqiming on 22/01/2017.
 */

var add = require('../add').add;
var Foo = require('../add').Foo;
var foo = require('../add').foo;
var goodFn = require('../add').goodFn;
var badFn = require('../add').badFn;

var expect = require('chai').expect;

describe('chai.js断言库更多Demo', function () {

  describe('基础断言', function () {

    it('1 + 1 = 2', function () {
      expect(1 + 1).to.be.equal(2);
    });

    it('相等或不等', function () {
      expect(4 + 5).to.be.equal(9);
      expect(4 + 5).to.be.not.equal(10);
      expect(foo).to.be.deep.equal({bar: 'baz'});
    });

    it('布尔值为true', function () {
      expect('everything').to.be.ok;
      expect(false).to.not.be.ok;
    });

    it('typeof', function () {
      expect('test').to.be.a('string');
      expect({foo: 'bar'}).to.be.an('object');
      expect(foo).to.be.an.instanceof(Foo);
    });

    it('include', function () {
      expect([1, 2, 3]).to.include(2);
      expect('foobar').to.contain('foo');
      expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');
    });

    it('empty', function () {
      expect([]).to.be.empty;
      expect('').to.be.empty;
      expect({}).to.be.empty;
    });

    it('match', function () {
      expect('foobar').to.match(/^foo/);
    });

  });

  describe('进阶', function() {

    it('.not', function() {
      expect(foo).to.not.equal('bar');
      expect(goodFn).to.not.throw(Error);
      expect(badFn).to.throw(Error);
    });


    it('.deep', function() {
      expect(foo).to.deep.equal({ bar: 'baz'});
      expect({ foo: { bar: { baz: 'quux'}}}).to.have.deep.property('foo.bar.baz', 'quux');
      var deepCss = { '.link': { '[target]': 42 }};
      expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
    });

    it('.any', function() {
      expect(foo).to.have.any.keys('bar', 'baz');
    });

    it('.all', function() {
      expect(foo).to.have.all.keys('bar');
    });


    it.only('.a(type)/.an(type)', function() {
      expect('test').to.be.a('string');
      expect({ foo: 'bar'}).to.be.an('object');
      expect(4).to.be.a('number');
      expect(Foo).to.be.a('function');
      expect([1, 2, 3]).to.be.an('array');
      expect(false).to.be.a('boolean');
      expect(null).to.be.a('null');
      expect(undefined).to.be.an('undefined');
      expect(new Error).to.be.an('error');
      expect(new Promise(function(resolve, reject){})).to.be.a('promise');
      expect(new Float32Array()).to.be.a('float32array');
      expect(Symbol()).to.be.a('symbol');

      // es6 overrides
      //expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');

      // language chain
      expect(foo).to.be.an.instanceof(Foo);
      expect({ foo: 'bar'}).to.be.an.instanceof(Object);
    });

    it.skip('.a(type)/.an(type)中未通过的用例', function() {
      // es6 overrides
      expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
    });

    it('ES6 Symbol用法', function() {

      // Symbol.toStringTag 用法
      class Collection {
        get [Symbol.toStringTag]() {
          return 'Foo';
        }
      }

      var x = new Collection();
      expect(x).to.be.a('Foo');
      expect({[Symbol.toStringTag]:(()=>'foo')()}).to.be.a('foo');
      expect({[Symbol.toStringTag]:'foo'}).to.be.a('foo');

    });

    it('.include(value)/.contain(value)', function() {
      // include和contain都可以用作判断object in an array 或者 a substring in a string
      // include
      expect([1, 2, 3]).to.include(2);
      expect('foobar').to.include('foo');
      expect({ foo: 'bar', hello: 'world'}).to.include.keys('foo');
      expect({ foo: 'bar', hello: 'world'}).to.not.include.keys('bar');

      // contain
      expect([1, 2, 3]).to.contain(2);
      expect('foobar').to.contain('foo');
      expect({ foo: 'bar', hello: 'world'}).to.contain.keys('foo');
      expect({ foo: 'bar', hello: 'world'}).to.not.contain.keys('world');
    });

    it('.ok', function() {
      expect('everything').to.be.ok;
      expect(1).to.be.ok;
      expect(false).to.not.be.ok;
      expect(null).to.not.be.ok;
      expect(true).to.be.ok;
      expect(undefined).to.not.be.ok;
      expect([]).to.be.ok;
      expect('').to.not.be.ok;
      expect(0).to.not.be.ok;
    });

    it('.true', function() {
      expect(true).to.be.true;
      expect(1).to.not.be.true;
      expect('everything').to.not.be.true;
    });

    it('.false', function() {
      expect(false).to.be.false;
      expect(0).to.not.be.false;
      expect('').to.not.be.false;
    })

    it('.null', function() {
      expect(null).to.be.null;
      expect(undefined).to.not.be.null;
    })

    it('.undefined', function() {
      expect(undefined).to.be.undefined;
      expect(null).to.not.be.undefined;
    });

    it('.NaN', function() {
      expect('foo').to.be.NaN;
      expect(4).to.not.be.NaN;
      expect(null).to.not.be.NaN;
      expect(Infinity).to.not.be.NaN;
      expect(NaN).to.be.NaN;

      expect(NaN !== NaN).to.be.true;
      expect(undefined !== undefined).to.be.false;
      expect(null !== null).to.be.false;
    })
  });

});
