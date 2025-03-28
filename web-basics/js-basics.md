# JavaScript超入門 🚀

## 📚 JavaScriptって何？
JavaScriptは、Webページに「動き」や「反応」をつけるための言語です。たとえば：
- ボタンをクリックしたら何かが表示される
- マウスを置くと色が変わる
- フォームに入力した内容をチェックする

簡単に言うと：
- HTML → Webページの「骨組み」
- CSS → Webページの「見た目」
- JavaScript → Webページの「動き」や「反応」

## 🌟 JavaScriptでできること
- ボタンをクリックしたときの反応を作る
- 画像をスライドショーにする
- 入力内容が正しいかチェックする
- ページをスクロールすると何かが起こるようにする
- メニューを開いたり閉じたりする

## 🔰 JavaScriptを始めよう

### 📝 JavaScriptの書き方
HTMLの中にJavaScriptを入れる方法は2つあります：

**方法1: HTMLファイルの中に直接書く**
```html
<script>
  // ここにJavaScriptを書く
  alert('こんにちは！');  // 「こんにちは！」というメッセージを表示
</script>
```

**方法2: 別のファイルに書いて読み込む**（おすすめ）
```html
<script src="プログラム.js"></script>
```

### 🧸 変数 - データを入れる箱
変数は「データを入れておく箱」のようなものです。

```javascript
// 箱を作って何かを入れる
let 名前 = '田中';
let 年齢 = 25;
let 好きな色 = '青';

// 箱の中身を後から変更できる
名前 = '鈴木';
```

定数は「中身が変えられない箱」です。

```javascript
// 一度設定したら変更できない箱
const 消費税 = 0.1;
const 誕生日 = '1月1日';
```

### 🧩 いろいろなデータ
JavaScriptでは、いろいろな種類のデータを扱えます：

```javascript
// 文字（文字列）
let メッセージ = 'こんにちは';
let 名前 = "タロウ";

// 数字
let 年齢 = 25;
let 身長 = 170.5;

// はい・いいえ（真偽値）
let 会員です = true;
let お休みです = false;

// リスト（配列）
let 果物 = ['りんご', 'バナナ', 'みかん'];

// データのまとまり（オブジェクト）
let 人物 = {
  名前: '山田',
  年齢: 30,
  趣味: '読書'
};
```

### 👉 データの使い方
データを使っていろいろなことができます：

```javascript
// 数字の計算
let 数1 = 10;
let 数2 = 5;
let 合計 = 数1 + 数2;    // 15
let 差分 = 数1 - 数2;    // 5
let 掛け算 = 数1 * 数2;  // 50
let 割り算 = 数1 / 数2;  // 2

// 文字のつなぎ合わせ
let 名 = '山田';
let 姓 = '太郎';
let フルネーム = 名 + ' ' + 姓;  // '山田 太郎'
```

### 🔀 もし〇〇なら△△する（条件分岐）
条件によって違う動作をさせることができます：

```javascript
let 年齢 = 16;

if (年齢 >= 20) {
  console.log('成人です');  // console.logはメッセージを出力する命令
} else if (年齢 >= 18) {
  console.log('18歳以上です');
} else {
  console.log('未成年です');  // この行が実行される
}
```

### 🔄 繰り返し処理
同じことを何回も繰り返し実行できます：

```javascript
// 1から5まで数える
for (let 数 = 1; 数 <= 5; 数++) {
  console.log(数 + '回目');
}
// 「1回目」「2回目」「3回目」「4回目」「5回目」と表示される

// リストの中身を順番に取り出す
let 果物 = ['りんご', 'バナナ', 'みかん'];
for (let i = 0; i < 果物.length; i++) {
  console.log('私は' + 果物[i] + 'が好きです');
}
// 「私はりんごが好きです」「私はバナナが好きです」「私はみかんが好きです」
```

### 🧰 関数 - 作業をひとまとめにする
繰り返し使いたい処理をひとまとめにできます：

```javascript
// あいさつをする関数
function あいさつ(名前) {
  return 'こんにちは、' + 名前 + 'さん！';
}

// 関数を使う
let メッセージ1 = あいさつ('田中');  // 「こんにちは、田中さん！」
let メッセージ2 = あいさつ('佐藤');  // 「こんにちは、佐藤さん！」

// 計算をする関数
function 足し算(a, b) {
  return a + b;
}

let 結果 = 足し算(5, 3);  // 8
```

