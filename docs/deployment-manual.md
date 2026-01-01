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
        *   **注意**: まだ本番URL（`*.vercel.app`）が決まっていない場合、**この設定はスキップして空欄のままで構いません**。
        *   デプロイ完了後に発行されたURLを確認してから、後で設定を追加します（手順は後述）。
        *   ※ 設定しない場合、デフォルトの `http://localhost:3000` が使用されますが、サイトの表示自体は可能です。


4.  「Deploy」ボタンをクリックします。

## 5. デプロイ後の確認

デプロイが完了すると、花吹雪のアニメーションが表示されます。
「Continue to Dashboard」または表示されたドメインをクリックして、実際にサイトが表示されるか確認してください。

### 確認ポイント
*   トップページが表示されるか
*   記事一覧が表示されるか
*   詳細ページに遷移できるか
*   スタイル（CSS）が崩れていないか

## 6. 本番URLの設定（推奨）

初期デプロイで `NEXT_PUBLIC_BASE_URL` を設定しなかった場合、以下の手順で設定を行います。これを行うことで、OGP画像やCanoncial URLが正しく機能するようになります。

1.  Vercelのプロジェクト画面（Dashboard）を開きます。
2.  デプロイされたプロジェクトの「Visit」ボタンの横にあるURL（例: `https://blog-and-portfolio-tau.vercel.app`）をコピーします。
3.  「Settings」タブ -> 「Environment Variables」メニューに進みます。
4.  以下のように新しい変数を追加します。
    *   **Key**: `NEXT_PUBLIC_BASE_URL`
    *   **Value**: コピーしたURL（例: `https://blog-and-portfolio-tau.vercel.app`）
        *   ※ 末尾の `/` は不要です。
5.  「Save」をクリックします。
6.  設定を反映させるため、再デプロイ（Redeploy）を行うか、次のコード変更のプッシュを待ちます。
    *   **手動再デプロイの手順**: 「Deployments」タブ -> 最新のデプロイの右側の三点リーダー（…） -> 「Redeploy」を選択。

## 7. 今後の運用

コードを修正して更新したい場合は、以下の手順で行います。

1.  コードを修正
2.  変更をコミットしてプッシュ

```bash
git add .
git commit -m "修正内容のコメント"
git push
```

プッシュすると、Vercel が自動的に変更を検知して再デプロイを行います。
