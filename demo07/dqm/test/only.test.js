var add = require('../../src/add.js');
var expect = require('chai').expect;

describe('一、加法函数的测试(不含嵌套describe，只含it.only；只显示it.only)', function () {

  it.only('1 加 1 应该等于 2 (it.only)', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it.only('任何数加0应该等于自身 (it.only)', function () {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('1 减 1 应该等于 0', function () {
    expect(add(1, -1)).to.be.equal(0);
  });

});

describe('二、加法函数的测试(含嵌套describe，含同级it.only；只显示it.only)', function () {

  describe('加法函数的测试 (describe)', function () {
    it.only('1 加 1 应该等于 2 (describe > it.only)', function () {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('1 减 1 应该等于 0', function () {
      expect(add(1, -1)).to.be.equal(0);
    });
  });

  it.only('1 加 1 应该等于 2 (it.only)', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it.only('任何数加0应该等于自身 (it.only)', function () {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('1 减 1 应该等于 0', function () {
    expect(add(1, -1)).to.be.equal(0);
  });

});

describe('三、加法函数的测试(含嵌套describe.only，含同级it.only；只显示it.only)', function () {

  describe.only('加法函数的测试 (describe.only)', function () {
    it.only('1 加 1 应该等于 2 (describe.only > it.only)', function () {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('1 减 1 应该等于 0', function () {
      expect(add(1, -1)).to.be.equal(0);
    });
  });

  it.only('1 加 1 应该等于 2 (it.only)', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it.only('任何数加0应该等于自身 (it.only)', function () {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('1 减 1 应该等于 0', function () {
    expect(add(1, -1)).to.be.equal(0);
  });

});

describe('四、加法函数的测试(含嵌套describe.only，不含同级it.only；显示describe.only)', function () {

  describe.only('加法函数的测试1 (describe.only)', function () {
    it('1 加 1 应该等于 2 (describe.only > it)', function () {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('1 减 1 应该等于 0 (describe.only > it)', function () {
      expect(add(1, -1)).to.be.equal(0);
    });
  });

  it('1 加 1 应该等于 2 (describe > it.only)', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身 (describe > it.only)', function () {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('1 减 1 应该等于 0', function () {
    expect(add(1, -1)).to.be.equal(0);
  });

});

describe('五、加法函数的测试(含嵌套describe.only，不含同级it.only，但describe.only中包含it.only；显示describe.only)', function () {

  describe.only('加法函数的测试1 (describe.only)', function () {
    it.only('1 加 1 应该等于 2 (describe.only > it.only)', function () {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('1 减 1 应该等于 0', function () {
      expect(add(1, -1)).to.be.equal(0);
    });
  });

  it('1 加 1 应该等于 2 (describe > it.only)', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身 (describe > it.only)', function () {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('1 减 1 应该等于 0', function () {
    expect(add(1, -1)).to.be.equal(0);
  });

});

describe('六、加法函数的测试(含嵌套describe.only，不含同级it.only；显示describe，注意：同级的describe种包括it.only，因此同级的也会执行)', function () {

  describe('加法函数的测试1 (describe)', function () {
    it.only('1 加 1 应该等于 2 (describe > it.only)', function () {
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

});

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


