//変数
let unko = "Hello World";

//unko = "Hello World2!!";　コメントアウト（無効化）

//定数
const bigUnko = "He..Hell...Hello World!";

//定数は変更不可能。定義した後に、コードを追加して書き換えてconsole.log()するとエラーが出る。

let inoki = ["いーち", "にー", "さーん", "ダーー！！"];

//カウントを指定
let index = 0;

//以下のwhile文は確認したいもの以外をコメントアウトしながら確認
/* while (index < 5) {
  console.log(index);
  index++;
}

while (index < inoki.length) {
  console.log(index);
  index++;
} 

while (index < inoki.length) {
  console.log(inoki[index]);
  index++;
}*/

//if文
if (inoki.length > 3) {
  console.log("ボンバイエ");
} else {
  console.log("ボンバ...");
}

//関数
//目的１：同じ命令を何度も使いたいとき
//目的２：任意のタイミングで命令を実行させたいとき
/* const test = () => {
  //「() =>」はarrow関数の書き方。書き方の種類はたくさんある。「() =>」は「function()」と同じ。
  if (inoki.length > 3) {
    console.log("ボンバイエ");
  } else {
    console.log("ボンバ...");
  }
};

test(); */

const test = (arg) => {
  //変数の目的：同じ命令を一部だけ変えて使いまわす
  if (inoki.length > arg) {
    console.log("ボンバイエ");
  } else {
    console.log("ボンバ...");
  }
};

test(1); //arg=1のときの出力
test(2);

//オブジェクト
const unko2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goToilet: () => {
    console.log("hello Toilet");
  },
};

console.log(unko);
console.log(bigUnko);
console.log(inoki);
console.log(inoki[1]);
console.log(unko2);
console.log(unko2.color);
console.log(unko2.goToilet());
console.log(window);
console.log(window.innerHeight); //windowの高さ
window.alert("happy smile");
console.log(document);
console.log(document.getElementsByTagName("button")); //HTMLの要素を指定・参照
console.log(document.getElementsByTagName("button")[0]); //配列の要素を指定・参照
//eventオブジェクト：今回はボタンを押したときにアラートが表示されるよう設定
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  window.alert("jajannken");
});
