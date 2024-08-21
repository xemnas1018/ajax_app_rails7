function post() {
  //リクエストを送信する処理
  //Id：formを持つHTML要素を取得する関数式フォームを定義
  const form = document.getElementById("form");
  //送信ボタンが押された時に処理を行う
  form.addEventListener("submit", () => {
    //preventDefaultメソッドにe(イベントオブジェクト)を引数にすることで送信ボタンをクリックしたという現象をなかったことにする。
    e.preventDefault();
    //FormDateオブジェクトを生成し変数に代入
    const formData = new FormData(form);
    //XMLHttpRequestオブジェクトを生成し変数に代入
    const XHR = new XMLHttpRequest();
    //openメソッドを使用してHTTPメソッドをPOST、送信先？を/posts、非同期通信をONで通信する。
    XHR.open("POST", "/posts", true);
    //responseTypeプロパティを使用してレスポンスのデータフォーマットをJSON形式に指定する。
    XHR.responseType = "json";
    //formDateオブジェクトをsendメソッドで送信する。
    XHR.send(formData);
  });
};

//ページが読み込まれた後に関数postをイベント発火する
window.addEventListener("turbo:load", post);
