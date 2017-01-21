/**
 * Created by dengqiming on 21/01/2017.
 */

function add(x, y) {
  return x + y;
}

function Foo(bar) {
  this.bar = bar;
}

var foo = new Foo('baz');

module.exports = {add, foo, Foo};
