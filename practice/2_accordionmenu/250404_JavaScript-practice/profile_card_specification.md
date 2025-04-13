# プロフィールカード仕様書

## 1. プロジェクト概要
### 1.1 目的
- JavaScriptを使用したアコーディオンメニュー実装の実践
- CSS基礎の学習と理解のため
- 師匠への自己紹介と学習状況の共有
- 将来の成長記録としての活用

### 1.2 ターゲットユーザー
- 主ターゲット：師匠
- 副ターゲット：将来の自分（成長記録として）

### 1.3 デバイス対応
- プライマリー：PC表示
- セカンダリー：モバイル表示（レスポンシブ対応）

## 2. デザイン要件
### 2.1 コンセプト
- プログラミングができるかっこよくて可愛い女の子のイメージ
- おしゃれで都会的な中に賢さや聡明さを感じられるイメージ
- シンプルに一目で内容がわかりやすいデザイン

### 2.2 カラースキーム
- プロフィール画像の肌色に近い色を背景に使用
- テキストカラー：柔らかいグレー（可読性を保ちつつ柔らかい印象に）
- アクセントカラー：ピンク系

### 2.3 レイアウト
- PC画面でスクロール不要な表示
- プロフィール画像を中心とした配置
- 情報の階層構造を明確に

## 3. コンテンツ要件
### 3.1 必須要素
- プロフィール画像
- 名前
- 職種（エンジニア見習い）
- ABOUT ME
- VISION
- WEB SKILL

### 3.2 WEB SKILLセクション
- スキル表示：ボタン形式
- 表示内容：
  - 使用可能な言語・ツール
  - 保有資格
  - 学習状況（基礎知識・基礎操作レベル）
  - 現在の学習状況

## 4. 学習項目
### 4.1 HTML基礎
- セマンティックなHTMLの記述
- 適切な見出しレベルの使用
- リスト要素の活用

### 4.2 CSS基礎
- セレクタの使い分け
- ボックスモデルの理解と実装
- Flexboxを使ったレイアウト
- 擬似要素（:before, :after）の活用
- カラー設定（色相・彩度・明度の調整）
- フォントプロパティの調整

### 4.3 応用スキル
- メディアクエリを用いたレスポンシブデザイン
- アニメーションとトランジション
- カスタム属性の活用
- CSSの構造化と可読性向上

## 5. 技術要件
### 5.1 使用技術
- HTML5
- CSS3
  - Flexbox/Grid
  - メディアクエリ
  - アニメーション
- JavaScript
  - アコーディオンメニュー機能

### 5.2 パフォーマンス要件
- 高速な読み込み
- スムーズなアニメーション
- レスポンシブ対応 

### 5.3 アコーディオンメニュー仕様
アコーディオンメニューの階層構造は以下の通りです：

```
【階層図】
skills-container accordion-item (外側の箱)
├── accordion-header (見出し部分：クリックする場所)
│   ├── h3 (タイトルテキスト)
│   └── accordion-icon (+ や - のアイコン)
│
└── accordion-content (内容部分：開閉する場所)
    └── skill-description (説明文を入れる箱)
        └── p (実際のテキスト)
```

**各要素の役割：**
1. **外側の箱** (skills-container accordion-item)
   - アコーディオン全体を囲む外側のコンテナ
   - JavaScriptで開閉状態（クラス付与）を管理

2. **見出し部分** (accordion-header)
   - クリック可能な領域
   - 常に表示されている部分
   - 一般的にFlexboxで左に見出し、右にアイコンを配置
   ```css
   .accordion-header {
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
   ```

3. **内容部分** (accordion-content)
   - 開閉する本体部分
   - 通常は`max-height: 0`と`overflow: hidden`で非表示に
   - 開くときは`max-height`をコンテンツの高さに設定

4. **説明文の箱** (skill-description)
   - 実際のコンテンツを格納
   - スタイリングの役割を担当

**設計理由：**
この階層構造には明確な設計意図があります：

1. **役割の分離**
   - 各要素が明確な役割を持ち、責任範囲が明確
   - 開閉部分（ヘッダー）と内容部分（コンテンツ）が分離されており機能と表示が区別される

2. **スタイリングの階層化**
   - 外側はレイアウトと構造の制御
   - 内側は内容とテキストスタイルの制御
   - CSSを適用する際の詳細度の管理が容易になる

