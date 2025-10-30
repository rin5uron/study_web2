# SQL超初級編 - 今日から始める実践SQL

## 🎯 この教材のゴール

1. SQLを叩いて結果が返ってくる体験をする
2. 基本的なSQL（SELECT, INSERT, UPDATE, DELETE）を覚える
3. 実務で使えるレベルの基礎を身につける

---

## 📅 実践記録

| 日付 | やったこと | 所要時間 | メモ |
|------|-----------|---------|------|
| 例: 2025-10-30 | ステップ1〜3完了 | 50分 | 環境構築に手間取った |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

---

## 📋 学習の流れ（全体像）

```
ステップ1: 環境構築（15分）
   ↓
ステップ2: データベースを見てみる（5分）
   ↓
ステップ3: SQLを叩いてみる（30分）
   ↓
ステップ4: 基本操作を練習（1時間）
   ↓
ステップ5: 実務に近い練習（1時間）
```

**今日やること: ステップ1〜3（50分で完結）**

---

## ⚙️ ステップ1: 環境構築（15分）

### 1-1. Dockerが入っているか確認

ターミナルを開いて以下を実行:

```bash
docker --version
```

バージョンが表示されればOK！（例: Docker version 28.4.0）

もし「command not found」と出たら:
1. https://www.docker.com/products/docker-desktop/ を開く
2. 「Download for Mac」をクリック
3. ダウンロード → インストール → 起動
4. 画面上部のメニューバーにクジラアイコンが出ればOK

### 1-2. Dockerって何?（超簡単説明）

**Docker = アプリを箱に入れて動かす仕組み**

例え話:
- 普通: PCに直接MySQLをインストール → PCが汚れる、設定が面倒
- Docker: 箱の中でMySQLを動かす → PCはクリーンなまま、簡単に消せる

**この教材で使うDocker:**

```
┌─────────────────────────────┐
│  あなたのPC                  │
│                             │
│  ┌─────────┐  ┌──────────┐ │
│  │ 箱1     │  │ 箱2      │ │
│  │ MySQL   │  │ 管理画面  │ │
│  │ (DB本体)│  │ (見るやつ)│ │
│  └─────────┘  └──────────┘ │
│                             │
│  ↑ これをコマンド1つで起動! │
└─────────────────────────────┘
```

**箱1 (MySQL)**: データを保存する場所
**箱2 (管理画面)**: ブラウザでデータを見る・編集する画面

#### なぜDockerが便利？

- ✅ コマンド1つで準備完了（面倒な設定なし）
- ✅ PCに直接インストールしないから安全
- ✅ 失敗しても簡単にやり直せる
- ✅ 終わったら全部消せる（PCがキレイなまま）

### 1-3. データベースを起動（やることは2つだけ!）

#### ① この場所に移動

ターミナルで実行:

```bash
cd /Users/rin5uron/Desktop/study_web2/practice/db
```

#### ② 起動コマンドを実行

```bash
docker compose up -d
```

**初回は3〜5分かかります**（箱をダウンロードするため。2回目以降は10秒で起動）

✅ 「✔ Container study_mysql Started」と出たら成功！

---

#### 🔍 ちゃんと動いてるか確認

```bash
docker compose ps
```

こう表示されたらOK:
```
NAME                 STATUS
study_mysql          Up
study_phpmyadmin     Up
```

---

#### 📝 覚えておくと便利なコマンド（今は読み飛ばしてOK）

```bash
# 起動
docker compose up -d

# 停止（データは消えない）
docker compose stop

# 完全に削除（データも全部消える）
docker compose down -v
```

**今日はこれだけ覚えればOK: 起動は `docker compose up -d`**

---

## 👀 ステップ2: データベースを見てみる（5分）

### 2-1. ブラウザで管理画面を開く

1. ブラウザで `http://localhost:8080` を開く
2. phpMyAdminという画面が表示される
3. 左側に「practice_db」が見える

### 2-2. 中を覗いてみる

- 左側の「practice_db」をクリック
- 今は何もテーブルがない状態（これから作ります）

---

## 💻 ステップ3: 最初のSQLを叩く（30分）

### 3-1. テーブルを作る

phpMyAdminの上部「SQL」タブをクリックして、以下をコピペして実行:

```sql
-- ユーザーテーブルを作成
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**実行ボタン**（右下の「実行」）をクリック！

✅ 成功したら「テーブル users を作成しました」と表示されます

### 3-2. データを入れる

続けて以下を実行:

```sql
-- データを追加
INSERT INTO users (name, email, age) VALUES
    ('田中太郎', 'tanaka@example.com', 25),
    ('佐藤花子', 'sato@example.com', 30),
    ('鈴木一郎', 'suzuki@example.com', 28);
```

✅ 「3行挿入されました」と表示されます

### 3-3. データを見る

```sql
-- 全データを取得
SELECT * FROM users;
```

✅ 3人のユーザーが表示されます！

**🎉 おめでとうございます！これがSQLの基本です！**

---

## 📚 ここまでで覚えた3つのSQL

### 1. CREATE TABLE（テーブルを作る）
```sql
CREATE TABLE テーブル名 (
    カラム名 型,
    ...
);
```

### 2. INSERT（データを追加）
```sql
INSERT INTO テーブル名 (カラム1, カラム2) VALUES (値1, 値2);
```

### 3. SELECT（データを見る）
```sql
SELECT * FROM テーブル名;
```

---

## 🚀 次にやること

ステップ3までできたら、次のファイルを開いてください:

👉 **`01_BASIC_SQL.md`** - 基本的なSQLの練習
👉 **`02_PRACTICAL_SQL.md`** - 実務に近い練習問題

---

## ❓ よくあるエラーと対処法

### エラー1: docker-compose コマンドが見つからない
→ Docker Desktopがインストールされていない、または起動していない

### エラー2: ポートが使えない
→ 既に他のMySQLが動いている可能性
```bash

docker-compose down
docker-compose up -d
```

### エラー3: ブラウザで開けない
→ 起動を確認
```bash
docker-compose ps
# Status が "Up" になっているか確認
```

### エラー4: Table already exists
→ 既にテーブルがある。削除してから再実行:
```sql
DROP TABLE users;
-- その後、CREATE TABLEを再実行
```

---

## 💡 Tips

- SQLは大文字・小文字を区別しない（`SELECT` も `select` も同じ）
- 慣習として、**SQLキーワードは大文字**、**テーブル名・カラム名は小文字**で書く
- 文末のセミコロン `;` を忘れずに
- phpMyAdminなら複数のSQL文を一度に実行できる

---

## 📝 今日の学習メモ

```
日付: ____年____月____日

学んだこと:
-
-
-

疑問点:
-
-
-

次回やりたいこと:
-
-
-
```

---

**準備ができたら、このファイルの指示通りにステップ1から始めてください！**
