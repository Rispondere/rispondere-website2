# Google Search Console 設定ガイド

## 概要
このガイドでは、Rispondere コーポレートサイト（https://rispondere.co.jp/）をGoogle Search Consoleに登録する手順を説明します。

---

## 📋 設定の流れ

1. ✅ **検証ファイルの配置**（完了）
2. ⚙️ **Google Search Consoleでの所有権確認**
3. 🔍 **サイトマップの送信**
4. 📊 **検索パフォーマンスの確認**

---

## ✅ ステップ1：検証ファイルの配置（完了）

Google Search Console用の検証ファイルを配置しました。

**ファイル名:**
```
googlecca2befb9eeb98e2.html
```

**配置場所:**
```
/home/user/webapp/googlecca2befb9eeb98e2.html
```

**公開URL:**
```
https://rispondere.co.jp/googlecca2befb9eeb98e2.html
```

**ファイル内容:**
```
google-site-verification: googlecca2befb9eeb98e2.html
```

---

## ⚙️ ステップ2：Google Search Consoleでの所有権確認

### 手順

#### 1. Google Search Consoleにアクセス
```
https://search.google.com/search-console
```

#### 2. プロパティを追加
- 左上の **「プロパティを追加」** をクリック
- **「URLプレフィックス」** を選択
- 以下のURLを入力:
  ```
  https://rispondere.co.jp
  ```
- **「続行」** をクリック

#### 3. 所有権の確認
- **「HTMLファイル」** タブを選択
- 以下のファイル名が表示されていることを確認:
  ```
  googlecca2befb9eeb98e2.html
  ```
- **「確認」** ボタンをクリック

#### 4. 確認完了
- **「所有権を確認しました」** と表示されればOK！
- **「プロパティに移動」** をクリックしてダッシュボードに移動

---

## 🔍 ステップ3：サイトマップの送信

サイトマップを送信することで、Googleにサイト構造を伝えることができます。

### サイトマップの作成

#### 簡易版サイトマップ
以下の内容で `sitemap.xml` を作成することをおすすめします：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rispondere.co.jp/</loc>
    <lastmod>2026-01-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rispondere.co.jp/service.html</loc>
    <lastmod>2026-01-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rispondere.co.jp/about.html</loc>
    <lastmod>2026-01-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rispondere.co.jp/recruit.html</loc>
    <lastmod>2026-01-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rispondere.co.jp/contact.html</loc>
    <lastmod>2026-01-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://rispondere.co.jp/privacy.html</loc>
    <lastmod>2026-01-13</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

### サイトマップの送信手順

#### 1. Google Search Consoleのダッシュボードを開く
```
https://search.google.com/search-console
```

#### 2. サイトマップセクションに移動
- 左メニューから **「サイトマップ」** をクリック

#### 3. サイトマップURLを入力
- **「新しいサイトマップの追加」** 欄に以下を入力:
  ```
  sitemap.xml
  ```
- **「送信」** ボタンをクリック

#### 4. 送信完了
- ステータスが **「成功しました」** と表示されればOK！

---

## 📊 ステップ4：検索パフォーマンスの確認

### 確認できる項目

#### 1. 検索パフォーマンス
- **クリック数**: サイトへのクリック数
- **表示回数**: 検索結果での表示回数
- **CTR（クリック率）**: 表示回数に対するクリック数の割合
- **平均掲載順位**: 検索結果での平均順位

#### 2. URL検査
- 特定のページがGoogleにインデックスされているか確認
- インデックス登録のリクエスト

#### 3. カバレッジ
- インデックスされたページ数
- エラーや警告の確認

#### 4. モバイルユーザビリティ
- スマホ表示の問題を確認

---

## 🚨 トラブルシューティング

### 検証ファイルが見つからない

**原因:**
- ファイルがまだGitHub Pagesに反映されていない
- DNSの設定が完了していない

**対処法:**
1. 数分待ってから再度確認
2. 以下のURLに直接アクセスして確認:
   ```
   https://rispondere.co.jp/googlecca2befb9eeb98e2.html
   ```
