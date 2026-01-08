# Google Analytics 4 (GA4) とSearch Console 設定ガイド

## 📊 Google Analytics 4 (GA4) 導入手順

### 1. GA4プロパティの作成
1. [Google Analytics](https://analytics.google.com/) にアクセス
2. 管理 → プロパティを作成
3. プロパティ名を入力（例：Rispondere コーポレートサイト）
4. タイムゾーンと通貨を設定（日本/JPY）
5. 「次へ」→ ウェブサイトを選択
6. 測定IDが発行されます（形式：G-XXXXXXXXXX）

### 2. トラッキングコードの設置

すべてのHTMLファイルの `<head>` タグ内に以下のコードを追加してください。

```html
<!-- Google Analytics 4 (GA4) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**⚠️ 重要**: `G-XXXXXXXXXX` を実際の測定IDに置き換えてください。

### 3. イベント計測（自動設定済み）

以下のイベントが自動的に計測されます：

#### 採用→お問い合わせクリック
- **イベント名**: `click`
- **カテゴリ**: `recruit`
- **ラベル**: `recruit_to_contact`

#### お問い合わせ送信完了
- **イベント名**: `form_submit`
- **カテゴリ**: `contact`
- **ラベル**: `contact_form_success`

### 4. イベントの確認方法
1. Google Analytics → レポート → リアルタイム
2. サイトを訪問してボタンをクリック
3. リアルタイムでイベントが表示されることを確認

---

## 🔍 Google Search Console 設定手順

### 1. Search Consoleにサイトを追加
1. [Google Search Console](https://search.google.com/search-console/) にアクセス
2. 「プロパティを追加」をクリック
3. URLプレフィックスを選択
4. サイトURL（https://[YOUR-SITE-URL]/）を入力

### 2. 所有権の確認

#### 方法1: HTMLタグ（推奨）

以下のメタタグをすべてのHTMLファイルの `<head>` 内に追加してください。

```html
<!-- Google Search Console 所有権確認 -->
<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
```

**⚠️ 重要**: `XXXXXXXXXXXXXXXXXXXXXXXXXXXX` を実際の確認コードに置き換えてください。

#### 方法2: HTMLファイル
1. Search Consoleからダウンロードしたファイルをルートディレクトリに配置
2. GitHub Pages にデプロイ

### 3. sitemap.xml の送信

1. Search Console → サイトマップ
2. 新しいサイトマップの追加
3. `sitemap.xml` と入力して送信
4. ステータスが「成功しました」になることを確認

### 4. sitemap.xml の更新

`sitemap.xml` 内の `[YOUR-SITE-URL]` を実際のサイトURLに置き換えてください。

例：
```xml
<loc>https://[USERNAME].github.io/[REPO_NAME]/</loc>
```
↓
```xml
<loc>https://rispondere.github.io/corporate-site/</loc>
```

---

## 🎯 設定の確認方法

### GA4の動作確認
1. サイトを開く
2. 開発者ツール（F12）→ ネットワークタブ
3. `google-analytics.com` へのリクエストが送信されているか確認
4. GA4のリアルタイムレポートで訪問が表示されるか確認

### Search Consoleの動作確認
1. Search Console → 概要
2. 「プロパティに移動」をクリック
3. データが表示され始めるまで数日かかります

---

## 📝 設定場所まとめ

### GA4タグを追加するファイル
- index.html
- service.html
- workstyle.html
- company.html
- recruit.html
- faq.html
- contact.html
- privacy.html

### Search Console確認タグを追加するファイル
- 同上（全HTMLファイル）

### sitemap.xml の更新
- sitemap.xml（[YOUR-SITE-URL] を実際のURLに置き換え）

---

## 🚀 デプロイ後の手順

1. ✅ GA4測定IDを取得
2. ✅ 全HTMLファイルにGA4タグを追加
3. ✅ GitHub Pagesにデプロイ
4. ✅ Search Consoleでサイトを追加
5. ✅ Search Console確認タグを追加（または確認ファイルをアップロード）
6. ✅ sitemap.xml を送信
7. ✅ GA4リアルタイムレポートで動作確認
8. ✅ Search Consoleで所有権確認完了を確認

---

## ❓ トラブルシューティング

### GA4でデータが表示されない
- 測定IDが正しいか確認
- タグが `<head>` 内に配置されているか確認
- ブラウザの拡張機能（広告ブロッカー等）を無効にして確認

### Search Consoleで所有権が確認できない
- 確認タグが `<head>` 内に配置されているか確認
- GitHub Pagesのデプロイが完了しているか確認
- キャッシュをクリアしてページを再読み込み

---

**有限会社Rispondere コーポレートサイト**  
GA4 & Search Console 設定ガイド  
作成日: 2026年1月8日
