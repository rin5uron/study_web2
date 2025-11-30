# Phase 2: SELECT文を極める - データ検索の基礎

## 📅 実践日: ____年____月____日

---

## 🎯 学習目標

1. WHERE句による条件抽出を理解する
2. ORDER BY, LIMITでデータを並べ替え・制限する
3. LIKE句であいまい検索を実装する
4. 複数条件（AND, OR, IN）を使いこなす

**基本情報対策**: SELECT文は最も頻出。この章で完璧にマスターする。

---

## 準備: 練習用データの作成

前章で作成した `users` テーブルにさらにデータを追加します。

```sql
-- 練習用ユーザーを追加
INSERT INTO users (name, email, gender, age, prefecture, bio) VALUES
    ('中村由美', 'nakamura@example.com', 'female', 23, '東京都', 'カフェ巡りが趣味'),
    ('小林誠', 'kobayashi@example.com', 'male', 35, '愛知県', 'スポーツ観戦が好き'),
    ('加藤麻衣', 'kato@example.com', 'female', 29, '神奈川県', '読書が趣味です'),
    ('渡辺健', 'watanabe@example.com', 'male', 31, '東京都', '音楽フェス好き'),
    ('山本さくら', 'yamamoto@example.com', 'female', 26, '大阪府', '旅行とグルメ'),
    ('松本拓也', 'matsumoto@example.com', 'male', 27, '福岡県', 'アウトドア派'),
    ('井上美優', 'inoue@example.com', 'female', 24, '神奈川県', 'ヨガインストラクター'),
    ('木村翔', 'kimura@example.com', 'male', 33, '東京都', 'フリーランスエンジニア');
```

---

## 📚 レッスン1: 基本のSELECT

### 例1: 全データを取得

```sql
SELECT * FROM users;
```

**実務では非推奨**: `SELECT *` はパフォーマンスに影響。必要なカラムのみ指定する。

### 例2: 特定のカラムのみ取得（推奨）

```sql
SELECT id, name, age, prefecture FROM users;
```

### 例3: 別名（エイリアス）を付ける

```sql
SELECT
    name AS ユーザー名,
    age AS 年齢,
    prefecture AS 居住地
FROM users;
```

**基本情報用語**: AS句によるカラムの別名指定

### 練習問題1

名前、性別、自己紹介のみを表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT name, gender, bio FROM users;
```
</details>

---

## 📚 レッスン2: WHERE句による条件抽出

### 例4: 特定の年齢以上のユーザー

```sql
SELECT * FROM users WHERE age >= 30;
```

### 例5: 特定の都道府県に住むユーザー

```sql
SELECT * FROM users WHERE prefecture = '東京都';
```

### 例6: 範囲指定（BETWEEN）

```sql
SELECT name, age FROM users
WHERE age BETWEEN 25 AND 30;
```

**基本情報用語**: BETWEEN演算子（範囲検索）

### 例7: 複数の値に一致（IN）

```sql
SELECT * FROM users
WHERE prefecture IN ('東京都', '神奈川県', '大阪府');
```

### 練習問題2

25歳未満の女性ユーザーを表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT * FROM users
WHERE age < 25 AND gender = 'female';
```
</details>

---

## 📚 レッスン3: 並び替え（ORDER BY）

### 例8: 年齢の若い順

```sql
SELECT name, age FROM users
ORDER BY age ASC;
```

**ASC**: 昇順（Ascending）
**DESC**: 降順（Descending）

### 例9: 年齢の高い順

```sql
SELECT name, age FROM users
ORDER BY age DESC;
```

### 例10: 複数カラムでソート

```sql
SELECT name, prefecture, age FROM users
ORDER BY prefecture ASC, age DESC;
```

**ポイント**: 都道府県で昇順、同じ都道府県内では年齢で降順

### 練習問題3

東京都在住のユーザーを年齢の若い順に表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT * FROM users
WHERE prefecture = '東京都'
ORDER BY age ASC;
```
</details>

---

## 📚 レッスン4: 件数制限（LIMIT）

### 例11: 最も若いユーザーTOP3

```sql
SELECT name, age FROM users
ORDER BY age ASC
LIMIT 3;
```

**基本情報用語**: LIMIT句によるレコード数の制限

### 例12: オフセット付きLIMIT

```sql
SELECT name, age FROM users
ORDER BY age ASC
LIMIT 3 OFFSET 3;
```

**ポイント**: 3件スキップして、その後3件取得（ページネーション実装に使用）

### 練習問題4

年齢が高いユーザーTOP5を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT name, age FROM users
ORDER BY age DESC
LIMIT 5;
```
</details>

---

## 📚 レッスン5: 複数条件（AND, OR）

### 例13: 東京都在住の25〜30歳のユーザー

```sql
SELECT name, age, prefecture FROM users
WHERE prefecture = '東京都'
  AND age BETWEEN 25 AND 30;
```

