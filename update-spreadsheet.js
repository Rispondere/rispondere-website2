/**
 * Googleスプレッドシート自動更新スクリプト
 * 最新のサイト情報を反映
 */

const SHEET_ID = '1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE';
const SHEET_NAME = 'settings';

// 全項目のデータ（最新版）
const settings = [
  ['key', 'value', 'description'],
  ['hero_title', '止まらないデザイン運用を、<br>仕組みでつくる。', '【トップページ】メインビジュアルのタイトル（大見出し）'],
  ['hero_text', 'Rispondereは、制作と運用を分けないデザイン会社です。<br>バナー・Webサイトの制作から、更新が続く状態まで整えます。', '【トップページ】メインビジュアルの説明文'],
  ['hero_bg', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '【トップページ】メインビジュアルの背景画像URL'],
  ['theme_primary', '#67EDE1', '【全体】メインカラー（ミントグリーン）'],
  ['theme_secondary', '#4FD1C5', '【全体】サブカラー（ミントグリーン濃）'],
  ['theme_text', '#1F2937', '【全体】テキストの色（ダークグレー）'],
  ['theme_bg', '#ffffff', '【全体】背景色'],
  ['service_page_title', 'サービス内容', '【サービスページ】ページタイトル'],
  ['service_page_description', 'デザインの視認性・使いやすさはもちろん、<br>更新のしやすさ・管理のしやすさも大切にしています。', '【サービスページ】ページ説明文'],
  ['about_page_title', '会社紹介', '【会社紹介ページ】ページタイトル'],
  ['recruit_hero_badge', '正社員募集', '【採用ページ】募集バッジテキスト'],
  ['recruit_hero_title', '制作・運用を支える<br>「業務推進サポート」', '【採用ページ】ヒーローセクションのタイトル'],
  ['recruit_hero_text', '腰を据えて働きながら、制作の進行を整え、<br>更新が止まらない状態をつくる仕事です。<br><br>未経験からスタートしたスタッフも多く、<br>一つずつ業務を覚えながら成長できる環境です。', '【採用ページ】ヒーローセクションの説明文'],
  ['recruit_point1_title', '腰を据えて働ける<br>正社員雇用', '【採用ページ】募集要項ポイント1のタイトル'],
  ['recruit_point1_text', '正社員として、安定した環境で働けます。<br>試用期間中も正社員待遇です。', '【採用ページ】募集要項ポイント1の説明'],
  ['recruit_point2_title', '月給・年収の目安が<br>最初から分かる', '【採用ページ】募集要項ポイント2のタイトル'],
  ['recruit_point2_text', '月給25万円〜、想定年収300万〜400万円。<br>経験や成果に応じて昇給します。', '【採用ページ】募集要項ポイント2の説明'],
  ['recruit_point3_title', '成果や成長が<br>評価に反映される環境', '【採用ページ】募集要項ポイント3のタイトル'],
  ['recruit_point3_text', 'できることが増えたら、しっかり評価。<br>年2回の評価制度があります。', '【採用ページ】募集要項ポイント3の説明'],
  ['recruit_designer_notice_title', 'デザインスタッフ募集（現在募集停止中）', '【採用ページ】デザイナー募集停止案内タイトル'],
  ['recruit_designer_notice_text', '現在、デザインスタッフの募集は行っておりません。<br>募集再開の予定が決まり次第、当サイトにてご案内いたします。', '【採用ページ】デザイナー募集停止案内本文'],
  ['recruit_designer_notice_line', '※募集に関するお問い合わせは、公式LINEにて受け付けています。', '【採用ページ】デザイナー募集停止案内LINE案内'],
  ['company_name', '有限会社Rispondere', '【全体】会社名'],
  ['company_address', '〒460-0007 愛知県名古屋市中区新栄2丁目8-22 NPWEST 5階', '【全体】住所（完全版）'],
  ['company_contact', '担当：川満', '【全体】担当者名'],
  ['company_email', 'info@rispondere.jp', '【全体】メールアドレス（統一版）'],
  ['company_line_id', '@270wnwwg', '【全体】公式LINEアカウントID'],
  ['company_line_url', 'https://line.me/R/ti/p/@270wnwwg', '【全体】公式LINEアカウントURL'],
  ['logo_url', 'https://rispondere.github.io/rispondere.co.jp/images/logo/rispondere-logo-final.png', '【全体】ロゴ画像URL（最終版）'],
  ['works_image1', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '【トップページ】制作実績画像1（バナー制作）'],
  ['works_image2', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '【トップページ】制作実績画像2（Webサイト制作）'],
  ['works_image3', 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg', '【トップページ】制作実績画像3（広告素材制作）']
];

async function updateSpreadsheet() {
  console.log('📝 Rispondereコーポレートサイト - スプレッドシートデータ更新\n');
  console.log(`スプレッドシートID: ${SHEET_ID}`);
  console.log(`シート名: ${SHEET_NAME}`);
  console.log(`データ行数: ${settings.length - 1}行\n`);
  
  console.log('=== 主な更新内容 ===');
  console.log('✅ ヒーローテキスト: 「止まらないデザイン運用を、仕組みでつくる。」');
  console.log('✅ メインカラー: #67EDE1（ミントグリーン）');
  console.log('✅ メールアドレス統一: info@rispondere.jp');
  console.log('✅ 公式LINE追加: @270wnwwg');
  console.log('✅ 採用ページ情報更新');
  console.log('✅ デザイナー募集停止案内追加');
  console.log('✅ 会社住所完全版追加\n');
  
  console.log('⚠️ OpenSheet API は読み込み専用です。');
  console.log('   スプレッドシートへの書き込みは Google Sheets API または手動更新が必要です。\n');
  
  console.log('=== 更新方法（3つの選択肢） ===\n');
  
  console.log('📋 方法1: TSVファイルから直接コピペ（最も簡単）');
  console.log('  1. spreadsheet-data.tsv ファイルを開く');
  console.log('  2. すべてのデータをコピー（Ctrl+A → Ctrl+C）');
  console.log('  3. スプレッドシートのA1セルに貼り付け（Ctrl+V）\n');
  
  console.log('⚡ 方法2: Google Apps Script で自動更新（推奨）');
  console.log('  1. スプレッドシートを開く');
  console.log('     https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/edit');
  console.log('  2. 拡張機能 → Apps Script');
  console.log('  3. 以下のコードを貼り付け');
  console.log('  4. 実行ボタン（▶）をクリック');
  console.log('  5. 権限を許可\n');
  
  console.log('=== Google Apps Script コード ===\n');
  console.log(`function updateRispondereSettings() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('${SHEET_NAME}');
  
  // シートが存在しない場合は作成
  if (!sheet) {
    sheet = ss.insertSheet('${SHEET_NAME}');
  }
  
  const data = ${JSON.stringify(settings, null, 2)};
  
  // 既存データをクリア
  sheet.clear();
  
  // 新しいデータを書き込み
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
  // ヘッダー行を太字に
  sheet.getRange(1, 1, 1, data[0].length).setFontWeight('bold');
  
  // 列幅を自動調整
  sheet.autoResizeColumns(1, data[0].length);
  
  Logger.log('✅ Rispondereサイトデータを更新しました！');
  Logger.log('📊 更新行数: ' + (data.length - 1) + '行');
}
`);
  
  console.log('\n🔗 方法3: Google Sheets API を使用（上級者向け）');
  console.log('  Node.js + googleapis パッケージを使用した自動化');
  console.log('  認証情報（サービスアカウント）が必要です\n');
  
  console.log('=== 次のステップ ===');
  console.log('1. 上記のいずれかの方法でスプレッドシートを更新');
  console.log('2. スプレッドシートを確認:');
  console.log('   https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/edit');
  console.log('3. 完了！\n');
}

// スクリプト実行
if (require.main === module) {
  updateSpreadsheet();
}

module.exports = { settings, SHEET_ID, SHEET_NAME };
