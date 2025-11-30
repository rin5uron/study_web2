# Phase 4: ストアドプロシージャ - 処理の再利用と高速化

## 📅 実践日: ____年____月____日

---

## 🎯 学習目標

1. **ストアドプロシージャ**の概念を理解する
2. プロシージャの作成・実行・削除ができる
3. 引数（パラメータ）を使いこなす
4. 実務での活用方法を学ぶ

**基本情報対策**: ストアドプロシージャは頻出。定義と利点を理解する。

---

## 📚 ストアドプロシージャとは？

### 定義

**ストアドプロシージャ**: 一連のSQL文をまとめて保存し、名前を付けて呼び出せる仕組み

**メリット**:
1. **処理の再利用**: 同じ処理を何度も書かなくて良い
2. **パフォーマンス向上**: 事前にコンパイルされるため高速
3. **セキュリティ**: SQL文を隠蔽できる
4. **保守性向上**: 処理を一箇所で管理

### 実例

```sql
-- ❌ 毎回書くのは面倒
SELECT COUNT(*) FROM matches WHERE user_id = 1 AND status = 'accepted';
SELECT COUNT(*) FROM matches WHERE user_id = 2 AND status = 'accepted';
SELECT COUNT(*) FROM matches WHERE user_id = 3 AND status = 'accepted';

-- ✅ プロシージャを作って再利用
CALL GetUserMatchCount(1);  -- 1行で呼び出せる
CALL GetUserMatchCount(2);
CALL GetUserMatchCount(3);
```

---

## 📚 レッスン1: 最初のストアドプロシージャ

### 基本構文

```sql
DELIMITER $$

CREATE PROCEDURE プロシージャ名()
BEGIN
    -- ここに処理を書く
END$$

DELIMITER ;
```

**DELIMITER**: SQL文の区切り文字を変更（プロシージャ内でセミコロンを使うため）

### 例1: 全ユーザー数を表示

```sql
DELIMITER $$

CREATE PROCEDURE GetTotalUsers()
BEGIN
    SELECT COUNT(*) AS total_users FROM users;
END$$

DELIMITER ;
```

### 実行方法

```sql
CALL GetTotalUsers();
```

### 削除方法

```sql
DROP PROCEDURE IF EXISTS GetTotalUsers;
```

### 練習問題1

全マッチング数を表示するプロシージャ `GetTotalMatches` を作成してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
DELIMITER $$

CREATE PROCEDURE GetTotalMatches()
BEGIN
    SELECT COUNT(*) AS total_matches FROM matches;
END$$

DELIMITER ;

-- 実行
CALL GetTotalMatches();
```
</details>

---

## 📚 レッスン2: 引数（パラメータ）を使う

### IN パラメータ（入力）

```sql
DELIMITER $$

CREATE PROCEDURE GetUserMatchCount(IN user_id_param INT)
BEGIN
    SELECT
        u.name,
        COUNT(m.id) AS match_count
    FROM users AS u
    LEFT JOIN matches AS m ON u.id = m.user_id
    WHERE u.id = user_id_param
    GROUP BY u.id, u.name;
END$$

DELIMITER ;
```

### 実行

```sql
CALL GetUserMatchCount(1);  -- user_id=1 のマッチング数
CALL GetUserMatchCount(2);  -- user_id=2 のマッチング数
```

### 複数パラメータ

```sql
DELIMITER $$

CREATE PROCEDURE GetMatchesByStatus(
    IN user_id_param INT,
    IN status_param VARCHAR(20)
)
BEGIN
    SELECT
        m.id,
        u1.name AS user_name,
        u2.name AS partner_name,
        m.status,
        m.matched_at
    FROM matches AS m
    INNER JOIN users AS u1 ON m.user_id = u1.id
    INNER JOIN users AS u2 ON m.partner_id = u2.id
    WHERE m.user_id = user_id_param
      AND m.status = status_param;
END$$

DELIMITER ;
```

### 実行

```sql
CALL GetMatchesByStatus(1, 'accepted');
```

---

## 📚 レッスン3: OUT パラメータ（出力）

### OUT パラメータの使い方

```sql
DELIMITER $$

