# 実績（Works）の追加手順

ポートフォリオサイトに新しい実績を追加する方法についてのドキュメントです。

## 1. 画像ファイルの準備

まず、実績のサムネイルやヘッダー画像を準備します。

- **保存場所**: `public/images/works/`
- **推奨ファイル名**: 英数字（例: `my-project.jpg`）
- **推奨内容**: プロジェクトの雰囲気が伝わる画面キャプチャなど

## 2. Markdownファイルの作成

記事本文となるMarkdownファイルを作成します。

- **保存場所**: `content/works/`
- **ファイル名**: `プロジェクト名.md`（URLの一部になります。例: `my-project.md`）

## 3. ファイルの内容（テンプレート）

以下の内容をコピーして、作成した`.md`ファイルに貼り付け、内容を書き換えてください。

```markdown
---
title: "プロジェクトのタイトル"
date: "2025-12-19"
description: "一覧ページに表示される短い説明文。"
thumbnail: "/images/works/あなたの画像ファイル名.jpg"
technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
links:
  github: "https://github.com/..."
  demo: "https://..."
featured: false
---

## プロジェクトについて

ここから本文を記述します。
Markdown記法が使用可能です。

### こだわりポイント

- **ポイント1**: 詳細...
```

### 各項目の説明

| 項目名 | 必須 | 説明 |
| :--- | :---: | :--- |
| `title` | ✅ | プロジェクトのタイトル |
| `date` | ✅ | 作成日または公開日（YYYY-MM-DD形式） |
| `description` | ✅ | 一覧ページやカードに表示される短い説明 |
| `thumbnail` | ✅ | 画像のパス（`/images/works/...`） |
| `technologies` | ✅ | 使用技術のリスト |
| `links` | 任意 | `github` (リポジトリURL) や `demo` (デモサイトURL) |
| `featured` | 任意 | `true` にすると強調表示される場合があります |

## 4. 確認

開発サーバーが起動している場合（`npm run dev`）、ブラウザをリロードすると変更が反映されます。
一覧ページ（`/works`）と詳細ページ（`/works/[slug]`）を確認してください。
