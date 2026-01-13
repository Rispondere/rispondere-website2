# GA4（Google Analytics 4）設置完了 - 動作確認ガイド

**測定ID**: `G-YSGN8G16GZ`  
**設置完了日**: 2026-01-13  
**対象ページ**: 全9ページ

---

## ✅ 設置済みページ一覧

| ページ名 | ファイル | 確認URL |
|---------|---------|---------|
| トップページ | index.html | https://rispondere.co.jp/ |
| サービス | service.html | https://rispondere.co.jp/service.html |
| 会社紹介 | about.html | https://rispondere.co.jp/about.html |
| 採用情報 | recruit.html | https://rispondere.co.jp/recruit.html |
| お問い合わせ | contact.html | https://rispondere.co.jp/contact.html |
| プライバシーポリシー | privacy.html | https://rispondere.co.jp/privacy.html |
| 会社概要 | company.html | https://rispondere.co.jp/company.html |
| よくある質問 | faq.html | https://rispondere.co.jp/faq.html |
| 働き方 | workstyle.html | https://rispondere.co.jp/workstyle.html |

---

## 📊 設置内容

### 基本タグ（全ページ共通）

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YSGN8G16GZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YSGN8G16GZ');
</script>
```

### 追加イベント計測（採用ページのみ）

採用ページ（recruit.html）には、ボタンクリック計測も設置済み：

```javascript
// ボタンクリック計測
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      gtag('event', 'click', {
        'event_category': 'button',
        'event_label': this.textContent.trim()
      });
    });
  });
});
```

---

## 🔍 動作確認方法

### 方法1: リアルタイムレポート（推奨）

1. **Google Analytics 4 管理画面にアクセス**  
   https://analytics.google.com/

2. **プロパティを選択**  
   測定ID `G-YSGN8G16GZ` のプロパティを選択

3. **左メニュー「レポート」→「リアルタイム」をクリック**

4. **サイトにアクセスして確認**  
   別タブで https://rispondere.co.jp/ を開く

5. **リアルタイムレポートで確認**  
   - 過去30分間のユーザー数が増加
   - アクセスしたページが表示される
   - 使用デバイスが表示される

✅ **リアルタイムレポートに表示されればGA4は正常に動作しています。**

---

### 方法2: ブラウザ開発者ツール（詳細確認）

1. **サイトを開く**  
   https://rispondere.co.jp/

2. **開発者ツールを開く**  
   - **Windows/Linux**: `F12` または `Ctrl + Shift + I`
   - **Mac**: `Cmd + Option + I`

3. **「Network」タブに切り替え**

4. **ページを再読み込み（`Ctrl + R` / `Cmd + R`）**

5. **検索ボックスに「gtag」と入力してフィルター**

6. **以下のリクエストを確認**：
   - `gtag/js?id=G-YSGN8G16GZ` （ステータス: 200）
   - `g/collect` （GA4へのデータ送信）

✅ これらのリクエストが見つかれば、GA4は正常に動作しています。

---

### 方法3: Google Tag Assistant Legacy（拡張機能）

1. **Chrome拡張機能をインストール**  
   https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk

2. **サイトを開く**  
   https://rispondere.co.jp/

3. **Tag Assistantアイコンをクリック**

4. **「Record」ボタンをクリック → ページを再読み込み**

5. **検出されたタグを確認**  
   - Google Analytics 4（G-YSGN8G16GZ）が検出される
   - エラーや警告がないことを確認

---

### 方法4: ページソースで直接確認

1. **サイトを開く**  
   https://rispondere.co.jp/

2. **ページのソースを表示**  
   - **Windows/Linux**: `Ctrl + U`
   - **Mac**: `Cmd + Option + U`

3. **検索（`Ctrl + F` / `Cmd + F`）で以下を検索**：
   ```
   G-YSGN8G16GZ
   ```

4. **`<head>`内に以下のコードがあることを確認**：
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YSGN8G16GZ"></script>
   ```

✅ コードが見つかればGA4タグは正しく設置されています。

---

## 📈 GA4で確認できる情報

### 基本指標

- **訪問者数（ユーザー数）**: サイトを訪れた人の数
- **ページビュー数**: 各ページが閲覧された回数
- **セッション**: サイト訪問の回数
- **平均セッション時間**: サイトに滞在した平均時間
- **直帰率**: 1ページだけ見て離脱した割合

### ページ別データ

- **人気ページランキング**: どのページが一番見られているか
- **ページごとの滞在時間**
- **ページ遷移の流れ**: ユーザーがどのページを見て、どこへ移動したか

### 流入元分析

- **検索エンジン**: Google、Yahoo!など
- **SNS**: Twitter、Facebook、Instagramなど
- **直接流入**: URLを直接入力、またはブックマークから
- **参照サイト**: リンクを経由して訪問したサイト

