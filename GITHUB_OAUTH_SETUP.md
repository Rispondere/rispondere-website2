# GitHub OAuth 認証設定ガイド - Decap CMS

**対象**: 有限会社Rispondere コーポレートサイト  
**管理画面**: `/admin/`  
**作成日**: 2026年1月8日

---

## 📋 目次

1. [概要](#概要)
2. [GitHub OAuth Appの作成](#github-oauth-appの作成)
3. [Netlify（または他のホスティング）での認証設定](#netlify-または他のホスティングでの認証設定)
4. [config.ymlの更新](#configymlの更新)
5. [動作確認](#動作確認)
6. [トラブルシューティング](#トラブルシューティング)

---

## 概要

Decap CMS（旧Netlify CMS）の管理画面にGitHub認証でログインするための設定手順です。

### 必要なもの

- GitHubアカウント
- GitHubリポジトリ（このサイトのコードが格納されている）
- ホスティングサービス（GitHub Pages / Netlify / Vercel など）

### 認証フロー

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│ 管理画面    │ ───→ │ GitHub OAuth│ ───→ │ GitHub API  │
│ /admin/     │      │ 認証        │      │ リポジトリ  │
└─────────────┘      └─────────────┘      └─────────────┘
```

---

## GitHub OAuth Appの作成

### ステップ1: GitHubにアクセス

1. GitHub (https://github.com) にログイン
2. 右上のプロフィールアイコンをクリック
3. **Settings** を選択

### ステップ2: OAuth Apps設定画面を開く

1. 左サイドバーの一番下にある **Developer settings** をクリック
2. 左サイドバーの **OAuth Apps** をクリック
3. **New OAuth App** ボタンをクリック

### ステップ3: OAuth Appを登録

以下の情報を入力します：

```
┌─────────────────────────────────────────────┐
│ Register a new OAuth application            │
├─────────────────────────────────────────────┤
│                                             │
│ Application name *                          │
│ ┌─────────────────────────────────────┐   │
│ │ Rispondere CMS Admin                │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ Homepage URL *                              │
│ ┌─────────────────────────────────────┐   │
│ │ https://YOUR-SITE.com               │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ Application description                     │
│ ┌─────────────────────────────────────┐   │
│ │ 有限会社Rispondere管理画面          │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ Authorization callback URL *                │
│ ┌─────────────────────────────────────┐   │
│ │ https://YOUR-SITE.com/admin/        │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ [Register application]                      │
│                                             │
└─────────────────────────────────────────────┘
```

#### 各項目の説明

| 項目 | 入力内容 | 例 |
|------|---------|-----|
| **Application name** | 管理画面の名前 | `Rispondere CMS Admin` |
| **Homepage URL** | サイトのURL | `https://your-site.github.io` |
| **Application description** | 説明（任意） | `有限会社Rispondere管理画面` |
| **Authorization callback URL** | 管理画面のURL | `https://your-site.github.io/admin/` |

**重要**: Authorization callback URLは、**実際の本番サイトのURL**を入力してください。

#### ホスティング別URL例

- **GitHub Pages**: `https://username.github.io/repository-name/admin/`
- **Netlify**: `https://your-app-name.netlify.app/admin/`
- **Vercel**: `https://your-app-name.vercel.app/admin/`
- **カスタムドメイン**: `https://yourdomain.com/admin/`

### ステップ4: Client IDとClient Secretを取得

1. **Register application** ボタンをクリック
2. OAuth Appが作成され、詳細画面が表示される
3. 以下の情報が表示される：

```
┌─────────────────────────────────────────────┐
│ Rispondere CMS Admin                        │
├─────────────────────────────────────────────┤
│                                             │
│ Client ID                                   │
│ ┌─────────────────────────────────────┐   │
│ │ Iv1.a1b2c3d4e5f6g7h8                │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ Client secrets                              │
│ ┌─────────────────────────────────────┐   │
│ │ [Generate a new client secret]      │   │
│ └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

4. **Generate a new client secret** ボタンをクリック
5. **Client Secret** が表示される（1度しか表示されないので注意！）

```
┌─────────────────────────────────────────────┐
│ Client secrets                              │
├─────────────────────────────────────────────┤
│                                             │
│ ┌─────────────────────────────────────┐   │
│ │ 9z8y7x6w5v4u3t2s1r0q                │   │
│ └─────────────────────────────────────┘   │
│                                             │
│ ⚠️ Make sure to copy your client secret   │
│    now. You won't be able to see it again! │
│                                             │
└─────────────────────────────────────────────┘
```

6. **Client ID** と **Client Secret** をメモ帳などに保存

---

## Netlify（または他のホスティング）での認証設定

### 方法A: Netlifyを使用する場合（推奨）

#### ステップ1: Netlifyにサイトをデプロイ

1. Netlify (https://www.netlify.com/) にログイン
2. **Add new site** → **Import an existing project** を選択
3. GitHubリポジトリを連携
4. デプロイ設定：
   - **Build command**: （空欄でOK）
   - **Publish directory**: `.`
5. **Deploy site** をクリック

#### ステップ2: NetlifyでOAuth設定

1. Netlifyのサイト設定画面を開く
2. 左サイドバーの **Site configuration** → **Access control** をクリック
3. **OAuth** セクションで **Install provider** をクリック
4. **GitHub** を選択
5. 以下の情報を入力：

```
┌─────────────────────────────────────────────┐
│ GitHub OAuth provider                       │
├─────────────────────────────────────────────┤
│                                             │
│ Client ID                                   │
│ ┌─────────────────────────────────────┐   │
│ │ Iv1.a1b2c3d4e5f6g7h8                │   │ ← GitHubからコピー
│ └─────────────────────────────────────┘   │
│                                             │
│ Client Secret                               │
│ ┌─────────────────────────────────────┐   │
│ │ 9z8y7x6w5v4u3t2s1r0q                │   │ ← GitHubからコピー
│ └─────────────────────────────────────┘   │
│                                             │
│ [Install]                                   │
│                                             │
└─────────────────────────────────────────────┘
```

6. **Install** をクリック

#### ステップ3: admin/config.ymlの確認

Netlifyを使用する場合、`admin/config.yml` は以下の設定でOKです：

```yaml
backend:
  name: github
  repo: username/repository-name  # 実際のリポジトリ名
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

---

### 方法B: GitHub Pages + 外部OAuth サービスを使用

GitHub Pagesではサーバーサイド処理ができないため、外部OAuthサービスが必要です。

#### オプション1: Netlify Identityを使用（無料）

1. Netlifyに無料アカウント作成
2. サイトをデプロイ（上記「方法A」参照）
3. OAuth設定を完了
4. 管理画面URLは Netlify経由でアクセス

#### オプション2: 独自OAuth Gatewayを構築（上級者向け）

GitHub OAuth Gateway（Node.js/Express）を別途構築し、Heroku/Vercel等にデプロイ。

参考: https://github.com/vencax/netlify-cms-github-oauth-provider

---

### 方法C: Vercelを使用する場合

#### ステップ1: Vercelにデプロイ

1. Vercel (https://vercel.com/) にログイン
2. **Add New** → **Project** を選択
3. GitHubリポジトリを連携
4. デプロイ設定：
   - **Framework Preset**: Other
   - **Build Command**: （空欄でOK）
   - **Output Directory**: `.`
5. **Deploy** をクリック

#### ステップ2: 環境変数を設定

1. Vercelプロジェクトの **Settings** → **Environment Variables** を開く
2. 以下の環境変数を追加：

```
GITHUB_CLIENT_ID = Iv1.a1b2c3d4e5f6g7h8
GITHUB_CLIENT_SECRET = 9z8y7x6w5v4u3t2s1r0q
```

#### ステップ3: OAuth Gateway関数を作成

Vercelの場合、Serverless Functionを使用してOAuth Gatewayを実装する必要があります。

**api/auth.js** を作成：

```javascript
module.exports = (req, res) => {
  const { code } = req.query;
  
  // OAuth処理
  // （詳細な実装は省略）
  
  res.json({ token: 'access_token' });
};
```

（詳細な実装例は、公式ドキュメント参照）

---

## config.ymlの更新

### ステップ1: リポジトリ情報を更新

`/admin/config.yml` を開き、以下を編集：

```yaml
backend:
  name: github
  repo: your-username/your-repository  # ← ここを実際のリポジトリ名に変更
  branch: main
```

**例**:
```yaml
backend:
  name: github
  repo: rispondere/corporate-site
  branch: main
```

### ステップ2: 認証エンドポイントを確認

#### Netlifyを使用する場合:
```yaml
backend:
  name: github
  repo: your-username/your-repository
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

#### 独自OAuth Gatewayを使用する場合:
```yaml
backend:
  name: github
  repo: your-username/your-repository
  branch: main
  base_url: https://your-oauth-gateway.herokuapp.com
  auth_endpoint: /auth
```

---

## 動作確認

### ステップ1: サイトにアクセス

1. ブラウザで管理画面を開く
   ```
   https://YOUR-SITE.com/admin/
   ```

2. Decap CMSのログイン画面が表示される

```
┌─────────────────────────────────────┐
│                                     │
│   🌐 Decap CMS                      │
│                                     │
│   有限会社Rispondere               │
│                                     │
│   ┌─────────────────────┐          │
│   │ Login with GitHub   │          │
│   └─────────────────────┘          │
│                                     │
└─────────────────────────────────────┘
```

### ステップ2: ログイン

1. **Login with GitHub** ボタンをクリック
2. GitHubの認証画面にリダイレクトされる
3. 初回のみ、アプリケーションの権限承認を求められる

```
┌─────────────────────────────────────┐
│ Authorize Rispondere CMS Admin      │
├─────────────────────────────────────┤
│                                     │
│ Rispondere CMS Admin by username    │
│ wants to access your username account│
│                                     │
│ This application will be able to:   │
│ ✓ Read and write repository contents│
│ ✓ Read user profile information    │
│                                     │
│ [Authorize application]             │
│                                     │
└─────────────────────────────────────┘
```

4. **Authorize application** をクリック
5. 管理画面にリダイレクトされる

### ステップ3: 管理画面の確認

ログインに成功すると、以下のような画面が表示されます：

```
┌─────────────────────────────────────────────┐
│  [Decap CMS]                  [username ▼]  │
├─────────────────────────────────────────────┤
│                                             │
│  📁 コレクション                            │
│                                             │
│  ┌─────────────┐  ┌─────────────┐         │
│  │デザイン設定  │  │ページ管理   │         │
│  │- カラー設定  │  │- トップ     │         │
│  │- バナー管理  │  │- 事業内容   │         │
│  └─────────────┘  └─────────────┘         │
│                                             │
│  ┌─────────────┐  ┌─────────────┐         │
│  │採用情報      │  │よくある質問  │         │
│  │- 採用詳細    │  │- FAQ管理    │         │
│  └─────────────┘  └─────────────┘         │
│                                             │
└─────────────────────────────────────────────┘
```

---

## トラブルシューティング

### Q1. ログインボタンをクリックしても何も起きない

**原因**: ポップアップがブロックされている

**対処法**:
1. ブラウザのアドレスバーにポップアップブロックのアイコンが表示されているか確認
2. ポップアップを許可する
3. 再度ログインを試す

---

### Q2. "Error: Not Found" が表示される

**原因**: OAuth App の Authorization callback URLが間違っている

**対処法**:
1. GitHubのOAuth App設定画面を開く
2. Authorization callback URLを確認
3. 正しいURL（`https://YOUR-SITE.com/admin/`）に修正
4. 変更を保存
5. 再度ログインを試す

---

### Q3. "Error: API not found" が表示される

**原因**: `config.yml` の `base_url` が間違っている

**対処法**:
1. Netlifyを使用している場合:
   ```yaml
   base_url: https://api.netlify.com
   ```
2. 独自OAuth Gatewayを使用している場合:
   ```yaml
   base_url: https://your-oauth-gateway.herokuapp.com
   ```
3. 変更を保存してコミット
4. サイトを再デプロイ

---

### Q4. "Error: Repository not found" が表示される

**原因**: リポジトリ名が間違っているか、権限がない

**対処法**:
1. `admin/config.yml` の `repo` を確認
2. 正しい形式: `username/repository-name`
3. GitHubアカウントがリポジトリへのアクセス権限を持っているか確認
4. 変更を保存してコミット

---

### Q5. ログインできるが、編集が保存できない

**原因**: GitHubの書き込み権限がない

**対処法**:
1. GitHubリポジトリの Settings → Collaborators を開く
2. 該当ユーザーを追加
3. **Write** 権限を付与
4. 再度ログインして確認

---

## 📝 チェックリスト

設定完了前に以下を確認してください：

- [ ] GitHub OAuth Appを作成した
- [ ] Client IDとClient Secretを取得した
- [ ] Netlify（または他のサービス）にサイトをデプロイした
- [ ] OAuth設定を完了した
- [ ] `admin/config.yml` の `repo` を実際のリポジトリ名に変更した
- [ ] 管理画面にアクセスできることを確認した
- [ ] GitHubでログインできることを確認した
- [ ] コンテンツを編集して保存できることを確認した

---

## 🔗 参考リンク

- **Decap CMS 公式ドキュメント**: https://decapcms.org/docs/
- **GitHub OAuth Apps**: https://docs.github.com/en/developers/apps/building-oauth-apps
- **Netlify CMS GitHub Backend**: https://decapcms.org/docs/github-backend/
- **Netlify Identity**: https://docs.netlify.com/visitor-access/identity/

---

**設定完了後**: 管理画面から採用ページ、サービスページ、画像、色味を自由に編集できるようになります！

何かご不明な点がございましたら、お気軽にお問い合わせください。
