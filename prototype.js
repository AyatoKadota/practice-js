function Person(name) {
  this.name = name;
}
//Personコンストラクタ関数は、nameプロパティを持つオブジェクトを作成

Person.prototype.greet = function () {
  //Person.prototypeを使用して、Personコンストラクタ関数のプロトタイプを作成し、greetというメソッドを追加する。

  console.log("Hello, my name is " + this.name);
  //プロトタイプは、コンストラクタ関数で作成するオブジェクトには含めたくないメソッド（console.logとか）やプロパティの追加を目的とする。
};

var john = new Person("John");
var jane = new Person("Jane");
// オブジェクトの作成

john.greet();
jane.greet();
// プロトタイプのメソッドの呼び出し
