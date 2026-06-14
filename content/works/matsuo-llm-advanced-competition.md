---
title: "Matsuo Lab LLM Advanced Competition"
date: "2026-06-13"
description: "東京大学松尾・岩澤研究室のLLM講座応用編アドバンスドコンペで、U29部門優秀賞を受賞したLLM fine-tuningの取り組み。"
thumbnail: ""
technologies: ["Python", "LLM", "SFT", "QLoRA", "ReAct", "Qwen"]
links: {}
featured: true
recommended: false
---

## Problem

東京大学松尾・岩澤研究室の大規模言語モデル講座 応用編で、LLM open modelをタスクに合わせて改善するアドバンスドコンペに取り組みました。

課題は、単にモデルをfine-tuningするだけではなく、与えられた環境・評価形式・データ制約の中で、推論形式と学習データをどう整えるかを設計することでした。特に、agent benchmarkに近いタスクでは、最終回答だけでなく、途中の思考・行動・観測の形式が崩れると性能が落ちやすい点が課題でした。

## Role

個人参加として、実験設計、データ整形、fine-tuning、エラー分析、改善方針の検討までを担当しました。

主に以下を行いました。

- baselineの挙動と失敗パターンの確認
- Qwen2.5-7B-Instructを対象にしたSFT / LoRA / QLoRA実験
- ALFWorld系のfunction-calling trajectoryをtext ReAct形式へ寄せる前処理
- 出力形式崩れ、行動選択ミス、途中停止などのエラー分析
- 実験ログをもとにした改善サイクルの整理

## What I Built

公開可能な範囲では、以下のような構成で取り組みました。

- 学習データをタスク形式に合わせて再構成する前処理
- hybrid SFTの実験設計
- LoRA / QLoRAでの軽量fine-tuning
- ReAct形式の安定化を狙ったprompt / data formatting
- 実験結果を比較するためのlog整理

モデルそのものや再配布可否が不明なraw datasetは公開対象にせず、採用向けには手法、実験ログ、コード断片、runbookを切り出したsnapshot repoとして整理する方針です。

## Result

2026年3月に、アドバンスドコンペ U29部門で優秀賞を受賞しました。

この取り組みでは、LLMを「APIで使う」だけでなく、データ形式、fine-tuning手法、評価観点、エラー分析を含めて改善する経験を得ました。採用担当者向けには、AI / LLM領域での外部評価として、また技術面接向けには、手法選定と失敗分析を説明できる実績として位置づけています。

## Tech Stack

- Python
- Qwen2.5-7B-Instruct
- SFT
- LoRA / QLoRA
- ReAct format
- LLM evaluation / error analysis

## Evidence

- ローカル証明書PDF: `松尾研優秀賞_U29.pdf` を根拠に作成
- 公開用snapshot repo: T-056で公開準備中
- 証明書PDFまたは公式掲載ページの公開リンクは、人間確認後に追加予定

## Links

- GitHub repo: T-056完了後に接続予定
- Portfolio導線: このページから、公開可能な実験ログとコードsnapshotへ接続する予定
