# CSS超入門 🎨

## CSSって何？
CSSは「Cascading Style Sheets」の略で、HTMLで作った骨組みに「色」や「大きさ」「配置」などの見た目を与える言語です。

HTML → 「文章の構造」
CSS → 「見た目・デザイン」

## 基本の書き方

```css
セレクタ {
    プロパティ: 値;
    プロパティ: 値;
}
```

例：
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

これは「h1タグの文字を青色にして、大きさを24pxにする」という意味です。

## HTMLにCSSを適用する3つの方法

### 1. 外部ファイル（おすすめ）
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

### 2. HTMLの中に直接書く
```html
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
```

### 3. タグに直接書く（インラインスタイル）
```html
<h1 style="color: blue;">こんにちは</h1>
```

## よく使うスタイル設定

### 文字のスタイル
```css
p {
    color: #333;              /* 文字の色 */
    font-size: 16px;          /* 文字の大きさ */
    font-family: sans-serif;  /* フォント */
    text-align: center;       /* 文字の配置（center, left, right） */
    font-weight: bold;        /* 太さ（bold=太字, normal=通常） */
}
```

### 背景のスタイル
```css
div {
    background-color: #f0f0f0;  /* 背景色 */
    background-image: url('背景画像.jpg');  /* 背景画像 */
}
```

### ボックスのスタイル
```css
div {
    width: 300px;              /* 幅 */
    height: 200px;             /* 高さ */
    margin: 10px;              /* 外側の余白 */
    padding: 20px;             /* 内側の余白 */
    border: 1px solid black;   /* 枠線 */
    border-radius: 10px;       /* 角を丸くする */
}
```

## 3つの重要なセレクタ

### 1. 要素セレクタ（タグ名）
```css
h1 { color: blue; }
p { color: gray; }
```

### 2. クラスセレクタ（.クラス名）
```html
<p class="important">重要な文章</p>
```

```css
.important { 
    color: red;
    font-weight: bold; 
}
```

### 3. IDセレクタ（#ID名）
```html
<div id="header">ヘッダー</div>
```

```css
#header {
    background-color: black;
    color: white;
}
```

## 要素を並べる（Flexbox）

親要素に `display: flex` を設定すると子要素が横並びになります。

```css
.container {
    display: flex;
    justify-content: space-between;  /* 均等に間隔をあける */
    align-items: center;           /* 縦方向の中央揃え */
}
```

```html
<div class="container">
    <div class="item">項目1</div>
    <div class="item">項目2</div>
    <div class="item">項目3</div>
</div>
```

## スマホ対応（レスポンシブデザイン）

```css
/* 通常のスタイル（PC用） */
.box {
    width: 500px;
}

/* 画面幅が768px以下のとき（スマホ用） */
@media (max-width: 768px) {
    .box {
        width: 100%;  /* 幅いっぱいに広げる */
    }
}
```

## 簡単なボタンの作り方

```css
.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4a90e2;
    color: white;
    border-radius: 5px;
    text-decoration: none;
}

/* ホバー時（マウスを乗せたとき） */
.button:hover {
    background-color: #357ac5;
}
```

```html
<a href="#" class="button">ボタン</a>
```

## 実践例：プロフィールカード

### HTML
```html
<div class="profile-card">
    <img src="avatar.jpg" alt="プロフィール画像">
    <h2>名前</h2>
    <p>自己紹介文をここに書きます。簡潔に自分のことを説明しましょう。</p>
    <a href="#" class="button">もっと見る</a>
</div>
```

### CSS
```css
.profile-card {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;
    background-color: white;
}

.profile-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.button {
    display: inline-block;
    padding: 8px 16px;
    background-color: #4a90e2;
    color: white;
    border-radius: 5px;
    text-decoration: none;
}
```

## CSSを習得するコツ
1. **少しずつ試す** - 一度に多くのスタイルを設定せず、少しずつ変更を確認しながら進める
2. **実例を模倣する** - 気に入ったWebサイトのデザインを真似てみる
3. **開発者ツールを使う** - ブラウザの開発者ツール（F12キー）でCSSの動きを確認する
4. **基本を固める** - 配置（Flexbox）、ボックスモデル、セレクタの理解を優先する

## ヘルプになるサイト
- [CSS入門 (MDN)](https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps)
- [CSS Flexbox入門](https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet)
- [Google Fonts](https://fonts.google.com/) - 無料のWebフォント

## 🏋️ 練習課題

以下の課題に取り組んで、CSSの基本を実践してみましょう。

### 課題1：プロフィールカードのスタイリング
1. 下記のHTMLを使って、自分のプロフィールカードを作成してください。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>プロフィールカード</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-card">
        <img src="自分の画像.jpg" alt="プロフィール画像">
        <h1>あなたの名前</h1>
        <p class="job-title">肩書き（学生・エンジニアなど）</p>
        
        <div class="section">
            <h2>自己紹介</h2>
            <p>ここに自己紹介文を書きます。簡潔に自分の特徴や興味を説明しましょう。</p>
        </div>
        
        <div class="section">
            <h2>スキル</h2>
            <ul class="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <!-- 他のスキルを追加 -->
            </ul>
        </div>
        
        <div class="contact">
            <a href="#" class="button">連絡する</a>
        </div>
    </div>
</body>
</html>
```

2. `style.css`ファイルを作成し、以下の要件を満たすようにスタイリングしてください：

- プロフィールカードに影をつける
- 角を丸くする
- 適切な余白を設定する
- プロフィール画像を丸く表示する
- 見出しと段落のフォントスタイルを設定する
- スキルリストを横並びにする（Flexboxを使用）
- 「連絡する」ボタンをスタイリングする
- ボタンにホバーエフェクトを追加する

### 課題2：レスポンシブ対応
上記で作成したプロフィールカードを、スマホでも見やすいようにレスポンシブ対応させてください：

- スマホサイズ（768px以下）では、カードの幅を画面いっぱいにする
- スキルリストが画面幅に合わせて折り返されるようにする
- フォントサイズを調整する

### 課題3：カラーパレットを作る
CSSに変数（カスタムプロパティ）を使って、統一感のあるデザインを実現してください：

```css
:root {
    --primary-color: #4a90e2;  /* メインカラー */
    --text-color: #333;       /* 文字色 */
    --background-color: #f5f5f5;  /* 背景色 */
    --card-color: white;      /* カード背景色 */
    --accent-color: #ff6b6b;  /* アクセントカラー */
}
```

これらの変数を使ってスタイリングし、カラーパレットの変更だけで全体の色調を変えられるようにしてください。

## 📕 専門用語集

| 用語 | 説明 |
|------|------|
| CSS | Webページの見た目を設定する言語 |
| セレクタ | スタイルを適用する対象を指定する部分（例：`h1`、`.class`、`#id`） |
| プロパティ | 設定する項目（例：`color`、`font-size`） |
| 値 | 設定する内容（例：`red`、`20px`） |
| クラス | 複数の要素に同じスタイルを適用するための名前（`.名前`で指定） |
| ID | 一つの要素に固有のスタイルを適用するための名前（`#名前`で指定） |
| margin | 要素の外側の余白 |
| padding | 要素の内側の余白 |
| Flexbox | 要素を横並びにするための仕組み |
| レスポンシブ | 画面サイズに合わせてデザインを変える手法 | 