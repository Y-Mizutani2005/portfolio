# メタデータ仕様書

このドキュメントでは、ブログ記事 (`content/blog`) および制作物 (`content/works`) のMarkdownファイルで使用されるメタデータ（Frontmatter）の仕様についてまとめます。

## 共通仕様

すべてのコンテンツタイプで以下のフィールドが利用可能です。

| フィールド名 | 型 | 必須 | 説明 |
| :--- | :--- | :--- | :--- |
| `title` | string | **Yes** | 記事または制作物のタイトル |
| `date` | string | **Yes** | 公開日 (ISO 8601形式: `YYYY-MM-DD` 推奨) |
| `hidden` | boolean | No | `true`の場合、一覧ページから非表示になります |

## ブログ記事 (Blog Post)

`content/blog/*.md` で使用されるメタデータです。

| フィールド名 | 型 | 必須 | デフォルト | 説明 |
| :--- | :--- | :--- | :--- | :--- |
| `category` | string | **Yes** | - | カテゴリ。`Tech` または `Life` を指定 |
| `tags` | string[] | **Yes** | `[]` | 関連タグのリスト (例: `["Next.js", "React"]`) |
| `excerpt` | string | **Yes** | - | 記事の抜粋・要約。一覧カードに表示されます |
| `updated` | string | No | - | 最終更新日 (ISO 8601形式)。指定がある場合、公開日の代わりに表示されることがあります |
| `thumbnail` | string | No | - | サムネイル画像のパス (例: `/images/blog/thumbnail.png`) |
| `draft` | boolean | No | `false` | `true`の場合、下書き扱い（実装依存により非表示またはドラフト表示） |

### 記述例

```yaml
---
title: "Next.js 15でブログを作成"
date: "2024-01-01"
updated: "2024-01-02"
category: "Tech"
tags: ["Next.js", "TypeScript", "Tailwind CSS"]
excerpt: "Next.js 15の新機能を使って個人の技術ブログを一から構築しました。App Routerの採用や..."
thumbnail: "/images/blog/nextjs15.png"
hidden: false
---
```

## 制作物 (Work)

`content/works/*.md` で使用されるメタデータです。

| フィールド名 | 型 | 必須 | デフォルト | 説明 |
| :--- | :--- | :--- | :--- | :--- |
| `description` | string | **Yes** | - | 制作物の簡単な説明 |
| `technologies` | string[] | **Yes** | `[]` | 使用技術スタック (例: `["React", "Firebase"]`) |
| `featured` | boolean | **Yes** | `false` | `true`の場合、トップページの注目セクションなどに表示されます |
| `thumbnail` | string | **Yes** | - | サムネイル画像のパス |
| `links` | object | No | - | 関連リンク集 |
| `links.github` | string | No | - | GitHubリポジトリのURL |
| `links.demo` | string | No | - | デモサイトや実際のプロダクトのURL |

### 記述例

```yaml
---
title: "ポートフォリオサイト"
date: "2023-12-01"
description: "自身の経歴や制作物をまとめたポートフォリオサイトです。"
technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
featured: true
thumbnail: "/images/works/portfolio.png"
links:
  github: "https://github.com/username/portfolio"
  demo: "https://portfolio.example.com"
hidden: false
---
```
