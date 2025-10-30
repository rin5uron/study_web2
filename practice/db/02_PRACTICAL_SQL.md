# 実務に近いSQL練習 - データ操作編

## 📅 実践日: ____年____月____日

---

## 🎯 この章のゴール

実務でよく使うSQL（INSERT, UPDATE, DELETE）をマスターする

---

## 準備: 注文管理システムのテーブルを作る

```sql
-- 注文テーブルを作成
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_name VARCHAR(200),
    quantity INT DEFAULT 1,
    total_price INT,
    status VARCHAR(20) DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- サンプルデータ
INSERT INTO orders (user_id, product_name, quantity, total_price, status) VALUES
    (1, 'ノートPC', 1, 89800, 'completed'),
    (1, 'マウス', 2, 5960, 'completed'),
    (2, 'キーボード', 1, 5980, 'pending'),
    (3, 'モニター', 1, 29800, 'shipped');
```

---

## 📚 レッスン1: データを追加する（INSERT）

### 実務シーン: 新しい注文が入った

```sql
INSERT INTO orders (user_id, product_name, quantity, total_price)
VALUES (4, 'デスク', 1, 19800);
```

### 複数のデータを一度に追加

```sql
INSERT INTO orders (user_id, product_name, quantity, total_price) VALUES
    (5, 'チェア', 1, 15800),
    (5, 'ノート', 5, 1900);
```

### 練習問題1
あなた自身が「本棚」を1個、8900円で注文したデータを追加してください
（user_idは10としてください）

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
INSERT INTO orders (user_id, product_name, quantity, total_price)
VALUES (10, '本棚', 1, 8900);
```
</details>

---

## 📚 レッスン2: データを更新する（UPDATE）

### 実務シーン: 注文ステータスを「発送済み」に変更

```sql
UPDATE orders
SET status = 'shipped'
WHERE id = 3;
```

⚠️ **重要**: `WHERE`を忘れると全データが更新されます！

### 複数のカラムを一度に更新

```sql
UPDATE orders
SET
    status = 'completed',
    total_price = 5000
WHERE id = 3;
```

### 練習問題2
注文ID=2の注文ステータスを'shipped'に更新してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
UPDATE orders
SET status = 'shipped'
WHERE id = 2;
```
</details>

---

## 📚 レッスン3: データを削除する（DELETE）

### 実務シーン: キャンセルされた注文を削除

```sql
DELETE FROM orders WHERE id = 5;
```

⚠️ **超重要**: `WHERE`を忘れると全データが削除されます！

### 練習問題3
ステータスが'pending'の注文を全て削除してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
DELETE FROM orders WHERE status = 'pending';
```
</details>

---

## 📚 レッスン4: 集計（COUNT, SUM, AVG）

### 実務シーン: 今日の注文件数を知りたい

```sql
SELECT COUNT(*) AS order_count FROM orders;
```

### 実務シーン: 売上合計を知りたい

```sql
SELECT SUM(total_price) AS total_sales FROM orders;
```

### 実務シーン: 平均注文金額を知りたい

```sql
SELECT AVG(total_price) AS avg_order FROM orders;
```

### 練習問題4
ステータスが'completed'の注文の合計金額を表示してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT SUM(total_price) AS completed_sales
FROM orders
WHERE status = 'completed';
```
</details>

---

## 📚 レッスン5: グループ化（GROUP BY）

### 実務シーン: ユーザーごとの注文件数

```sql
SELECT
    user_id,
    COUNT(*) AS order_count
FROM orders
GROUP BY user_id;
```

### 実務シーン: ステータスごとの注文件数と売上

```sql
SELECT
    status,
    COUNT(*) AS order_count,
    SUM(total_price) AS total_sales
FROM orders
GROUP BY status;
```

### 練習問題5
ユーザーごとの合計購入金額を表示してください

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT
    user_id,
    SUM(total_price) AS total_amount
FROM orders
GROUP BY user_id;
```
</details>

---

## 🎓 実務レベル総合演習

### 演習1: 在庫管理システム
商品が注文されたら在庫を減らす処理を想定してください。
productsテーブルで「マウス」の在庫を5個減らしてください。

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
UPDATE products
SET stock = stock - 5
WHERE name = 'マウス';
```
</details>

---

### 演習2: レポート作成
「完了した注文」の中で、合計金額が10000円以上のものだけを、
金額が高い順に表示してください。

```sql
-- ここに書く


```

<details>
<summary>答え</summary>

```sql
SELECT *
FROM orders
WHERE status = 'completed'
  AND total_price >= 10000
ORDER BY total_price DESC;
```
</details>

---

### 演習3: データクレンジング
注文テーブルから、6ヶ月以上前の「完了済み」注文を削除する処理を書いてください。
（実際には実行しないでください。SQL文だけ書く練習です）

```sql
-- ここに書く
-- ヒント: DATE_SUB(NOW(), INTERVAL 6 MONTH) で6ヶ月前の日付


```

<details>
<summary>答え</summary>

```sql
DELETE FROM orders
WHERE status = 'completed'
  AND order_date < DATE_SUB(NOW(), INTERVAL 6 MONTH);
```
</details>

---

## 💡 実務Tips

### 1. WHERE句は必ず確認
```sql
-- まずSELECTで対象を確認
SELECT * FROM orders WHERE id = 5;

-- 確認できたらUPDATE
UPDATE orders SET status = 'completed' WHERE id = 5;
```

### 2. トランザクションを使う（安全な更新）
```sql
START TRANSACTION;

UPDATE products SET stock = stock - 1 WHERE id = 1;
UPDATE orders SET status = 'completed' WHERE id = 10;

-- 問題なければ
COMMIT;

-- 問題があれば
-- ROLLBACK;
```

### 3. バックアップを取る習慣
```sql
-- テーブルをコピー
CREATE TABLE orders_backup AS SELECT * FROM orders;
```

---

## 📝 今日の学習メモ

```
実務で使えそうなこと:
-
-

注意すべきポイント:
-
-

次に学びたいこと:
-
-
```

---

## ✅ チェックリスト

- [ ] INSERT, UPDATE, DELETE を理解した
- [ ] WHERE句の重要性を理解した
- [ ] 集計関数を使えるようになった
- [ ] GROUP BYを理解した
- [ ] 実務演習を全て解いた

**お疲れ様でした！これで実務の基礎は身につきました！**

次は `03_ADVANCED_SQL.md` でJOINやサブクエリを学びましょう。
