# GA4（Googleアナリティクス）導入ガイド

## 📊 現在の導入状況

### ❌ 未導入
GA4（Googleアナリティクス4）は**まだ導入されていません**。

**確認結果:**
- `recruit.html` にGA4のコードがありますが、**コメントアウトされています**
- 測定ID（G-XXXXXXXXXX）は**プレースホルダー**のままです
- 他のページ（index.html, service.html, about.html, contact.html）には**GA4コードがありません**

---

## 🎯 GA4導入の手順

### ステップ1：GA4プロパティの作成

#### 1. Googleアナリティクスにアクセス
```
https://analytics.google.com/
```

#### 2. 管理画面を開く
- 左下の **⚙️（歯車アイコン）** をクリック

#### 3. プロパティを作成
1. 「プロパティを作成」をクリック
2. プロパティ名を入力:
   ```
   Rispondere コーポレートサイト
   ```
3. タイムゾーンを選択:
   ```
   日本
   ```
4. 通貨を選択:
   ```
   日本円（¥）
   ```
5. 「次へ」をクリック

#### 4. ビジネスの詳細を入力
1. 業種を選択:
   ```
   ビジネスサービス → デザイン・制作
   ```
2. ビジネスの規模:
   ```
   小規模（従業員1～10人）
   ```
3. 「次へ」をクリック

#### 5. ビジネス目標を選択
- ビジネス目標を選択（複数選択可）:
  - ✅ リードを獲得する
  - ✅ オンラインでの販売を促進する
  - ✅ ユーザーエンゲージメントを測定する

#### 6. データストリームを作成
1. 「ウェブ」を選択
2. ウェブサイトのURLを入力:
   ```
   https://rispondere.co.jp
   ```
3. ストリーム名を入力:
   ```
   Rispondereウェブサイト
   ```
4. 「ストリームを作成」をクリック

#### 7. 測定IDを確認
- **測定ID**（`G-XXXXXXXXXX` の形式）が表示されます
- この測定IDを控えておいてください

---

### ステップ2：GA4タグの設置

#### 方法1：グローバルサイトタグ（推奨）

すべてのHTMLファイルの `<head>` セクションに、以下のコードを追加します。

**追加するコード:**
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**注意:** `G-XXXXXXXXXX` を実際の測定IDに置き換えてください。

#### 追加が必要なファイル
- ✅ `index.html` - トップページ
- ✅ `service.html` - サービスページ
- ✅ `about.html` - 会社紹介ページ
- ✅ `recruit.html` - 採用ページ（既存コードのコメント解除＋ID更新）
- ✅ `contact.html` - お問い合わせページ
- ✅ `privacy.html` - プライバシーポリシー

#### 追加位置
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <title>...</title>
  
  <!-- ここにGA4コードを追加 -->
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  <!-- GA4コードここまで -->
  
  <link rel="stylesheet" href="/css/styles.css">
</head>
```

---

### ステップ3：イベントトラッキングの設定（オプション）

特定のアクションを追跡したい場合、イベントトラッキングを追加できます。

#### ボタンクリックの追跡

**例：お問い合わせボタンのクリックを追跡**
```html
<a href="/contact.html" class="btn btn--primary" onclick="gtag('event', 'click_contact', {'event_category': 'button', 'event_label': 'お問い合わせボタン'});">
  お問い合わせ
</a>
```

#### LINE公式アカウントへのリンククリックを追跡
```html
<a href="https://line.me/R/ti/p/@270wnwwg" target="_blank" onclick="gtag('event', 'click_line', {'event_category': 'external_link', 'event_label': 'LINE公式アカウント'});">
  公式LINEで相談
</a>
```

#### 採用ページへの遷移を追跡
```html
<a href="/recruit.html" class="btn" onclick="gtag('event', 'view_recruitment', {'event_category': 'navigation', 'event_label': '採用ページ'});">
  募集要項を見る
