/*
 * (function(){関数本体})()
 * 関数定義の後ろの()で関数を即時呼び出しをしている
 * function自体を()で囲む
 */

(function () {
  var message = "Hello, world!";
  console.log(message);
})();

(function (name) {
  console.log("Hello, " + name + "!");
})("John");
