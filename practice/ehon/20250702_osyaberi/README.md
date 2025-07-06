# NOTE

JavaScriptの基本的なオブジェクト指向プログラミングを学習するためのノートです。

## 特徴

- Apple風のシンプルなデザイン
- レスポンシブ対応
- PrismJSによるシンタックスハイライト
- コピー&ペースト機能付き
- 実行結果の動的表示

## CSSフォーマット

以下のCSSスタイルを使用しています：

```css
:root {
    --accent-color: #00A2E8; /* アクセントカラー*/
}
html {
    font-size: 16px;
}
body {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem; /* より大胆な余白 */
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Kaku Gothic ProN", sans-serif;
    font-size: 1rem;
    font-weight: 300; /* Apple風の細いフォント */
    line-height: 1.8; /* ゆったりとした行間 */
    color: #333;
    background-color: #f9f9f9;
}
section {
    margin-bottom: 5rem; /* より大胆な余白 */
    padding: 3rem; /* より大胆な余白 */
    background: white;
    border-radius: 1rem; /* より丸く */
    box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.08); /* より柔らかい影 */
}
h1 {
    font-size: 2rem; /* より大きく */
    font-weight: 600; /* Apple風の太さ */
    border-left: 0.375rem solid var(--accent-color); /* タイトルの帯を戻す */
    padding-left: 1rem; /* 左側の余白を追加 */
    margin-bottom: 2rem; /* より大胆な余白 */
    color: #333;
}
h2 {
    font-size: 1.75rem; /* より大きく */
    font-weight: 500; /* Apple風の太さ */
    color: var(--accent-color);
    margin-top: 4rem; /* より大胆な余白 */
    margin-bottom: 1.5rem; /* より大胆な余白 */
}
h3 {
    font-size: 1.375rem;
    font-weight: 500;
    margin-top: 2rem; 
    margin-bottom: 2rem;
}
h4 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}
p {
    margin-bottom: 1.5rem; /* より大胆な余白 */
}
pre {
    margin-top: 1.5rem; 
    margin-bottom: 2rem; 
}
.result {
    background: linear-gradient(135deg, #fafcff 0%, #f0f7ff 100%); /* より薄いグラデーション背景 */
    padding: 1.5rem; 
    border: 1px solid rgba(0, 162, 232, 0.1); /* より薄いボーダー */
    border-radius: 0.75rem; 
    margin-top: 1rem; 
    box-shadow: 0 0.125rem 0.75rem rgba(0, 162, 232, 0.05); /* より薄い影 */
    font-family: 'SF Mono', Menlo, Monaco, Consolas, monospace; /* モノスペースフォント */
    font-size: 0.9rem;
    font-weight: 400;
    white-space: pre-wrap;
    position: relative;
    transition: all 0.2s ease; /* ホバー効果用 */
}
.result:hover {
    transform: translateY(-1px); /* 軽いホバー効果 */
    box-shadow: 0 0.25rem 1rem rgba(0, 162, 232, 0.1);
}
.result::before {
    content: "RESULT"; 
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Kaku Gothic ProN", sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem; 
    padding-bottom: 0.75rem; 
    border-bottom: 1px solid rgba(0, 162, 232, 0.15); /* より薄いボーダー */
}

/* スマホ向け (〜37.5rem = 600px) */
@media screen and (max-width: 37.5rem) {
    body { padding: 1rem; font-size: 0.875rem; } /* 14px相当 */
    section { padding: 1.5rem; margin-bottom: 3rem; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.25rem; }
    h3 { font-size: 1.125rem; }
    h4 { font-size: 1rem; }
}

/* タブレット向け (37.5625rem〜64rem = 601px〜1024px) */
@media screen and (min-width: 37.5625rem) and (max-width: 64rem) {
    body { padding: 2rem; font-size: 0.9375rem; } /* 15px相当 */
    section { padding: 2rem; margin-bottom: 4rem; }
    h1 { font-size: 1.75rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }
    h4 { font-size: 1.125rem; }
}
```

## 使い方

1. `practice.html`をブラウザで開く
2. JavaScriptのコードを確認
3. 実行結果を確認
4. 必要に応じてコードをコピー&ペースト

## 学習内容

- オブジェクト指向プログラミングの基本
- プロパティとメソッドの使い方
- 関数の戻り値
- 様々なデータ型
- for文を使ったループ処理 