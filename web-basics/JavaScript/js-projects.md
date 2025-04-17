# JavaScript実践プロジェクト集

## はじめに
このガイドではJavaScriptの基礎から応用まで、実際にプロジェクトを作りながら学んでいきます。プログラミングが初めての方でも理解できるよう、一つひとつ丁寧に説明していきます。

JavaScriptは、Webサイトに動きをつけるためのプログラミング言語です。ボタンをクリックしたときの反応や、情報の表示・非表示の切り替えなど、Webページを「生きている」ように見せるための技術です。

## 📚 目次

1. [JavaScriptの基本](#1-javascriptの基本)
   - [変数とデータ型](#変数とデータ型)
   - [演算子](#演算子)
   - [コメント](#コメント)
   - [練習問題1](#練習問題1)

2. [条件分岐とループ](#2-条件分岐とループ)
   - [if文による条件分岐](#if文による条件分岐)
   - [forループ](#forループ)
   - [whileループ](#whileループ)
   - [練習問題2](#練習問題2)

3. [関数](#3-関数)
   - [おまじない箱（関数）の作り方](#おまじない箱（関数）の作り方)
   - [箱にものを入れる（引数）](#箱にものを入れる（引数）)
   - [箱にものを入れなかったとき（初期値）](#箱にものを入れなかったとき（初期値）)
   - [箱からものを出す（return）](#箱からものを出す（return）)
   - [早く終わらせる（早期return）](#早く終わらせる（早期return）)
   - [箱の中と外（スコープ）](#箱の中と外（スコープ）)
   - [短く書ける方法（アロー関数）](#短く書ける方法（アロー関数）)
   - [練習問題3](#練習問題3)

4. [DOM操作の基本](#4-dom操作の基本)
   - [要素の取得](#要素の取得)
   - [要素の内容変更](#要素の内容変更)
   - [スタイルの変更](#スタイルの変更)
   - [要素の追加と削除](#要素の追加と削除)
   - [練習問題4](#練習問題4)

5. [イベント処理](#5-イベント処理)
   - [イベントの種類](#イベントの種類)
   - [イベントリスナーの設定](#イベントリスナーの設定)
   - [イベントオブジェクト](#イベントオブジェクト)
   - [練習問題5](#練習問題5)

6. [プロジェクト1：カウンターアプリ](#6-プロジェクト1カウンターアプリ)
   - [プロジェクトの概要](#プロジェクトの概要)
   - [HTMLとCSSの準備](#htmlとcssの準備)
   - [JavaScriptの実装](#javascriptの実装)
   - [ステップアップ課題](#ステップアップ課題)

7. [プロジェクト2：電卓アプリ](#7-プロジェクト2電卓アプリ)
   - [プロジェクトの概要](#プロジェクトの概要-1)
   - [HTMLとCSSの準備](#htmlとcssの準備-1)
   - [JavaScriptの実装](#javascriptの実装-1)
   - [ステップアップ課題](#ステップアップ課題-1)

## 学習を始める前に

### 必要な環境
- テキストエディタ（メモ帳、VSCode、Cursorなど）
- Webブラウザ（Google Chrome、Firefox、Safariなど）

### 学習の進め方
1. 各セクションの説明をよく読む
2. サンプルコードを自分で入力して実行してみる
3. 練習問題に取り組む
4. 最後にプロジェクトを完成させる

それでは、JavaScriptの世界へ一緒に飛び込みましょう！

---

## 1. JavaScriptの基本

### JavaScriptをHTMLに組み込む方法

JavaScriptをHTMLファイルで使用するには、主に3つの方法があります：

1. **HTMLの`<script>`タグで直接記述する**

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript学習</title>
</head>
<body>
    <h1>こんにちは</h1>
    
    <script>
        // ここにJavaScriptコードを書きます
        console.log("こんにちは、JavaScript!");
    </script>
</body>
</html>
```

2. **外部JavaScriptファイルを読み込む**

HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript学習</title>
</head>
<body>
    <h1>こんにちは</h1>
    
    <!-- 外部JavaScriptファイルを読み込む -->
    <script src="script.js"></script>
</body>
</html>
```

script.js:
```javascript
// ここにJavaScriptコードを書きます
console.log("こんにちは、JavaScript!");
```

3. **HTML要素の属性として記述する**（基本的には避けるべき方法）

```html
<button onclick="alert('ボタンがクリックされました')">クリックしてください</button>
```

**重要**: JavaScriptは基本的に`<body>`タグの終了直前に配置するのがベストプラクティスです。これにより、HTMLが先に読み込まれてから、JavaScriptが実行されるため、ページの表示速度が向上します。

### 変数とデータ型

変数とは、データを一時的に保存する「箱」のようなものです。JavaScriptでは、`var`、`let`、`const`というキーワードを使って変数を宣言します。

#### 変数の宣言と代入

```javascript
// 変数の宣言と同時に値を代入
let name = "田中";
let age = 25;

// 宣言だけして、後から代入することも可能
let height;
height = 170;

// 定数（後から変更できない変数）
const BIRTH_YEAR = 2000;
// BIRTH_YEAR = 2001; // エラーになります
```

**注意**: 最近のJavaScriptでは、`var`よりも`let`と`const`を使うことが推奨されています。
- `let`: 再代入可能な変数
- `const`: 再代入不可能な定数

#### 主なデータ型

JavaScriptには以下の主なデータ型があります：

1. **文字列（String）** - テキスト
```javascript
let message = "こんにちは";
let name = '太郎'; // シングルクォートでも可
let sentence = `私の名前は${name}です`; // テンプレートリテラル（変数を埋め込める）
```

2. **数値（Number）** - 整数や小数
```javascript
let age = 25;
let height = 175.5;
```

3. **真偽値（Boolean）** - `true`または`false`
```javascript
let isStudent = true;
let hasLicense = false;
```

4. **null** - 意図的に「何もない」ことを示す値
```javascript
let empty = null;
```

5. **undefined** - 値が未定義であることを示す
```javascript
let something;
console.log(something); // undefined
```

6. **オブジェクト（Object）** - 複数の値をプロパティとして持つ複合データ
```javascript
let person = {
    name: "鈴木",
    age: 30,
    isStudent: false
};

// ドット記法でプロパティにアクセス
console.log(person.name); // "鈴木"

// ブラケット記法でプロパティにアクセス
console.log(person["age"]); // 30
```

7. **配列（Array）** - 複数の値を順序付けて格納するオブジェクト
```javascript
let fruits = ["りんご", "バナナ", "オレンジ"];

// インデックスを使って要素にアクセス（0から始まる）
console.log(fruits[0]); // "りんご"
console.log(fruits[1]); // "バナナ"

// 配列の長さを取得
console.log(fruits.length); // 3
```

### 演算子

演算子を使うと、値を計算したり比較したりできます。

#### 算術演算子

```javascript
let a = 10;
let b = 3;

let addition = a + b;      // 13 (足し算)
let subtraction = a - b;   // 7 (引き算)
let multiplication = a * b; // 30 (掛け算)
let division = a / b;      // 3.3333... (割り算)
let remainder = a % b;     // 1 (余り)
let exponentiation = a ** b; // 1000 (10の3乗)

// インクリメント・デクリメント
let c = 5;
c++; // cの値を1増やす (c = c + 1 と同じ)
console.log(c); // 6

let d = 8;
d--; // dの値を1減らす (d = d - 1 と同じ)
console.log(d); // 7
```

#### 代入演算子

```javascript
let x = 10;

x += 5;  // x = x + 5 と同じ (結果: 15)
x -= 3;  // x = x - 3 と同じ (結果: 12)
x *= 2;  // x = x * 2 と同じ (結果: 24)
x /= 4;  // x = x / 4 と同じ (結果: 6)
x %= 4;  // x = x % 4 と同じ (結果: 2)
```

#### 比較演算子

```javascript
let p = 5;
let q = 10;
let r = "5";

console.log(p < q);   // true (pはqより小さい)
console.log(p > q);   // false (pはqより大きくない)
console.log(p <= q);  // true (pはq以下)
console.log(p >= q);  // false (pはq以上ではない)

console.log(p == r);  // true (値が同じ、型は無視)
console.log(p === r); // false (値は同じだが、型が異なる)
console.log(p != q);  // true (pとqは等しくない)
console.log(p !== r); // true (値または型が異なる)
```

**重要**: `==`と`===`の違いに注意しましょう。`===`は値だけでなく型も比較します（厳密等価演算子）。一般的には`===`を使用することが推奨されています。

#### 論理演算子

```javascript
let sunny = true;
let warm = false;

// AND演算子 (両方がtrueならtrueを返す)
console.log(sunny && warm); // false

// OR演算子 (少なくとも1つがtrueならtrueを返す)
console.log(sunny || warm); // true

// NOT演算子 (真偽値を反転させる)
console.log(!sunny); // false
console.log(!warm);  // true
```

### コメント

コードの説明や一時的にコードを無効化するためにコメントを使用できます。

```javascript
// これは1行コメントです

/*
これは
複数行
コメントです
*/

let name = "山田"; // 変数の後にもコメントを書けます
```

### コンソール出力

`console.log()`を使って、デバッグ情報をブラウザのコンソールに出力できます。

```javascript
console.log("こんにちは、世界！");
let age = 25;
console.log("年齢:", age);
```

ブラウザでF12キーを押すか、右クリックして「検証」を選択すると、「Console」タブでこれらの出力を確認できます。

### 練習問題1

以下の練習問題に挑戦してみましょう。解答を自分で考えてから、提供された解答を確認してください。

1. `name`という変数に自分の名前を、`age`という変数に自分の年齢を代入し、コンソールに「私の名前は[名前]で、年齢は[年齢]歳です」と表示するコードを書いてください。

2. 変数`birthYear`に生まれた年を代入し、現在の年から引いて年齢を計算して`calculatedAge`という変数に代入してください。その後、計算結果をコンソールに表示してください。

3. 変数`price`に商品の値段（例：1200）、`quantity`に数量（例：3）を代入し、消費税10%を含めた合計金額を計算して表示してください。

4. 配列`colors`に好きな色を3つ格納し、その配列の2番目の要素をコンソールに表示してください。

5. オブジェクト`student`を作成し、名前（name）、年齢（age）、好きな科目（favoriteSubject）というプロパティを持たせてください。その後、「[名前]さんの好きな科目は[好きな科目]です」と表示してください。

#### 練習問題1の解答例

1. 自分の名前と年齢を表示
```javascript
let name = "太郎";
let age = 25;
console.log(`私の名前は${name}で、年齢は${age}歳です`);
// または
console.log("私の名前は" + name + "で、年齢は" + age + "歳です");
```

2. 生まれ年から年齢を計算
```javascript
let birthYear = 2000;
let currentYear = 2025; // 現在の年を設定
let calculatedAge = currentYear - birthYear;
console.log(`あなたの年齢は${calculatedAge}歳です`);
```

3. 消費税込みの合計金額を計算
```javascript
let price = 1200;
let quantity = 3;
let subtotal = price * quantity;
let totalWithTax = subtotal * 1.1; // 消費税10%を加算
console.log(`${quantity}個の商品の合計金額（税込）は${totalWithTax}円です`);
```

4. 配列の要素を表示
```javascript
let colors = ["赤", "青", "緑"];
console.log(`2番目の色は${colors[1]}です`); // 配列は0から始まるので、2番目は添字1
```

5. オブジェクトを作成して表示
```javascript
let student = {
    name: "花子",
    age: 18,
    favoriteSubject: "数学"
};
console.log(`${student.name}さんの好きな科目は${student.favoriteSubject}です`);
```


[学んだ事]
- Javascriptのデータを作るにはまず箱（変数）が必要
 - まず変数宣言をする（その後箱にデータを入れる→箱に入れたデータを呼び出す）
 - constは定数（箱の名前変更不可）、letは変数（変更可）

- 変数宣言の後には変数を入力
 - 今回学んだ変数：name,age,birthYear,calculatedAge,price,quantity,colors,student

 ・console.log（）の使い方
  - console.log（）はコンソールに表示するためのもの
  - console.log（）の中には文字列を入れる
  - 文字列はダブルクォーテーションで囲む
  - 文字列と変数を組み合わせて表示する場合は、+を使うまたは｀で囲む
  - 例：console.log("あなたの年齢は" + calculatedAge + "歳です");
  - 上記の例では、あなたの年齢は（calculatedAgeで出た値）歳ですという文字列が表示される

- document.write（）の使い方
  - document.write（）はページに表示するためのもの
  - console.log（）と表記方法は基本的に同じ
  - 違いは、console.log（）はコンソールに表示するのに対し、document.write（）はページに表示する点

- オブジェクトの使い方
  - オブジェクトはキーと値のペアで作成される
  - キーと値はコロンで区切り、キーと値のペアはカンマで区切る
  - 例：const student = {name: "森山直太朗", age: 47, favoriteSubject: "体育のサッカー"};
  - 上記の例では、studentというオブジェクトを作成し、name, age, favoriteSubjectというプロパティを持たせている

- constとletの使い分け
  - const：値が変更されない変数（例：税率、名前など固定値）
  - let：値が後から変更される変数（例：スコア、カウンターなど）
  - 基本ルール：変更する予定がなければconst、変更する予定があればletを使用
  - メリット：意図しない変更を防ぐ、コードの意図が明確になる、バグ発見が容易になる
  

2025/04/13
--- 

## 2. 条件分岐とループ

プログラムは単に上から下へと実行されるだけではなく、条件によって異なる処理を行ったり、同じ処理を繰り返したりすることができます。ここでは、JavaScriptの条件分岐とループの基本を学びます。

### if文による条件分岐

`if`文を使うと、特定の条件が`true`の場合にのみコードを実行できます。

#### 基本的なif文

```javascript
let age = 18;

if (age >= 18) {
    console.log("成人です");
}
```

#### if-else文

条件が`false`の場合に別のコードを実行するには、`else`を使います。

```javascript
let age = 16;

if (age >= 18) {
    console.log("成人です");
} else {
    console.log("未成年です");
}
```

#### else-if文

複数の条件を順番にチェックするには、`else if`を使います。

```javascript
let score = 75;

if (score >= 90) {
    console.log("評価：A");
} else if (score >= 80) {
    console.log("評価：B");
} else if (score >= 70) {
    console.log("評価：C");
} else if (score >= 60) {
    console.log("評価：D");
} else {
    console.log("評価：F（不合格）");
}
```

#### 条件演算子（三項演算子）

単純な条件分岐は、条件演算子を使って1行で書くこともできます。

```javascript
let age = 20;
let status = (age >= 18) ? "成人" : "未成年";
console.log(status); // "成人"
```

書式：`条件 ? 真の場合の値 : 偽の場合の値`

### switch文

複数の値と一致するかをチェックする場合は、`switch`文が便利です。

```javascript
let day = "月曜日";
let message;

switch (day) {
    case "月曜日":
        message = "週の始まりです";
        break;
    case "火曜日":
    case "水曜日":
    case "木曜日":
        message = "平日です";
        break;
    case "金曜日":
        message = "明日から週末です";
        break;
    case "土曜日":
    case "日曜日":
        message = "週末です";
        break;
    default:
        message = "有効な曜日ではありません";
}

console.log(message);
```

**注意**: `break`を忘れると、その後のcase文も実行されてしまいます（フォールスルー）。

### forループ

`for`ループは、指定した回数だけコードを繰り返し実行します。

```javascript
// 1から5までの数字を表示
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// 出力: 1, 2, 3, 4, 5
```

`for`ループの構文:
```javascript
for (初期化; 継続条件; 更新処理) {
    // 繰り返し実行するコード
}
```

### 例: `for (let i = 1; i <= 100; i++)`

- **初期化**: `let i = 1;` → 変数iを1で初期化
- **継続条件**: `i <= 100;` → iが100以下の間ループを続ける
- **更新処理**: `i++` → 各ループ後にiを1増やす（i = i + 1と同じ）

このループは1〜100の数字を順番に処理します。

#### 配列をループで処理する

```javascript
let fruits = ["りんご", "バナナ", "オレンジ", "ぶどう"];

// 配列の要素を順番に表示
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i+1}番目の果物: ${fruits[i]}`);
}
```

#### for...of ループ（配列向け）

配列の各要素に対して繰り返し処理を行うには、`for...of`ループが便利です。

```javascript
let colors = ["赤", "青", "緑"];

for (let color of colors) {
    console.log(color);
}
// 出力: 赤, 青, 緑
```

#### for...in ループ（オブジェクト向け）

オブジェクトのプロパティに対して繰り返し処理を行うには、`for...in`ループが便利です。

```javascript
let person = {
    name: "田中",
    age: 30,
    job: "エンジニア"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// 出力:
// name: 田中
// age: 30
// job: エンジニア
```

### whileループ

`while`ループは、指定した条件が`true`である限り、コードを繰り返し実行します。

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
// 出力: 1, 2, 3, 4, 5
```

#### do...whileループ

`do...while`ループは、条件をチェックする前に必ず一度はコードを実行します。

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
// 出力: 1, 2, 3, 4, 5
```

条件が最初から`false`でも、最低一回は実行されます：

```javascript
let j = 10;

do {
    console.log(j); // 10が出力される
    j++;
} while (j <= 5);
```

### breakとcontinue

ループ内で特定の条件に応じて処理を制御したい場合に使用します。

- `break`: ループを即座に終了させる
- `continue`: 現在の繰り返しをスキップして次の繰り返しに進む

```javascript
// breakの例
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // iが5になったらループを終了
    }
    console.log(i);
}
// 出力: 1, 2, 3, 4

// continueの例
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // iが偶数ならスキップ
    }
    console.log(i);
}
// 出力: 1, 3, 5, 7, 9
```

### 練習問題2

以下の練習問題に挑戦してみましょう。

1. 変数`temperature`に気温を設定し、以下の条件で結果を表示するコードを書いてください：
   - 30度以上：「暑いです」
   - 20度以上30度未満：「快適です」
   - 10度以上20度未満：「涼しいです」
   - 10度未満：「寒いです」

2. 変数`month`に1～12の数値を入れ、対応する季節を`switch`文を使って表示してください：
   - 3～5月：「春」
   - 6～8月：「夏」
   - 9～11月：「秋」
   - 12～2月：「冬」

3. 1から100までの数字の中で、3の倍数のときは「Fizz」、5の倍数のときは「Buzz」、3と5の両方の倍数のときは「FizzBuzz」と表示し、それ以外の場合は数字をそのまま表示するプログラムを書いてください。（これはFizzBuzzと呼ばれる有名なプログラミング問題です）

4. 九九の表（1×1から9×9まで）をコンソールに表示するプログラムを書いてください。

5. 以下の配列から、「りんご」という要素が何番目にあるか探して、インデックスと共に表示するプログラムを書いてください：
   ```javascript
   let fruits = ["バナナ", "オレンジ", "りんご", "ぶどう", "メロン"];
   ```

#### 練習問題2の解答例

1. 気温による条件分岐
```javascript
let temperature = 25;

if (temperature >= 30) {
    console.log("暑いです");
} else if (temperature >= 20) {
    console.log("快適です");
} else if (temperature >= 10) {
    console.log("涼しいです");
} else {
    console.log("寒いです");
}
```

2. 月から季節を判定
```javascript
let month = 7;
let season;

switch (month) {
    case 3:
    case 4:
    case 5:
        season = "春";
        break;
    case 6:
    case 7:
    case 8:
        season = "夏";
        break;
    case 9:
    case 10:
    case 11:
        season = "秋";
        break;
    case 12:
    case 1:
    case 2:
        season = "冬";
        break;
    default:
        season = "無効な月です";
}

console.log(`${month}月は${season}です`);
```

3. FizzBuzz問題
```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

4. 九九の表
```javascript
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        let result = i * j;
        console.log(`${i} × ${j} = ${result}`);
    }
    console.log("-----"); // 各段の区切り
}
```

5. 配列から要素を探す
```javascript
let fruits = ["バナナ", "オレンジ", "りんご", "ぶどう", "メロン"];
let searchFruit = "りんご";
let found = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === searchFruit) {
        console.log(`「${searchFruit}」は${i}番目（インデックス${i}）にあります`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`「${searchFruit}」は見つかりませんでした`);
}
```

--- 

## 3. 関数（小学生でもわかる）

関数とは「おまじない箱」みたいなものです。いつもやる「おはよう」のあいさつを箱に入れておけば、「おはよう」と言いたいときに箱を開けるだけでOK！何度も同じことを言わなくて済みます。

### おまじない箱（関数）の作り方

#### 簡単なおまじない箱
```javascript
// おまじない箱を作る
function おはよう() {
    console.log("おはようございます！");
}

// おまじない箱を使う
おはよう(); // 「おはようございます！」と言ってくれる
```

これは「おはよう」という名前の箱を作って、中に「おはようございます！」と言うおまじないを入れているんだよ。箱を使うときは、名前を呼んであげればおまじないが出てくるよ！

#### 箱にものを入れる（引数）
```javascript
// 名前を入れる箱
function おはよう言う(なまえ) {
    console.log("おはよう、" + なまえ + "くん！");
}

// 「たろう」を入れて使う
おはよう言う("たろう"); // 「おはよう、たろうくん！」と言ってくれる
```

これは箱を使うときに、「たろう」という名前を入れると、「おはよう、たろうくん！」と言ってくれる箱だよ。箱に入れるものを「引数（ひきすう）」と言うんだ。

#### 箱にものを入れなかったとき（初期値）
```javascript
function おかし配る(なまえ = "みんな") {
    console.log(なまえ + "にお菓子をあげます");
}

おかし配る(); // 「みんなにお菓子をあげます」と言う
おかし配る("はなちゃん"); // 「はなちゃんにお菓子をあげます」と言う
```

このおまじない箱は、名前を言わなかったら「みんな」という言葉を使うよ。これを「初期値（しょきち）」というんだ。

#### 箱からものを出す（return）
```javascript
function たす(a, b) {
    return a + b; // 計算結果を箱の外に出す
}

let けっか = たす(2, 3);
console.log(けっか); // 5と表示される
```

これは「たす」という計算箱だよ。2と3を入れると、箱の中で計算して、答えの5を外に出してくれるんだ。「return」は「はい、どうぞ」って感じで、答えを渡してくれるよ。

#### 早く終わらせる（早期return）
```javascript
function おかしあげる(ねんれい) {
    if (ねんれい < 5) {
        return "まだ小さいから少しだけね";
    }
    
    return "はい、どうぞ！";
}

console.log(おかしあげる(3)); // "まだ小さいから少しだけね"
console.log(おかしあげる(6)); // "はい、どうぞ！"
```

これは「おかしあげる」という箱で、5歳より小さい子には「まだ小さいから少しだけね」、5歳以上の子には「はい、どうぞ！」と言ってくれるんだ。

### 箱の中と外（スコープ）

#### 箱の中だけのひみつ
```javascript
function おかしばこ() {
    let ひみつ = "ここにチョコレートがあるよ"; // 箱の中だけのひみつ
    console.log(ひみつ);
}

おかしばこ(); // "ここにチョコレートがあるよ"と表示
// console.log(ひみつ); // エラー：箱の外からはひみつは見えない
```

箱の中で作った「ひみつ」は、箱の外からは見えないんだ。これは自分のお部屋の中だけのひみつみたいなものだよ。

#### みんなに見えるもの
```javascript
let みんなのおかし = "べっこう飴"; // みんなに見えるおかし

function おかしを見る() {
    console.log(みんなのおかし); // 箱の中からも見える
}

おかしを見る(); // "べっこう飴"と表示
console.log(みんなのおかし); // "べっこう飴"と表示
```

箱の外で作った「みんなのおかし」は、箱の中からも外からも見えるよ。公園の遊具みたいに、みんなで使えるものだね。

### 短く書ける方法（アロー関数）

```javascript
// ふつうの書き方
const かける = function(a, b) {
    return a * b;
};

// 矢印（→）を使った短い書き方
const かけ算 = (a, b) => a * b;

console.log(かけ算(2, 3)); // 6と表示
```

矢印（=>）を使うと、短く書けるよ。「=>」は「この計算をするよ」という意味だよ。難しければ使わなくてもいいからね。

### 練習問題3
楽しく練習してみよう！

1. りんごの値段を計算する`りんごけいさん`という関数を作ってください。りんごの個数を入れると、1個100円として合計金額を返します。

2. おやつを選ぶ`おやつえらび`という関数を作ってください。好きな食べ物を入れると「今日はおやつに〇〇を食べます」と返します。

3. 名前と年齢を入れると「〇〇ちゃんは△△歳です」と返す`じこしょうかい`関数を作ってください。

4. 2つの数字のうち大きい方を返す`おおきいほう`関数を作ってください。

5. 好きな食べ物を3つ入れると「好きな食べ物は〇〇と△△と□□です」と返す`すきなたべもの`関数を作ってください。

#### 練習問題3の解答例

1. りんごの値段を計算する関数
```javascript
function りんごけいさん(こすう) {
    return こすう * 100;
}

console.log(りんごけいさん(3)); // 300と表示（3個で300円）
```

2. おやつを選ぶ関数
```javascript
function おやつえらび(たべもの) {
    return たべもの + "をおやつに食べます";
}

console.log(おやつえらび("プリン")); // "プリンをおやつに食べます"
```

3. 自己紹介する関数
```javascript
function じこしょうかい(なまえ, ねんれい) {
    return なまえ + "ちゃんは" + ねんれい + "歳です";
}

console.log(じこしょうかい("はな", 7)); // "はなちゃんは7歳です"
```

4. 大きい方を見つける関数
```javascript
function おおきいほう(かず1, かず2) {
    if (かず1 > かず2) {
        return かず1;
    } else {
        return かず2;
    }
}

console.log(おおきいほう(5, 9)); // 9（9の方が大きい）
```

5. 好きな食べ物を表示する関数
```javascript
function すきなたべもの(たべもの1, たべもの2, たべもの3) {
    return "好きな食べ物は" + たべもの1 + "と" + たべもの2 + "と" + たべもの3 + "です";
}

console.log(すきなたべもの("カレー", "ラーメン", "プリン"));
// "好きな食べ物はカレーとラーメンとプリンです"と表示
```

--- 

## 4. DOM操作の基本

みなさんがいつも見ているWebページは、実はたくさんの「箱」が組み合わさってできています。この箱のことを「要素（ようそ）」と呼びます。JavaScriptを使うと、これらの箱を見つけたり、中身を変えたり、新しい箱を作ったりすることができるんです！

### 要素の取得

まずは、ページの中から欲しい箱（要素）を見つける方法を学びましょう。

#### IDで要素を見つける

IDというのは、その箱だけの特別な名前です。名札みたいなものですね。

```javascript
// id="おにぎり"という名札がついた箱を探す
let おにぎり要素 = document.getElementById("おにぎり");
```

これで「おにぎり」という名札（ID）がついた箱を見つけることができました！

#### クラスで要素を見つける

クラスは、同じグループの箱につける名前です。例えば「果物」というグループの中に「りんご」「バナナ」「みかん」があるイメージです。

```javascript
// class="くだもの"というグループの箱をすべて探す
let くだもの要素リスト = document.getElementsByClassName("くだもの");

// 最初の果物を取り出す
let 最初のくだもの = くだもの要素リスト[0];
```

このコードでは「くだもの」というグループ名（クラス）がついた箱をすべて集めています。そして最初の一つを取り出しています。

#### タグ名で要素を見つける

HTMLのタグ名（例：p, div, h1など）で探すこともできます。

```javascript
// すべての<p>タグ（段落）を探す
let 段落リスト = document.getElementsByTagName("p");
```

これでページ内のすべての段落（pタグ）を見つけることができます。

#### CSSセレクタで要素を見つける

もっと詳しく指定したい時は、CSSセレクタという方法が使えます。これは「魔法の言葉」みたいなもので、細かい条件で要素を探せます。

```javascript
// 一つだけ見つける
let 要素 = document.querySelector(".くだもの");

// 条件に合うものをすべて見つける
let 要素リスト = document.querySelectorAll("ul li");
```

一つ目は「くだもの」というクラスがついた最初の要素を見つけ、二つ目はリスト（ul）の中の項目（li）をすべて見つけています。

### 要素の内容変更

見つけた箱の中身（テキスト）を変えることができます。

```javascript
// id="挨拶"という要素を見つける
let 挨拶要素 = document.getElementById("挨拶");

// 中のテキストを変える
挨拶要素.textContent = "こんにちは、JavaScript！";

// HTMLを含むテキストを変える
挨拶要素.innerHTML = "<strong>こんにちは</strong>、JavaScript！";
```

`textContent`はただのテキスト、`innerHTML`はHTMLタグも含めて変更できます。強調したり、色をつけたりしたい時は`innerHTML`を使います。

### スタイルの変更

箱の見た目（色や大きさなど）を変えることもできます。

```javascript
// id="マイボックス"という要素を見つける
let ボックス要素 = document.getElementById("マイボックス");

// 背景色を変える
ボックス要素.style.backgroundColor = "skyblue";

// 文字の大きさを変える
ボックス要素.style.fontSize = "20px";

// 枠線を追加
ボックス要素.style.border = "2px solid navy";
```

これで箱の色や文字の大きさを変えることができました！

### 要素の追加と削除

新しい箱を作ったり、いらない箱を捨てたりすることもできます。

#### 新しい要素を作って追加する

```javascript
// 新しい段落（p要素）を作る
let 新しい段落 = document.createElement("p");

// 中身のテキストを設定
新しい段落.textContent = "これは新しく作った段落です！";

// id="コンテナ"の要素の中に追加
let コンテナ = document.getElementById("コンテナ");
コンテナ.appendChild(新しい段落);
```

このコードでは、新しい段落（p要素）を作って、「コンテナ」という箱の中に入れています。

#### 要素を削除する

```javascript
// id="いらない要素"という要素を見つける
let いらない要素 = document.getElementById("いらない要素");

// その要素を削除する
いらない要素.remove();
```

これで「いらない要素」という箱を捨てることができました。

#### 要素の属性を変更する

箱についている情報（属性）を変えることもできます。

```javascript
// id="プロフィール画像"という要素を見つける
let 画像要素 = document.getElementById("プロフィール画像");

// 画像のURLを変更
画像要素.setAttribute("src", "新しい画像.jpg");

// 属性を取得
let 画像URL = 画像要素.getAttribute("src");
console.log(画像URL); // "新しい画像.jpg"

// 属性を削除
画像要素.removeAttribute("alt");
```

このコードでは、画像（img要素）の表示する画像（src属性）を変更しています。

### 練習問題4

楽しく練習してみましょう！

1. 以下のHTMLがあります。「変更ボタン」をJavaScriptで見つけて、コンソールに表示してください。
```html
<button id="変更ボタン">テキストを変更</button>
```

2. 「挨拶文」というIDの要素のテキストを「こんにちは、JavaScriptの世界へようこそ！」に変更してください。
```html
<p id="挨拶文">ここにテキストが入ります</p>
```

3. 「赤いボックス」というIDの要素の背景色を赤（red）に、文字色を白（white）に変更してください。
```html
<div id="赤いボックス">これは箱です</div>
```

4. 以下のリストに新しい項目「バナナ」を追加してください。
```html
<ul id="フルーツリスト">
  <li>りんご</li>
  <li>みかん</li>
</ul>
```

5. 「削除対象」というクラスが付いた最初の要素を削除してください。
```html
<div>
  <p class="削除対象">これは削除されます</p>
  <p>これは残ります</p>
  <p class="削除対象">これも削除対象ですが、最初の要素だけ削除されます</p>
</div>
```

#### 練習問題4の解答例

1. 変更ボタンを見つける
```javascript
let ボタン要素 = document.getElementById("変更ボタン");
console.log(ボタン要素);
```

2. 挨拶文のテキストを変更
```javascript
let 挨拶要素 = document.getElementById("挨拶文");
挨拶要素.textContent = "こんにちは、JavaScriptの世界へようこそ！";
```

3. ボックスの色を変更
```javascript
let ボックス要素 = document.getElementById("赤いボックス");
ボックス要素.style.backgroundColor = "red";
ボックス要素.style.color = "white";
```

4. リストに項目を追加
```javascript
// リストを見つける
let フルーツリスト = document.getElementById("フルーツリスト");

// 新しいリスト項目を作る
let 新しい項目 = document.createElement("li");
新しい項目.textContent = "バナナ";

// リストに追加
フルーツリスト.appendChild(新しい項目);
```

5. 要素を削除
```javascript
// 削除対象クラスの最初の要素を見つける
let 削除要素 = document.querySelector(".削除対象");

// 見つかったら削除
if (削除要素) {
    削除要素.remove();
}
```

--- 

## 5. イベント処理

Webページでは、いろいろな「できごと（イベント）」が起こります。例えば、ボタンをクリックしたり、キーボードを押したり、マウスを動かしたりすることです。JavaScriptを使うと、これらの「できごと」が起きたときに、何か特別なことをするよう指示することができます。これを「イベント処理」と呼びます。

### イベントの種類

主なイベントには、以下のようなものがあります。

#### クリック関連のイベント
- `click`: 要素をクリックしたとき
- `dblclick`: 要素をダブルクリックしたとき
- `mousedown`: マウスのボタンを押したとき
- `mouseup`: マウスのボタンを離したとき

#### キーボード関連のイベント
- `keydown`: キーボードのキーを押したとき
- `keyup`: キーボードのキーを離したとき
- `keypress`: キーボードのキーを押して、文字が入力されたとき

#### フォーム関連のイベント
- `submit`: フォームが送信されたとき
- `change`: 入力欄の値が変わったとき
- `focus`: 入力欄にフォーカスが当たったとき
- `blur`: 入力欄からフォーカスが外れたとき

#### 読み込み関連のイベント
- `load`: ページや画像などの読み込みが完了したとき
- `DOMContentLoaded`: HTMLの読み込みが完了したとき
- `unload`: ページを離れるとき

### イベントリスナーの設定

イベントが起きたときに何かをするには、「イベントリスナー」を設定します。これは「もし〇〇が起きたら、△△をしてね」という指示を出すようなものです。

#### 基本的なイベントリスナーの設定

```javascript
// ボタン要素を取得
let ボタン = document.getElementById("マイボタン");

// クリックされたときの動作を設定
ボタン.addEventListener("click", function() {
    alert("ボタンがクリックされました！");
});
```

このコードでは、「マイボタン」というIDの要素がクリックされたとき、アラートメッセージを表示するよう設定しています。

#### 名前をつけた関数を使う方法

```javascript
// クリックされたときの動作を関数として定義
function ボタンクリック時の処理() {
    alert("ボタンがクリックされました！");
    console.log("ボタンがクリックされました！");
}

// ボタン要素を取得してイベントリスナーを設定
let ボタン = document.getElementById("マイボタン");
ボタン.addEventListener("click", ボタンクリック時の処理);
```

このコードでは、クリックされたときの処理を別の関数として定義しています。これは、同じ処理を複数の場所で使いたい場合に便利です。

#### イベントリスナーの削除

不要になったイベントリスナーは削除することもできます。

```javascript
// イベントリスナーを設定
ボタン.addEventListener("click", ボタンクリック時の処理);

// あとでイベントリスナーを削除
ボタン.removeEventListener("click", ボタンクリック時の処理);
```

### イベントオブジェクト

イベントが発生すると、そのイベントの詳細情報が「イベントオブジェクト」として渡されます。これを使うと、イベントに関するいろいろな情報を取得できます。

```javascript
// クリックされた位置を知りたい場合
ボタン.addEventListener("click", function(イベント) {
    console.log("クリックされた座標:", イベント.clientX, イベント.clientY);
});

// キーボードのどのキーが押されたか知りたい場合
document.addEventListener("keydown", function(イベント) {
    console.log("押されたキー:", イベント.key);
});
```

#### イベントの伝播を止める

通常、イベントは親要素に伝わっていきます（バブリング）。これを止めたい場合は、`stopPropagation()`メソッドを使います。

```javascript
子要素.addEventListener("click", function(イベント) {
    イベント.stopPropagation(); // 親要素にイベントが伝わるのを防ぐ
    console.log("子要素がクリックされました");
});

親要素.addEventListener("click", function() {
    console.log("親要素がクリックされました"); // 子要素がクリックされても実行されない
});
```

#### デフォルトの動作を防ぐ

リンクのクリックやフォームの送信などには、ブラウザのデフォルトの動作があります。これを防ぎたい場合は、`preventDefault()`メソッドを使います。

```javascript
// リンクがクリックされてもページ遷移しないようにする
let リンク = document.getElementById("マイリンク");
リンク.addEventListener("click", function(イベント) {
    イベント.preventDefault(); // デフォルトの動作を防ぐ
    
    let 確認結果 = confirm("本当にリンク先に移動しますか？");
    if (確認結果) {
        // OKが押されたら移動
        window.location.href = this.href;
    }
});

// フォームが送信されても実際には送信されないようにする
let フォーム = document.getElementById("マイフォーム");
フォーム.addEventListener("submit", function(イベント) {
    イベント.preventDefault(); // デフォルトの動作（フォーム送信）を防ぐ
    console.log("フォームの内容:", フォーム.elements.名前.value);
});
```

### イベント委任（デリゲーション）

多数の子要素に同じイベントリスナーを設定したい場合、それぞれに設定するのは大変です。そんなとき、親要素にイベントリスナーを設定し、どの子要素がクリックされたかを判断する方法があります。これを「イベント委任」といいます。

```javascript
// リストの親要素にイベントリスナーを設定
let リスト = document.getElementById("フルーツリスト");
リスト.addEventListener("click", function(イベント) {
    // クリックされた要素がリストアイテム（li）なら処理を行う
    if (イベント.target.tagName === "LI") {
        console.log("クリックされたフルーツ:", イベント.target.textContent);
    }
});
```

### 練習問題5

イベント処理の練習をしてみましょう！

1. 「クリックしてね」というテキストを持つボタン要素を作成し、クリックされたらそのテキストを「クリックされました！」に変更するプログラムを書いてください。

2. テキスト入力欄を作成し、何か入力されるたびにその内容をコンソールに表示するプログラムを書いてください。

3. マウスを画像の上に乗せると画像が大きくなり、マウスが離れると元のサイズに戻るプログラムを書いてください。

4. ページ内のすべてのリンク（aタグ）をクリックしたとき、確認ダイアログを表示し、OKが押されたときだけ実際にリンク先に移動するプログラムを書いてください。

5. ボタンをクリックすると、ページ内にランダムな位置に新しい赤い丸（div要素）を作成して追加するプログラムを書いてください。

#### 練習問題5の解答例

1. ボタンのテキストを変更する
```html
<button id="マイボタン">クリックしてね</button>

<script>
let ボタン = document.getElementById("マイボタン");
ボタン.addEventListener("click", function() {
    this.textContent = "クリックされました！";
});
</script>
```

2. 入力内容をコンソールに表示する
```html
<input type="text" id="マイ入力欄" placeholder="ここに入力してください">

<script>
let 入力欄 = document.getElementById("マイ入力欄");
入力欄.addEventListener("input", function() {
    console.log("入力内容:", this.value);
});
</script>
```

3. マウスオーバーで画像を拡大する
```html
<img id="マイ画像" src="猫.jpg" style="width: 200px; transition: transform 0.3s;">

<script>
let 画像 = document.getElementById("マイ画像");

画像.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.2)"; // 1.2倍に拡大
});

画像.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)"; // 元のサイズに戻す
});
</script>
```

4. リンククリック時に確認ダイアログを表示する
```html
<a href="https://www.example.com" id="マイリンク">サンプルサイトへ</a>

<script>
let リンク = document.getElementById("マイリンク");

リンク.addEventListener("click", function(イベント) {
    イベント.preventDefault(); // デフォルトの動作を防ぐ
    
    let 確認結果 = confirm("本当にリンク先に移動しますか？");
    if (確認結果) {
        // OKが押されたら移動
        window.location.href = this.href;
    }
});
</script>
```

5. ランダムな位置に赤い丸を作成する
```html
<button id="丸追加ボタン">赤い丸を追加</button>
<div id="キャンバス" style="position: relative; width: 500px; height: 300px; border: 1px solid black;"></div>

<script>
let ボタン = document.getElementById("丸追加ボタン");
let キャンバス = document.getElementById("キャンバス");

ボタン.addEventListener("click", function() {
    // 新しい丸（div要素）を作成
    let 新しい丸 = document.createElement("div");
    
    // スタイルを設定
    新しい丸.style.position = "absolute";
    新しい丸.style.width = "30px";
    新しい丸.style.height = "30px";
    新しい丸.style.borderRadius = "50%"; // 円形にする
    新しい丸.style.backgroundColor = "red";
    
    // ランダムな位置を設定
    新しい丸.style.left = Math.random() * 470 + "px"; // 0～470pxの範囲
    新しい丸.style.top = Math.random() * 270 + "px"; // 0～270pxの範囲
    
    // キャンバスに追加
    キャンバス.appendChild(新しい丸);
});
</script>
```

--- 

## 6. プロジェクト1：カウンターアプリ

### プロジェクトの概要

カウンターアプリは、ボタンをクリックするたびにカウントアップするアプリケーションです。

### HTMLとCSSの準備

HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>カウンターアプリ</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>カウンター</h1>
        <p id="count">0</p>
        <button id="increment">+1</button>
        <button id="decrement">-1</button>
        <button id="reset">リセット</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

CSS:
```css
.container {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

#count {
    font-size: 2em;
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 1em;
}
```

### JavaScriptの実装

```javascript
let countElement = document.getElementById("count");
let count = 0;

function updateCount() {
    countElement.textContent = count;
}

document.getElementById("increment").addEventListener("click", function() {
    count++;
    updateCount();
});

document.getElementById("decrement").addEventListener("click", function() {
    count--;
    updateCount();
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    updateCount();
});

updateCount();
```

### ステップアップ課題

1. カウントアップの速度を変更できるようにする
2. カウントダウンの速度を変更できるようにする
3. カウントの上限と下限を設定する
4. カウントの履歴を表示する

--- 

## 7. プロジェクト2：電卓アプリ

### プロジェクトの概要

電卓アプリは、四則演算を行うアプリケーションです。

### HTMLとCSSの準備

HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>電卓アプリ</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>電卓</h1>
        <input type="text" id="display" readonly>
        <div class="buttons">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button>+</button>
            <button>C</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

CSS:
```css
.container {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

#display {
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
    font-size: 1.5em;
    text-align: right;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
}

button {
    width: 50px;
    height: 50px;
    margin: 5px;
    font-size: 1.5em;
}
```

### JavaScriptの実装

```javascript
let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let result = null;

function updateDisplay() {
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    operator = null;
    result = null;
    updateDisplay();
}

function handleOperator(op) {
    if (operator) {
        calculate();
    }
    operator = op;
    result = parseFloat(currentInput);
    currentInput = "";
}

function calculate() {
    if (operator) {
        result = eval(`${result} ${operator} ${parseFloat(currentInput)}`);
        currentInput = result.toString();
        operator = null;
    }
    updateDisplay();
}

function handleNumber(num) {
    currentInput += num;
    updateDisplay();
}

function handleDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function handleClear() {
    clearDisplay();
    updateDisplay();
}

function handleEqual() {
    calculate();
    currentInput = result.toString();
    updateDisplay();
}

function handleOperatorButton(button) {
    const operator = button.textContent;
    handleOperator(operator);
}

function handleNumberButton(button) {
    const number = button.textContent;
    handleNumber(number);
}

function handleDecimalButton(button) {
    handleDecimal();
}

function handleClearButton(button) {
    handleClear();
}

function handleEqualButton(button) {
    handleEqual();
}

function setupEventListeners() {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "C") {
                handleClearButton(button);
            } else if (button.textContent === "=") {
                handleEqualButton(button);
            } else if (button.textContent === "/" || button.textContent === "*" || button.textContent === "-" || button.textContent === "+") {
                handleOperatorButton(button);
            } else if (button.textContent === ".") {
                handleDecimalButton(button);
            } else {
                handleNumberButton(button);
            }
        });
    });
}

setupEventListeners();
```

### ステップアップ課題

1. 電卓の履歴を表示する
2. 電卓のデザインを改善する
3. 電卓の機能を拡張する（三角関数など）
4. 電卓のキーボード対応を実装する

--- 