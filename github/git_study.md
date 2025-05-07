# GitHubへのpush失敗記録と学びメモ（2025/05/06）

## 🕓 状況概要

- **目的**：ローカルのプロジェクト（counterapp-collection）をGitHubにpushしたい  
- **環境**：MacBook + Cursor + ターミナル使用（途中からGitHub Desktopも試した）  
- **かかった時間**：3時間以上  
- **最終的に失敗（pushできず）**

---

## ❌ 発生した主なエラーと考えられる原因

### ❗ `fatal: Authentication failed for ...`
- **原因**：
  - GitHubがパスワード認証を廃止している（2021年から）
  - トークン認証を使う必要がある（Personal Access Token = PAT）

---

### ❗ `error: RPC failed; curl 22 The requested URL returned error: 400`
- **原因**：
  - URLにトークンを埋め込む形式が間違っていた（バックスラッシュなど）
  - リモートURLの設定が正しく上書きできていなかった
  - トークンに正しい権限（Repository → Contents: Read and Write）が付与されていなかった
  - pushしようとしているブランチとGitHubの設定にずれがあった

---

### ❗ GitHub Desktopに反映されない・探しても出てこない
- **原因**：
  - ローカルにリポジトリがあるだけではGitHub Desktopに自動表示されない
  - 明示的に「Add local repository」する必要がある
  - GitHub DesktopはGitHub本体と完全に同期しているわけではない（リポジトリを“見る”だけ）

---

## 🧠 今回の学び・気づき

### ▶ 「Gitは本来コマンドで動くツール」  
GUI（GitHub Desktopなど）はあくまで補助。  
裏で動いているのは全部コマンド（CLI）。  
→ だから最終的にはターミナル操作ができないと詰む。

---

### ▶ GUIでの操作もトラブったら結局ターミナルでやるしかない  
「簡単に見えるけど、なぜかうまくいかない」のがGUIの落とし穴。  
→ 原因を突き止めるには`git remote -v`や`git status`などCLIコマンドで確認が必要。

---

### ▶ トークン認証の形式や設定はかなり繊細  
- バックスラッシュ（\）は不要  
- 認証URLの形式は以下が正しい：
