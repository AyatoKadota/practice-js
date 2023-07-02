/*
 * コンストラクタ関数はオブジェクト作成ツールといえる。
 * コンストラクタ関数は1文字目大文字
 * コンストラクタ関数内のthisは、コンストラクタ関数が新しく作成するオブジェクトのこと
 * this(オブジェクト).name(thisオブジェクトのプロパティ) = name(function Personの引数)
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/*
 * var john =　でオブジェクト(インスタンス)を定義
 * newで空のオブジェクト(コンストラクタ関数Personの中のオブジェクトthis)を新規作成。
 * コンストラクタ関数のメリットは、newを使いつつプロパティ名を省いて値だけを並べるだけでオブジェクトを作成できる
 */
var john = new Person("John", 25);
var aya = new Person("aya", 28);

console.log(john.name);
console.log(john.age);
console.log(john);
console.log(typeof john);
console.log(Person);
console.log(aya);
