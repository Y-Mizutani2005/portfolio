# デプロイ手順書 (GitHub + Vercel)

このドキュメントでは、この Next.js アプリケーションを GitHub にアップロードし、Vercel にデプロイする手順を説明します。

## 1. 前提条件

*   GitHub アカウントを持っていること
*   Vercel アカウントを持っていること
*   ローカル環境に git がインストールされていること

## 2. ローカルでの Git 初期化とコミット

現在、このプロジェクトは Git で管理されていない状態です。まずはローカルリポジトリを作成します。

ターミナルで以下のコマンドを順番に実行してください。

```bash
# Gitの初期化
git init

# 全ファイルをステージングエリアに追加
git add .

# 初期コミット
git commit -m "Initial commit"
```

## 3. GitHub リポジトリの作成とプッシュ

1.  [GitHub](https://github.com/new) にアクセスし、新しいリポジトリを作成します。
    *   **Repository name**: `blog_and_portfolio` (任意の名前でOK)
    *   **Public/Private**: 任意（ポートフォリオなら Public が一般的ですが、非公開にしたい場合は Private）
    *   その他はデフォルトのままで「Create repository」をクリックします。

2.  リポジトリ作成後、表示されるコマンドの中で「…or push an existing repository from the command line」の部分にあるコマンドをコピーして、ターミナルで実行します。

```bash
# 例（<USERNAME>はあなたのGitHubユーザー名に置き換えてください）
git branch -M main
git remote add origin https://github.com/<USERNAME>/blog_and_portfolio.git
git push -u origin main
```

## 4. Vercel へのデプロイ

1.  [Vercel Dashboard](https://vercel.com/dashboard) にアクセスし、「Add New ...」 -> 「Project」をクリックします。
2.  「Import Git Repository」の欄で、先ほど作成した GitHub リポジトリ (`blog_and_portfolio`) を探し、「Import」ボタンをクリックします。
3.  **Configure Project** 画面で以下の設定を確認・入力します。

    *   **Framework Preset**: `Next.js` (自動検出されるはずです)
    *   **Root Directory**: `./` (変更不要)
    *   **Environment Variables**:
        *   もし本番環境のURLが決まっている場合（カスタムドメインなど）、`NEXT_PUBLIC_BASE_URL` を設定します。
        *   例:
            *   Key: `NEXT_PUBLIC_BASE_URL`
            *   Value: `https://your-project-name.vercel.app` (またはカスタムドメイン)
        *   ※ 初期デプロイ時は空でも動作しますが、`src/lib/site-config.ts` で利用されているため、正しいOGPなどのために後で設定することを推奨します。

4.  「Deploy」ボタンをクリックします。

## 5. デプロイ後の確認

デプロイが完了すると、花吹雪のアニメーションが表示されます。
「Continue to Dashboard」または表示されたドメインをクリックして、実際にサイトが表示されるか確認してください。

### 確認ポイント
*   トップページが表示されるか
*   記事一覧が表示されるか
*   詳細ページに遷移できるか
*   スタイル（CSS）が崩れていないか

## 6. 今後の運用

コードを修正して更新したい場合は、以下の手順で行います。

1.  コードを修正
2.  変更をコミットしてプッシュ

```bash
git add .
git commit -m "修正内容のコメント"
git push
```

プッシュすると、Vercel が自動的に変更を検知して再デプロイを行います。
