---
title: "Portfolio & Blog Site"
date: "2026-06-08"
description: "Next.js 15とMarkdown content workflowで構築した、採用担当者が主要実績へ辿りやすい個人ポートフォリオ兼ブログ。"
thumbnail: "/images/works/portfolio-thumbnail.png"
technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown", "Vercel"]
links:
  github: "https://github.com/Y-Mizutani2005/portfolio"
  demo: "https://yukidev-xi.vercel.app"
featured: true
recommended: true
---

## Problem

GitHub repositoryだけでは、採用担当者が短時間で「何ができる人か」「どの実績を見るべきか」を判断しづらい課題がありました。

特に、AI / LLM、Web service、workflow automation、学生団体運営の実績が複数に分散しているため、それぞれの背景、役割、成果、根拠リンクをまとめて読める入口が必要でした。

## Role

個人プロジェクトとして、サイト全体の設計、実装、コンテンツモデル、Markdown workflow、デプロイ設定までを担当しました。

採用向けには、単なるブログではなく、主要実績をcase studyとして整理し、GitHub profile、公開repository、PDF evidence、実サービスURLへ接続する入口として使うことを目的にしています。

## What I Built

Next.js App Routerを使い、Markdownファイルをcontent sourceにしたポートフォリオ兼ブログを構築しました。

主な実装は以下です。

- `content/blog` と `content/works` を分けたMarkdown content model
- gray-matterによるfrontmatter metadata管理
- remark / rehypeによるMarkdown rendering
- custom directiveによる強調表現
- work一覧・詳細ページ
- blog一覧・詳細ページ
- OGP用API route
- sitemap / robots
- GitHub contribution表示用API route
- Vercelへのdeploy workflow

## Result

現在の本番サイトは、GitHub profileや応募書類から遷移する採用向けの入口として運用しています。

このT-055対応では、worksを採用担当者向けのcase study型に寄せ、松尾研、TCA、Gakuson Portal、Google Docs to WordPress、GakusonTheme、Portfolioを並べて読める状態にしました。

## Tech Stack

- Next.js 15
- TypeScript
- React
- Tailwind CSS
- Markdown
- unified / remark / rehype
- Vercel

## Evidence

- Production site: [yukidev-xi.vercel.app](https://yukidev-xi.vercel.app)
- GitHub repository: [Y-Mizutani2005/portfolio](https://github.com/Y-Mizutani2005/portfolio)
- このページ自体が、Markdown content workflowとworks導線の実例

## Links

- [Production site](https://yukidev-xi.vercel.app)
- [GitHub repository](https://github.com/Y-Mizutani2005/portfolio)
