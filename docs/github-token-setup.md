# GitHub Personal Access Token (PAT) 作成手順

プライベートリポジトリのコントリビューション（草）を取得してポートフォリオに表示するには、GitHubのアクセストークンが必要です。
以下の手順に従ってトークンを発行し、環境変数に設定してください。

## 1. トークンの発行

### 推奨: Fine-grained tokens (推奨)
より権限を細かく設定できる新しいタイプのトークンです。

1. GitHubにログインし、右上のアイコンから **[Settings]** をクリックします。
2. 左サイドバーの一番下にある **[Developer settings]** をクリックします。
3. **[Personal access tokens]** > **[Fine-grained tokens]** を選択します。
4. **[Generate new token]** をクリックします。
5. 以下の項目を設定します：
   - **Token name**: わかりやすい名前（例: `Portfolio GitHub Stats`）
   - **Expiration**: 有効期限（例: `90 days`など。期限切れ後は再発行が必要ですがセキュリティ上安全です）
   - **Resource owner**: 自分のユーザー名
   - **Repository access**: **"All repositories"** を選択（プライベートリポジトリの情報も含めるため）
   - **Permissions**: **"Repository permissions"** > **"Contents"** を **"Read-only"** に設定（通常はメタデータの読み取りだけで十分ですが、念のため）
     - ※ コントリビューション数の取得だけであれば、実は特別な権限はほぼ不要ですが、プライベートリポジトリの存在を認識させるために"All repositories"への読み取り権限を与えるのが確実です。
     - **"Account permissions"** エリアがある場合、**"Profile"** を **"Read-only"** に設定してください。

### 代替: Tokens (classic)
従来の方法です。

1. **[Developer settings]** > **[Personal access tokens]** > **[Tokens (classic)]** を選択。
2. **[Generate new token]** > **[Generate new token (classic)]** をクリック。
3. **Note** に名前を入力（例: `Portfolio Classic`）。
4. **Select scopes** で以下にチェックを入れます：
   - `repo` (Full control of private repositories) - プライベートリポジトリの活動をカウントするために必要です。
   - `read:user` - ユーザープロファイル情報の読み取り用。
5. **[Generate token]** をクリック。

## 2. 環境変数の設定 (ローカル開発)

1. 発行されたトークン（`github_pat_...` または `ghp_...` から始まる文字列）をコピーします。**この画面を閉じると二度と表示されないので注意してください。**
2. プロジェクトのルートディレクトリにある `.env.local` ファイルを開きます（なければ作成してください）。
3. 以下のように記述して保存します：

```bash
GITHUB_TOKEN=your_token_here_xxxxxx
```

4. 開発サーバーが起動中の場合は、再起動してください（`Ctrl+C` で停止し、`npm run dev`）。

## 3. Vercelへのデプロイ（本番環境）

Vercelにデプロイする場合、`.env.local` ファイルは無視されるため、Vercelのダッシュボードで環境変数を設定する必要があります。

1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセスし、対象のプロジェクトを選択します。
2. 上部メニューの **[Settings]** をクリックします。
3. 左サイドバーの **[Environment Variables]** をクリックします。
4. 以下の情報を入力して追加します：
   - **Key**: `GITHUB_TOKEN`
   - **Value**: 発行したGitHubトークン (`github_pat_...` 等)
   - **Environment**: Production, Preview, Development すべてにチェックを入れることを推奨します。
5. **[Save]** または **[Add]** をクリックします。
6. 設定を反映させるため、**[Deployments]** タブに移動し、最新のデプロイの三点リーダーメニューから **[Redeploy]** を実行してください（または次回のpush時に自動反映されます）。