</a>
```

---

### ステップ4：動作確認

#### 1. リアルタイムレポートで確認

1. Googleアナリティクスの管理画面を開く
2. 左メニューから **「レポート」→「リアルタイム」** を選択
3. 自分のサイトにアクセス
4. リアルタイムレポートに **「1人のユーザー」** と表示されればOK！

#### 2. ブラウザの開発者ツールで確認

1. サイトを開く
2. `F12` キー（または右クリック→「検証」）で開発者ツールを開く
3. **「Console」** タブを選択
4. 以下のメッセージがエラーなく表示されればOK:
   ```
   Google Analytics loaded
   ```

#### 3. GA4 Debug Viewで確認（推奨）

1. Chrome拡張機能「Google Analytics Debugger」をインストール
2. 拡張機能を有効化
3. サイトにアクセス
4. GA4管理画面の **「管理」→「DebugView」** でイベントが表示されればOK！

---

## 📊 確認できるデータ

### 基本データ
- **ユーザー数**: サイトに訪問したユーザーの数
- **セッション数**: 訪問回数
- **ページビュー数**: 閲覧されたページ数
- **平均エンゲージメント時間**: ユーザーがサイトに滞在した時間
- **直帰率**: 1ページだけ見て離脱したユーザーの割合

### ページ別データ
- どのページが多く見られているか
- どのページで離脱が多いか
- どのページからお問い合わせに進んでいるか

### トラフィックソース
- どこからサイトに来たか（Google検索、SNS、直接アクセスなど）
- どのキーワードで検索してきたか

### デバイス別データ
- PC、スマホ、タブレットの利用比率
- デバイス別のユーザー行動の違い

### イベント（カスタム追跡）
- ボタンのクリック数
- 外部リンクのクリック数
- 特定のアクションの回数

---

## 🎯 測定ID取得後の作業フロー

### 1. 測定IDを取得
Googleアナリティクスで `G-XXXXXXXXXX` 形式の測定IDを取得

### 2. HTMLファイルを更新
以下のファイルにGA4タグを追加:
- index.html
- service.html
- about.html
- recruit.html（既存コードを有効化）
- contact.html
- privacy.html

### 3. GitHubにコミット&プッシュ
```bash
git add .
git commit -m "Add: GA4（Googleアナリティクス）タグを全ページに追加"
git push origin main
```

### 4. 動作確認
- リアルタイムレポートで確認
- 開発者ツールで確認
- Debug Viewで確認

### 5. プライバシーポリシーの更新
GA4の利用について、プライバシーポリシーに記載を追加

---

## 📝 プライバシーポリシーへの追記例

`privacy.html` に以下の内容を追加することをおすすめします：

```html
<h2>アクセス解析ツールについて</h2>
<p>
  当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
  このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
  このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
</p>
<p>
  この機能はCookieを無効にすることで収集を拒否することが出来ますので、
  お使いのブラウザの設定をご確認ください。
</p>
<p>
  Googleアナリティクスの利用規約については、
  <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener">こちら</a>をご覧ください。
</p>
```

---

## 🚨 よくある質問

### Q1. 測定IDはどこで確認できますか？

**A:** Googleアナリティクスの管理画面で確認できます。

1. 左下の **⚙️（歯車アイコン）** → 「管理」
2. 「プロパティ」列の **「データストリーム」** をクリック
3. 作成したストリームをクリック
4. **「測定ID」** が `G-XXXXXXXXXX` の形式で表示されます

### Q2. データが表示されるまでどのくらいかかりますか？

**A:** リアルタイムデータはすぐに表示されますが、通常のレポートには **24〜48時間** かかります。

### Q3. 過去のデータは見られますか？

**A:** GA4は設置した日からのデータのみ収集します。過去のデータは見られません。

### Q4. 無料で使えますか？

**A:** はい、Googleアナリティクスは **完全無料** で使用できます。

### Q5. 他のアクセス解析ツールと併用できますか？

**A:** はい、併用可能です。ただし、複数のツールを使うとページ速度に影響する可能性があります。

---

## 📂 関連ファイル

| ファイル | 説明 | URL |
|---------|------|-----|
| recruit.html | GA4コードあり（コメントアウト） | [GitHub](https://github.com/Rispondere/rispondere-website2/blob/main/recruit.html) |
| privacy.html | プライバシーポリシー | [サイト](https://rispondere.co.jp/privacy.html) |

---

## 🔗 参考リンク

- **Googleアナリティクス**: https://analytics.google.com/
- **GA4ヘルプセンター**: https://support.google.com/analytics/answer/9304153
- **GA4設定アシスタント**: https://support.google.com/analytics/answer/9744165
- **イベント測定ガイド**: https://developers.google.com/analytics/devguides/collection/ga4/events

---

## 📞 サポート

GA4の導入でお困りの場合は、お気軽にお問い合わせください。

- **公式LINE**: [@270wnwwg](https://line.me/R/ti/p/@270wnwwg)
- **メール**: info@rispondere.co.jp
- **サイトURL**: https://rispondere.co.jp/
- **GitHubリポジトリ**: https://github.com/Rispondere/rispondere-website2

---

## 📅 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-01-13 | GA4導入ガイド初版作成 |
| 2026-01-13 | 現在の導入状況を確認（未導入） |

---

## ✅ 導入チェックリスト

### GA4プロパティ作成
- ⬜ Googleアナリティクスにログイン
- ⬜ プロパティを作成
- ⬜ データストリームを作成
- ⬜ 測定ID（G-XXXXXXXXXX）を取得

### タグ設置
- ⬜ index.html にGA4タグを追加
- ⬜ service.html にGA4タグを追加
- ⬜ about.html にGA4タグを追加
- ⬜ recruit.html のGA4タグを有効化＋ID更新
- ⬜ contact.html にGA4タグを追加
- ⬜ privacy.html にGA4タグを追加

### 確認
- ⬜ GitHubにコミット&プッシュ
- ⬜ リアルタイムレポートで動作確認
- ⬜ プライバシーポリシーに記載を追加

### 運用
- ⬜ 定期的にレポートを確認
- ⬜ 重要なイベントを追跡
- ⬜ データに基づいてサイトを改善

---

**まずはGoogleアナリティクスでGA4プロパティを作成し、測定IDを取得してください！**

測定IDを取得したら、お知らせいただければ、すぐにタグを設置いたします。🚀