### 例14: 東京都または神奈川県のユーザー

```sql
SELECT name, prefecture FROM users
WHERE prefecture = '東京都'
   OR prefecture = '神奈川県';
```

**より良い書き方**:
```sql
SELECT name, prefecture FROM users
WHERE prefecture IN ('東京都', '神奈川県');
```

### 例15: 複雑な条件（括弧で優先順位を明示）

```sql
SELECT name, gender, age, prefecture FROM users
WHERE (prefecture = '東京都' OR prefecture = '神奈川県')
  AND gender = 'female'
  AND age >= 25;
```

### 練習問題5

30歳以上の男性、または25歳未満の女性を表示してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT * FROM users
WHERE (gender = 'male' AND age >= 30)
   OR (gender = 'female' AND age < 25);
```
</details>

---

## 📚 レッスン6: あいまい検索（LIKE）

### 例16: 名前に「田」が含まれるユーザー

```sql
SELECT name FROM users
WHERE name LIKE '%田%';
```

**ワイルドカード**:
- `%`: 0文字以上の任意の文字列
- `_`: 1文字の任意の文字

### 例17: 「〜太郎」で終わる名前

```sql
SELECT name FROM users
WHERE name LIKE '%太郎';
```

### 例18: 名前が4文字のユーザー

```sql
SELECT name FROM users
WHERE name LIKE '____';  -- アンダースコア4個
```

### 例19: 自己紹介に「趣味」が含まれるユーザー

```sql
SELECT name, bio FROM users
WHERE bio LIKE '%趣味%';
```

**基本情報用語**: LIKE演算子（パターンマッチング）

### 練習問題6

メールアドレスがGmailのユーザーを探してください。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT name, email FROM users
WHERE email LIKE '%@gmail.com';
```
</details>

---

## 📚 レッスン7: NULL値の扱い

### 例20: 自己紹介が未入力のユーザー

```sql
SELECT name FROM users
WHERE bio IS NULL;
```

**重要**: `WHERE bio = NULL` は動かない！必ず `IS NULL` を使う。

### 例21: 自己紹介が入力済みのユーザー

```sql
SELECT name, bio FROM users
WHERE bio IS NOT NULL;
```

---

## 🎓 総合演習

実務を想定した検索クエリを作成してください。

### 問1: マッチング候補の検索

東京都または神奈川県在住の、25〜35歳の女性ユーザーを、年齢の若い順に5名表示。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT name, age, prefecture FROM users
WHERE prefecture IN ('東京都', '神奈川県')
  AND gender = 'female'
  AND age BETWEEN 25 AND 35
ORDER BY age ASC
LIMIT 5;
```
</details>

### 問2: おすすめユーザーの抽出

自己紹介に「旅行」または「カフェ」が含まれるユーザーを名前順に表示。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT name, bio FROM users
WHERE bio LIKE '%旅行%'
   OR bio LIKE '%カフェ%'
ORDER BY name ASC;
```
</details>

### 問3: アクティブユーザーの分析

最近登録した（created_atが新しい）ユーザーTOP10を表示。

```sql
-- ここに書く


```

<details>
<summary>解答例</summary>

```sql
SELECT name, created_at FROM users
ORDER BY created_at DESC
LIMIT 10;
```
</details>

---

## 💡 実務Tips

### パフォーマンスを考慮したクエリ

```sql
-- ❌ 悪い例: SELECT *
SELECT * FROM users WHERE age > 25;

-- ✅ 良い例: 必要なカラムのみ
SELECT id, name, age FROM users WHERE age > 25;
```

### インデックスを活用

```sql
-- WHERE句でよく使うカラムにはインデックスを作成
CREATE INDEX idx_age ON users(age);
CREATE INDEX idx_prefecture ON users(prefecture);

-- 実行計画の確認
EXPLAIN SELECT * FROM users WHERE age > 25;
```

**基本情報用語**: インデックス（索引）によるクエリ高速化

### 安全な検索

```sql
-- LIKE検索はパフォーマンスに注意
-- 前方一致なら速い
SELECT * FROM users WHERE name LIKE '田中%';

-- 中間一致は遅い（インデックスが効かない）
SELECT * FROM users WHERE name LIKE '%田中%';
```

---

## 📝 学習メモ

```
理解できたこと:
-
-

難しかったこと:
-
-

実務で使えそうなこと:
-
-
```

---

## ✅ チェックリスト

- [ ] WHERE句で条件抽出できる
- [ ] ORDER BYで並び替えできる
- [ ] LIMITで件数制限できる
- [ ] LIKE句であいまい検索できる
- [ ] AND, ORで複数条件を組み合わせられる
- [ ] 総合演習を全て解いた

---

**Phase 2完了！次は `02_PRACTICAL_SQL.md` で集計とグループ化を学びましょう。**