3. **JavaScript連携の明確化**
   - クラス名によってJavaScriptの操作対象が明確
   - 「accordion-item」「accordion-header」といった命名で操作しやすい
   - 開閉状態はクラス（.active）の付け外しで管理できる

4. **再利用性の向上**
   - 同じ構造を他の場所でも使い回せる
   - 各部品を独立して修正・更新可能
   - テンプレート化しやすく、拡張性が高い

**実装ポイント：**
- `overflow: hidden`はアコーディオンの開閉アニメーションに必須
- 開閉はJavaScriptで`max-height`プロパティを操作
- クラス名を分けることで見た目と機能の分離ができる

## 6. ファイル構造と解説
### 6.1 HTMLファイル構造

**設計ポイント**:
- div要素で各項目を区切り、クラス名で内容を表示することでCSSでスタイリングしやすくしている
- デザインに統一性を持たせるため各項目の基本形は同じにしている
- ハイパーリンクを設定し、span要素を使用してCSSのスタイリングができるようにしている

```html
<!DOCTYPE html>           <!-- HTML5文書宣言 -->
<html>                    <!-- HTML文書のルート要素 -->
<head>                    <!-- メタ情報、タイトル、スタイルシートのリンクなどを格納 -->
    <meta charset="UTF-8"> <!-- 文字エンコーディングの指定 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- レスポンシブデザイン対応のためのビューポート設定 -->
    <title>プロフィールカード</title> <!-- ブラウザのタブに表示されるタイトル -->
    <link rel="stylesheet" href="style.css"> <!-- CSSファイルの読み込み -->
</head>
<body>                    <!-- 表示されるコンテンツを格納 -->
    <div class="profile-card"> <!-- プロフィールカード全体を包む要素 -->
        <img src="images/profile-image.jpg" alt="プロフィール画像"> <!-- プロフィール画像 -->
        <h1>名前</h1>     <!-- 見出し1：名前 -->
        <p class="job-title">職種</p> <!-- 段落要素：職種 -->
        
        <div class="section"> <!-- セクション区分け用のdiv -->
            <h2>ABOUT ME</h2> <!-- 見出し2：セクションタイトル -->
            <p class="guideline-text">自己紹介文...</p> <!-- 段落要素：ガイドライン付きテキスト -->
        </div>

        <div class="section">
            <h2>VISION</h2>
            <ul class="vision-list"> <!-- 順不同リスト -->
                <li class="guideline-text">ビジョン項目...</li> <!-- リスト項目 -->
            </ul>
        </div>
        
        <div class="section">
            <h2>WEB SKILL</h2>
            <ul class="skills"> <!-- スキルを表示する順不同リスト -->
                <li>HTML</li>   <!-- スキル項目 -->
                <!-- 他のスキル項目 -->
            </ul>
            <div class="skill-description"> <!-- スキル説明部分 -->
                <div class="skill-group"> <!-- グループ化された説明（LEVELタグ付き） -->
                    <p>スキルレベルの説明...</p>
                </div>
                <div class="skill-qualification"> <!-- 資格情報（LICENSEタグ付き） -->
                    <p>資格名</p>
                </div>
            </div>
        </div>
        
        <div class="contact"> <!-- 連絡先情報 -->
            <a href="#" class="portfolio-link"> <!-- リンク要素 -->
                ポートフォリオ紹介文<span class="portfolio-button">ボタンテキスト</span> <!-- インライン要素 -->
            </a>
        </div>
    </div>
</body>
</html>
```