CREATE PROCEDURE CountAcceptedMatches(
    IN user_id_param INT,
    OUT match_count INT
)
BEGIN
    SELECT COUNT(*) INTO match_count
    FROM matches
    WHERE user_id = user_id_param
      AND status = 'accepted';
END$$

DELIMITER ;
```

### 実行と結果の取得

```sql
-- 変数を用意
SET @count = 0;

-- プロシージャ実行
CALL CountAcceptedMatches(1, @count);

-- 結果を確認
SELECT @count AS accepted_matches;
```

---

## 📚 レッスン4: 実践的なプロシージャ

### 例: 人気ユーザーランキング

```sql
DELIMITER $$

CREATE PROCEDURE GetPopularUsers(IN limit_count INT)
BEGIN
    SELECT
        u.id,
        u.name,
        u.age,
        u.prefecture,
        COUNT(m.id) AS match_count
    FROM users AS u
    INNER JOIN matches AS m ON u.id = m.user_id
    WHERE m.status = 'accepted'
    GROUP BY u.id, u.name, u.age, u.prefecture
    ORDER BY match_count DESC
    LIMIT limit_count;
END$$

DELIMITER ;
```

### 実行

```sql
CALL GetPopularUsers(5);  -- TOP5
CALL GetPopularUsers(10); -- TOP10
```

### 例: マッチング成功率の計算

```sql
DELIMITER $$

CREATE PROCEDURE GetMatchSuccessRate()
BEGIN
    SELECT
        status,
        COUNT(*) AS count,
        ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM matches), 2) AS percentage
    FROM matches
    GROUP BY status
    ORDER BY count DESC;
END$$

DELIMITER ;
```

### 練習問題2

特定の都道府県のユーザーを表示するプロシージャを作成してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
DELIMITER $$

CREATE PROCEDURE GetUsersByPrefecture(IN prefecture_param VARCHAR(50))
BEGIN
    SELECT
        id,
        name,
        age,
        email
    FROM users
    WHERE prefecture = prefecture_param
    ORDER BY age ASC;
END$$

DELIMITER ;

-- 実行
CALL GetUsersByPrefecture('東京都');
```
</details>

---

## 📚 レッスン5: 条件分岐とループ

### IF文（条件分岐）

```sql
DELIMITER $$

CREATE PROCEDURE GetUserCategory(IN age_param INT)
BEGIN
    DECLARE category VARCHAR(20);

    IF age_param < 25 THEN
        SET category = '若年層';
    ELSEIF age_param < 35 THEN
        SET category = '中年層';
    ELSE
        SET category = 'シニア層';
    END IF;

    SELECT category AS age_category;
END$$

DELIMITER ;
```

### WHILE文（ループ）

```sql
DELIMITER $$

CREATE PROCEDURE GenerateNumbers(IN max_num INT)
BEGIN
    DECLARE counter INT DEFAULT 1;

    DROP TEMPORARY TABLE IF EXISTS temp_numbers;
    CREATE TEMPORARY TABLE temp_numbers (num INT);

    WHILE counter <= max_num DO
        INSERT INTO temp_numbers VALUES (counter);
        SET counter = counter + 1;
    END WHILE;

    SELECT * FROM temp_numbers;
END$$

DELIMITER ;
```

---

## 🎓 総合演習

### 演習1: アクティブユーザー判定

最近30日以内にマッチングしたユーザーを「アクティブ」、それ以外を「非アクティブ」として表示するプロシージャを作成してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
DELIMITER $$

CREATE PROCEDURE GetUserActivity()
BEGIN
    SELECT
        u.id,
        u.name,
        MAX(m.matched_at) AS last_match_date,
        CASE
            WHEN MAX(m.matched_at) >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 'アクティブ'
            ELSE '非アクティブ'
        END AS activity_status
    FROM users AS u
    LEFT JOIN matches AS m ON u.id = m.user_id
    GROUP BY u.id, u.name
    ORDER BY last_match_date DESC;
END$$

DELIMITER ;

