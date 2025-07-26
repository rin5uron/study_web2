# エラーからの学び記録

## 2025-07-26: Git分岐エラー（Diverged Branches）

### 問題・症状
- GUIでプッシュできない
- 「Your branch and 'origin/main' have diverged」エラー
- ローカルとリモートの変更が衝突

### 原因
**「保存の道」が2つに分かれたため**
```
ローカル編集  -----→ A, B, C
             ↗
スタート地点 -----
             ↘
リモート編集  -----→ D
```

### 解決方法
```bash
git pull --no-rebase  # 道をまとめる
git commit -m "Merge"  # マージ完了
git push              # 成功
```

### 学んだこと
- リモート編集後は必ず`git pull`で道を1本に戻す
- GitHubでissue編集もコミット = 道が分かれる
- GUIだけでなくターミナル操作も重要

### 予防策
```bash
# 作業開始前の習慣
git pull    # まず最新を取得
# ローカル作業
git add/commit/push
```

### 覚え方
「リモート触ったら、pullで道直し」

### 次回への備え
- [ ] 作業前に`git status`チェック
- [ ] リモート編集の記録を残す
- [ ] 定期的に`git pull`する習慣

---