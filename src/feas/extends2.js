const request = require('request');

function Teki() { }
Teki.prototype.testSay = () => {
  console.log('testSay');
}

function Dragon() {
  Teki.apply(this, arguments);
}
Dragon.prototype = Object.create(Teki.prototype);

Dragon.prototype.testSay2 = () => {
  console.log('testSay2');
}

var boss = new Dragon();
console.log(boss.constructor);
boss.testSay();
boss.testSay2();
