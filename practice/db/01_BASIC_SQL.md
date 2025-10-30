# SQL基礎練習 - SELECT文を極める

## 📅 実践日: ____年____月____日

---

## 🎯 この章のゴール

SELECTを使ってデータを自在に取り出せるようになる

---

## 準備: 練習用データを作る

まず、以下のSQLをphpMyAdminで実行してください:

```sql
-- 商品テーブルを作成
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price INT NOT NULL,
    category VARCHAR(50),
    stock INT DEFAULT 0
);

-- 商品データを追加
INSERT INTO products (name, price, category, stock) VALUES
    ('ノートPC', 89800, '電化製品', 10),
    ('マウス', 2980, '電化製品', 50),
    ('キーボード', 5980, '電化製品', 30),
    ('モニター', 29800, '電化製品', 15),
    ('本棚', 8900, '家具', 5),
    ('デスク', 19800, '家具', 8),
    ('チェア', 15800, '家具', 12),
    ('ノート', 380, '文房具', 100),
    ('ペン', 120, '文房具', 200),
    ('消しゴム', 80, '文房具', 150);
```

---

## 📚 レッスン1: 基本のSELECT

### 例1: 全データを取得
```sql
SELECT * FROM products;
```

👉 `*` は「全てのカラム」という意味

### 例2: 特定のカラムだけ取得
```sql
SELECT name, price FROM products;
```

### 練習問題1
商品名(name)と在庫(stock)だけを表示してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT name, stock FROM products;
```
</details>

---

## 📚 レッスン2: 条件で絞り込む（WHERE）

### 例3: 価格が10000円以下の商品
```sql
SELECT * FROM products WHERE price <= 10000;
```

### 例4: カテゴリーが「電化製品」の商品
```sql
SELECT * FROM products WHERE category = '電化製品';
```

### 練習問題2
在庫が50個以上の商品を表示してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products WHERE stock >= 50;
```
</details>

---

## 📚 レッスン3: 並び替え（ORDER BY）

### 例5: 価格の安い順
```sql
SELECT * FROM products ORDER BY price ASC;
```

👉 `ASC` = 昇順（小さい順）

### 例6: 価格の高い順
```sql
SELECT * FROM products ORDER BY price DESC;
```

👉 `DESC` = 降順（大きい順）

### 練習問題3
在庫が多い順に商品を表示してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products ORDER BY stock DESC;
```
</details>

---

## 📚 レッスン4: 件数制限（LIMIT）

### 例7: 最も高い商品TOP3
```sql
SELECT * FROM products ORDER BY price DESC LIMIT 3;
```

### 練習問題4
最も安い商品TOP5を表示してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products ORDER BY price ASC LIMIT 5;
```
</details>

---

## 📚 レッスン5: 複数条件（AND, OR）

### 例8: 電化製品で10000円以下
```sql
SELECT * FROM products
WHERE category = '電化製品' AND price <= 10000;
```

### 例9: 電化製品または家具
```sql
SELECT * FROM products
WHERE category = '電化製品' OR category = '家具';
```

### 練習問題5
文房具で価格が200円以下の商品を表示してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products
WHERE category = '文房具' AND price <= 200;
```
</details>

---

## 📚 レッスン6: あいまい検索（LIKE）

### 例10: 「ノート」が含まれる商品
```sql
SELECT * FROM products WHERE name LIKE '%ノート%';
```

👉 `%` は「何でもOK」という意味

### 練習問題6
「ー」（長音）が含まれる商品を探してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products WHERE name LIKE '%ー%';
```
</details>

---

## 🎓 総合演習

以下の問題に挑戦してください:

### 問1
電化製品で、価格が5000円以上30000円以下の商品を、価格の高い順に表示

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products
WHERE category = '電化製品'
  AND price >= 5000
  AND price <= 30000
ORDER BY price DESC;
```
</details>

### 問2
在庫が10個以下の商品を、在庫が少ない順に表示

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products
WHERE stock <= 10
ORDER BY stock ASC;
```
</details>

### 問3
最も高い家具を表示

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT * FROM products
WHERE category = '家具'
ORDER BY price DESC
LIMIT 1;
```
</details>

---

## 📝 今日の学習メモ

```
理解できたこと:
-
-

難しかったこと:
-
-

復習が必要なこと:
-
-
```

---

## ✅ チェックリスト

- [ ] 全レッスンを実行した
- [ ] 練習問題を全て解いた
- [ ] 総合演習を全て解いた
- [ ] エラーなく実行できた

**全部できたら `02_PRACTICAL_SQL.md` に進んでください！**
