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
   - [関数の基本](#関数の基本)
   - [引数と戻り値](#引数と戻り値)
   - [関数式とアロー関数](#関数式とアロー関数)
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
```
for (初期化; 条件; 更新) {
    // 繰り返し実行するコード
}
```

1. **初期化**: ループが始まる前に一度だけ実行される
2. **条件**: 各繰り返しの前にチェックされ、`true`の場合にループ本体が実行される
3. **更新**: 各繰り返しの後に実行される

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

## 3. 関数

関数は、特定の処理をまとめて名前をつけたものです。同じ処理を何度も書かなくて済むようになり、コードの再利用性と可読性が向上します。

### 関数の基本

#### 関数の宣言

```javascript
// 基本的な関数の宣言
function greet() {
    console.log("こんにちは！");
}

// 関数の呼び出し
greet(); // "こんにちは！"と表示される
```

#### 関数を変数に代入する（関数式）

```javascript
// 関数式
const sayHello = function() {
    console.log("こんにちは！");
};

// 関数の呼び出し
sayHello(); // "こんにちは！"と表示される
```

### 引数と戻り値

#### 引数（パラメータ）

関数に情報を渡すには、引数（パラメータ）を使用します。

```javascript
// 引数を1つ受け取る関数
function greetPerson(name) {
    console.log(`こんにちは、${name}さん！`);
}

greetPerson("田中"); // "こんにちは、田中さん！"と表示される

// 複数の引数を受け取る関数
function add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

add(5, 3); // "5 + 3 = 8"と表示される
```

#### デフォルト引数

ES6以降では、引数にデフォルト値を設定できます。

```javascript
function greet(name = "ゲスト") {
    console.log(`こんにちは、${name}さん！`);
}

greet(); // "こんにちは、ゲストさん！"と表示される
greet("佐藤"); // "こんにちは、佐藤さん！"と表示される
```

#### 戻り値（return）

関数から値を返すには、`return`文を使用します。

```javascript
function add(a, b) {
    return a + b; // 計算結果を返す
}

let result = add(5, 3);
console.log(result); // 8

// 関数の結果を別の計算で使う
let doubled = add(5, 3) * 2;
console.log(doubled); // 16
```

複数の値を返したい場合は、配列やオブジェクトを使用します。

```javascript
function getPersonInfo() {
    return {
        name: "山田",
        age: 28,
        job: "エンジニア"
    };
}

let person = getPersonInfo();
console.log(person.name); // "山田"
console.log(person.age);  // 28
```

#### 早期リターン

`return`文が実行されると、その時点で関数の実行は終了します。これを利用して、条件に応じて関数の処理を早期に終了させることができます。

```javascript
function checkAge(age) {
    if (age < 0) {
        return "無効な年齢です";
    }
    
    if (age < 18) {
        return "未成年です";
    }
    
    return "成人です";
}

console.log(checkAge(-5)); // "無効な年齢です"
console.log(checkAge(15)); // "未成年です"
console.log(checkAge(20)); // "成人です"
```

### 関数のスコープ

変数のスコープ（有効範囲）は、その変数がどこからアクセスできるかを定義します。

#### ローカルスコープ

関数内で宣言された変数は、その関数内でのみアクセス可能です。

```javascript
function showMessage() {
    let message = "関数の中のメッセージ"; // ローカル変数
    console.log(message);
}

showMessage(); // "関数の中のメッセージ"と表示される
// console.log(message); // エラー: messageは定義されていない
```

#### グローバルスコープ

関数の外で宣言された変数は、すべての関数からアクセス可能です。

```javascript
let globalMessage = "グローバルなメッセージ"; // グローバル変数

function showMessage() {
    console.log(globalMessage);
}

showMessage(); // "グローバルなメッセージ"と表示される
console.log(globalMessage); // "グローバルなメッセージ"と表示される
```

### 関数式とアロー関数

#### 関数式

関数は変数に代入することもできます。このような関数を関数式と呼びます。

```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20
```

#### アロー関数

ES6で導入されたアロー関数は、関数式をより簡潔に書くための構文です。

```javascript
// 通常の関数式
const add = function(a, b) {
    return a + b;
};

// アロー関数
const addArrow = (a, b) => {
    return a + b;
};

// さらに省略形（単一の戻り値の場合）
const addShort = (a, b) => a + b;

console.log(add(3, 4));      // 7
console.log(addArrow(3, 4)); // 7
console.log(addShort(3, 4)); // 7
```

引数が1つだけの場合は、括弧も省略できます。

```javascript
// 引数が1つの場合
const square = x => x * x;
console.log(square(5)); // 25

// 引数がない場合は空の括弧が必要
const sayHello = () => "こんにちは！";
console.log(sayHello()); // "こんにちは！"
```

#### コールバック関数

関数を別の関数の引数として渡すことができます。これをコールバック関数と呼びます。

```javascript
// コールバック関数を受け取る関数
function calculate(a, b, operation) {
    return operation(a, b);
}

// 加算のコールバック
const addition = (x, y) => x + y;

// 乗算のコールバック
const multiplication = (x, y) => x * y;

console.log(calculate(5, 3, addition));      // 8
console.log(calculate(5, 3, multiplication)); // 15

// 直接アロー関数を渡すこともできる
console.log(calculate(5, 3, (x, y) => x - y)); // 2
```

### 再帰関数

関数が自分自身を呼び出すことを再帰と呼びます。特定の問題を解くのに役立ちますが、使いすぎるとスタックオーバーフローの原因になることがあります。

```javascript
// 再帰を使って階乗を計算
function factorial(n) {
    if (n <= 1) {
        return 1; // 再帰の終了条件
    }
    return n * factorial(n - 1); // 自分自身を呼び出す
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
```

### 練習問題3

以下の練習問題に挑戦してみましょう。

1. `calculateArea`という名前の関数を作成してください。この関数は長方形の縦と横の長さを引数として受け取り、面積を返します。

2. `isEven`という名前の関数を作成してください。この関数は数値を引数として受け取り、その数が偶数の場合は`true`、奇数の場合は`false`を返します。

3. 氏名（firstName, lastName）を引数として受け取り、「こんにちは、lastName firstName さん！」という形式で挨拶を返す`greetUser`関数を作成してください。

4. 3つの数値を引数として受け取り、その中で最大の数を返す`findMax`関数を作成してください。

5. 文字列の配列を引数として受け取り、それらを指定された区切り文字で結合した文字列を返す`joinStrings`関数を作成してください。区切り文字もパラメータとして受け取りますが、指定がない場合は「、」をデフォルトとします。

#### 練習問題3の解答例

1. 長方形の面積を計算する関数
```javascript
function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(5, 3)); // 15
```

2. 偶数かどうかを判定する関数
```javascript
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

3. 挨拶を返す関数
```javascript
function greetUser(firstName, lastName) {
    return `こんにちは、${lastName} ${firstName}さん！`;
}

console.log(greetUser("太郎", "山田")); // "こんにちは、山田 太郎さん！"
```

4. 最大値を見つける関数
```javascript
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findMax(10, 5, 8)); // 10

// 別解
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
```

5. 文字列を結合する関数
```javascript
function joinStrings(strings, separator = "、") {
    return strings.join(separator);
}

let fruits = ["りんご", "バナナ", "オレンジ"];
console.log(joinStrings(fruits)); // "りんご、バナナ、オレンジ"
console.log(joinStrings(fruits, " - ")); // "りんご - バナナ - オレンジ"
```

--- 