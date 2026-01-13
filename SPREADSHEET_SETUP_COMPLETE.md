# 📋 Rispondere公式サイト - Googleスプレッドシート完全設定ガイド

## 🎯 スプレッドシート構成（指示書準拠）

スプレッドシート名: **Rispondere_HP_CMS**

---

## 📊 シート1: site_settings（サイト基本設定）

| key | value | description |
|-----|-------|-------------|
| site_name | 有限会社Rispondere | サイト名 |
| primary_color | #b38a2e | メインカラー（ボタン、アクセント） |
| accent_color | #f44336 | アクセントカラー（サブボタン） |
| text_color | #1a1a1a | テキストの色 |
| bg_color | #ffffff | 背景色 |
| phone | 052-253-5385 | 電話番号 |
| email_public | info@rispondere.co.jp | 公開用メールアドレス |
| email_contact | rispo.manager@nagopre.com | 問い合わせ受信先（非公開） |
| address | 愛知県名古屋市中区新栄2丁目8-22 NPWEST5階 | 住所 |
| postal_code | 〒460-0007 | 郵便番号 |
| contact_redirect | /contact.html?success=true | 問い合わせ送信後のリダイレクト先 |
| ga4_measurement_id | G-XXXXXXXXXX | GA4計測ID（後で設定） |
| logo_url | https://rispondere.github.io/rispondere.co.jp/images/logo/rispondere-logo.svg | ロゴ画像URL |

---

## 📊 シート2: top_sections（トップページセクション）

| section_id | title | body | image_url | cta_text | cta_url | order | visible |
|------------|-------|------|-----------|----------|---------|-------|---------|
| hero | 広告・Webを通じて、<br>クライアントの運営を支える。 | 有限会社Rispondereは、<br>広告・Web・販促物の制作を行うデザイン会社です。<br><br>バナー制作や画像編集、Webまわりのサポートを中心に、<br>実務に即した制作・運用支援を行っています。 | https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg | 事業内容を見る | /rispondere.co.jp/service.html | 1 | TRUE |
| reason1 | 運用前提 | 作って終わりではなく、更新・改善しやすい形を重視します。 |  |  |  | 2 | TRUE |
| reason2 | スピード | 依頼の意図を外さず、やり取りコストを減らします。 |  |  |  | 3 | TRUE |
| reason3 | 仕組み化 | 現場が迷わないように、情報を整えて渡します。 |  |  |  | 4 | TRUE |

---

## 📊 シート3: service_items（事業内容）

| id | title | body | icon_url | order | visible |
|----|-------|------|----------|-------|---------|
| 1 | バナー・画像制作 | バナー制作／画像編集／レタッチなど、運用に必要な制作物をスピーディに整えます。 |  | 1 | TRUE |
| 2 | Web制作サポート | 更新・差し替え前提の設計で、運用しやすいWebまわりを支援します。 |  | 2 | TRUE |
| 3 | 制作進行・業務サポート | 情報整理、進行管理、社内外調整など「回る仕組み」を整えます。 |  | 3 | TRUE |

---

## 📊 シート4: recruit_jobs（採用募集）

| id | job_title | catch | salary | work_time | holiday | location | body | order | visible |
|----|-----------|-------|--------|-----------|---------|----------|------|-------|---------|
| 1 | 業務サポート職 | 制作進行・事務・運営サポート | 年収500〜600万円 / 月収30〜40万円 | 10:00〜19:00（休憩1時間） | 土日祝、年末年始、有給休暇 | 愛知県名古屋市中区新栄2丁目8-22 NPWEST5階 | 制作進行、事務処理、クライアント対応など、制作と運営をつなぐサポート業務全般 | 1 | TRUE |
| 2 | デザイン職（将来枠） | 実務に強いデザインができる方を将来的に募集予定 | 応相談 | 応相談 | 応相談 | 愛知県名古屋市中区新栄2丁目8-22 NPWEST5階 | バナー制作、Web制作、販促物デザインなど | 2 | FALSE |

---

## 📊 シート5: recruit_faq（採用FAQ）

| id | question | answer | order | visible |
|----|----------|--------|-------|---------|
| 1 | 未経験でも応募できますか？ | はい、可能です。丁寧にサポートしますので、ご安心ください。 | 1 | TRUE |
| 2 | リモートワークは可能ですか？ | 現在は出社を基本としていますが、状況に応じて柔軟に対応します。 | 2 | TRUE |
| 3 | 選考の流れを教えてください。 | 書類選考 → 面接（1〜2回） → 内定の流れになります。 | 3 | TRUE |