### 🔍 console.log() - プログラムの動きを確認する
`console.log()`は、プログラムの動きを確認するための便利な関数です：

```javascript
// 基本的な使い方
console.log('こんにちは');  // 「こんにちは」と表示される

// 変数の中身を確認
let 点数 = 85;
console.log(点数);  // 「85」と表示される

// 計算結果を確認
console.log(10 + 5);  // 「15」と表示される

// 複数の値を一度に表示
console.log('名前:', '田中', '年齢:', 25);  // 「名前: 田中 年齢: 25」と表示される

// オブジェクトや配列の中身を確認
let 人物 = { 名前: '鈴木', 年齢: 30 };
console.log(人物);  // オブジェクトの内容が表示される

// デバッグに活用
function 計算する(a, b) {
  console.log('計算開始:', a, b);  // 「計算開始: 5 3」と表示される
  let 結果 = a * b;
  console.log('計算結果:', 結果);  // 「計算結果: 15」と表示される
  return 結果;
}
計算する(5, 3);
```

**重要ポイント**:
- `console.log()`の結果はブラウザの「開発者ツール」の「Console」タブに表示されます
- 開発者ツールを開くには F12 キー、または右クリックして「検証」を選びます
- エラーがあったときの原因調査や、プログラムがどのように動いているか確認するのに役立ちます
- 本番のWebサイトでは不要な`console.log()`は削除しましょう

## 🌐 ページの要素を操作しよう
JavaScriptでHTMLの要素を見つけて、変更することができます：

### 要素を見つける
```javascript
// IDで要素を見つける
const 見出し = document.getElementById('タイトル');

// クラスで要素を見つける
const 項目リスト = document.getElementsByClassName('項目');

// CSSの書き方で要素を見つける
const 最初の段落 = document.querySelector('p');  // 最初の<p>要素
const すべての段落 = document.querySelectorAll('p');  // すべての<p>要素
```

### 要素を変更する
```javascript
// テキストを変更する
document.getElementById('あいさつ').textContent = 'こんにちは！';

// HTMLを変更する
document.getElementById('お知らせ').innerHTML = '<strong>重要</strong>なお知らせ';

// 画像を変更する
document.getElementById('プロフィール画像').src = '新しい画像.jpg';
```

### スタイルを変更する
```javascript
const ボックス = document.getElementById('ボックス');

// 直接スタイルを変更
ボックス.style.backgroundColor = 'ピンク';  // 背景色をピンクに
ボックス.style.width = '200px';            // 幅を200pxに

// クラスを追加・削除
ボックス.classList.add('ハイライト');     // ハイライトクラスを追加
ボックス.classList.remove('非表示');      // 非表示クラスを削除
ボックス.classList.toggle('アクティブ');  // アクティブクラスの有無を切り替え
```

## 🖱️ クリックなどの操作に反応する
ユーザーの操作に反応するプログラムを作れます：

### クリックに反応する
```javascript
const ボタン = document.getElementById('送信ボタン');

// ボタンがクリックされたときの動作
ボタン.addEventListener('click', function() {
  alert('ボタンがクリックされました！');
});
```

### いろいろな操作に反応する
- `click`: クリックしたとき
- `mouseover`: マウスが上に乗ったとき
- `mouseout`: マウスが離れたとき
- `keydown`: キーボードのキーが押されたとき
- `submit`: フォームが送信されたとき

### フォームの例
```javascript
const フォーム = document.getElementById('お問い合わせフォーム');

フォーム.addEventListener('submit', function(イベント) {
  // フォームの送信を一時停止
  イベント.preventDefault();
  
  // 入力内容を取得
  const 名前 = document.getElementById('名前欄').value;
  
  // 入力チェック
  if (名前 === '') {
    alert('名前を入力してください');
    return;
  }
  
  // OKなら処理を続ける
  alert(名前 + 'さん、フォームを送信しました！');
});
```

## 💡 簡単なプロジェクト例

