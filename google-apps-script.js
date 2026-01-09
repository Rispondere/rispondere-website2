/**
 * Googleスプレッドシート自動更新スクリプト - Google Apps Script版
 * Rispondereコーポレートサイトの最新情報を反映
 * 
 * 使い方:
 * 1. スプレッドシートを開く: https://docs.google.com/spreadsheets/d/1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE/edit
 * 2. メニューから「拡張機能」→「Apps Script」
 * 3. このコード全体をコピー＆貼り付け
 * 4. 「updateRispondereSettings」関数を選択
 * 5. 実行ボタン（▶）をクリック
 */

function updateRispondereSettings() {
  const SHEET_NAME = 'settings';
  
  // 最新のサイトデータ（32項目）
  const data = [
    ['key', 'value', 'description'],
    ['hero_title', '止まらないデザイン運用を、<br>仕組みでつくる。', '【トップページ】メインビジュアルのタイトル（大見出し）'],
    ['hero_text', 'Rispondereは、制作と運用を分けないデザイン会社です。<br>バナー・Webサイトの制作から、更新が続く状態まで整えます。', '【トップページ】メインビジュアルの説明文'],
    ['hero_bg', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】メインビジュアルの背景画像URL'],
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
    ['logo_url', 'https://rispondere.github.io/rispondere-website2/images/logo/rispondere-logo-final.png', '【全体】ロゴ画像URL（最終版）'],
    ['works_image1', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】制作実績画像1（バナー制作）'],
    ['works_image2', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】制作実績画像2（Webサイト制作）'],
    ['works_image3', 'https://rispondere.github.io/rispondere-website2/images/placeholder.svg', '【トップページ】制作実績画像3（広告素材制作）']
  ];
  
  // アクティブなスプレッドシートを取得
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // シートが存在しない場合は作成
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    Logger.log('✨ 新しいシート "' + SHEET_NAME + '" を作成しました');
  }
  
  // 既存データをクリア
  sheet.clear();
  Logger.log('🧹 既存データをクリアしました');
  
  // 新しいデータを書き込み
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  Logger.log('✍️ ' + (data.length - 1) + '行のデータを書き込みました');
  
  // ヘッダー行を太字に設定
  sheet.getRange(1, 1, 1, data[0].length)
    .setFontWeight('bold')
    .setBackground('#67EDE1')
    .setFontColor('#1F2937');
  Logger.log('🎨 ヘッダー行をスタイル設定しました');
  
  // 列幅を自動調整
  sheet.autoResizeColumns(1, data[0].length);
  Logger.log('📐 列幅を自動調整しました');
  
  // セルの枠線を設定
  sheet.getRange(1, 1, data.length, data[0].length)
    .setBorder(true, true, true, true, true, true);
  Logger.log('🔲 枠線を設定しました');
  
  // 完了メッセージ
  Logger.log('\n✅ Rispondereサイトデータの更新が完了しました！');
  Logger.log('📊 更新データ: ' + (data.length - 1) + '項目');
  Logger.log('🔗 サイトURL: https://rispondere.github.io/rispondere-website2/');
  
  // ユーザーに通知
  SpreadsheetApp.getUi().alert(
    '✅ 更新完了',
    '✅ Rispondereサイトデータを更新しました！\n\n' +
    '📊 更新項目: ' + (data.length - 1) + '件\n' +
    '📅 更新日: ' + new Date().toLocaleString('ja-JP') + '\n\n' +
    '主な更新内容:\n' +
    '• ヒーローテキスト更新\n' +
    '• ブランドカラー: #67EDE1\n' +
    '• 公式LINE追加: @270wnwwg\n' +
    '• 採用情報更新',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

/**
 * メニューに「Rispondereデータ更新」を追加
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🔄 Rispondere更新')
    .addItem('📝 サイトデータを更新', 'updateRispondereSettings')
    .addSeparator()
    .addItem('ℹ️ バージョン情報', 'showVersionInfo')
    .addToUi();
}

/**
 * バージョン情報を表示
 */
function showVersionInfo() {
  SpreadsheetApp.getUi().alert(
    'Rispondere スプレッドシート更新ツール',
    '📋 バージョン: 1.0.0\n' +
    '📅 最終更新: 2026-01-09\n' +
    '📊 データ項目数: 32項目\n\n' +
    '🌐 サイトURL:\n' +
    'https://rispondere.github.io/rispondere-website2/\n\n' +
    '💬 お問い合わせ:\n' +
    '公式LINE: @270wnwwg\n' +
    'メール: info@rispondere.jp',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}
