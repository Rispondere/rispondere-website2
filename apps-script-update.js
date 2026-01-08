// スプレッドシートに追加する3行のデータ
console.log('=== Google Apps Script コード（追加分） ===\n');
console.log('以下のコードを Apps Script に追加して実行してください：\n');
console.log(`
function addRecruitSettings() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('settings');
  
  if (!sheet) {
    SpreadsheetApp.getUi().alert('エラー: settingsシートが見つかりません');
    return;
  }
  
  // 追加するデータ
  const newData = [
    ["recruit_hero_title", "整えるのが得意な人、強いです。", "【採用ページ】ヒーローセクションのタイトル"],
    ["recruit_hero_subtitle", "制作と運営をつなぐサポートポジション募集", "【採用ページ】ヒーローセクションのサブタイトル"],
    ["recruit_company_intro", "有限会社Rispondereは、<br>広告・Web・販促物の制作を行うデザイン会社です。<br>バナー制作や画像編集、Web関連業務を中心に、実務に即した制作と運用支援を行っています。", "【採用ページ】会社紹介文"]
  ];
  
  // 最終行の次の行から追加
  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow + 1, 1, newData.length, newData[0].length).setValues(newData);
  
  Logger.log('✅ 採用ページの項目を追加しました！');
  
  // 完了メッセージを表示
  SpreadsheetApp.getUi().alert('✅ 完了！\\n\\n採用ページの3項目を追加しました。');
}
`);

console.log('\n=== 実行手順 ===');
console.log('1. スプレッドシートを開く: https://docs.google.com/spreadsheets/d/1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE/edit');
console.log('2. 拡張機能 → Apps Script');
console.log('3. 上記のコードを追加（既存のコードの下に貼り付け）');
console.log('4. 関数選択で「addRecruitSettings」を選択');
console.log('5. 実行ボタンをクリック（▶）');
console.log('6. 完了！');
