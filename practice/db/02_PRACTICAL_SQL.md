# Phase 2: 集計とグループ化 - データ分析の基礎

## 📅 実践日: ____年____月____日

---

## 🎯 学習目標

1. INSERT, UPDATE, DELETE の安全な使い方をマスターする
2. 集計関数（COUNT, SUM, AVG, MAX, MIN）を理解する
3. GROUP BY句でデータをグループ化する
4. HAVING句で集計結果に条件を付ける
5. トランザクション（COMMIT, ROLLBACK）を理解する

**基本情報対策**: 集計関数とGROUP BYは頻出。特にHAVING句との違いを理解する。

---

## 準備: matchesテーブルの作成

ユーザー間のマッチング履歴を管理するテーブルを作成します。

```sql
-- マッチングテーブル
CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'マッチングID',
    user_id INT NOT NULL COMMENT 'ユーザーID',
    partner_id INT NOT NULL COMMENT '相手のユーザーID',
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending' COMMENT '状態',
    matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'マッチング日時',

    INDEX idx_user_id (user_id),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='マッチング履歴';

-- サンプルデータ
INSERT INTO matches (user_id, partner_id, status) VALUES
    (1, 2, 'accepted'),
    (1, 3, 'accepted'),
    (1, 4, 'rejected'),
    (2, 1, 'accepted'),
    (2, 5, 'pending'),
    (3, 1, 'accepted'),
    (3, 4, 'accepted'),
    (4, 1, 'rejected'),
    (4, 3, 'accepted'),
    (5, 2, 'pending');
```

---

## 📚 レッスン1: データの追加（INSERT）

### 基本的なINSERT

```sql
INSERT INTO matches (user_id, partner_id, status)
VALUES (6, 7, 'pending');
```

### 複数行を一度に挿入

```sql
INSERT INTO matches (user_id, partner_id, status) VALUES
    (7, 8, 'accepted'),
    (8, 9, 'pending'),
    (9, 10, 'accepted');
```

**実務Tips**: 大量データの挿入は一度に行う方が効率的

### 練習問題1

あなた（user_id=10）が user_id=11 の人にマッチングリクエストを送ったデータを追加してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
INSERT INTO matches (user_id, partner_id, status)
VALUES (10, 11, 'pending');
```
</details>

---

## 📚 レッスン2: データの更新（UPDATE）

### 基本的なUPDATE

```sql
UPDATE matches
SET status = 'accepted'
WHERE id = 5;
```

⚠️ **超重要**: WHERE句を忘れると全レコードが更新されます！

### 安全な更新手順

```sql
-- ステップ1: まずSELECTで対象を確認
SELECT * FROM matches WHERE id = 5;

-- ステップ2: 確認できたらUPDATE
UPDATE matches SET status = 'accepted' WHERE id = 5;

-- ステップ3: 更新されたか確認
SELECT * FROM matches WHERE id = 5;
```

### 複数カラムの更新

```sql
UPDATE matches
SET
    status = 'rejected',
    matched_at = NOW()
WHERE id = 4;
```

### 練習問題2

status が 'pending' のマッチングを全て 'rejected' に更新してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
UPDATE matches
SET status = 'rejected'
WHERE status = 'pending';
```
</details>

---

## 📚 レッスン3: データの削除（DELETE）

### 基本的なDELETE

```sql
DELETE FROM matches WHERE id = 10;
```

⚠️ **超重要**: WHERE句を忘れると全レコードが削除されます！

### 安全な削除手順

```sql
-- ステップ1: まずSELECTで対象を確認
SELECT * FROM matches WHERE status = 'rejected';

-- ステップ2: 確認できたらDELETE
DELETE FROM matches WHERE status = 'rejected';

-- ステップ3: 削除されたか確認
SELECT COUNT(*) FROM matches WHERE status = 'rejected';
```

### 練習問題3

6ヶ月以上前のマッチングデータを削除するSQL文を書いてください（実行しないでください）。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
DELETE FROM matches
WHERE matched_at < DATE_SUB(NOW(), INTERVAL 6 MONTH);
```
</details>

---

## 📚 レッスン4: 集計関数

### COUNT - レコード数を数える

```sql
-- 全マッチング数
SELECT COUNT(*) AS total_matches FROM matches;

-- ステータスごとのカウント
SELECT COUNT(*) AS accepted_count
FROM matches
WHERE status = 'accepted';
```

**基本情報用語**: COUNT関数（集約関数）

### SUM - 合計値を計算

```sql
-- user_idの合計（実用的ではないが、動作確認）
SELECT SUM(user_id) FROM matches;
```

### AVG - 平均値を計算

```sql
-- 平均ユーザーID（実用的ではないが、動作確認）
SELECT AVG(user_id) FROM matches;
```

### MAX / MIN - 最大値・最小値

```sql
-- 最新のマッチング日時
SELECT MAX(matched_at) AS latest_match FROM matches;

-- 最も古いマッチング日時
SELECT MIN(matched_at) AS oldest_match FROM matches;
```

### 練習問題4

'accepted' ステータスのマッチング数を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT COUNT(*) AS accepted_matches
FROM matches
WHERE status = 'accepted';
```
</details>

---

## 📚 レッスン5: GROUP BY - グループ化

### ユーザーごとのマッチング数

```sql
SELECT
    user_id,
    COUNT(*) AS match_count
FROM matches
GROUP BY user_id;
```

