# SQL実践学習 - マッチングアプリケーションで学ぶデータベース設計

## 🎯 学習目標

1. SQLの基本操作（SELECT, INSERT, UPDATE, DELETE）を実践的に習得
2. リレーショナルデータベースの設計原則を理解
3. 基本情報技術者試験のデータベース分野をカバー
4. 実務で使える技術スキルを身につける

---

## 📚 この教材で学べる技術

### 基本編
- **DDL（Data Definition Language）**: CREATE, ALTER, DROP
- **DML（Data Manipulation Language）**: SELECT, INSERT, UPDATE, DELETE
- **主キー制約（PRIMARY KEY）**: データの一意性保証
- **NOT NULL制約**: データの必須化

### 応用編
- **外部キー制約（FOREIGN KEY）**: テーブル間の参照整合性
- **REFERENCES句**: 参照先テーブルの指定
- **CASCADE制約**: 連鎖削除・更新
- **トランザクション**: COMMIT, ROLLBACK
- **ストアドプロシージャ**: 処理の再利用
- **JOIN操作**: 複数テーブルの結合

### 基本情報技術者試験 対策キーワード

✅ **正規化（第1〜第3正規形）**
✅ **参照制約（FOREIGN KEY, REFERENCES）**
✅ **トランザクション管理（ACID特性）**
✅ **ストアドプロシージャ**
✅ **集計関数（COUNT, SUM, AVG, MAX, MIN）**
✅ **内部結合・外部結合（INNER JOIN, LEFT JOIN）**
✅ **GROUP BY / HAVING句**

---

## 💡 プロジェクト概要：マッチングアプリケーション

### システム構成

```
┌─────────────────────────────────────┐
│   マッチングアプリ管理システム      │
├─────────────────────────────────────┤
│                                     │
│  [users]           ユーザー管理     │
│     ↓ 1:N                           │
│  [matches]         マッチング履歴   │
│     ↓ 1:N                           │
│  [messages]        メッセージ       │
│                                     │
└─────────────────────────────────────┘
```

### データベース設計

- **users**: ユーザー基本情報
- **matches**: マッチング履歴（外部キーでusersを参照）
- **messages**: メッセージ履歴（外部キーでmatchesを参照）

### 実装する機能

1. ユーザー管理（CRUD操作）
2. 条件検索（年齢、性別、地域など）
3. マッチング機能（外部キー制約）
4. 統計情報（ストアドプロシージャ）
5. データ整合性の保証（参照制約）

---

## 📅 学習記録

| 日付 | 学習内容 | 所要時間 | 習得スキル |
|------|---------|---------|-----------|
| 例: 2025-11-29 | 環境構築〜基本SQL | 1時間 | Docker, SELECT, INSERT |
|  |  |  |  |
|  |  |  |  |

---

## 📋 学習ロードマップ

```
Phase 1: 環境構築・基本操作（1〜2時間）
   ├─ Docker環境のセットアップ
   ├─ テーブル設計・作成
   └─ 基本的なCRUD操作

Phase 2: データ操作・検索（2〜3時間）
   ├─ WHERE句での条件抽出
   ├─ ORDER BY, LIMIT
   ├─ 集計関数
   └─ GROUP BY / HAVING

Phase 3: リレーショナル設計（2〜3時間）
   ├─ 外部キー制約の実装
   ├─ REFERENCES句の理解
   ├─ CASCADE制約
   └─ JOIN操作

Phase 4: 高度な機能（2〜3時間）
   ├─ ストアドプロシージャ
   ├─ トランザクション管理
   └─ サブクエリ
```

---

## ⚙️ Phase 1: 環境構築

### ステップ1: Dockerのインストール確認

```bash
docker --version
```

出力例：
```
Docker version 24.0.0, build xxxxx
```

**Dockerとは？**

コンテナ型仮想化技術。アプリケーションとその実行環境を1つのパッケージとして管理できる。

**メリット**:
- 環境の再現性が高い
- ローカル環境を汚さない
- 簡単にクリーンアップ可能

### ステップ2: データベースコンテナの起動

```bash
cd /Users/rin5uron/Desktop/study_web2/practice/db
docker compose up -d
```

**起動されるサービス**:
- MySQL 8.0（データベース本体）
- phpMyAdmin（Web管理ツール）

### ステップ3: 起動確認

```bash
docker compose ps
```

期待される出力：
```
NAME                 STATUS
study_mysql          Up
study_phpmyadmin     Up
```

### ステップ4: 管理画面へアクセス

ブラウザで以下にアクセス：
```
http://localhost:8080
```

phpMyAdmin管理画面が表示されればOK。

---

## 💻 Phase 1: テーブル設計・作成

### データベース設計の基本原則

1. **正規化**: データの重複を排除
2. **主キー**: 各レコードを一意に識別
3. **外部キー**: テーブル間の関連を定義
4. **制約**: データの整合性を保証

