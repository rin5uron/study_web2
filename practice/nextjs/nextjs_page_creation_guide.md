# Next.js ページ作成実践ガイド

このガイドでは、Next.js の App Router を使って新しいページを作成し、基本的なコンテンツを追加する方法を学びます。現場で早急に使えるように、実践的な内容に焦点を当てます。

## 1. React の基本的な考え方 (ちょっとだけ齧っておこう！)

Next.js は **React** という技術の上に作られています。React は、ウェブサイトの画面を「コンポーネント」という小さな部品に分けて考えるのが得意です。

*   **コンポーネント:** ウェブサイトの「部品」のこと。例えば、ボタン、ヘッダー、フッター、写真を表示する部分など、再利用できる塊を指します。
*   **JSX (ジェイエスエックス):** React でコンポーネントを作る時に使う特別な書き方です。JavaScript の中に HTML のようなタグを直接書くことができます。

例えば、こんな感じです。

```jsx
// これは「Hello World」と表示する小さな部品（コンポーネント）です
function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>これはReactのコンポーネントです。</p>
    </div>
  );
}

export default HelloWorld; // この部品を他の場所で使えるようにします
```

この `HelloWorld` という部品を、Next.js のページの中で使っていくことになります。

## 2. Next.js のページ作成の考え方

Next.js の App Router では、`src/app` ディレクトリの中にフォルダを作ることで、新しいウェブサイトの「ページ」や「セクション」を作ることができます。

*   **フォルダ = URL のパス:** `src/app` の中に `about` というフォルダを作ると、`http://localhost:3000/about` というURLでアクセスできるページができます。
*   **`page.tsx` (または `page.js`) = ページのコンテンツ:** 作ったフォルダの中に `page.tsx` (TypeScriptを使う場合) または `page.js` (JavaScriptを使う場合) というファイルを作ると、そのファイルに書かれた内容がウェブページとして表示されます。このファイルの中には、先ほど説明した React のコンポーネントを記述します。

## 3. 新しいページを作ってみよう！ (例: お知らせページ)

「お知らせページ」を作ってみましょう。

**ステップ 1: フォルダを作成する**

`my-nextjs-app/src/app` の中に `news` という新しいフォルダを作成します。

```bash
mkdir -p /Users/rin5uron/Desktop/study_web2/my-nextjs-app/src/app/news
```

**ステップ 2: `page.tsx` ファイルを作成する**

作成した `news` フォルダの中に `page.tsx` ファイルを作成し、以下の内容を記述します。

```bash
# ファイル作成コマンド (ターミナルで実行)
touch /Users/rin5uron/Desktop/study_web2/my-nextjs-app/src/app/news/page.tsx
```

```tsx
// /Users/rin5uron/Desktop/study_web2/my-nextjs-app/src/app/news/page.tsx の内容

// Reactのコンポーネントを定義します
// この関数が、このページに表示される内容を返します
export default function NewsPage() {
  return (
    <main>
      <h1>お知らせページ</h1>
      <p>最新のお知らせをここに表示します。</p>
      <ul>
        <li>2025年8月6日: ウェブサイトを公開しました！</li>
        <li>2025年8月1日: 夏休みイベントのお知らせ</li>
      </ul>
    </main>
  );
}
```

**ステップ 3: 開発サーバーを起動する**

`my-nextjs-app` ディレクトリに移動して、開発サーバーを起動します。

```bash
cd /Users/rin5uron/Desktop/study_web2/my-nextjs-app
pnpm dev
```

**ステップ 4: ブラウザで確認する**

ブラウザを開いて、`http://localhost:3000/news` にアクセスしてみてください。作成した「お知らせページ」が表示されるはずです。

## 4. 別のページも作ってみよう！ (例: 商品紹介ページ)

同様の手順で「商品紹介ページ」も作ってみましょう。

**ステップ 1: フォルダを作成する**

`my-nextjs-app/src/app` の中に `products` という新しいフォルダを作成します。

```bash
mkdir -p /Users/rin5uron/Desktop/study_web2/my-nextjs-app/src/app/products
```

**ステップ 2: `page.tsx` ファイルを作成する**

作成した `products` フォルダの中に `page.tsx` ファイルを作成し、以下の内容を記述します。

```bash
# ファイル作成コマンド (ターミナルで実行)
touch /Users/rin5uron/Desktop/study_web2/my-nextjs-app/src/app/products/page.tsx
```

```tsx
// /Users/rin5uron/Desktop/study_web2/my-nextjs-app/src/app/products/page.tsx の内容

export default function ProductsPage() {
  return (
    <main>
      <h1>商品紹介ページ</h1>
      <p>おすすめの商品をここで紹介します。</p>
      <div>
        <h2>商品A</h2>
        <p>これは素晴らしい商品です！</p>
        {/* ここに商品の画像や詳細を追加していきます */}
      </div>
      <div>
        <h2>商品B</h2>
        <p>こちらも人気の商品です！</p>
      </div>
    </main>
  );
}
```

**ステップ 3: ブラウザで確認する**

開発サーバーが起動している状態で、ブラウザで `http://localhost:3000/products` にアクセスしてみてください。「商品紹介ページ」が表示されるはずです。

## 5. 次のステップ

これで基本的なページの作成方法はマスターできました。次は、これらのページに画像を追加したり、スタイルを適用したり、より複雑なコンポーネントを組み込んだりする方法を学んでいきましょう。

*   **画像やCSSの追加:** `public` フォルダに画像を置き、Tailwind CSS を使って見た目を整える方法。
*   **コンポーネントの分割:** 共通で使う部分（ヘッダーやフッターなど）を別のファイルに分けて、複数のページで使い回す方法。
*   **ギャラリーやスライダーの実装:** 商品紹介ページに写真のギャラリーやスライダーを追加する方法。

これらのステップは、今後の講座で詳しく説明していきます。