3. ブラウザのキャッシュをクリアして再試行

### 所有権の確認に失敗する

**原因:**
- ファイルの内容が正しくない
- ファイルの配置場所が間違っている

**対処法:**
1. ファイルの内容を確認:
   ```
   google-site-verification: googlecca2befb9eeb98e2.html
   ```
2. ファイルがルートディレクトリに配置されているか確認
3. HTTPSでアクセスできるか確認

---

## 📝 設定チェックリスト

### 検証ファイル
- ✅ googlecca2befb9eeb98e2.html をルートディレクトリに配置
- ✅ GitHubにコミット&プッシュ完了
- ⬜ https://rispondere.co.jp/googlecca2befb9eeb98e2.html にアクセス可能

### Google Search Console
- ⬜ プロパティを追加（https://rispondere.co.jp）
- ⬜ HTMLファイル方式で所有権を確認
- ⬜ 所有権確認完了
- ⬜ サイトマップを送信（sitemap.xml）

### 確認
- ⬜ 検索パフォーマンスが表示される（数日〜数週間かかる場合あり）
- ⬜ URL検査でページがインデックスされている
- ⬜ カバレッジでエラーがない
- ⬜ モバイルユーザビリティに問題がない

---

## 🎯 推奨設定

### 1. robots.txt の作成

サイトのルートに `robots.txt` を配置することをおすすめします：

```
User-agent: *
Allow: /

Sitemap: https://rispondere.co.jp/sitemap.xml
```

### 2. メタタグの確認

各ページの `<head>` に適切なメタタグがあることを確認：

```html
<meta name="description" content="ページの説明文">
<meta name="keywords" content="キーワード1, キーワード2">
<title>ページタイトル｜有限会社Rispondere</title>
```

### 3. 構造化データの追加

Google に企業情報を伝えるため、構造化データ（JSON-LD）の追加を検討：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "有限会社Rispondere",
  "url": "https://rispondere.co.jp/",
  "logo": "https://rispondere.co.jp/images/logo/rispondere-logo-final.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+81-52-253-5385",
    "contactType": "customer service",
    "email": "info@rispondere.jp"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "中区新栄2丁目8-22 NPWEST 5階",
    "addressLocality": "名古屋市",
    "addressRegion": "愛知県",
    "postalCode": "460-0007",
    "addressCountry": "JP"
  }
}
</script>
```

---

## 📊 検索結果の改善のヒント

### 1. タイトルタグの最適化
- 各ページに固有のタイトルを設定
- 重要なキーワードを前方に配置
- 50〜60文字程度に収める

### 2. メタディスクリプションの最適化
- 各ページの内容を簡潔に説明
- 120〜160文字程度に収める
- 行動を促す言葉を含める

### 3. 見出しタグの活用
- H1タグはページに1つだけ
- H2、H3タグで階層構造を作る
- キーワードを自然に含める

### 4. 画像のalt属性を設定
- すべての画像に適切なalt属性を設定
- キーワードを自然に含める
- 画像の内容を簡潔に説明

### 5. 内部リンクの最適化
- 関連ページへのリンクを設置
- アンカーテキストに意味のある言葉を使う
- サイト全体の導線を整える

---

## 📞 サポート

Google Search Consoleの設定でお困りの場合は、お気軽にお問い合わせください。

- **公式LINE**: [@270wnwwg](https://line.me/R/ti/p/@270wnwwg)
- **メール**: info@rispondere.jp
- **サイトURL**: https://rispondere.co.jp/
- **GitHubリポジトリ**: https://github.com/Rispondere/rispondere-website2

---

## 📅 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-01-13 | Google Search Console検証ファイル配置完了 |
| 2026-01-13 | 設定ガイド初版作成 |

---

## 🔗 参考リンク

- **Google Search Console**: https://search.google.com/search-console
- **Google Search Console ヘルプ**: https://support.google.com/webmasters
- **サイトマップについて**: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- **構造化データ**: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

