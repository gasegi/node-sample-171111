function Yuusha(n){
  this.name = n;
}
Yuusha.prototype.jikoshokai = function(){
  console.log("私の名前は" + this.name + "です。" + "HPは" + this.hp + "です。");
};
Yuusha.prototype.hp = 100;

var yuusha1 = new Yuusha("勇者1");

//自己紹介してもらう
yuusha1.jikoshokai();