### デバイス・地域

- **デバイス**: PC、スマートフォン、タブレット
- **ブラウザ**: Chrome、Safari、Edge、Firefoxなど
- **地域**: 訪問者の地理的な位置

### イベント計測（採用ページのみ）

- **ボタンクリック回数**: 採用ページの各ボタンがクリックされた回数
- **クリックされたボタンの種類**: ボタンのテキスト別に集計

---

## 🛠️ トラブルシューティング

### ❌ リアルタイムレポートに表示されない

#### 原因と対処法

1. **反映待ち（最も多い原因）**  
   → **対処法**: 30秒〜1分ほど待ってから、ページを再読み込み

2. **キャッシュの影響**  
   → **対処法**: スーパーリロードを実行  
   - **PC**: `Ctrl + Shift + R`（Win）/ `Cmd + Shift + R`（Mac）  
   - **スマホ**: ブラウザのキャッシュをクリア

3. **広告ブロッカーの影響**  
   → **対処法**: 広告ブロッカーを一時的に無効化してから確認

4. **測定ID が間違っている**  
   → **対処法**: GA4管理画面で正しい測定IDを確認（`G-YSGN8G16GZ` が正しいか確認）

5. **プロパティが違う**  
   → **対処法**: GA4管理画面で正しいプロパティを選択しているか確認

---

### ❌ ページソースにタグが見つからない

#### 原因と対処法

1. **GitHub Pagesの反映待ち**  
   → **対処法**: 変更がGitHub Pagesに反映されるまで1〜5分程度かかります。少し待ってから確認してください。

2. **キャッシュの影響**  
   → **対処法**: スーパーリロードまたはシークレットモードで確認

---

### ❌ データが計測されているか不安

#### 確認方法

1. **リアルタイムレポート**で自分のアクセスが表示されることを確認
2. **複数ページを巡回**してページビューが増えることを確認
3. **24時間後に「レポート」→「エンゲージメント」→「ページとスクリーン」**で詳細データを確認

---

## 📅 データ確認のタイミング

| データの種類 | 反映時間 | 確認方法 |
|------------|---------|---------|
| リアルタイムデータ | 数秒〜30秒 | 「レポート」→「リアルタイム」 |
| 基本レポート | 24〜48時間 | 「レポート」→各種レポート |
| カスタムレポート | 24〜48時間 | 「探索」で作成したレポート |

---

## 🎯 おすすめの確認手順（初回確認）

### ステップ1: リアルタイム確認（所要時間: 1分）

1. GA4管理画面を開く
2. 「レポート」→「リアルタイム」を開く
3. 別タブで https://rispondere.co.jp/ を開く
4. リアルタイムレポートにユーザーが表示されることを確認

✅ **ここでユーザーが表示されれば設置成功です！**

---

### ステップ2: 複数ページを確認（所要時間: 2分）

1. サイト内の各ページを巡回する
2. リアルタイムレポートで「ページタイトルとスクリーン名」を確認
3. 訪問したページが表示されることを確認

✅ **各ページの訪問が記録されていれば正常動作です。**

---

### ステップ3: 開発者ツールで詳細確認（所要時間: 1分）

1. `F12`で開発者ツールを開く
2. 「Network」タブに切り替え
3. ページを再読み込み
4. `gtag` でフィルターして、リクエストが送信されていることを確認

✅ **リクエストが送信されていればOK。**

---

### ステップ4: 24時間後に詳細レポートを確認

翌日以降、以下のレポートで詳細データを確認できます：

- **レポート → エンゲージメント → ページとスクリーン**: ページ別のアクセス数
- **レポート → 獲得 → トラフィック獲得**: 流入元の確認
- **レポート → ユーザー → ユーザー属性**: デバイス・地域の確認

---

## 📞 サポート情報

GA4の動作確認でご不明な点があれば、以下までお問い合わせください：

- **公式LINE**: [@270wnwwg](https://line.me/R/ti/p/@270wnwwg)
- **メール**: info@rispondere.co.jp
- **サイト**: https://rispondere.co.jp/
- **GitHub**: https://github.com/Rispondere/rispondere-website2

---

## 📚 参考リンク

- **Google Analytics 4 ヘルプ**: https://support.google.com/analytics/
- **GA4 データ保持期間の設定**: https://support.google.com/analytics/answer/7667196
- **GA4 イベント計測の設定**: https://support.google.com/analytics/answer/9322688

---

**完成度**: 100% 完了  
**最終更新**: 2026-01-13  
**コミット**: `485e878`

🎉 **GA4の設置が完了しました！リアルタイムレポートで動作確認を行ってください。**
