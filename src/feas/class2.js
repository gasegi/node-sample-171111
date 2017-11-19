function Teki() {}
Teki.prototype.testSay = () => {
  console.log('testSay');
}

function Dragon() {
  Teki.apply(this, arguments);
}
Dragon.prototype = Object.create(Teki.prototype, {
  constructor: {
    value: Dragon
  }
});

var boss = new Dragon();
console.log(boss.constructor);
boss.testSay();
