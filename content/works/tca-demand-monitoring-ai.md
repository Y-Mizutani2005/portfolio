---
title: "monitoring AIsystem in intern"
date: "2026-06-11"
description: "月次モニタリング資料作成を支援するデータ解釈自動化AIのPoCを設計・実装した事例。"
thumbnail: "public/images/works/monitor-agent.png"
technologies: ["Python", "Azure", "Microsoft Agent Framework", "LLM", "PowerPoint"]
links: {}
featured: true
recommended: false
---

## Problem

長期インターンで、電力需要想定AIの月次モニタリング業務を題材に、データ解釈と資料作成の負荷を減らすPoCに取り組みました。

月次モニタリングでは、複数の指標や変化を見ながら、結果の解釈、リード文、スライド構成を人が作成する必要があります。毎月発生する業務でありながら、数値の読み取り、示唆の整理、資料化に手間がかかる点が課題でした。

## Role

長期インターン生として、要件整理、AI agent設計、実装、出力検証、報告までを担当しました。

社内データや非公開仕様は公開せず、外部に出せる範囲では、月次モニタリング資料の作成支援を目的としたAI workflowのPoCとして説明しています。

## What I Built

公開可能な範囲では、以下の機能を設計・実装しました。

- 月次モニタリング用データを読み取り、変化や注目点を抽出する処理
- LLMを使ったデータ解釈とリード文生成
- 出力をPowerPoint資料に接続するための構成設計
- Microsoft Agent Frameworkを用いたagent workflow
- Azure環境での実装・検証
- 出力内容の妥当性を確認するレビュー観点

## Result

データ解釈とリード文生成を自動化するPoCを構築し、月次モニタリング資料作成の一部をAI agentで支援できる形にしました。

## Tech Stack

- Python
- Azure
- Microsoft Agent Framework
- LLM
- PowerPoint / pptx workflow
- Data interpretation

## Evidence

- 公開用PDF: [TCA Demand Monitoring AI public PDF](/files/works/tca-demand-monitoring-ai-public.pdf)
- 社内固有データ、企業名、非公開仕様、コードは掲載対象外

## Links

- [Public evidence PDF](/files/works/tca-demand-monitoring-ai-public.pdf)
