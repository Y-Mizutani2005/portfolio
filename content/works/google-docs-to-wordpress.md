---
title: "Google Docs to WordPress"
date: "2026-06-10"
description: "Google Docsで執筆した記事を、WordPressの下書き投稿・画像アップロード・メタデータ設定まで一括で処理する業務効率化ツール。"
thumbnail: "/images/works/google-docs-to-wordpress.png"
technologies: ["Google Apps Script", "Google Docs API", "WordPress REST API", "JavaScript"]
links:
  github: "https://github.com/Y-Mizutani2005/gdocs_to_wordpress"
featured: true
recommended: false
---

## Problem

学生団体でWordPressサイトを運営する中で、PC操作に不慣れなメンバーが記事入稿に時間を取られていました。

WordPressは非エンジニアでも使えるCMSですが、実際の運用では、見出し、画像、アイキャッチ、カテゴリ、タグ、スラッグ、公開日時などの設定が分散します。記事を書く人にとっては、本文作成よりも入稿作業の摩擦が大きくなっていました。

具体的に、1本あたりの入稿作業で3時間ほどの工数がかかっていました。

## Role

既存の入稿フローを再設計し、Wordpressを開かずとも、GoogleDocsのみで操作が完結するような非エンジニアのメンバーが使いやすい導線を設計しました。

実装では、Google Apps Script、Google Docsの文書構造、WordPress REST APIの接続、Wordpressテーマ側の調整、画像アップロード、メタデータ設定、サイドバーUIなど、すべての機能を担当しました。

企画、設計、実装、テストを一気通貫で行いました。

## What I Built

Google Docs上で記事を書き、メニューから実行するだけでWordPressの下書き投稿を作成できるツールを作りました。

主な機能は以下です。

- Google Docsの見出し、太字、リスト、表、画像をHTMLへ変換
- ドキュメント内画像をWordPressへアップロードし、本文内URLへ差し替え
- title、slug、date、excerpt、category、tag、featured imageなどのメタデータ指定
- 目次の自動生成
- 2列テーブルを会話吹き出しブロックへ変換
- WordPress REST APIの投稿作成・メディアアップロード
- Google Docs sidebar UIによるカテゴリ・タグ設定

環境構築の負担を増やさないため、Google Apps Scriptで実装し、テンプレート化したGoogle Docsから使える構成にしています。

## Result

記事執筆者は、使い慣れたGoogle Docsで本文を書いたまま、WordPress管理画面での細かい入稿作業を大きく減らせるようになりました。具体的には、記事1本あたり3時間ほどの工数が必要だった入稿作業が10分で完了するようになりました。

このプロジェクトは、非エンジニアの実運用に合わせて、UI、導入手順、エラー時の扱い、WordPress側の構造まで考えて一気通貫で作った業務効率化ツールです。

分かりやすく効果がでて、メンバーにも喜んでもらえたので結構お気に入りです。

![メンバーからのフィードバック](/images/works/google-docs-to-wordpress-feedback.png)

## Tech Stack

- Google Apps Script
- JavaScript
- Google Docs API / DocumentApp
- WordPress REST API
- HTML / CSS sidebar UI
- Application Passwords

## Evidence

- GitHub repository: [Y-Mizutani2005/gdocs_to_wordpress](https://github.com/Y-Mizutani2005/gdocs_to_wordpress)
- メンバーからの利用フィードバック画像をサイト内に掲載
- 学生団体のWordPress入稿フロー改善を目的に開発



## Links

- [GitHub repository](https://github.com/Y-Mizutani2005/gdocs_to_wordpress)
