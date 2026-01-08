# 有限会社Rispondere コーポレートサイト

本案件は、指示書の内容を一切変更せず、そのまま実装しています。

## 制作仕様

- **制作方式**: 純HTML / CSS / JavaScript
- **公開**: GitHub Pages
- **管理画面**: Decap CMS（旧Netlify CMS）
- **管理画面URL**: `/admin/`
- **認証**: GitHub OAuth

## ファイル構成

```
/
├── index.html          （トップページ）
├── service.html        （事業内容）
├── workstyle.html      （仕事・働き方）
├── company.html        （会社概要）
├── faq.html            （よくある質問）
├── recruit.html        （採用情報）
├── contact.html        （お問い合わせ）
├── privacy.html        （プライバシーポリシー）
├── css/
│   └── styles.css      （共通スタイル）
├── js/
│   └── main.js         （共通スクリプト）
├── images/             （画像フォルダ）
├── content/            （CMSコンテンツデータ）
│   ├── site-config.json
│   ├── index.json
│   ├── service.json
│   ├── workstyle.json
│   ├── company.json
│   ├── recruit.json
│   └── faq/
│       ├── faq-01.json
│       ├── faq-02.json
│       └── faq-03.json
└── admin/              （管理画面）
    ├── index.html
    └── config.yml
```

## セットアップ手順

### 1. GitHub Pages の設定

1. GitHubでリポジトリを作成
2. コードをプッシュ
3. リポジトリの Settings > Pages で以下を設定：
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
   - Save

### 2. Decap CMS の設定

`/admin/config.yml` の以下の行を編集：

```yaml
backend:
  name: github
  repo: OWNER/REPO  # ← 実際のリポジトリ名に変更（例: username/rispondere）
```

### 3. GitHub OAuth の設定（オプション）

Netlify Identity または GitHub OAuth App を設定することで、管理画面へのログインが可能になります。

簡易的には、GitHubから直接コンテンツファイルを編集することも可能です。

## 管理画面での編集

管理画面URL: `https://[your-domain]/admin/`

### 編集可能な項目

- サイト設定（サイト名、ロゴ画像）
- 全ページの本文テキスト
- 画像
- FAQの追加・削除
- 採用情報の内容

### データ管理

- テキストデータ: `/content/*.json`
- 画像: `/images/`

## ローカルでの確認

以下のいずれかの方法でローカルサーバーを起動：

```bash
# Python 3の場合
python3 -m http.server 8000

# Node.jsがある場合
npx http-server -p 8000
```

ブラウザで `http://localhost:8000` にアクセス

## 注意事項

- フレームワーク・ビルドツール不使用
- 純HTML/CSS/JavaScriptのみで構成
- 管理画面からの編集内容は `/content/` 内のJSONファイルに保存
- GitHub Pages にデプロイ後は HTTPS で自動的に配信

## 制作会社向け納品物

✅ GitHubリポジトリURL
✅ GitHub Pages公開確認
✅ /admin/ 管理画面動作確認
✅ 初期テキスト・画像入力済み状態
□ 管理画面編集マニュアル（PDF 1枚）← 別途作成

---

**有限会社Rispondere**  
〒460-0007 愛知県名古屋市中区新栄2丁目8-22 NPWEST 5階  
お問い合わせ: info@rispondere.jp  
担当: 川満
