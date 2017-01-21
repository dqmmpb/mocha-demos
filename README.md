# 站在巨人的肩膀

## 致敬

本项目是根据[阮一峰][ruanyifeng]这篇博客["A Mocha tutorial of Examples"][ruanyifeng-a-mocha-tutorial-of-examples]
中的[mocha-Demos源码][ruanyifeng-github-mocha-demos]而来。自己整理的[Mocha][mocha]的练习代码。

## 成长之路

### 如何使用

首先，clone本项目

```bash
$ git clone https://github.com/dqmmpb/mocha-demos.git
```

然后，安装各种依赖

```bash
$ cd mocha-demos
$ npm install
$ npm install --global mocha
//=> 如果权限不够，请使用sudo安装
```

进入 `demo01` 目录，执行 `mocha` 运行测试

```bash
$ cd demo01
$ mocha add.test.js
```

以下为测试结果

```bash

  加法函数的测试
    ✓ 1 加 1 应该等于 2


  1 passing (8ms)

```

更多的详情请参看["A Mocha tutorial of Examples"][ruanyifeng-a-mocha-tutorial-of-examples]中的详细步骤。


### 索引
 
- [demo01: basic usage](https://github.com/dqmmpb/mocha-demos/tree/master/demo01)
  - [demo01: dqm expect断言库的更多用法](https://github.com/dqmmpb/mocha-demos/tree/master/demo01/dqm)
- [demo02: command parameters](https://github.com/dqmmpb/mocha-demos/tree/master/demo02)
- [demo03: mocha.opts](https://github.com/dqmmpb/mocha-demos/tree/master/demo03)
- [demo04: ES6 testing](https://github.com/dqmmpb/mocha-demos/tree/master/demo04)
- [demo05: async testing](https://github.com/dqmmpb/mocha-demos/tree/master/demo05)
- [demo06: hooks](https://github.com/dqmmpb/mocha-demos/tree/master/demo06)
- [demo07: exclusive/inclusive Tests](https://github.com/dqmmpb/mocha-demos/tree/master/demo07)
  - [demo07: dqm only的用法](https://github.com/dqmmpb/mocha-demos/tree/master/demo07/dqm)
- [demo08: browser testing](https://github.com/dqmmpb/mocha-demos/tree/master/demo08)
- [demo09: generating spec](https://github.com/dqmmpb/mocha-demos/tree/master/demo09)

### 问题及解决

待续。。。

#### 关于only

这个only断言很有意思，以下是对only结果的简要分析，
我们只看[demo07: dqm only的用法](https://github.com/dqmmpb/mocha-demos/tree/master/demo07/dqm)最后一种情况吧：

```javascript

describe('七、加法函数的测试(含嵌套describe.only，不含同级it.only；显示describe，注意：同级的其中一个describe中不含it.only，因此只有2和3执行)', function () {

  describe('加法函数的测试1 (describe)', function () {
    it('1 加 1 应该等于 2 (describe > it.only)', function () {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('1 减 1 应该等于 0', function () {
      expect(add(1, -1)).to.be.equal(0);
    });
  });

  describe.only('加法函数的测试2 (describe.only)', function () {
    it('1 加 1 应该等于 2 (describe.only > it)', function () {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('任何数加0应该等于自身 (describe.only > it)', function () {
      expect(add(1, 0)).to.be.equal(1);
    });

    it('1 减 1 应该等于 0 (describe.only > it)', function () {
      expect(add(1, -1)).to.be.equal(0);
    });
  });

  describe('加法函数的测试3 (describe)', function () {
    it.only('1 加 1 应该等于 2 (describe > it.only)', function () {
      expect(add(1, 1)).to.be.equal(2);
    });

    it.only('任何数加0应该等于自身 (describe > it.only)', function () {
      expect(add(1, 0)).to.be.equal(1);
    });

    it('1 减 1 应该等于 0', function () {
      expect(add(1, -1)).to.be.equal(0);
    });
  });

  after(function () {
    console.log('------------------------------------------------------------------');
    console.log('' +
      '注意上述情况里，后面的四种情况比较有意思，因此可以根据结果，简要分析下\r\n' +
      '    1.只要describe同级包含it.only，都以it.only为准（it.only生效），同级的it、describe、describe.only全部无视\r\n' +
      '    2.如果describe同级中没有it.only，但有describe.only，则describe.only生效；\r\n' +
      '      此时，如果同级describe中包含it.only，则该describe中的it.only也会生效(这也就是六、七两种情况所展示的)');
    console.log('------------------------------------------------------------------');
  });

});

```
After中给出了对执行情况的解释

#### 其他

待续。。。

[ruanyifeng]: http://www.ruanyifeng.com/home.html
[ruanyifeng-a-mocha-tutorial-of-examples]: http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
[ruanyifeng-github-mocha-demos]: https://github.com/ruanyf/mocha-demos.git
[ruanyifeng-github-mocha-demos-readme]: https://github.com/ruanyf/mocha-demos/blob/master/README.md
[Mocha]: http://mochajs.org
[chai]: http://chaijs.com/
[chai-api-cn]: http://www.jianshu.com/p/f200a75a15d2
