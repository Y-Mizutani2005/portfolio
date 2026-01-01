---
title: "Next.js 15でブログを作ってみた"
date: "2025-12-16"
category: "Tech"
tags: ["Next.js", "TypeScript", "Tailwind CSS"]
excerpt: "Next.js 15の新機能であるApp Routerを使って、個人ブログ兼ポートフォリオサイトを構築しました。その過程での学びやハマったポイントを共有します。"
thumbnail: "/images/blog/sample.jpg"
draft: false
---

# 導入 (H1)

Next.js 15がついにリリースされましたね。
今回は、App Routerを全面的に採用して、このブログサイトを構築してみました。

## 技術スタック (H2)

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown

### 詳細なライブラリ (H3)

例えば `rehype` や `remark` などのエコシステムをフル活用しています。

## 苦労した点 (H2)

### ディレクトリ構成 (H3)

App Routerでは `src/app` ディレクトリ以下にページを配置する必要があります。
従来の `pages` ディレクトリとは異なるため、慣れるまで少し時間がかかりました。

### データフェッチ (H3)

Server Componentsでのデータ取得パターンも新しい概念でした。

# まとめ (H1)

今後は、記事の検索機能や、タグによるフィルタリング機能などを実装していく予定です。