**基本情報用語**: GROUP BY句（グループ化）

### ステータスごとの集計

```sql
SELECT
    status,
    COUNT(*) AS count
FROM matches
GROUP BY status;
```

### 複数カラムでグループ化

```sql
SELECT
    user_id,
    status,
    COUNT(*) AS count
FROM matches
GROUP BY user_id, status
ORDER BY user_id, status;
```

### 練習問題5

各ユーザーの 'accepted' ステータスのマッチング数を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    user_id,
    COUNT(*) AS accepted_count
FROM matches
WHERE status = 'accepted'
GROUP BY user_id;
```
</details>

---

## 📚 レッスン6: HAVING - 集計結果への条件

### WHEREとHAVINGの違い

```sql
-- WHERE: グループ化前のフィルタリング
SELECT user_id, COUNT(*) AS match_count
FROM matches
WHERE status = 'accepted'  -- ここで絞り込み
GROUP BY user_id;

-- HAVING: グループ化後のフィルタリング
SELECT user_id, COUNT(*) AS match_count
FROM matches
GROUP BY user_id
HAVING COUNT(*) >= 2;  -- 集計結果で絞り込み
```

**基本情報用語**:
- **WHERE**: レコード単位の条件
- **HAVING**: グループ単位の条件

### 実践例: 人気ユーザーの抽出

```sql
SELECT
    user_id,
    COUNT(*) AS match_count
FROM matches
WHERE status = 'accepted'
GROUP BY user_id
HAVING COUNT(*) >= 2
ORDER BY match_count DESC;
```

### 練習問題6

3回以上マッチングしているユーザーを、マッチング数の多い順に表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    user_id,
    COUNT(*) AS match_count
FROM matches
GROUP BY user_id
HAVING COUNT(*) >= 3
ORDER BY match_count DESC;
```
</details>

---

## 📚 レッスン7: トランザクション

### トランザクションとは

**一連の処理をまとめて実行し、全て成功するか全て失敗するかを保証する仕組み**

**基本情報用語**: ACID特性
- **A**tomicity（原子性）: 全て実行されるか、全て実行されないか
- **C**onsistency（一貫性）: データの整合性が保たれる
- **I**solation（独立性）: 他のトランザクションの影響を受けない
- **D**urability（永続性）: 完了したデータは永続化される

### 基本的な使い方

```sql
-- トランザクション開始
START TRANSACTION;

-- 処理1: マッチング作成
INSERT INTO matches (user_id, partner_id, status)
VALUES (11, 12, 'accepted');

-- 処理2: 相手側のマッチングも作成
INSERT INTO matches (user_id, partner_id, status)
VALUES (12, 11, 'accepted');

-- 問題なければ確定
COMMIT;

-- 問題があればロールバック（取り消し）
-- ROLLBACK;
```

### 実践例: 安全な更新

```sql
START TRANSACTION;

-- 更新前のデータを確認
SELECT * FROM matches WHERE id = 1;

-- 更新実行
UPDATE matches SET status = 'rejected' WHERE id = 1;

-- 更新後のデータを確認
SELECT * FROM matches WHERE id = 1;

-- OKなら確定、NGなら ROLLBACK;
COMMIT;
```

---

## 🎓 総合演習

### 演習1: マッチング成功率の計算

全ステータスの割合を計算してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    status,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM matches), 2) AS percentage
FROM matches
GROUP BY status;
```
</details>

### 演習2: アクティブユーザーランキング

マッチング数が多いユーザーTOP5を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    user_id,
    COUNT(*) AS match_count
FROM matches
GROUP BY user_id
ORDER BY match_count DESC
LIMIT 5;
```
</details>

### 演習3: 日別マッチング数の集計

日付ごとのマッチング数を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    DATE(matched_at) AS match_date,
    COUNT(*) AS count
FROM matches
GROUP BY DATE(matched_at)
ORDER BY match_date DESC;
```
</details>

---

## 💡 実務Tips

### 集計クエリのパフォーマンス

```sql
-- インデックスを活用
CREATE INDEX idx_status_matched_at ON matches(status, matched_at);

-- 実行計画の確認
EXPLAIN SELECT status, COUNT(*)
FROM matches
WHERE matched_at >= '2025-01-01'
GROUP BY status;
```

### バックアップの習慣

```sql
-- テーブルのバックアップ
CREATE TABLE matches_backup AS SELECT * FROM matches;

-- 復元
DROP TABLE matches;
RENAME TABLE matches_backup TO matches;
```

### データ整合性の確保

```sql
-- トランザクションで安全に更新
START TRANSACTION;

UPDATE matches SET status = 'accepted' WHERE id = 1;
UPDATE matches SET status = 'accepted' WHERE id = 2;

-- 両方成功したら確定
COMMIT;
```

---

## 📝 学習メモ

```
理解できたこと:
-
-

実務で使えそうなこと:
-
-

復習が必要なこと:
-
-
```

---

## ✅ チェックリスト

- [ ] INSERT, UPDATE, DELETE を安全に実行できる
- [ ] COUNT, SUM, AVG, MAX, MIN を使える
- [ ] GROUP BY でデータをグループ化できる
- [ ] WHERE と HAVING の違いを理解した
- [ ] トランザクションを使える
- [ ] 総合演習を全て解いた

---

**Phase 2完了！次は `03_FOREIGN_KEY.md` で外部キー制約を学びましょう。【基本情報対策】**
