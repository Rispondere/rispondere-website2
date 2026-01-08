# 管理画面クイックスタートガイド

**5分で始める Decap CMS 管理画面**

---

## 🚀 管理画面にアクセスする

### URL
```
https://YOUR-SITE.com/admin/
```

※ `YOUR-SITE.com` を実際のサイトURLに置き換えてください

---

## 📝 初回セットアップ（3ステップ）

### ステップ1: GitHubでOAuth Appを作成

1. GitHub → Settings → Developer settings → OAuth Apps → **New OAuth App**
2. 以下を入力：

| 項目 | 入力内容 |
|------|---------|
| Application name | `Rispondere CMS Admin` |
| Homepage URL | `https://YOUR-SITE.com` |
| Authorization callback URL | `https://YOUR-SITE.com/admin/` |

3. **Register application** をクリック
4. **Generate a new client secret** をクリック
5. **Client ID** と **Client Secret** をコピーして保存

---

### ステップ2: Netlifyにデプロイ（推奨）

**なぜNetlifyか？**  
GitHub Pagesではサーバーサイド処理ができないため、OAuth認証に対応していません。
Netlifyを使うことで、無料で簡単にOAuth認証が使えます。

#### 2-1. Netlifyにサインアップ
https://www.netlify.com/ → **Start building for free**

#### 2-2. GitHubリポジトリと連携
1. **Add new site** → **Import an existing project**
2. **GitHub** を選択
3. リポジトリを選択
4. Build settings:
   - Build command: （空欄）
   - Publish directory: `.`
5. **Deploy site** をクリック

#### 2-3. Netlify でOAuth設定
1. Site configuration → Access control → OAuth
2. **Install provider** → **GitHub** を選択
3. Client IDとClient Secretを入力
4. **Install** をクリック

---

### ステップ3: config.ymlを編集

`/admin/config.yml` を開き、以下を編集：

```yaml
backend:
  name: github
  repo: your-username/your-repository  # ← 実際のリポジトリ名に変更
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

**例**:
```yaml
backend:
  name: github
  repo: rispondere/corporate-site
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

---

## ✅ ログイン

1. `https://YOUR-NETLIFY-SITE.netlify.app/admin/` にアクセス
2. **Login with GitHub** をクリック
3. GitHubで認証
4. 管理画面が開きます！

---

## 📂 管理画面で編集できるもの

### 1. デザイン設定
- **カラー設定**: メインカラー、サブカラー、背景色、文字色
- **バナー画像**: トップページ、採用ページのバナー（最大4枚）

### 2. ページ管理
- **トップページ**: メインコピー、本文
- **事業内容**: ページタイトル、本文（Markdown）
- **仕事・働き方**: ページタイトル、本文（Markdown）
- **会社概要**: 会社名、住所、事業内容、連絡先

### 3. 採用ページ（2本立て）
- **ヒーロー**: メインコピー、サブコピー
- **業務サポート職**: ポイント3つ、給与、1日の流れ、仕事内容カード、福利厚生、選考フロー
- **デザイン職**: ステータス、紹介文、求めるスキル

### 4. よくある質問
- FAQ項目の追加・編集・削除・順序変更

---

## 💡 よくある質問

### Q: GitHub Pagesだけで管理画面を使えますか？
A: いいえ。OAuth認証にはサーバーサイド処理が必要なため、Netlify等のサービスが必要です。

### Q: Netlifyは無料ですか？
A: はい。個人サイトなら無料プランで十分です。

### Q: 編集した内容はすぐに反映されますか？
A: はい。保存するとGitHubにコミットされ、自動的にサイトが再デプロイされます（1〜3分）。

---

## 🔗 詳細ドキュメント

より詳しい手順は以下をご覧ください：

- **GITHUB_OAUTH_SETUP.md** - OAuth認証の詳細設定
- **CMS_MANUAL.md** - 管理画面の詳細操作マニュアル
- **README.md** - プロジェクト全体の概要

---

**これで管理画面が使えるようになりました！** 🎉

ご不明な点がございましたら、お気軽にお問い合わせください。
