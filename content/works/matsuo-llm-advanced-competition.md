---
title: "Matsuo Lab LLM Advanced Competition"
date: "2026-06-13"
description: "東京大学松尾・岩澤研究室のLLM講座応用編アドバンスドコンペで、U29部門優秀賞を受賞したLLM fine-tuningの取り組み。"
thumbnail: "/images/works/matsuo-llm-award.png"
technologies: ["Python", "LLM", "SFT", "QLoRA", "ReAct", "Qwen"]
links:
  github: "https://github.com/Y-Mizutani2005/matsuo-llm-advanced-competition"
featured: true
recommended: false
---

## Problem

東京大学松尾・岩澤研究室の大規模言語モデル講座 応用編で、LLM open modelをタスクに合わせて改善するアドバンスドコンペに取り組みました。

課題は、単にモデルをfine-tuningするだけではなく、与えられた環境・評価形式・データ制約の中で、推論形式と学習データをどう整えるかを設計することでした。特に、agent benchmarkに近いタスクでは、最終回答だけでなく、途中の思考・行動・観測の形式が崩れると性能が落ちやすい点が課題でした。

## Role

個人参加のみのコンペなので、1人で実験設計、データ整形、fine-tuning、エラー分析、改善方針の検討までを行いました。

主に以下を行いました。

- baselineの挙動と失敗パターンの確認
- Qwen2.5-7B-Instructを対象にしたSFT / LoRA / QLoRA実験
- ALFWorld系のfunction-calling trajectoryをtext ReAct形式へ寄せる前処理
- 出力形式崩れ、行動選択ミス、途中停止などのエラー分析
- 実験ログをもとにした改善サイクルをぐるぐる回す

## What I Built

公開可能な範囲では、以下のような構成で取り組みました。

- 学習データをタスク形式に合わせて再構成する前処理
- hybrid SFTの実験設計
- LoRA / QLoRAでの軽量fine-tuning
- ReAct形式の安定化を狙ったprompt / data formatting
- 実験結果を比較するためのlog整理

## Result

結果として、2026年3月に、アドバンスドコンペ U29部門で優秀賞を受賞しました。

LLMをAPI経由で叩くだけでなく、裏側の理屈を理解した上で動かせるようになったので、参加してかなり満足しています。Fine-tuningは今回取り組んだので実務などで活かしたいものの、如何せんコストバランスが悪く、AIAgentのハーネス設計やRAG&データエンジニアリングきちんとやる方が業務インパクトがデカそうなのが悲しいところ…。


## Tech Stack

- Python
- Qwen2.5-7B-Instruct
- SFT
- LoRA / QLoRA
- ReAct format
- LLM evaluation / error analysis

## Evidence

- U29部門優秀賞: ローカル証明書PDF `松尾研優秀賞_U29.pdf` を根拠に作成
- 公式掲載: [松尾研講座 成果物一覧ページの「大規模言語モデル2025」欄](https://matsuolab-lecture.notion.site/432e287af97445d5aba989553ebaf808#126cfa7cece780d0807cea09481a604c)
- 証明書PDF: [matsuo-llm-advanced-u29-award-certificate.pdf](https://github.com/Y-Mizutani2005/matsuo-llm-advanced-competition/blob/main/docs/evidence/matsuo-llm-advanced-u29-award-certificate.pdf)
- 公開用snapshot repo: [Y-Mizutani2005/matsuo-llm-advanced-competition](https://github.com/Y-Mizutani2005/matsuo-llm-advanced-competition)
- 講座の公式情報: [東京大学 松尾・岩澤研究室 大規模言語モデル講座](https://weblab.t.u-tokyo.ac.jp/lecture/course-list/large-language-model/)

## Links

- GitHub repo: [Y-Mizutani2005/matsuo-llm-advanced-competition](https://github.com/Y-Mizutani2005/matsuo-llm-advanced-competition)
- Official course page: [大規模言語モデル講座](https://weblab.t.u-tokyo.ac.jp/lecture/course-list/large-language-model/)
- Official result roster: [大規模言語モデル2025](https://matsuolab-lecture.notion.site/432e287af97445d5aba989553ebaf808#126cfa7cece780d0807cea09481a604c)