---

## 📊 シート6: banners（バナー画像）

| id | page | image_url | link_url | alt | order | visible |
|----|------|-----------|----------|-----|-------|---------|
| 1 | top | https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg | /rispondere.co.jp/recruit.html | トップページヒーローバナー | 1 | TRUE |
| 2 | recruit | https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg |  | 採用ページヒーローバナー | 1 | TRUE |
| 3 | recruit_gallery1 | https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg |  | 制作実績1 | 1 | TRUE |
| 4 | recruit_gallery2 | https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg |  | 制作実績2 | 2 | TRUE |
| 5 | recruit_gallery3 | https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg |  | 制作実績3 | 3 | TRUE |

---

## 🚀 Google Apps Script で一括作成

以下のコードを Apps Script で実行すると、全シートを自動作成できます。

### Step 1: スプレッドシートを開く
https://docs.google.com/spreadsheets/d/1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE/edit

### Step 2: Apps Script を開く
拡張機能 → Apps Script

### Step 3: 以下のコードを実行

```javascript
function setupAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 既存のシート「settings」を削除（必要なら）
  const oldSheet = ss.getSheetByName('settings');
  if (oldSheet) {
    ss.deleteSheet(oldSheet);
  }
  
  // シート1: site_settings
  setupSiteSettings(ss);
  
  // シート2: top_sections
  setupTopSections(ss);
  
  // シート3: service_items
  setupServiceItems(ss);
  
  // シート4: recruit_jobs
  setupRecruitJobs(ss);
  
  // シート5: recruit_faq
  setupRecruitFAQ(ss);
  
  // シート6: banners
  setupBanners(ss);
  
  SpreadsheetApp.getUi().alert('✅ 完了！\n\n全シートを作成しました。');
}

function setupSiteSettings(ss) {
  const sheet = ss.insertSheet('site_settings');
  const data = [
    ['key', 'value', 'description'],
    ['site_name', '有限会社Rispondere', 'サイト名'],
    ['primary_color', '#b38a2e', 'メインカラー（ボタン、アクセント）'],
    ['accent_color', '#f44336', 'アクセントカラー（サブボタン）'],
    ['text_color', '#1a1a1a', 'テキストの色'],
    ['bg_color', '#ffffff', '背景色'],
    ['phone', '052-253-5385', '電話番号'],
    ['email_public', 'info@rispondere.co.jp', '公開用メールアドレス'],
    ['email_contact', 'rispo.manager@nagopre.com', '問い合わせ受信先（非公開）'],
    ['address', '愛知県名古屋市中区新栄2丁目8-22 NPWEST5階', '住所'],
    ['postal_code', '〒460-0007', '郵便番号'],
    ['contact_redirect', '/contact.html?success=true', '問い合わせ送信後のリダイレクト先'],
    ['ga4_measurement_id', 'G-XXXXXXXXXX', 'GA4計測ID（後で設定）'],
    ['logo_url', 'https://rispondere.github.io/rispondere.co.jp/images/logo/rispondere-logo.svg', 'ロゴ画像URL']
  ];
  sheet.getRange(1, 1, data.length, 3).setValues(data);
  sheet.getRange(1, 1, 1, 3).setFontWeight('bold');
  sheet.autoResizeColumns(1, 3);
}

function setupTopSections(ss) {
  const sheet = ss.insertSheet('top_sections');
  const data = [
    ['section_id', 'title', 'body', 'image_url', 'cta_text', 'cta_url', 'order', 'visible'],
    ['hero', '広告・Webを通じて、<br>クライアントの運営を支える。', '有限会社Rispondereは、<br>広告・Web・販促物の制作を行うデザイン会社です。<br><br>バナー制作や画像編集、Webまわりのサポートを中心に、<br>実務に即した制作・運用支援を行っています。', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '事業内容を見る', '/rispondere.co.jp/service.html', 1, 'TRUE'],
    ['reason1', '運用前提', '作って終わりではなく、更新・改善しやすい形を重視します。', '', '', '', 2, 'TRUE'],
    ['reason2', 'スピード', '依頼の意図を外さず、やり取りコストを減らします。', '', '', '', 3, 'TRUE'],
    ['reason3', '仕組み化', '現場が迷わないように、情報を整えて渡します。', '', '', '', 4, 'TRUE']
  ];
  sheet.getRange(1, 1, data.length, 8).setValues(data);
  sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
  sheet.autoResizeColumns(1, 8);
}

function setupServiceItems(ss) {
  const sheet = ss.insertSheet('service_items');
  const data = [
    ['id', 'title', 'body', 'icon_url', 'order', 'visible'],
    [1, 'バナー・画像制作', 'バナー制作／画像編集／レタッチなど、運用に必要な制作物をスピーディに整えます。', '', 1, 'TRUE'],
    [2, 'Web制作サポート', '更新・差し替え前提の設計で、運用しやすいWebまわりを支援します。', '', 2, 'TRUE'],
    [3, '制作進行・業務サポート', '情報整理、進行管理、社内外調整など「回る仕組み」を整えます。', '', 3, 'TRUE']
  ];
  sheet.getRange(1, 1, data.length, 6).setValues(data);
  sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  sheet.autoResizeColumns(1, 6);
}

function setupRecruitJobs(ss) {
  const sheet = ss.insertSheet('recruit_jobs');
  const data = [
    ['id', 'job_title', 'catch', 'salary', 'work_time', 'holiday', 'location', 'body', 'order', 'visible'],
    [1, '業務サポート職', '制作進行・事務・運営サポート', '年収500〜600万円 / 月収30〜40万円', '10:00〜19:00（休憩1時間）', '土日祝、年末年始、有給休暇', '愛知県名古屋市中区新栄2丁目8-22 NPWEST5階', '制作進行、事務処理、クライアント対応など、制作と運営をつなぐサポート業務全般', 1, 'TRUE'],
    [2, 'デザイン職（将来枠）', '実務に強いデザインができる方を将来的に募集予定', '応相談', '応相談', '応相談', '愛知県名古屋市中区新栄2丁目8-22 NPWEST5階', 'バナー制作、Web制作、販促物デザインなど', 2, 'FALSE']
  ];
  sheet.getRange(1, 1, data.length, 10).setValues(data);
  sheet.getRange(1, 1, 1, 10).setFontWeight('bold');
  sheet.autoResizeColumns(1, 10);
}

function setupRecruitFAQ(ss) {
  const sheet = ss.insertSheet('recruit_faq');
  const data = [
    ['id', 'question', 'answer', 'order', 'visible'],
    [1, '未経験でも応募できますか？', 'はい、可能です。丁寧にサポートしますので、ご安心ください。', 1, 'TRUE'],
    [2, 'リモートワークは可能ですか？', '現在は出社を基本としていますが、状況に応じて柔軟に対応します。', 2, 'TRUE'],
    [3, '選考の流れを教えてください。', '書類選考 → 面接（1〜2回） → 内定の流れになります。', 3, 'TRUE']
  ];
  sheet.getRange(1, 1, data.length, 5).setValues(data);
  sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
  sheet.autoResizeColumns(1, 5);
}

function setupBanners(ss) {
  const sheet = ss.insertSheet('banners');
  const data = [
    ['id', 'page', 'image_url', 'link_url', 'alt', 'order', 'visible'],
    [1, 'top', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '/rispondere.co.jp/recruit.html', 'トップページヒーローバナー', 1, 'TRUE'],
    [2, 'recruit', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '', '採用ページヒーローバナー', 1, 'TRUE'],
    [3, 'recruit_gallery1', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '', '制作実績1', 1, 'TRUE'],
    [4, 'recruit_gallery2', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '', '制作実績2', 2, 'TRUE'],
    [5, 'recruit_gallery3', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '', '制作実績3', 3, 'TRUE']
  ];
  sheet.getRange(1, 1, data.length, 7).setValues(data);
  sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
  sheet.autoResizeColumns(1, 7);
}
```

### Step 4: 実行
- 関数選択で **「setupAllSheets」** を選択
- 実行ボタン（▶）をクリック

---

## ✅ 完成後の確認

以下の6つのシートが作成されます：

1. ✅ site_settings（14行）
2. ✅ top_sections（5行）
3. ✅ service_items（4行）
4. ✅ recruit_jobs（3行）
5. ✅ recruit_faq（4行）
6. ✅ banners（6行）

---

## 📸 次のステップ

1. 上記の Apps Script を実行
2. 全シートが作成されたことを確認
3. スクリーンショットを送ってください
