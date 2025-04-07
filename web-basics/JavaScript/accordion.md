# JavaScriptアコーディオン機能の完全ガイド 🪗

## 📋 目次
- [超基礎編](#超基礎編)
  - [概要](#-概要)
  - [学習目標](#-学習目標)
  - [基礎知識](#-基礎知識)
  - [段階的な学習課題](#-段階的な学習課題)
    - [課題①：HTML構造を理解する](#課題html構造を理解する)
    - [課題②：CSSで見た目を整える](#課題cssで見た目を整える)
    - [課題③：超シンプルな開閉機能（JavaScriptの導入）](#課題超シンプルな開閉機能javascriptの導入)
    - [課題④：開閉状態の視覚的な表現](#課題開閉状態の視覚的な表現)
  - [発展学習のポイント](#-発展学習のポイント)
  - [よくある問題と解決方法](#-よくある問題と解決方法)
  - [用語集](#-用語集)
- [基礎編](#基礎編)
  - [アコーディオンとは](#-アコーディオンとは)
  - [基本的な作り方](#-基本的な作り方)
  - [拡張機能](#-拡張機能)
  - [アコーディオン機能の実装例](#-アコーディオン機能の実装例)
  - [練習課題](#-練習課題)
  - [さらに学ぶために](#-さらに学ぶために)
- [実装例リファレンス](#-実装例リファレンス)
  - [基本的なアコーディオン](#基本的なアコーディオン)
  - [アニメーション付きアコーディオン](#アニメーション付きアコーディオン)
  - [一つだけ開くアコーディオン](#一つだけ開くアコーディオン)

---

# 超基礎編

## 🔍 概要
アコーディオンメニューは、限られたスペースで多くの情報を整理して表示するための便利なUIコンポーネントです。クリックすると展開・折りたたみができる仕組みで、Webサイトやアプリでよく使われています。

## 📚 学習目標
- アコーディオンメニューの基本構造を理解する
- HTMLとCSSでアコーディオンの見た目を作る
- JavaScriptで開閉機能を実装する
- 視覚的なフィードバックを追加する

## 📝 基礎知識

### アコーディオンメニューの構成要素
1. **タイトル部分** - クリックして開閉するヘッダー
2. **コンテンツ部分** - 表示・非表示が切り替わる本文
3. **状態表示** - 開閉状態を示すアイコンや視覚的要素

### 必要な技術
- **HTML** - 基本構造
- **CSS** - 見た目のデザイン、開閉アニメーション
- **JavaScript** - クリックイベント処理、開閉の制御

## 🎯 段階的な学習課題

### 課題①：HTML構造を理解する

**目標**: アコーディオンメニューの基本構造を理解する

**内容**:
- 3つの項目を持つシンプルなHTMLのみのリスト作成
- 「項目のタイトル」と「隠れた内容」の2層構造を理解
- まだ開閉機能はなし（すべての内容が表示されたまま）

**完成イメージ**:
```
タイトル1
  内容テキスト1がここに表示されます。

タイトル2
  内容テキスト2がここに表示されます。

タイトル3
  内容テキスト3がここに表示されます。
```

**サンプルコード**:
```html
<div class="accordion-container">
  <!-- アコーディオン項目1 -->
  <div class="accordion-item">
    <div class="accordion-header">タイトル1</div>
    <div class="accordion-content">
      内容テキスト1がここに表示されます。
    </div>
  </div>
  
  <!-- アコーディオン項目2 -->
  <div class="accordion-item">
    <div class="accordion-header">タイトル2</div>
    <div class="accordion-content">
      内容テキスト2がここに表示されます。
    </div>
  </div>
  
  <!-- アコーディオン項目3 -->
  <div class="accordion-item">
    <div class="accordion-header">タイトル3</div>
    <div class="accordion-content">
      内容テキスト3がここに表示されます。
    </div>
  </div>
</div>
```

### 課題②：CSSで見た目を整える

**目標**: アコーディオンの見た目を整える

**内容**:
- タイトルと内容に基本的なスタイルを適用
- タイトルをクリックできるように見せる工夫（色や枠線）
- まだ開閉機能はなし（単なる装飾のみ）

**学習ポイント**:
- 基本的なCSSセレクタの使い方
- ボックスモデルの理解
- カーソルプロパティの活用

**サンプルコード**:
```css
/* コンテナのスタイル */
.accordion-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

/* アコーディオン項目のスタイル */
.accordion-item {
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

/* ヘッダー部分のスタイル */
.accordion-header {
  background-color: #f4f4f4;
  padding: 15px;
  cursor: pointer; /* カーソルをポインターに変更してクリック可能に見せる */
  font-weight: bold;
}

/* ヘッダーホバー時のスタイル */
.accordion-header:hover {
  background-color: #e8e8e8;
}

/* コンテンツ部分のスタイル */
.accordion-content {
  padding: 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;
}
```

### 課題③：超シンプルな開閉機能（JavaScriptの導入）

**目標**: 最も基本的なクリック開閉機能を実装

**内容**:
- 最初はすべての内容を非表示に
- タイトルをクリックしたら対応する内容を表示/非表示切替
- 表示/非表示の切り替えのみ（アニメーションなし）

**学習ポイント**:
- JavaScriptの基本的なDOM操作
- クリックイベントの設定方法
- 要素の表示/非表示の制御

**サンプルコード**:
```javascript
// すべてのアコーディオンヘッダーを取得
const accordionHeaders = document.querySelectorAll('.accordion-header');

// 初期状態ですべてのコンテンツを非表示にする
document.querySelectorAll('.accordion-content').forEach(content => {
  content.style.display = 'none';
});

// 各ヘッダーにクリックイベントを追加
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // このヘッダーに対応するコンテンツを取得
    const content = this.nextElementSibling;
    
    // アクティブクラスを切り替え（+/- アイコン用）
    this.classList.toggle('active');
    
    // コンテンツの表示/非表示を切り替え
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
```

**コードの詳細解説:**

1. **要素の取得と初期化**:
   - `document.querySelectorAll('.accordion-header')` - ページ内のすべてのアコーディオンヘッダーを取得
   - `content.style.display = 'none'` - 初期状態ですべてのコンテンツを非表示に設定

2. **イベントリスナーの設定**:
   - `header.addEventListener('click', function() {...})` - 各ヘッダーにクリックイベントを追加
   - クリックされたときに実行される関数を定義

3. **クリック時の動作**:
   - `this.nextElementSibling` - クリックされたヘッダーのすぐ次の要素（対応するコンテンツ部分）を取得
   - `this.classList.toggle('active')` - ヘッダーの「active」クラスを切り替え（あれば削除、なければ追加）
   - 条件分岐で、コンテンツが非表示なら表示に、表示なら非表示に切り替え

**HTMLへの実装方法:**
このJavaScriptコードは、HTMLの`<body>`タグの最後、閉じタグ`</body>`の直前に`<script>`タグで囲んで配置します：

```html
<body>
    <!-- アコーディオンメニューのHTML -->
    
    <script>
        // ここに上記のJavaScriptコードを配置
    </script>
</body>
```

**配置場所の理由:**
- ページのHTML要素がすべて読み込まれた後にスクリプトが実行されるため、アコーディオン要素が確実に存在する
- ページの表示速度が向上する（JavaScriptの読み込みがHTMLの描画をブロックしない）
- ユーザーがコンテンツを早く見ることができる（プログレッシブレンダリング）

### 課題④：開閉状態の視覚的な表現

**目標**: 開閉状態がわかりやすいUI改善

**内容**:
- タイトルの横に＋/－アイコンを追加
- 開閉状態に応じてアイコンを切り替え
- タイトルのホバー効果を追加

**学習ポイント**:
- CSSの疑似要素の活用
- JavaScriptでのクラス切り替え
- 状態に応じたUI表現

**メモ**:
- HTMLの<body>タグの最後、閉じタグ</body>の直前に<script>タグで囲んで配置するのが最適

**CSSサンプルコード**:
```css
/* ヘッダーに擬似要素でアイコンを追加 */
.accordion-header::after {
  
  content: '+';
  float: right;
  font-weight: bold;
}

/* アクティブ状態のヘッダーのアイコン */
.accordion-header.active::after {
  content: '-';
}

/* アクティブ状態のヘッダー背景色 */
.accordion-header.active {
  background-color: #e0e0e0;
}
```

**JavaScriptサンプルコード**:
```javascript
// すべてのアコーディオンヘッダーを取得
const accordionHeaders = document.querySelectorAll('.accordion-header');

// 初期状態ですべてのコンテンツを非表示にする
document.querySelectorAll('.accordion-content').forEach(content => {
  content.style.display = 'none';
});

// 各ヘッダーにクリックイベントを追加
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // このヘッダーに対応するコンテンツを取得
    const content = this.nextElementSibling;
    
    // アクティブクラスを切り替え（+/- アイコン用）
    this.classList.toggle('active');
    
    // コンテンツの表示/非表示を切り替え
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
```

## 📚 発展学習のポイント
- スムーズなアニメーション（CSSトランジション）
- 複数アコーディオンの連動（1つだけ開く仕様）
- アクセシビリティ対応（キーボード操作、ARIA属性）
- レスポンシブ対応

## 🔍 よくある問題と解決方法
1. **コンテンツが突然消える**: display:noneの代わりにheight:0とoverflow:hiddenを使用
2. **アニメーションがぎこちない**: CSSトランジションを適切に設定
3. **JavaScriptエラー**: コンソールでエラーを確認、セレクタの誤りが多い

## 📝 用語集
- **DOM操作**: Document Object Modelの操作、HTMLの要素を操作する
- **イベントリスナー**: ユーザーのアクション（クリックなど）を検知する仕組み
- **クラストグル**: 要素のクラスを追加/削除する動作
- **CSS疑似要素**: ::beforeや::afterなどで要素を追加
- **CSS疑似クラス**: :hoverや:activeなど状態に応じたスタイル

---



# 基礎編

## 📌 アコーディオンとは
アコーディオンは、クリックすると内容が展開/折りたたみされる UI 要素です。スペースを節約しながら多くの情報を整理して表示できます。FAQセクションやサイドバーメニュー、詳細情報の表示などに広く使われています。

## 🛠️ 基本的な作り方

### 1. HTML構造
```html
<div class="accordion">
  <!-- アコーディオンアイテム -->
  <div class="accordion-item">
    <!-- クリックする見出し部分 -->
    <div class="accordion-header">
      <h3>見出し1</h3>
      <span class="accordion-icon">+</span>
    </div>
    <!-- 表示/非表示される内容部分 -->
    <div class="accordion-content">
      <p>ここに内容が入ります。クリックすると表示/非表示が切り替わります。</p>
    </div>
  </div>
  
  <!-- 必要に応じて項目を追加 -->
  <div class="accordion-item">
    <!-- 以下同様 -->
  </div>
</div>
```

### 2. CSS基本スタイル
```css
/* 初期状態では内容を非表示 */
.accordion-content {
  display: none;
  padding: 10px;
  background: #f9f9f9;
}

/* 開いている状態のスタイル */
.accordion-item.active .accordion-content {
  display: block;
}

/* クリック可能な見出し部分のスタイル */
.accordion-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #eee;
  cursor: pointer;
}

/* アイコンの状態変化 */
.accordion-item.active .accordion-icon {
  transform: rotate(45deg);
}
```

### 3. JavaScript実装
```javascript
// 全てのアコーディオンヘッダーを取得
const accordionHeaders = document.querySelectorAll('.accordion-header');

// 各ヘッダーにクリックイベントを設定
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // 親要素（accordion-item）のactiveクラスを切り替え
    const accordionItem = this.parentElement;
    accordionItem.classList.toggle('active');
  });
});
```

## 🌟 拡張機能

### 課題⑤：アニメーション効果の追加
**目標**: スムーズな開閉アニメーションを実装する

**内容**:
- 単純な表示/非表示ではなく、スムーズなアニメーション効果を追加
- アイコンの回転アニメーションを実装
- トランジションを使った自然な動きを実現

**学習ポイント**:
- CSSトランジションの基本
- max-heightプロパティの活用
- トランスフォームアニメーション

**サンプルコード**:
```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  padding: 0 10px;
}

.accordion-item.active .accordion-content {
  max-height: 200px; /* コンテンツの最大高さより大きい値 */
  padding: 10px;
}

/* アイコンの回転アニメーション */
.accordion-icon {
  transition: transform 0.3s ease;
}

.accordion-item.active .accordion-icon {
  transform: rotate(45deg);
}
```

**JavaScriptの修正点**:
```javascript
// 全てのアコーディオンヘッダーを取得
const accordionHeaders = document.querySelectorAll('.accordion-header');

// 各ヘッダーにクリックイベントを設定
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // 親要素（accordion-item）のactiveクラスを切り替え
    const accordionItem = this.parentElement;
    accordionItem.classList.toggle('active');
    
    // display:noneを使わないため、JavaScriptで表示/非表示の切り替えは不要
  });
});
```

### 課題⑥：一つだけ開く機能
**目標**: 複数のアコーディオンがある場合、一つだけを開いた状態にする

**内容**:
- 複数のアコーディオンを同時に開かない制御を実装
- 開いているアコーディオンをクリックすると閉じる機能
- 別のアコーディオンをクリックすると既に開いているものを閉じる

**学習ポイント**:
- JavaScriptによる要素の相互作用
- クラスの追加と削除
- 条件分岐による制御

**サンプルコード**:
```javascript
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // 現在のアイテム以外を全て閉じる
    const currentItem = this.parentElement;
    
    // 現在開いているアイテムと、クリックしたアイテムが同じかチェック
    const isCurrentOpen = currentItem.classList.contains('active');
    
    // 全てのアイテムを閉じる
    accordionHeaders.forEach(h => {
      h.parentElement.classList.remove('active');
    });
    
    // 開いていなかった場合のみ開く（トグル動作）
    if (!isCurrentOpen) {
      currentItem.classList.add('active');
    }
  });
});
```

### 課題⑦：初期状態で特定のアイテムを開く
**目標**: ページ読み込み時に自動的に特定のアイテムを開く

**内容**:
- ページ読み込み時に最初または指定のアイテムを自動的に開く
- URLハッシュに基づいて特定のアイテムを開く（発展）
- 初期表示の一貫性を保つ

**学習ポイント**:
- DOMContentLoadedイベントの活用
- インデックスに基づく要素の選択
- URLハッシュとDOM要素の連携（発展）

**サンプルコード**:
```javascript
// ページ読み込み時に最初のアイテムを開く
window.addEventListener('DOMContentLoaded', () => {
  // 最初のアコーディオンアイテムを取得
  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) {
    firstItem.classList.add('active');
  }
  
  // または、特定のインデックスのアイテムを開く
  // const itemIndex = 1; // 2番目のアイテム（0始まり）
  // const items = document.querySelectorAll('.accordion-item');
  // if (items.length > itemIndex) {
  //   items[itemIndex].classList.add('active');
  // }
});
```

## 🔍 アコーディオン機能の実装例

### 基本的な実装例
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>アコーディオン実装例</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .accordion-item {
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .accordion-header {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background: #f5f5f5;
      cursor: pointer;
      font-weight: bold;
    }
    
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      background: #fff;
    }
    
    .accordion-item.active .accordion-content {
      max-height: 200px;
      padding: 15px;
    }
    
    .accordion-icon {
      transition: transform 0.3s ease;
    }
    
    .accordion-item.active .accordion-icon {
      transform: rotate(45deg);
    }
  </style>
</head>
<body>
  <h1>よくある質問</h1>
  
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">
        <span>JavaScriptとは何ですか？</span>
        <span class="accordion-icon">+</span>
      </div>
      <div class="accordion-content">
        <p>JavaScriptは、Webページに動きや対話性を追加するためのプログラミング言語です。HTML（構造）とCSS（見た目）と組み合わせて使用されます。</p>
      </div>
    </div>
    
    <div class="accordion-item">
      <div class="accordion-header">
        <span>アコーディオンはどんな時に使いますか？</span>
        <span class="accordion-icon">+</span>
      </div>
      <div class="accordion-content">
        <p>アコーディオンは、限られたスペースで多くの情報を整理して表示したい時に使います。FAQページやサイドバーメニュー、設定パネルなどで一般的に使用されています。</p>
      </div>
    </div>
    
    <div class="accordion-item">
      <div class="accordion-header">
        <span>HTMLとCSSの知識は必要ですか？</span>
        <span class="accordion-icon">+</span>
      </div>
      <div class="accordion-content">
        <p>はい、JavaScriptを効果的に使うには、HTMLとCSSの基本的な知識が必要です。これらの技術は連携して動作するため、3つ全ての理解が重要です。</p>
      </div>
    </div>
  </div>

  <script>
    // すべてのアコーディオンヘッダーを取得
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // 各ヘッダーにクリックイベントを設定
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        // 他のすべてのアイテムを閉じる
        accordionHeaders.forEach(h => {
          if (h !== this) {
            h.parentElement.classList.remove('active');
          }
        });
        
        // クリックされたアイテムの状態を切り替え
        this.parentElement.classList.toggle('active');
      });
    });
    
    // ページ読み込み時に最初のアイテムを開く
    window.addEventListener('DOMContentLoaded', () => {
      accordionHeaders[0].parentElement.classList.add('active');
    });
  </script>
</body>
</html>
```

## 📝 練習課題

### 課題1: 基本的なアコーディオン
プロフィールカードの「WEB SKILL」セクションに簡単なアコーディオン機能を実装してください。

1. HTML構造を修正して「HTML」「CSS」「JavaScript」のスキルグループをアコーディオンアイテムにする
2. 最初は全て閉じた状態にし、クリックで開く
3. アイコンを追加し、開閉状態に合わせて変化させる

### 課題2: 拡張機能の実装
1. アコーディオンの開閉にスムーズなアニメーションを追加
2. 一度に1つのセクションだけ開くように制御
3. ページ読み込み時に1つ目のセクションを自動的に開く機能を追加

### 課題3: 応用課題
1. 「ABOUT ME」と「VISION」セクションもアコーディオン化し、クリックで開閉できるようにする
2. セクションヘッダーにアイコンを追加し、開閉状態を視覚的に示す
3. ページ内リンククリック時、対応するアコーディオンを自動的に開くようにする

### 最終課題: 実践的アコーディオンメニューの作成
これまでの課題で学んだ知識を活用して、実践的なアコーディオンメニューを作成しましょう。

1. 以下の要件を満たすアコーディオンメニューを作成:
   - 少なくとも5つのメニュー項目
   - スムーズなアニメーション効果
   - 開閉状態を示す視覚的なアイコン
   - モバイル端末にも対応したレスポンシブデザイン
2. 以下の機能を実装:
   - 一度に1つのメニューだけ開く機能
   - 初期状態で指定の項目を開く
   - キーボード操作にも対応（TabキーとEnterキー）
3. デザインの工夫:
   - 色や影を使って立体感を出す
   - ホバー効果を追加
   - フォントやアイコンを工夫して見やすさを向上

## 📚 さらに学ぶために
- イベントハンドラとイベントリスナーの概念を深く理解する
- DOMの操作方法をさらに学ぶ
- JavaScriptのアニメーション技術について探求する

---

# 🔍 実装例リファレンス

## 基本的なアコーディオン
```javascript
// 基本的なアコーディオン機能
const accordionHeaders = document.querySelectorAll('.accordion-header');

// 初期状態ですべてのコンテンツを非表示にする
document.querySelectorAll('.accordion-content').forEach(content => {
  content.style.display = 'none';
});

// 各ヘッダーにクリックイベントを追加
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const content = this.nextElementSibling;
    
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
```

## アニメーション付きアコーディオン
```css
/* アニメーション用CSS */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion-item.active .accordion-content {
  max-height: 200px; /* コンテンツより大きな値 */
}
```

```javascript
// アニメーション付きアコーディオン
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('active');
  });
});
```

## 一つだけ開くアコーディオン
```javascript
// 一つだけ開くアコーディオン
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const currentItem = this.parentElement;
    const isOpen = currentItem.classList.contains('active');
    
    // すべて閉じる
    accordionHeaders.forEach(h => {
      h.parentElement.classList.remove('active');
    });
    
    // 閉じていた場合のみ開く
    if (!isOpen) {
      currentItem.classList.add('active');
    }
  });
});
``` 