-- 実行
CALL GetUserActivity();
```
</details>

### 演習2: マッチング統計レポート

ユーザーID を指定して、そのユーザーの詳細な統計情報を表示するプロシージャを作成してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
DELIMITER $$

CREATE PROCEDURE GetUserMatchStats(IN user_id_param INT)
BEGIN
    SELECT
        u.name,
        u.age,
        u.prefecture,
        COUNT(m.id) AS total_matches,
        SUM(CASE WHEN m.status = 'accepted' THEN 1 ELSE 0 END) AS accepted_count,
        SUM(CASE WHEN m.status = 'pending' THEN 1 ELSE 0 END) AS pending_count,
        SUM(CASE WHEN m.status = 'rejected' THEN 1 ELSE 0 END) AS rejected_count,
        ROUND(
            SUM(CASE WHEN m.status = 'accepted' THEN 1 ELSE 0 END) * 100.0 / COUNT(m.id),
            2
        ) AS success_rate
    FROM users AS u
    LEFT JOIN matches AS m ON u.id = m.user_id
    WHERE u.id = user_id_param
    GROUP BY u.id, u.name, u.age, u.prefecture;
END$$

DELIMITER ;

-- 実行
CALL GetUserMatchStats(1);
```
</details>

---

## 💡 実務Tips

### プロシージャの管理

```sql
-- プロシージャ一覧の確認
SHOW PROCEDURE STATUS WHERE Db = 'practice_db';

-- プロシージャの定義を確認
SHOW CREATE PROCEDURE GetUserMatchCount;

-- 全プロシージャを削除（注意！）
DROP PROCEDURE IF EXISTS GetUserMatchCount;
DROP PROCEDURE IF EXISTS GetMatchesByStatus;
```

### エラーハンドリング

```sql
DELIMITER $$

CREATE PROCEDURE SafeGetUser(IN user_id_param INT)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        SELECT 'エラーが発生しました' AS error_message;
    END;

    SELECT * FROM users WHERE id = user_id_param;
END$$

DELIMITER ;
```

### パフォーマンスの注意点

```sql
-- ✅ 良い例: 必要なカラムのみ取得
CREATE PROCEDURE GetUsers()
BEGIN
    SELECT id, name, age FROM users;
END;

-- ❌ 悪い例: SELECT *
CREATE PROCEDURE GetUsersAll()
BEGIN
    SELECT * FROM users;
END;
```

---

## 📝 基本情報対策まとめ

### 重要用語

✅ **ストアドプロシージャ**: SQL文をまとめて名前を付けて保存
✅ **パラメータ**: プロシージャに渡す値
  - **IN**: 入力パラメータ
  - **OUT**: 出力パラメータ
  - **INOUT**: 入出力パラメータ
✅ **DELIMITER**: 区切り文字の変更
✅ **CALL**: プロシージャの実行

### メリット

1. **処理の再利用**: 同じ処理を何度も書かない
2. **パフォーマンス**: 事前コンパイルで高速
3. **セキュリティ**: SQL文を隠蔽
4. **保守性**: 一箇所で管理

### よくある試験問題

1. ストアドプロシージャの定義
2. INパラメータとOUTパラメータの違い
3. ストアドプロシージャの利点
4. DELIMITERの役割

---

## 📝 学習メモ

```
理解できたこと:
-
-

実務で使えそうなこと:
-
-

基本情報で出そうなポイント:
-
-
```

---

## ✅ チェックリスト

- [ ] ストアドプロシージャを作成できる
- [ ] INパラメータを使える
- [ ] OUTパラメータを使える
- [ ] 実践的なプロシージャを作成できる
- [ ] 総合演習を全て解いた

---

## 🎉 全Phase完了！

おめでとうございます！これで以下をマスターしました：

✅ **Phase 1**: Docker環境構築、基本SQL
✅ **Phase 2**: SELECT文、集計、グループ化
✅ **Phase 2**: INSERT/UPDATE/DELETE、トランザクション
✅ **Phase 3**: 外部キー制約、JOIN
✅ **Phase 4**: ストアドプロシージャ

### 次のステップ

1. **実務での活用**: 学んだ技術を実際のプロジェクトで使う
2. **基本情報試験対策**: 過去問で復習
3. **発展学習**: ビュー、トリガー、パーティショニング
4. **ポートフォリオ**: GitHubに公開して就活に活用

**あなたはもうSQLの基礎を完璧にマスターしています！** 🚀
