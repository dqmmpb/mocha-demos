/**
 * Created by dengqiming on 21/01/2017.
 */

function add(x, y) {
  return x + y;
}

function Foo(bar) {
  this.bar = bar;
}

function goodFn() {

}

function badFn() {
  throw new Error('I\'m a bad guy');
}

var foo = new Foo('baz');

module.exports = {add, foo, Foo, goodFn, badFn};
