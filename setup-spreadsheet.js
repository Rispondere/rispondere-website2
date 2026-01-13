/**
 * Googleスプレッドシート自動入力スクリプト
 * スプレッドシートID: 1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE
 */

const SHEET_ID = '1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE';
const SHEET_NAME = 'settings';

// 全項目のデータ
const settings = [
  {
    key: 'hero_title',
    value: '広告・Webを通じて、<br>クライアントの運営を支える。',
    description: '【トップページ】メインビジュアルのタイトル（大見出し）'
  },
  {
    key: 'hero_text',
    value: '有限会社Rispondereは、<br>広告・Web・販促物の制作を行うデザイン会社です。<br><br>バナー制作や画像編集、Webまわりのサポートを中心に、<br>実務に即した制作・運用支援を行っています。',
    description: '【トップページ】メインビジュアルの説明文'
  },
  {
    key: 'hero_bg',
    value: 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg',
    description: '【トップページ】メインビジュアルの背景画像URL'
  },
  {
    key: 'theme_primary',
    value: '#b38a2e',
    description: '【全体】メインカラー（ボタン、アクセント）'
  },
  {
    key: 'theme_secondary',
    value: '#f44336',
    description: '【全体】サブカラー（サブボタン）'
  },
  {
    key: 'theme_text',
    value: '#1a1a1a',
    description: '【全体】テキストの色'
  },
  {
    key: 'theme_bg',
    value: '#ffffff',
    description: '【全体】背景色'
  },
  {
    key: 'reason1_title',
    value: '運用前提',
    description: '【トップページ】選ばれる理由1のタイトル'
  },
  {
    key: 'reason1_text',
    value: '作って終わりではなく、更新・改善しやすい形を重視します。',
    description: '【トップページ】選ばれる理由1の説明'
  },
  {
    key: 'reason2_title',
    value: 'スピード',
    description: '【トップページ】選ばれる理由2のタイトル'
  },
  {
    key: 'reason2_text',
    value: '依頼の意図を外さず、やり取りコストを減らします。',
    description: '【トップページ】選ばれる理由2の説明'
  },
  {
    key: 'reason3_title',
    value: '仕組み化',
    description: '【トップページ】選ばれる理由3のタイトル'
  },
  {
    key: 'reason3_text',
    value: '現場が迷わないように、情報を整えて渡します。',
    description: '【トップページ】選ばれる理由3の説明'
  },
  {
    key: 'service1_title',
    value: 'バナー・画像制作',
    description: '【トップページ】対応領域1のタイトル'
  },
  {
    key: 'service1_text',
    value: 'バナー制作／画像編集／レタッチなど、運用に必要な制作物をスピーディに整えます。',
    description: '【トップページ】対応領域1の説明'
  },
  {
    key: 'service2_title',
    value: 'Web制作サポート',
    description: '【トップページ】対応領域2のタイトル'
  },
  {
    key: 'service2_text',
    value: '更新・差し替え前提の設計で、運用しやすいWebまわりを支援します。',
    description: '【トップページ】対応領域2の説明'
  },
  {
    key: 'service3_title',
    value: '制作進行・業務サポート',
    description: '【トップページ】対応領域3のタイトル'
  },
  {
    key: 'service3_text',
    value: '情報整理、進行管理、社内外調整など「回る仕組み」を整えます。',
    description: '【トップページ】対応領域3の説明'
  },
  {
    key: 'works_image1',
    value: 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg',
    description: '【トップページ】制作実績ギャラリー画像1'
  },
  {
    key: 'works_image2',
    value: 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg',
    description: '【トップページ】制作実績ギャラリー画像2'
  },
  {
    key: 'works_image3',
    value: 'https://rispondere.github.io/rispondere.co.jp/images/placeholder.svg',
    description: '【トップページ】制作実績ギャラリー画像3'
  },
  {
    key: 'recruit_cta_title',
    value: '正社員を募集しています。<br>詳しくは採用情報ページをご覧ください。',
    description: '【トップページ】採用CTAセクションのテキスト'
  },
  {
    key: 'company_name',
    value: '有限会社Rispondere',
    description: '【全体】会社名'
  },
  {
    key: 'company_address',
    value: '〒460-0007 愛知県名古屋市中区新栄',
    description: '【全体】住所'
  },
  {
    key: 'company_email',
    value: 'info@rispondere.co.jp',
    description: '【全体】メールアドレス'
  },
  {
    key: 'logo_url',
    value: 'https://rispondere.github.io/rispondere.co.jp/images/logo/rispondere-logo.svg',
    description: '【全体】ロゴ画像URL'
  }
];

// CSV形式で出力（Googleスプレッドシートにコピペ用）
console.log('===== Googleスプレッドシートに貼り付けるデータ =====\n');
console.log('key\tvalue\tdescription');
settings.forEach(item => {
  console.log(`${item.key}\t${item.value}\t${item.description}`);
});

console.log('\n\n===== コピー手順 =====');
console.log('1. 上記の全テキストをコピー');
console.log('2. Googleスプレッドシートを開く');
console.log('3. A1セルを選択');
console.log('4. 貼り付け（Cmd+V / Ctrl+V）');
console.log('5. 保存（自動保存）');
console.log('\nスプレッドシートURL:');
console.log(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`);
