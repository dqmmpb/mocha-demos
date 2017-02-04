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


    it('.a(type)/.an(type)', function() {
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
    });

    it('.null', function() {
      expect(null).to.be.null;
      expect(undefined).to.not.be.null;
    });

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
    });

    it('.exist', function() {
      let foo = 'hi', bar = null, baz;
      expect(foo).to.exist;
      expect(bar).to.not.exist;
      expect(baz).to.not.exist;
    });

    it('.empty', function() {
      expect([]).to.be.empty;
      expect('').to.be.empty;
      expect({}).to.be.empty;
    });

    it('.arguments', function() {
      expect(arguments).to.be.arguments;
    });

    it('.equal(value)', function() {
      expect('hello').to.equal('hello');
      expect(42).to.equal(42);
      expect(1).to.not.equal(true);
      expect({ foo: 'foo'}).to.not.equal({ foo: 'foo'});
      expect({ foo: 'foo'}).to.deep.equal({ foo: 'foo'});
    });

    it('.eql(value)', function() {
      expect('hello').to.eql('hello');
      expect({ foo: 'foo'}).to.eql({ foo: 'foo'});
      expect([1, 2, 3]).to.eql([1, 2, 3]);
    });

    it('.above(value)', function() {
      expect(10).to.be.above(5);
      expect('foo').to.have.length.above(2);
      expect([1, 2, 3]).to.have.length.above(2);
    });

    it('.least(value)', function() {
      expect(10).to.be.at.least(10);
      expect('foo').to.have.length.at.least(3);
      expect([1, 2, 3]).to.have.length.at.least(3);
    });

    it('.below(value)', function() {
      expect(5).to.be.below(10);
      expect('foo').to.have.length.below(4);
      expect([1, 2, 3]).to.have.length.below(4);
    });

    it('.most(value)', function() {
      expect(5).to.be.at.most(10);
      expect('foo').to.have.length.at.most(4);
      expect([1, 2, 3]).to.have.length.at.most(4);
    });

    it('.within(start, finish)', function() {
      expect(7).to.be.within(5, 10);
      expect(7).to.be.within(7, 8);
      expect(7).to.be.within(6, 7);
      expect(7).to.be.within(7, 7);
      expect(7).to.be.not.within(3, 6);
      expect('foo').to.have.length.within(2,4);
      expect([1, 2, 3]).to.have.length.within(2, 4);
    });

    it('.instanceof(constructor)', function() {
      var Tea = function(name) {
        this.name = name;
      };

      var Chai = new Tea('chai');

      expect(Chai).to.be.an.instanceof(Tea);
      expect([1, 2, 3]).to.be.instanceof(Array);
    });

    it('.property(name, [value])', function() {
      // simple referencing
      var obj = { foo: 'bar'};
      expect(obj).to.have.property('foo');
      expect(obj).to.have.property('foo', 'bar');

      // deep referencing
      var deepObj = {
        green: { tea: 'matcha'},
        teas: [ 'chai', 'matcha', { tea: 'konacha'}]
      };

      expect(deepObj).to.have.deep.property('green.tea', 'matcha');
      expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
      expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');

      var arr = [
        [ 'chai', 'matcha', 'konacha'],
        [
          { tea: 'chai'},
          { tea: 'matcha'},
          { tea: 'konacha'}
        ]
      ];

      expect(arr).to.have.deep.property('[0][1]', 'matcha');
      expect(arr).to.have.deep.property('[1][2].tea', 'konacha');


      expect(obj).to.have.property('foo')
        .that.is.a('string');
      expect(deepObj).to.have.property('green')
        .that.is.an('object')
        .that.deep.equal({tea: 'matcha'});
      expect(deepObj).to.have.property('teas')
        .that.is.an('array')
        .with.deep.property('[2]')
        .that.is.an('object')
        .that.deep.equal({tea: 'konacha'});


      var css = {'.link[target]': 42};
      expect(css).to.have.property('.link[target]', 42);

      var deepCss = { '.link': { '[target]': 42}};
      expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
    });

    it('.ownProperty(name)', function() {
      expect('test').to.have.ownProperty('length');
    });

    it('.ownPropertyDescriptor(name[,descriptor[,message]]', function() {
      expect('test').to.have.ownPropertyDescriptor('length');
      expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4});
      expect('test').to.not.have.ownPropertyDescriptor('length', {enumerable: false, configurable: false, writable: false, value: 3});
      expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
      // 错误的Example， 参看 https://github.com/chaijs/chai/issues/914
      //expect('test').ownPropertyDescriptor('length').to.have.keys('value');
      expect('test').ownPropertyDescriptor('length').to.have.any.keys('value');
      expect('test').ownPropertyDescriptor('length').to.include.keys('value');
      expect('test').ownPropertyDescriptor('length').to.contain.keys('value');
    });

    it('.length', function() {
      expect('foo').to.have.length.above(2);
      expect([1, 2, 3]).to.have.length.at.least(3);
      expect('foo').to.have.length.below(4);
      expect([1, 2, 3]).to.have.length.at.most(4);
      expect('foo').to.have.length.within(2, 4);
      expect([1, 2, 3]).to.have.length.within(2, 4);
    });

    it('.lengthOf(value[,message])', function() {
      expect([1, 2, 3]).to.have.lengthOf(3);
      expect('foobar').to.have.lengthOf(6);
    });

    it('.match(regexp)', function() {
      expect('foobar').to.match(/^foo/);
      expect('foobar').to.match(/bar$/);
      expect('foobar').to.match(/^foobar$/);
    });

    it('.string(string)', function() {
      expect('foobar').to.have.string('bar');
    });

    it('.keys(key1,[key2],[...])', function() {
      expect({ foo: 1, bar: 2}).to.have.any.keys('foo', 'bar');
      expect({ foo: 1, bar: 2}).to.have.any.keys('foo');
      expect({ foo: 1, bar: 2}).to.contain.any.keys('foo', 'bar');
      expect({ foo: 1, bar: 2}).to.contain.any.keys(['foo']);
      expect({ foo: 1, bar: 2}).to.contain.any.keys({'foo': 6});
      expect({ foo: 1, bar: 2}).to.have.all.keys('bar', 'foo');
      expect({ foo: 1, bar: 2}).to.have.all.keys({ 'foo': 6, 'bar': 7});
      expect({ foo: 1, bar: 2, baz: 3}).to.contain.all.keys(['bar', 'foo']);
      expect({ foo: 1, bar: 2, baz: 3}).to.contain.all.keys({ 'bar': 6 });
    });

    it('.throw(constructor)', function() {

      var err = new ReferenceError('This is a bad function');
      var fn = function() { throw err; };
      expect(fn).to.throw(ReferenceError);
      expect(fn).to.throw(Error);
      expect(fn).to.throw(/bad function/);
      expect(fn).to.not.throw(/good function/);
      expect(fn).to.throw(ReferenceError, /bad function/);
      expect(fn).to.throw(err);

      // 错误的Example， 参看 https://github.com/chaijs/chai/issues/914
      // expect(fn).to.throw(ReferenceError)
      //  .and.not.throw(/good function/);

    });

    it('.respondTo(method)', function() {
      function Klass() {

      }
      Klass.prototype.bar = function() {};
      expect(Klass).to.respondTo('bar');

      var obj = new Klass();
      expect(obj).to.respondTo('bar');


      Klass.baz = function() {};
      expect(Klass).itself.to.respondTo('baz');

    });

    it('.itself', function() {
      function Foo() {}
      Foo.bar = function() {};
      Foo.prototype.baz = function() {};

      expect(Foo).itself.to.respondTo('bar');
      expect(Foo).itself.not.to.respondTo('baz');
    });

    it('.satisfy(method)', function() {
      expect(1).to.satisfy(function(num) { return num > 0; });
    });


    it('.closeTo(expected, delta)', function() {
      expect(1.5).to.be.closeTo(1, 0.5);
    });

    it('.members(set)', function() {
      expect([1, 2, 3]).to.include.members([2,3]);
      expect([1, 2, 3]).to.not.include.members([2, 3, 8]);

      expect([4, 5]).to.have.members([5, 4]);
      expect([4, 5]).to.not.have.members([4, 5, 2]);

      expect([{ id: 1}]).to.deep.include.members([{ id: 1}]);
    });

    it('.oneOf(list)', function() {
      // 直接子元素，必须严格相等
      expect('a').to.be.oneOf(['a', 'b', 'c']);
      expect('a').to.not.be.oneOf([1, 2, 3]);
      expect(9).to.not.be.oneOf(['a', 'b', 'c']);
      expect([3]).to.not.be.oneOf([1, 2, [3]]);

      // 严格相等，所以对象类的值必须为同一个引用才能被判定为相等
      var three = [3];
      expect(three).to.not.be.oneOf([1, 2, [3]]);
      expect(three).to.be.oneOf([1, 2, three]);
    });

    it('.change(function)', function() {
      var obj = { val: 10};
      var fn = function() { obj.val += 3;};
      var noChangeFn = function() { return 'foo' + 'bar'; };
      expect(fn).to.change(obj, 'val');
      expect(noChangeFn).to.not.change(obj, 'val');
    });

    it('.increase(function)', function() {
      var obj = { val: 10};
      var fn = function() { obj.val = 15; };
      var fn2 = function() { obj.val += 5; };
      expect(fn).to.increase(obj, 'val');
      expect(fn2).to.increase(obj, 'val');
    });

    it('.decrease(function)', function() {
      var obj = { val: 10};
      var fn = function() { obj.val = 5; };
      var fn2 = function() { obj.val -= 1; };
      expect(fn).to.decrease(obj, 'val');
      expect(fn2).to.decrease(obj, 'val');
    });

    it('.extensible', function() {
      var nonExtensibleObject = Object.preventExtensions({});
      var sealedObject = Object.seal({});
      var frozenObject = Object.freeze({});

      expect({}).to.be.extensible;
      expect(nonExtensibleObject).to.not.be.extensible;
      expect(sealedObject).to.not.be.extensible;
      expect(frozenObject).to.not.be.extensible;
    });

    it('.sealed', function() {
      var sealedObject = Object.seal({});
      var frozenObject = Object.freeze({});
      expect({}).to.not.be.sealed;
    });

    it('.frozen', function() {
      var frozenObject = Object.freeze({});
      expect(frozenObject).to.be.frozen;
      expect({}).to.not.be.frozen;
    });

  });

});
