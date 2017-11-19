const request = require('request');

function Teki() { }
Teki.prototype.testSay = () => {
  console.log('testSay');
}

function Dragon() {
  request.defaults.apply(this, arguments);
}
Dragon.prototype = Object.create(request);

Dragon.prototype.testSay2 = () => {
  console.log('testSay2');
}

var boss = new Dragon();
console.log(boss.constructor);
boss.testSay2();
boss.get('http://httpbin.org/ip', (err, res, body) => {
  console.log('get', body);
});
