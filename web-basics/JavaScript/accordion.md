# JavaScriptアコーディオン機能の実装ガイド 🪗

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

### アニメーション効果の追加
単純な表示/非表示ではなく、スムーズなアニメーション効果で開閉するようにします。

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
```

### 一つだけ開く機能
複数のアコーディオンがある場合、一つだけを開いた状態にする制御を加えます。

```javascript
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // 現在のアイテム以外を全て閉じる
    const currentItem = this.parentElement;
    
    accordionHeaders.forEach(h => {
      const item = h.parentElement;
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });
    
    // 現在のアイテムをトグル
    currentItem.classList.toggle('active');
  });
});
```

### 初期状態で特定のアイテムを開く
ページ読み込み時に最初のアイテムを自動的に開くようにします。

```javascript
// ページ読み込み時に最初のアイテムを開く
window.addEventListener('DOMContentLoaded', () => {
  // 最初のアコーディオンアイテムを取得
  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) {
    firstItem.classList.add('active');
  }
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

## 📚 さらに学ぶために
- イベントハンドラとイベントリスナーの概念を深く理解する
- DOMの操作方法をさらに学ぶ
- JavaScriptのアニメーション技術について探求する

以上の内容を参考に、プロフィールカードにアコーディオン機能を実装してみましょう！ 