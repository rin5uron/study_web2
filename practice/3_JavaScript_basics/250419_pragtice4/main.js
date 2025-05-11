// 1. 以下のHTMLがあります。「変更ボタン」をJavaScriptで見つけて、コンソールに表示してください。
// <button id="変更ボタン">テキストを変更</button>

const 変更ボタン = document.getElementById('変更ボタン');
console.log(変更ボタン);


// 2. 「挨拶文」というIDの要素のテキストを「こんにちは、JavaScriptの世界へようこそ！」に変更してください。
// <p id="挨拶文">ここにテキストが入ります</p>
const 挨拶文 = document.getElementById('挨拶文');
挨拶文.textContent = 'こんにちは、JavaScriptの世界へようこそ！';


// 3. 「赤いボックス」というIDの要素の背景色を赤色に変更してください。
// <div id="赤いボックス">ここにテキストが入ります</div>
const 赤いボックス = document.getElementById('赤いボックス');
赤いボックス.style.backgroundColor = 'red';


// 4. 以下のリストに新しい項目「バナナ」を追加してください。
// <ul id="フルーツリスト">
//   <li>りんご</li>
//   <li>みかん</li>
// </ul>
// フルーツリストは変更されるのでletを使う
let フルーツリスト = document.getElementById('フルーツリスト');

let 新しい項目 = document.createElement('li');
新しい項目.textContent = 'バナナ';
フルーツリスト.appendChild(新しい項目);


// 5. 「削除対象」というクラスが付いた最初の要素を削除してください。
// <div>
//   <p class="削除対象">これは削除されます</p>
//   <p>これは残ります</p>
//   <p class="削除対象">これも削除対象ですが、最初の要素だけ削除されます</p>
// </div>
const firstElement = document.querySelector('削除対象');
// 要素全て削除する場合
// let 削除対象 = document.getElementByClassName("削除対象");
// 削除対象.remove();

// 最初の要素だけはfirstelementで指定する
//  HTMLの中から削除対象の要素を探してそれをfirstElement要素に入れる
if(firstElement){
    firstElement.remove();
    console.log('これは削除されます');
}else{
    console.log('これも削除対象ですが、最初の要素だけ削除されます');
}




// DOM操作の実践的な例
// 2. 要素の内容変更の例
function テキスト変更() {
    const 最初の項目 = フルーツリスト.firstElementChild;
    最初の項目.textContent = "りんご（変更済み）";
}

// 3. スタイルの変更の例
function スタイル変更() {
    const 二番目の項目 = フルーツリスト.children[1];
    二番目の項目.style.color = "orange";
    二番目の項目.style.fontWeight = "bold";
}

// 4. 要素の追加の例
function 新しい項目追加() {
    const 新しい項目 = document.createElement("li");
    新しい項目.textContent = "バナナ";
    フルーツリスト.appendChild(新しい項目);
}

// ページ読み込み時に実行
window.onload = function() {
    // 各操作を順番に実行
    setTimeout(テキスト変更, 1000);
    setTimeout(スタイル変更, 2000);
    setTimeout(新しい項目追加, 3000);
};