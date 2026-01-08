/**
 * Googleスプレッドシート自動更新スクリプト
 */

const SHEET_ID = '1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE';
const SHEET_NAME = 'settings';

// 全項目のデータ
const settings = [
  ['key', 'value', 'description'],
  ['hero_title', '広告・Webを通じて、<br>クライアントの運営を支える。', '【トップページ】メインビジュアルのタイトル（大見出し）'],
  ['hero_text', '有限会社Rispondereは、<br>広告・Web・販促物の制作を行うデザイン会社です。<br><br>バナー制作や画像編集、Webまわりのサポートを中心に、<br>実務に即した制作・運用支援を行っています。', '【トップページ】メインビジュアルの説明文'],
  ['hero_bg', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】メインビジュアルの背景画像URL'],
  ['theme_primary', '#b38a2e', '【全体】メインカラー（ボタン、アクセント）'],
  ['theme_secondary', '#f44336', '【全体】サブカラー（サブボタン）'],
  ['theme_text', '#1a1a1a', '【全体】テキストの色'],
  ['theme_bg', '#ffffff', '【全体】背景色'],
  ['reason1_title', '運用前提', '【トップページ】選ばれる理由1のタイトル'],
  ['reason1_text', '作って終わりではなく、更新・改善しやすい形を重視します。', '【トップページ】選ばれる理由1の説明'],
  ['reason2_title', 'スピード', '【トップページ】選ばれる理由2のタイトル'],
  ['reason2_text', '依頼の意図を外さず、やり取りコストを減らします。', '【トップページ】選ばれる理由2の説明'],
  ['reason3_title', '仕組み化', '【トップページ】選ばれる理由3のタイトル'],
  ['reason3_text', '現場が迷わないように、情報を整えて渡します。', '【トップページ】選ばれる理由3の説明'],
  ['service1_title', 'バナー・画像制作', '【トップページ】対応領域1のタイトル'],
  ['service1_text', 'バナー制作／画像編集／レタッチなど、運用に必要な制作物をスピーディに整えます。', '【トップページ】対応領域1の説明'],
  ['service2_title', 'Web制作サポート', '【トップページ】対応領域2のタイトル'],
  ['service2_text', '更新・差し替え前提の設計で、運用しやすいWebまわりを支援します。', '【トップページ】対応領域2の説明'],
  ['service3_title', '制作進行・業務サポート', '【トップページ】対応領域3のタイトル'],
  ['service3_text', '情報整理、進行管理、社内外調整など「回る仕組み」を整えます。', '【トップページ】対応領域3の説明'],
  ['works_image1', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】制作実績ギャラリー画像1'],
  ['works_image2', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】制作実績ギャラリー画像2'],
  ['works_image3', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】制作実績ギャラリー画像3'],
  ['recruit_cta_title', '正社員を募集しています。<br>詳しくは採用情報ページをご覧ください。', '【トップページ】採用CTAセクションのテキスト'],
  ['company_name', '有限会社Rispondere', '【全体】会社名'],
  ['company_address', '〒460-0007 愛知県名古屋市中区新栄', '【全体】住所'],
  ['company_email', 'info@rispondere.jp', '【全体】メールアドレス'],
  ['logo_url', 'https://rispondere.github.io/rispondere-website2/images/logo/rispondere-logo.svg', '【全体】ロゴ画像URL']
];

async function updateSpreadsheet() {
  const url = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}/post`;
  
  console.log('📝 スプレッドシートにデータを書き込んでいます...\n');
  console.log(`スプレッドシートID: ${SHEET_ID}`);
  console.log(`シート名: ${SHEET_NAME}`);
  console.log(`行数: ${settings.length}\n`);
  
  // OpenSheet API はPOSTに対応していないため、手動での貼り付けが必要
  console.log('⚠️ OpenSheet API は読み込み専用です。');
  console.log('   スプレッドシートへの書き込みは Google Sheets API が必要です。\n');
  console.log('代わりに、以下の方法でデータを追加してください：\n');
  console.log('方法1: 手動でコピペ（最も簡単）');
  console.log('  1. spreadsheet-data.tsv ファイルを開く');
  console.log('  2. すべてのデータをコピー');
  console.log('  3. スプレッドシートに貼り付け\n');
  console.log('方法2: Google Apps Script を使う（自動化）');
  console.log('  1. スプレッドシートを開く');
  console.log('  2. 拡張機能 → Apps Script');
  console.log('  3. 以下のコードを貼り付けて実行\n');
  
  // Google Apps Script用のコード
  console.log('=== Google Apps Script コード ===\n');
  console.log(`function setupSettings() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('${SHEET_NAME}');
  
  // シートが存在しない場合は作成
  if (!sheet) {
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('${SHEET_NAME}');
  }
  
  const data = ${JSON.stringify(settings, null, 2)};
  
  // シートをクリア
  sheet.clear();
  
  // データを書き込み
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
  Logger.log('✅ データを書き込みました！');
}
`);
  
  console.log('\n=== 実行手順 ===');
  console.log('1. 上記のコードをコピー');
  console.log('2. スプレッドシートを開く: https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/edit');
  console.log('3. 拡張機能 → Apps Script');
  console.log('4. コードを貼り付け');
  console.log('5. 実行ボタンをクリック（▶）');
  console.log('6. 権限を許可');
  console.log('7. 完了！');
}

updateSpreadsheet();