### 例1: クリックでメッセージを表示
```html
<button id="あいさつボタン">クリックしてね</button>
<p id="メッセージ"></p>

<script>
  const ボタン = document.getElementById('あいさつボタン');
  const メッセージ欄 = document.getElementById('メッセージ');
  
  ボタン.addEventListener('click', function() {
    メッセージ欄.textContent = 'こんにちは！JavaScriptの世界へようこそ！';
  });
</script>
```

### 例2: スムーズスクロール
ページ内リンクをクリックすると、ゆっくりとスクロールする機能：

```javascript
// #で始まるリンク（ページ内リンク）をすべて探す
document.querySelectorAll('a[href^="#"]').forEach(リンク => {
  リンク.addEventListener('click', function(e) {
    // 通常の動作を止める
    e.preventDefault();
    
    // リンク先の要素を探す
    const 移動先ID = this.getAttribute('href');
    const 移動先要素 = document.querySelector(移動先ID);
    
    // その要素までゆっくりスクロール
    移動先要素.scrollIntoView({
      behavior: 'smooth'  // ゆっくり移動
    });
  });
});
```

### 例3: かんたんなハンバーガーメニュー
```javascript
// メニューボタンとナビゲーションメニューを取得
const メニューボタン = document.getElementById('メニューボタン');
const ナビメニュー = document.getElementById('ナビメニュー');

// メニューボタンがクリックされたときの動作
メニューボタン.addEventListener('click', function() {
  // メニューの表示/非表示を切り替え
  ナビメニュー.classList.toggle('表示');
  
  // ボタンの見た目も変える
  this.classList.toggle('開');
});
```

## 📝 学習のコツ
1. 少しずつ試してみる - コードを書いて動かしてみましょう
2. エラーを恐れない - エラーは学びのチャンス！
3. 小さな変更から始める - 一度に大きな変更をしないで
4. `console.log()`を使って確認する習慣をつける
5. 分からないときは検索する - 誰もが最初は初心者

## 🔍 役立つサイト
- [MDN Web Docs (日本語)](https://developer.mozilla.org/ja/docs/Web/JavaScript) - 公式リファレンス
- [JavaScript Primer](https://jsprimer.net/) - 日本語の入門書
- [Progate](https://prog-8.com/) - ブラウザで学べるプログラミング学習サイト

## 📢 次に学ぶこと
基礎を理解したら、次はこんなことを学んでみましょう：
- データの保存（ローカルストレージ）
- 外部からデータを取得する方法
- アニメーション効果
- 最新のJavaScript文法 

## 📕 専門用語集

| 用語 | 説明 |
|------|------|
| JavaScript | Webページに動きや反応をつけるためのプログラミング言語 |
| 変数 | データを入れておく「箱」のようなもの。中身を後から変更できる（`let`で作る） |
| 定数 | 一度設定したら中身が変えられない「箱」（`const`で作る） |
| 文字列 | 「こんにちは」のような文字のデータ。シングルクォート`'`またはダブルクォート`"`で囲む |
| 数値 | `10`や`5.5`のような数字のデータ |
| 真偽値 | `true`（はい）または`false`（いいえ）の2種類だけの値 |
| 配列 | 複数のデータをまとめて保存するリスト。`[]`で囲む |
| オブジェクト | 関連するデータをまとめたもの。`{}`で囲み、名前と値のペアで表す |
| 条件分岐 | 条件によって実行する処理を変える仕組み（`if`文など） |
| ループ処理 | 同じような処理を繰り返し実行する仕組み（`for`文など） |
| 関数 | 繰り返し使いたい処理をひとまとめにしたもの |
| console.log() | プログラムの動作確認やデバッグに使う関数。値を開発者ツールのコンソールに表示する |
| DOM | HTMLをJavaScriptから操作するための仕組み（Document Object Model） |
| イベント | クリックやマウスオーバーなど、ユーザーの操作や画面の変化 |
| イベントリスナー | イベントが発生したときに実行される関数を設定する仕組み |
| classList | 要素のクラスを追加・削除・切り替えるための機能 |
| querySelector | CSSセレクタを使ってHTML要素を探す方法 |
| getElementById | IDを使ってHTML要素を探す方法 |
| innerHTML | HTMLの内容を変更するためのプロパティ |
| textContent | テキストの内容を変更するためのプロパティ |
| preventDefault | イベントのデフォルト動作を停止するメソッド（例：リンクのクリック時のページ移動を停止） | 