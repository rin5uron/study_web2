const 変更ボタン = document.getElementById('変更ボタン');
console.log(変更ボタン);

const 挨拶文 = document.getElementById('挨拶文');
挨拶文.textContent = 'こんにちは、JavaScriptの世界へようこそ！';

const 赤いボックス = document.getElementById('赤いボックス');
赤いボックス.style.backgroundColor = 'red';

// フルーツリストは変更されるのでletを使う
let フルーツリスト = document.getElementById('フルーツリスト');

let 新しい項目 = document.createElement('li');
新しい項目.textContent = 'バナナ';
フルーツリスト.appendChild(新しい項目);

// 要素全て削除する場合
// let 削除対象 = document.getElementByClassName("削除対象");
// 削除対象.remove();

// 最初の要素だけはfirstelementで指定する
//  HTMLの中から削除対象の要素を探してそれをfirstElement要素に入れる
const firstElement = document.querySelector('削除対象');

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