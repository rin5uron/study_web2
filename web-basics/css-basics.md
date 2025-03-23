# CSS基礎

## 📝 学習目標
1. CSSの基本概念と構文を理解する
2. セレクタの使い方を学ぶ
3. プロパティとその値の設定方法を理解する
4. レイアウトの基本を習得する

## 🎯 実践課題（30分）

### 1. 基本的なスタイリング（10分）
- [ ] CSSファイルの作成とHTMLへのリンク
- [ ] 文字色、背景色の設定
- [ ] フォントファミリー、サイズの指定
- [ ] 余白（margin, padding）の調整

### 2. レイアウト設定（10分）
- [ ] Flexboxを使用した要素の配置
- [ ] 幅と高さの設定
- [ ] 位置調整（position）
- [ ] ボックスモデルの理解と活用

### 3. デザイン改善（10分）
- [ ] 配色の工夫（カラーパレットの作成）
- [ ] ホバーエフェクトの追加
- [ ] アニメーションの実装
- [ ] レスポンシブ対応

## 💡 サンプルコード

### 基本的なスタイリング
```css
/* 変数定義 */
:root {
    --primary-color: #333;
    --accent-color: #4a90e2;
    --background-color: #fff;
}

/* 基本設定 */
body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--primary-color);
    line-height: 1.6;
    margin: 0;
    padding: 20px;
}

/* 見出しスタイル */
h1, h2, h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

/* リンクスタイル */
a {
    color: var(--accent-color);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

### Flexboxレイアウト
```css
/* コンテナ設定 */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

/* アイテム設定 */
.item {
    flex: 1;
    padding: 20px;
    background-color: #f5f5f5;
}
```

### アニメーション
```css
/* ホバーエフェクト */
.button {
    background-color: var(--accent-color);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
```

## 📚 実践例：プロフィールカード

### HTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>プロフィールカード</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-card">
        <div class="profile-header">
            <h1>名前</h1>
            <p class="title">肩書き</p>
        </div>
        <div class="profile-content">
            <section class="skills">
                <h2>スキル</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </section>
            <section class="contact">
                <h2>連絡先</h2>
                <a href="#" class="button">メッセージを送る</a>
            </section>
        </div>
    </div>
</body>
</html>
```

### CSS
```css
/* 基本設定 */
:root {
    --primary-color: #333;
    --accent-color: #4a90e2;
    --background-color: #f5f5f5;
    --card-background: #fff;
}

body {
    background-color: var(--background-color);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

/* カードスタイル */
.profile-card {
    background-color: var(--card-background);
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 300px;
    overflow: hidden;
}

.profile-header {
    background-color: var(--accent-color);
    color: white;
    padding: 20px;
    text-align: center;
}

.profile-content {
    padding: 20px;
}

/* スキルリスト */
.skills ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.skills li {
    background-color: var(--background-color);
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.9em;
}

/* ボタン */
.button {
    display: inline-block;
    background-color: var(--accent-color);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* レスポンシブ対応 */
@media (max-width: 400px) {
    .profile-card {
        width: 90%;
        margin: 10px;
    }
}
```

## 🔍 学習のポイント

1. **セレクタの使い分け**
   - 要素セレクタ（h1, p など）
   - クラスセレクタ（.profile-card など）
   - ID セレクタ（#header など）
   - 擬似クラス（:hover など）

2. **レイアウトの考え方**
   - Flexboxの特性を理解
   - 親要素と子要素の関係
   - スペースの配分方法

3. **デザインの原則**
   - 色の使い方（カラーパレット）
   - 余白の重要性
   - 一貫性のある装飾

4. **レスポンシブデザイン**
   - メディアクエリの使用
   - フレキシブルな値の設定
   - モバイルファーストの考え方

## 📖 参考リソース
- [MDN CSS リファレンス](https://developer.mozilla.org/ja/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/) 