### 6.2 CSSファイル構造
```css
/* リセットスタイル */
* {                        /* ユニバーサルセレクタ：すべての要素に適用 */
    margin: 0;             /* 外側の余白をゼロに */
    padding: 0;            /* 内側の余白をゼロに */
    box-sizing: border-box; /* 要素のサイズ計算方法を指定 */
}

body {                     /* body要素のスタイル */
    font-family: 'Helvetica Neue', Arial, sans-serif; /* フォントファミリー指定 */
    background-color: #f5b8b8; /* 背景色：ピンク */
    display: flex;         /* フレックスボックスレイアウト */
    justify-content: center; /* 水平方向の中央揃え */
    align-items: center;   /* 垂直方向の中央揃え */
    min-height: 100vh;     /* 最小の高さをビューポートの高さに */
}

.profile-card {            /* プロフィールカードのスタイル */
    width: 650px;          /* 幅の指定 */
    background-color: #fef6f0; /* 背景色：肌色に近い柔らかい色 */
    border-radius: 15px;   /* 角の丸み */
    overflow: hidden;      /* はみ出した内容を隠す */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* 影の設定 */
}

.profile-card img {        /* プロフィール画像のスタイル */
    width: 160px;          /* 画像の幅 */
    height: 160px;         /* 画像の高さ */
    border-radius: 50%;    /* 円形にする */
    border: 5px solid #a7e0f0; /* 枠線：水色 */
}

.section {                 /* セクションのスタイル */
    padding: 20px 40px;    /* 内側の余白 */
    text-align: left;      /* テキストの左揃え */
    border-top: 1px solid #eee; /* 上部の境界線 */
}

.guideline-text {          /* ガイドラインテキストのスタイル */
    position: relative;    /* 位置指定の基準 */
    padding-left: 15px;    /* 左側の内側余白 */
    border-left: 3px solid rgba(167, 224, 240, 0.7); /* 左側の境界線：水色 */
}

.skills {                  /* スキルリストのスタイル */
    list-style: none;      /* リストマーカーを非表示 */
    display: grid;         /* グリッドレイアウト */
    grid-template-columns: repeat(4, 1fr); /* 4列のグリッド */
    gap: 12px;             /* 項目間の間隔 */
}

.skills li {               /* スキルリスト項目のスタイル */
    background-color: rgba(167, 224, 240, 0.15); /* 背景色：薄い水色 */
    border-radius: 6px;    /* 角の丸み */
    text-align: center;    /* テキストの中央揃え */
}

.skill-group {            /* LEVELタグ付きの説明グループ */
    position: relative;    /* 位置指定の基準 */
    border-left: 65px solid rgba(137, 208, 227, 0.9); /* 左側の太い境界線：青 */
}

.skill-group:before {     /* LEVELタグ（疑似要素） */
    content: "LEVEL";     /* 表示するテキスト */
    position: absolute;   /* 絶対位置指定 */
    top: 50%;             /* 上から50%の位置 */
    left: -58px;          /* 左側に配置 */
    transform: translateY(-50%); /* 垂直中央揃え */
    color: white;         /* 文字色：白 */
}

.skill-qualification {    /* LICENSEタグ付きの資格情報 */
    /* LEVELタグと同様の構造 */
}

/* レスポンシブデザイン */
@media (max-width: 768px) {  /* スクリーン幅が768px以下の場合 */
    .profile-card {
        width: 100%;         /* 幅を100%に変更 */
        max-width: 450px;    /* 最大幅を450pxに制限 */
    }
    
    .skills {
        grid-template-columns: repeat(2, 1fr); /* 2列のグリッドに変更 */
    }
}

/* アニメーション */
@keyframes fadeIn {         /* フェードインアニメーション定義 */
    from {
        opacity: 0;          /* 透明度を0から始める */
        transform: translateY(20px); /* 下から20px移動 */
    }
    to {
        opacity: 1;          /* 透明度を1（完全不透明）に */
        transform: translateY(0); /* 元の位置に */
    }
}
```

### 6.3 主要なCSS技術解説
1. **ボックスモデル**
   - `box-sizing: border-box;`：要素のサイズを内側の余白と枠線を含む形で計算
   - `border-radius`：角の丸み設定によるカード形状の実現
   - `box-shadow`：要素に影をつけて立体感を演出

2. **フレックスボックス・グリッドレイアウト**
   - `display: flex;`：フレックスボックスレイアウトによる中央配置
   - `display: grid;`：グリッドシステムによるスキル項目の均等配置
   - `grid-template-columns`：列数と幅の指定

3. **疑似要素とタグデザイン**
   - `:before`疑似要素：LEVELやLICENSEなどのタグ表示
   - 矢印マーク（▶︎）を疑似要素で挿入し視覚的に強調

4. **レスポンシブデザイン**
   - `@media`クエリ：画面サイズに応じたレイアウト調整
   - パーセント値とmax-widthの組み合わせによる可変レイアウト

5. **アニメーション**
   - `@keyframes`：アニメーションの定義
   - `animation`：フェードインアニメーションの適用
   - `transition`：ホバー時の滑らかな変化 