### usersテーブルの作成

phpMyAdminのSQLタブで実行：

```sql
-- ユーザーテーブル
-- 基本情報用語: PRIMARY KEY（主キー）、NOT NULL制約
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ユーザーID（主キー）',
    name VARCHAR(100) NOT NULL COMMENT 'ユーザー名',
    email VARCHAR(255) UNIQUE NOT NULL COMMENT 'メールアドレス',
    gender ENUM('male', 'female', 'other') NOT NULL COMMENT '性別',
    age INT NOT NULL COMMENT '年齢',
    prefecture VARCHAR(50) COMMENT '都道府県',
    bio TEXT COMMENT '自己紹介',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '登録日時',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',

    -- インデックス
    INDEX idx_gender_age (gender, age),
    INDEX idx_prefecture (prefecture)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ユーザー情報';
```

**ポイント**:
- `AUTO_INCREMENT`: 主キーを自動採番
- `UNIQUE`: 重複を許可しない（メールアドレス）
- `ENUM`: 選択肢を限定（性別）
- `INDEX`: 検索パフォーマンス向上

### サンプルデータの投入

```sql
INSERT INTO users (name, email, gender, age, prefecture, bio) VALUES
    ('田中太郎', 'tanaka@example.com', 'male', 28, '東京都', 'ITエンジニアです'),
    ('佐藤花子', 'sato@example.com', 'female', 25, '神奈川県', 'デザイナーをしています'),
    ('鈴木一郎', 'suzuki@example.com', 'male', 32, '大阪府', '趣味はランニング'),
    ('高橋美咲', 'takahashi@example.com', 'female', 27, '東京都', '旅行が好きです'),
    ('伊藤健太', 'ito@example.com', 'male', 30, '福岡県', '料理が得意です');
```

### データの確認

```sql
SELECT * FROM users;
```

---

## 📚 基本的なSQL操作

### 1. SELECT（データの取得）

```sql
-- 全件取得
SELECT * FROM users;

-- 特定カラムのみ取得
SELECT name, age FROM users;

-- 条件付き取得
SELECT * FROM users WHERE age >= 25;

-- 複数条件（AND, OR）
SELECT * FROM users WHERE gender = 'male' AND age BETWEEN 25 AND 30;
```

### 2. INSERT（データの追加）

```sql
INSERT INTO users (name, email, gender, age, prefecture)
VALUES ('山田太郎', 'yamada@example.com', 'male', 26, '東京都');
```

### 3. UPDATE（データの更新）

```sql
UPDATE users
SET bio = 'カメラが趣味です'
WHERE id = 1;
```

⚠️ **重要**: WHERE句を忘れると全レコードが更新されます

### 4. DELETE（データの削除）

```sql
DELETE FROM users WHERE id = 5;
```

⚠️ **重要**: WHERE句を忘れると全レコードが削除されます

---

## 🚀 次のステップ

Phase 1が完了したら、次のファイルに進んでください：

1. **`01_BASIC_SQL.md`** - SELECT文の詳細（WHERE, ORDER BY, LIMIT, LIKE）
2. **`02_PRACTICAL_SQL.md`** - 実践的なデータ操作（集計、グループ化）
3. **`03_FOREIGN_KEY.md`** - 外部キー制約とテーブル結合【基本情報対策】
4. **`04_STORED_PROCEDURE.md`** - ストアドプロシージャ【基本情報対策】

---

## 💡 実務Tips

### セキュリティ

- パスワードは必ずハッシュ化（bcrypt推奨）
- SQLインジェクション対策（プリペアドステートメント使用）
- 個人情報の取り扱いに注意

### パフォーマンス

- 頻繁に検索するカラムにはINDEXを作成
- SELECT *は避け、必要なカラムのみ指定
- EXPLAINで実行計画を確認

### 保守性

- テーブル・カラムにCOMMENTを付ける
- 命名規則を統一（例: snake_case）
- マイグレーションでバージョン管理

---

## ❓ トラブルシューティング

### Docker関連

```bash
# コンテナの状態確認
docker compose ps

# ログ確認
docker compose logs mysql

# 再起動
docker compose restart

# 完全にクリーンアップ
docker compose down -v
```

### MySQL関連

```sql
-- テーブル一覧の確認
SHOW TABLES;

-- テーブル構造の確認
DESC users;

-- テーブルの削除
DROP TABLE users;
```

---

## 📝 学習メモ

```
日付: ____年____月____日

理解したこと:
-
-

疑問点:
-
-

次回の目標:
-
-
```

---

## 🎓 この教材の位置づけ

**学習者向け**: SQL初心者からポートフォリオ作成まで対応
**技術レベル**: 基本情報技術者試験レベル
**実務適用**: マッチングサービス、SNS、ECサイトなどに応用可能

---

**準備ができたら、Phase 1から順に進めてください。**
