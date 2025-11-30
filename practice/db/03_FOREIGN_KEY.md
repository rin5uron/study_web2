# Phase 3: 外部キー制約 - テーブル間の関係を定義する

## 📅 実践日: ____年____月____日

---

## 🎯 学習目標

1. **外部キー制約（FOREIGN KEY）**を理解する
2. **REFERENCES句**でテーブル間の参照関係を定義する
3. **CASCADE制約**（連鎖削除・更新）を実装する
4. **JOIN**で複数テーブルを結合する
5. データの整合性を保証する仕組みを理解する

**基本情報対策**: 外部キー・参照制約・正規化は頻出。確実にマスターする。

---

## 📚 外部キーとは？

### 定義

**外部キー（FOREIGN KEY）**: あるテーブルのカラムが、別のテーブルの主キーを参照する制約

**目的**:
1. データの整合性を保証
2. 存在しないデータへの参照を防ぐ
3. テーブル間の関係を明示

### 実例: マッチングアプリ

```
users テーブル（親）
├─ id: 1, name: "田中"
├─ id: 2, name: "佐藤"
└─ id: 3, name: "鈴木"

matches テーブル（子）
├─ user_id: 1 → users.id を参照
├─ user_id: 2 → users.id を参照
└─ user_id: 999 → ❌ エラー！存在しないユーザー
```

---

## 🛠️ 準備: テーブルの再作成

前章のテーブルを削除し、外部キー制約を含む正しい設計で作り直します。

### ステップ1: 既存テーブルの削除

```sql
-- 子テーブルから削除（外部キーがあるため順序重要）
DROP TABLE IF EXISTS matches;

-- 親テーブルを削除
DROP TABLE IF EXISTS users;
```

### ステップ2: 親テーブル（users）の作成

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ユーザーID（主キー）',
    name VARCHAR(100) NOT NULL COMMENT 'ユーザー名',
    email VARCHAR(255) UNIQUE NOT NULL COMMENT 'メールアドレス',
    gender ENUM('male', 'female', 'other') NOT NULL COMMENT '性別',
    age INT NOT NULL COMMENT '年齢',
    prefecture VARCHAR(50) COMMENT '都道府県',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '登録日時'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ユーザー情報';

-- サンプルデータ
INSERT INTO users (name, email, gender, age, prefecture) VALUES
    ('田中太郎', 'tanaka@example.com', 'male', 28, '東京都'),
    ('佐藤花子', 'sato@example.com', 'female', 25, '神奈川県'),
    ('鈴木一郎', 'suzuki@example.com', 'male', 32, '大阪府'),
    ('高橋美咲', 'takahashi@example.com', 'female', 27, '東京都'),
    ('伊藤健太', 'ito@example.com', 'male', 30, '福岡県');
