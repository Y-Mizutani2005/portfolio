---
title: "Portfolio & Blog Site"
date: "2026-06-08"
description: "Next.js 15とMarkdown content workflowで構築した、個人ポートフォリオ兼ブログ。"
thumbnail: "/images/works/portfolio-thumbnail.png"
technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown", "Vercel"]
links:
  github: "https://github.com/Y-Mizutani2005/portfolio"
  demo: "https://yukidev-xi.vercel.app"
featured: true
recommended: true
---

## Problem

個人ブログを一個持ってみたいと思い立ち、結構思い付きで作り始めました。NoteやZennなどの既存プラットフォームもありますが、ちょっと敷居が高い感じがして、もっとラフに書ける場所が欲しいなと思っていました。

> 思い付きの要件
- 日常使いしているマークダウンと相性がいいといいなあ！
- デプロイが簡単だと楽で嬉しいなぁ
- 日常の更新で普段使わないサイトやアプリ開くの面倒なので、VScodeで完結するといいなぁ
- 金欠学生なので無料だと嬉しいなあ
- カスタマイズ性が高いと嬉しいなぁ

こういうものを満たせるものを作ろうということで、作りました。

## Role

思い付きの要件を満たすためのアプローチとして、markdownをパースしDOM要素に起こし、ファイルや画像をgithubで管理、verselにデプロイするスタイルに決めました。

趣味の開発なので、自分ひとりで思うままに作りました。
個人プロジェクトとして、サイト全体の設計、実装、コンテンツモデル、Markdown workflow、デプロイ設定まですべて担当しました。

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

UI・UXがお気に入りのサイトが完成！
マークダウンを書くだけでブログ記事や作品紹介ができるので、気軽に更新できています。

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
