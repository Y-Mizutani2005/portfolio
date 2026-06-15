---
title: "Gakuson Portal"
date: "2026-06-12"
description: "南山大学生向けに、大学生活で使うリンク・情報・小さな便利機能を集約した、実利用されている学生向けポータルサービス。"
thumbnail: "/images/works/gakuson-portal-overview.png"
technologies: ["HTML", "CSS", "JavaScript", "JSON", "Apache"]
links:
  github: "https://github.com/Gakuson/GakusonPortal"
  demo: "https://gakuson.com"
featured: true
recommended: false
---

## Problem

南山大学の学生生活では、PORTA、WebClass、講義資料、図書館、休講情報、地下鉄時刻、大学HPなど、日常的に使う情報が複数の場所に分散しています。

学生が毎日使う導線なのに、必要な情報へたどり着くまでの手間が多く、特に新入生やスマホ利用時には不便が出やすい状態でした。

## Role

学生団体「がくそん」では、設立当時は副代表、現在は代表として、サービスの企画、開発、改善、運営、組織づくりを担当しています。

実装面では、静的サイトとしての構成、主要ページ、共通UI、JSONベースの情報表示、日常利用向けの小機能を整備しました。運営面では、学生ユーザーの使い方を見ながら、発信、改善、広告掲載、学内外との連携まで含めて継続運用しています。

## What I Built

主な機能は以下です。

- よく使う大学システムへのquick link dashboard
- 授業時間の進捗表示
- ニュース・告知をJSONで管理する表示機構
- キャンパスマップと建物ピン表示
- 地下鉄時刻の補助表示
- Cookieを使った簡易時間割
- サークル種別、規模、活動頻度、人数、部費などで絞り込めるサークル検索
- light / dark theme切り替え
- Apache `.htaccess` を含む静的ホスティング設定

バックエンドやDBを置かず、HTML / CSS / JavaScript / JSONで保守できる形にしたことで、学生団体内で運用しやすい軽量な構成にしています。

## Result

2026年4月30日時点で、GA4計測の月間アクティブユーザーは4,932人、総ユーザー数は4,983人、月間表示回数は約9万回です。GA4 MAUは4,500から5,000人規模です。

2024年7月時点では月間利用者数約1,800人でしたが、2025年12月に約3,500人、2026年4月に約4,900人規模まで成長しました。単なる制作物ではなく、南山大学生が日常的に使う学内向けサービスとして運営しています。

現代表としては、Webサービスの開発だけでなく、運営チーム・開発チームの役割設計、広告掲載、企業協賛、大学支援を含めて、継続可能な学生組織に育てることにも取り組んでいます。

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- JSON
- Browser cookies
- Apache `.htaccess`
- Static hosting

## Evidence

- Public service: [gakuson.com](https://gakuson.com)
- GitHub repository: [Gakuson/GakusonPortal](https://github.com/Gakuson/GakusonPortal)
- GA4計測値: 2026年4月30日時点のスクリーンショットに基づく。月間アクティブユーザー4,932人、総ユーザー数4,983人、月間表示回数約9万回。
- 学生団体概要資料: ローカル資料 `学生団体.md` を根拠に作成

![2026年4月30日時点のGA4月間利用者数](/images/works/gakuson-portal-ga4-mau-2026-04-30.png)

## Links

- [Gakuson Portal](https://gakuson.com)
- [GitHub repository](https://github.com/Gakuson/GakusonPortal)