```

### ステップ3: 子テーブル（matches）の作成 - 外部キー制約付き

```sql
CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'マッチングID',
    user_id INT NOT NULL COMMENT 'ユーザーID',
    partner_id INT NOT NULL COMMENT '相手のユーザーID',
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending' COMMENT '状態',
    matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'マッチング日時',

    -- 【重要】外部キー制約の定義
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (partner_id) REFERENCES users(id),

    INDEX idx_user_id (user_id),
    INDEX idx_partner_id (partner_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='マッチング履歴';
```

**基本情報用語**:
- **FOREIGN KEY (user_id)**: user_id が外部キーであることを宣言
- **REFERENCES users(id)**: users テーブルの id カラムを参照

---

## 📚 レッスン1: 外部キー制約の動作確認

### 正常なデータ挿入

```sql
-- ✅ 成功: user_id=1 は users テーブルに存在する
INSERT INTO matches (user_id, partner_id, status)
VALUES (1, 2, 'accepted');
```

### 外部キー制約違反

```sql
-- ❌ エラー: user_id=999 は users テーブルに存在しない
INSERT INTO matches (user_id, partner_id, status)
VALUES (999, 2, 'pending');
```

**エラーメッセージ**:
```
ERROR 1452: Cannot add or update a child row:
a foreign key constraint fails
```

**ポイント**: 外部キー制約により、存在しないユーザーへの参照が防がれる

### 練習問題1

user_id=1, partner_id=3 のマッチングを作成してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
INSERT INTO matches (user_id, partner_id, status)
VALUES (1, 3, 'accepted');
```
</details>

---

## 📚 レッスン2: CASCADE制約 - 連鎖削除・更新

### CASCADE制約とは

親テーブルのレコードが削除/更新されたとき、子テーブルのレコードも自動的に削除/更新する設定。

**種類**:
- **ON DELETE CASCADE**: 親が削除されたら子も削除
- **ON UPDATE CASCADE**: 親が更新されたら子も更新
- **ON DELETE SET NULL**: 親が削除されたら子をNULLに
- **ON DELETE RESTRICT**: 親に子がいる場合は削除不可（デフォルト）

### テーブルの再作成（CASCADE付き）

```sql
-- 既存テーブルを削除
DROP TABLE IF EXISTS matches;

-- CASCADE制約付きで再作成
CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    partner_id INT NOT NULL,
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- CASCADE制約を追加
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (partner_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- サンプルデータ
INSERT INTO matches (user_id, partner_id, status) VALUES
    (1, 2, 'accepted'),
    (1, 3, 'accepted'),
    (2, 1, 'accepted'),
    (3, 4, 'pending'),
    (4, 5, 'rejected');
```

### CASCADE の動作確認

```sql
-- 削除前: user_id=5 のマッチングを確認
SELECT * FROM matches WHERE user_id = 5 OR partner_id = 5;

-- user_id=5 のユーザーを削除
DELETE FROM users WHERE id = 5;

-- 削除後: user_id=5 のマッチングも自動削除される
SELECT * FROM matches WHERE user_id = 5 OR partner_id = 5;
-- → 結果: 0件（CASCADE により自動削除された）
```

**基本情報用語**: CASCADE制約による参照整合性の維持

---

## 📚 レッスン3: JOIN - テーブルの結合

### INNER JOIN（内部結合）

**両方のテーブルに存在するデータのみ**を取得。

```sql
SELECT
    matches.id,
    users.name AS user_name,
    matches.status,
    matches.matched_at
FROM matches
INNER JOIN users ON matches.user_id = users.id;
```

**結果イメージ**:
```
| id | user_name  | status   | matched_at          |
|----|-----------|----------|---------------------|
| 1  | 田中太郎   | accepted | 2025-11-29 10:00:00 |
| 2  | 田中太郎   | accepted | 2025-11-29 10:05:00 |
| 3  | 佐藤花子   | accepted | 2025-11-29 10:10:00 |
```

### 相手の名前も表示（複数JOIN）

```sql
SELECT
    m.id,
    u1.name AS user_name,
    u2.name AS partner_name,
    m.status,
    m.matched_at
FROM matches AS m
INNER JOIN users AS u1 ON m.user_id = u1.id
INNER JOIN users AS u2 ON m.partner_id = u2.id;
```

**エイリアス（AS）の使用**: テーブル名を短縮して可読性を向上

### LEFT JOIN（左外部結合）

**左側のテーブルは全て表示**、右側は一致するものだけ表示。

```sql
SELECT
    u.name,
    COUNT(m.id) AS match_count
FROM users AS u
LEFT JOIN matches AS m ON u.id = m.user_id
GROUP BY u.id, u.name
ORDER BY match_count DESC;
```

**ポイント**: マッチングが0件のユーザーも表示される

### 練習問題2

'accepted' ステータスのマッチングについて、ユーザー名と相手の名前を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    u1.name AS user_name,
    u2.name AS partner_name,
    m.matched_at
FROM matches AS m
INNER JOIN users AS u1 ON m.user_id = u1.id
INNER JOIN users AS u2 ON m.partner_id = u2.id
WHERE m.status = 'accepted';
```
</details>

---

## 📚 レッスン4: 実践的なクエリ

### ユーザーごとのマッチング数（相手の名前付き）

```sql
SELECT
    u.id,
    u.name,
    u.age,
    u.prefecture,
    COUNT(m.id) AS match_count
FROM users AS u
LEFT JOIN matches AS m ON u.id = m.user_id
WHERE m.status = 'accepted' OR m.id IS NULL
GROUP BY u.id, u.name, u.age, u.prefecture
ORDER BY match_count DESC;
```

### 人気ユーザーランキング（マッチング相手のリスト付き）

```sql
SELECT
    u1.id,
    u1.name AS user_name,
    GROUP_CONCAT(u2.name SEPARATOR ', ') AS partners,
    COUNT(m.id) AS match_count
FROM users AS u1
INNER JOIN matches AS m ON u1.id = m.user_id
INNER JOIN users AS u2 ON m.partner_id = u2.id
WHERE m.status = 'accepted'
GROUP BY u1.id, u1.name
HAVING match_count >= 2
ORDER BY match_count DESC;
```

**GROUP_CONCAT**: 複数の値を1つの文字列に結合

---

## 🎓 総合演習

### 演習1: マッチング詳細レポート

各マッチングについて、両方のユーザーの詳細情報を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    m.id,
    m.status,
    u1.name AS user_name,
    u1.age AS user_age,
    u1.prefecture AS user_prefecture,
    u2.name AS partner_name,
    u2.age AS partner_age,
    u2.prefecture AS partner_prefecture,
    m.matched_at
FROM matches AS m
INNER JOIN users AS u1 ON m.user_id = u1.id
INNER JOIN users AS u2 ON m.partner_id = u2.id
ORDER BY m.matched_at DESC;
```
</details>

### 演習2: 同じ都道府県内のマッチング

同じ都道府県に住むユーザー同士のマッチングを表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    m.id,
    u1.name AS user_name,
    u2.name AS partner_name,
    u1.prefecture,
    m.status
FROM matches AS m
INNER JOIN users AS u1 ON m.user_id = u1.id
INNER JOIN users AS u2 ON m.partner_id = u2.id
WHERE u1.prefecture = u2.prefecture;
```
</details>

### 演習3: マッチングがないユーザーを探す

一度もマッチングしていないユーザーを表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT
    u.id,
    u.name,
    u.age,
    u.prefecture
FROM users AS u
LEFT JOIN matches AS m ON u.id = m.user_id
WHERE m.id IS NULL;
```
</details>

---

## 💡 実務Tips

### 外部キー設計の原則

1. **親テーブルから作成**: users → matches の順
2. **削除は逆順**: matches → users の順
3. **CASCADE は慎重に**: 意図しないデータ削除に注意
4. **インデックスは必須**: 外部キーカラムには必ずインデックス

### パフォーマンス最適化

```sql
-- JOIN のパフォーマンスチェック
EXPLAIN SELECT * FROM matches AS m
INNER JOIN users AS u ON m.user_id = u.id;

-- インデックスの確認
SHOW INDEX FROM matches;
```

### データ整合性チェック

```sql
-- 孤立レコードの検出（外部キーがない場合）
SELECT m.*
FROM matches AS m
LEFT JOIN users AS u ON m.user_id = u.id
WHERE u.id IS NULL;
```

---

## 📝 基本情報対策まとめ

### 重要用語

✅ **主キー（PRIMARY KEY）**: レコードを一意に識別
✅ **外部キー（FOREIGN KEY）**: 他テーブルの主キーを参照
✅ **REFERENCES句**: 参照先テーブルとカラムを指定
✅ **参照整合性**: データの矛盾を防ぐ仕組み
✅ **CASCADE制約**: 連鎖削除・更新
✅ **正規化**: データの重複を排除（第1〜第3正規形）

### よくある試験問題パターン

1. 外部キーの定義方法
2. CASCADE の動作
3. INNER JOIN と LEFT JOIN の違い
4. 参照整合性制約の目的

---

## 📝 学習メモ

```
理解できたこと:
-
-

難しかったこと:
-
-

基本情報で出そうなポイント:
-
-
```

---

## ✅ チェックリスト

- [ ] 外部キー制約を理解した
- [ ] FOREIGN KEY, REFERENCES の書き方を覚えた
- [ ] CASCADE制約の動作を確認した
- [ ] INNER JOIN と LEFT JOIN を使い分けられる
- [ ] 総合演習を全て解いた

---

**Phase 3完了！次は `04_STORED_PROCEDURE.md` でストアドプロシージャを学びましょう。【基本情報対策】**
