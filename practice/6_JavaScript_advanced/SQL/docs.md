# パスワード入力フォームのコード構造

## HTML構造

#### 🔧 使用タグと属性

| タグ        | 役割                                      |
|-------------|-------------------------------------------|
| `<form>`    | 入力フォーム全体をまとめる箱              |
| `<label>`   | 入力欄につける説明ラベル                  |
| `<input>`   | ユーザーが実際に入力する欄（text, passwordなど） |
| `<button>`  | 送信や処理をトリガーするボタン            |

---

| 属性名   | 使う場所         | 意味                          |
|----------|------------------|-------------------------------|
| `for`    | `<label>`に書く  | どの`<input>`とペアかを指定（`id`を参照） |
| `id`     | `<input>`に書く  | 自分の識別名。JavaScriptやCSSからも使える |

#### 🔗 JavaScriptとつなげるために必要なこと

- `<input>` に **`id` をつける**（JavaScriptから特定するための"名札"）
- JavaScriptで `getElementById("id名").value` を使って入力値を取得する

#### ⭐️理解のポイント

- `input` タグは「入力箱」  
- `id` をつけておけば JavaScript がその箱を開けられる  
- `label` の `for` 属性で`id`との関係が視覚的・構造的にもつながる

#### ✅ 実例コード

```html
<form id="loginForm">
  <label for="username">ユーザー名：</label>
  <input type="text" id="username" name="username" />
  
  <label for="password">パスワード：</label>
  <input type="password" id="password" name="password" />

  <button type="submit">ログイン</button>
</form>
```

## JavaScript構造

#### 🔧 使用構文と機能

| 構文・プロパティ | 役割 |
|------------------|------|
| `===` | 厳密な比較（値と型の両方が一致しているか判定） |
| `&&` | 論理積（AND）。両方の条件が true のときだけ true になる |
| `.value` | input に入力された値をJavaScriptで取り出すプロパティ |
| `.textContent` | 要素内のテキストを書き換えるプロパティ |
| `.style.color` | 要素の文字色を変更するCSSプロパティのJS版 |

---

| メソッド・イベント | 使う場所 | 意味 |
|-------------------|----------|------|
| `getElementById()` | JavaScript | 指定したidの要素を取得する |
| `addEventListener()` | JavaScript | イベント（クリック、送信など）を監視する |
| `event.preventDefault()` | イベント処理内 | 本来のフォーム送信（リロード）をキャンセル |

#### 🎯 この練習でやったこと

- `<form>` からの入力値を JavaScript で受け取る
- `===`（厳密な比較）と `&&`（論理積）を使ってログイン認証処理を作る
- `event.preventDefault()` を使ってページのリロードを止め、JSで判定処理が見えるようにした

#### ⭐️理解のポイント

- JavaScriptでは、**値の取得→条件判定→結果表示** までを自分で組み立てられる！
- `===` と `&&` は、ログイン認証などの「正しさのチェック」に欠かせない基本構文
- `preventDefault()` を書くことで、ページが勝手にリロードされるのを防げる

#### ✅ 処理の流れ

1. **入力値取得**: `getElementById().value` で入力内容を取得
2. **条件判定**: `===` と `&&` で正しいユーザー名・パスワードかチェック
3. **結果表示**: `textContent` と `style.color` でメッセージと色を変更

## 💻 使用コード（HTML＋JavaScript）

```html
<form id="loginForm">
  <label for="username">ユーザー名：</label>
  <input type="text" id="username" name="username" required />

  <label for="password">パスワード：</label>
  <input type="password" id="password" name="password" required />

  <button type="submit">ログイン</button>
</form>

<p id="message"></p>

<script>
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // フォームの送信を止める、ページリロードされて処理が見えなくなるのを防ぐ

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 入力確認（開発用）
    console.log('ユーザー名:', username);
    console.log('パスワード:', password);

    // ログイン判定処理
    // username が "admin" AND password が "1234" と一致したら成功
    if (username === 'admin' && password === '1234') {
      message.textContent = '♡';
      message.style.color = 'green';
    } else {
      message.textContent = 'ユーザー名またはパスワードが違います';
      message.style.color = 'red';
    }
  });
</script>
