---
title: "学生団体の活動をAI×クラウドで効率化する"
date: "2026-01-05"
category: "Productivity"
tags: ["AI", "Google Workspace", "Gemini", "GAS", "効率化"]
excerpt: "Google Drive、Calendar、GeminiとGoogle Apps Scriptを組み合わせて、学生団体の運営を自動化・効率化する方法を解説します。"
thumbnail: ""
draft: true
---

サークル、ゼミ、プロジェクトチーム...大学生活ではさまざまな団体活動があります。
並行するプロジェクトの管理、週次定例会議のアジェンダ作成、議事録からのタスク抽出——これらを手作業で行うのは非効率です。

この記事では、**Google Workspaceエコシステム（Drive, Calendar, Docs）とGemini**を連携させ、管理工数を最小化する方法を、実際に構築しながら解説していきます。

---

## 1. 知識ベースの構築：フォルダ整理 × Gemini

### なぜフォルダ構造が重要なのか

Geminiが文脈を正しく理解するためには、**構造化された情報**が不可欠です。
フォルダ名が曖昧だと、AIへの指示も曖昧になり、期待した回答が得られません。

### 推奨フォルダ構造

```
[団体名_Home]/
├── 00_全体定例/      ← 週次会議の議事録、全体スケジュール
├── 01_運営管理/      ← 名簿、会計、規約
├── 10_プロジェクトA/  ← 企画書、制作物
├── 11_プロジェクトB/  ← 並行プロジェクト
└── 99_アーカイブ/    ← 終了した活動
```

**ポイント:**
- 番号プレフィックスで並び順を制御
- プロジェクトは10番台、運営は01番台と役割で分離
- 終了したものは99_アーカイブへ

### GeminiとGoogle Driveの接続

1. [gemini.google.com](https://gemini.google.com) を開く
2. **設定** → **拡張機能** をクリック
3. **Google Workspace** をオンにする

これで、Geminiのチャット欄で `@Google Drive` を使ったクエリが可能になります。

```
@Google Drive プロジェクトAの企画書の要点をまとめて
```

```
@Google Drive 先週の議事録から未完了のタスクをリストアップして
```

---

## 2. カレンダーの完全同期

「自分の予定を入れたらメンバーにも見える」仕組みは、**共有カレンダー**で実現します。

### 共有カレンダーの作成手順

1. Googleカレンダーの設定画面から **「新しいカレンダーを作成」** を選択
2. カレンダー名を設定（例：「〇〇実行委員会」）
3. **「特定のユーザーとの共有」** でメンバーのGmailを追加
4. 権限を **「予定の変更権限」** または **「閲覧権限」** に設定

### 運用フロー

```
あなたが予定を登録 → 共有カレンダーに反映 → メンバー全員のデバイスに自動同期
       ↑
    予定変更・中止
```

これにより、LINEグループで「次の会議いつだっけ？」という質問が飛び交うことがなくなります。

---

## 3. 週次定例の効率化：AIによる事前準備・事後処理

ここが「徹底的な効率化」の核心部分です。

### 事前準備：アジェンダの自動生成

会議の前に「何を話すか」をゼロから考える時間を削減します。

**Geminiへのプロンプト例:**

```
@Google Drive 「00_全体定例」フォルダ内の直近3回分の議事録を参照して、
次回議論すべき未解決の議題と、進捗確認が必要な項目を抽出してください。
それを元に、60分の会議のアジェンダ案をMarkdown形式で作成してください。
```

### 事後処理：議事録とタスクの構造化

会議が終わったら、メモをGeminiに投げて整理させます。

**Geminiへのプロンプト例:**

```
以下の会議メモを整理してください。
・決定事項
・ToDo（担当者・期限を明記）
・次回持ち越し事項
に分けてMarkdown形式で出力してください。

---
（ここに会議メモを貼り付け）
---
```

---

## 4. 発展：Google Apps Scriptによる自動化

さらに踏み込んで、議事録からタスクを自動抽出し、Google Tasksに登録するスクリプトを紹介します。

### 前提条件

- 議事録のToDoセクションが以下の形式で記述されていること：

```markdown
## ToDo
- [ ] タスク内容 @担当者 〆1/10
- [ ] 別のタスク @別の担当者 〆1/15
```

### Google Apps Script コード

```javascript
/**
 * 議事録ドキュメントからToDoを抽出し、Google Tasksに登録する
 * 
 * Args:
 *   なし（アクティブなドキュメントから抽出）
 * 
 * Returns:
 *   void（Google Tasksにタスクを追加）
 */
function extractTodosToTasks() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody().getText();
  
  // ToDoセクションを正規表現で抽出
  const todoRegex = /- \[ \] (.+?) @(.+?) 〆(\d+\/\d+)/g;
  let match;
  
  // デフォルトのタスクリストを取得
  const taskLists = Tasks.Tasklists.list();
  const defaultList = taskLists.items[0];
  
  while ((match = todoRegex.exec(body)) !== null) {
    const taskTitle = match[1];
    const assignee = match[2];
    const deadline = match[3];
    
    // 年を補完して日付オブジェクトを作成
    const year = new Date().getFullYear();
    const [month, day] = deadline.split('/');
    const dueDate = new Date(year, parseInt(month) - 1, parseInt(day));
    
    // タスクを作成
    const task = {
      title: `${taskTitle} (${assignee})`,
      due: dueDate.toISOString()
    };
    
    Tasks.Tasks.insert(task, defaultList.id);
    Logger.log(`タスクを追加: ${task.title}`);
  }
}
```

### 使い方

1. Google ドキュメントを開く
2. **拡張機能** → **Apps Script** をクリック
3. 上記コードを貼り付けて保存
4. `extractTodosToTasks` 関数を実行
5. 初回実行時は権限の承認が必要

---

## まとめ：ワークフロー全体像

```
┌─────────────────────────────────────────────────────────────────┐
│                        週次定例サイクル                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  【事前準備】                                                    │
│    Geminiに過去議事録を参照させる → アジェンダ自動生成            │
│                                         │                       │
│                                         ▼                       │
│  【会議中】                                                      │
│    決定事項・ToDoをメモ                                          │
│                                         │                       │
│                                         ▼                       │
│  【事後処理】                                                    │
│    Geminiで議事録を構造化 → Driveに保存                          │
│                               │                                 │
│                               ▼                                 │
│    GASでToDoを自動抽出 → Google Tasksに登録                      │
│                               │                                 │
│                               ▼                                 │
│    次回の知識ベースに蓄積 ────────────────→ 事前準備へループ     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

このサイクルを回すことで、**情報の分散を防ぎ、属人化を排除し、管理工数を最小化**できます。

---

## 運用してみての所感

（実際に運用してみて、気づいたことや改善点を追記予定）

