//レスポンスからpostデータを抽出し挿入するHTMLを作成し、変数へ格納
const buildHTML = (XHR) =>{
  const item = XHR.response.post;
  const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
  return html;
};


function post() {
  //リクエストを送信する処理
  //Id：formを持つHTML要素を取得する関数式フォームを定義
  const form = document.getElementById("form");
  //送信ボタンが押された時に処理を行う
  form.addEventListener("submit", (e) => {
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
    XHR.onload = () => {
      if (XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        //JavaScriptの処理から抜け出す
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend",bulidHTML(XHR))
      formText.value = ""; 
    };
  });
};

//ページが読み込まれた後に関数postをイベント発火する
window.addEventListener("turbo:load", post);
