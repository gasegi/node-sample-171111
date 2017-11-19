const assert = require('assert');


class FooClass extends assert {
    constructor() {
        super(true);
    }

    testAssert() {
        console.log('testAssert');
    }
}

const c1 = new FooClass();
console.log(c1);

console.log(c1.ok(true, 'test message'));
console.log(c1.testAssert(true, 'test message'));
console.log(c1(true, 'test message'));
