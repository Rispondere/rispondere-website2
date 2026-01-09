# Rispondere コーポレートサイト - スプレッドシート管理

## 📊 スプレッドシート情報

- **スプレッドシートID**: `1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE`
- **シート名**: `settings`
- **URL**: https://docs.google.com/spreadsheets/d/1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE/edit

## 🔄 スプレッドシートの更新方法

### 方法1: TSVファイルから直接コピペ（最も簡単）

1. `spreadsheet-data.tsv` ファイルを開く
2. すべてのデータを選択（Ctrl+A / Cmd+A）
3. コピー（Ctrl+C / Cmd+C）
4. [スプレッドシートを開く](https://docs.google.com/spreadsheets/d/1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE/edit)
5. A1セルを選択
6. 貼り付け（Ctrl+V / Cmd+V）

### 方法2: Google Apps Script で自動更新（推奨）

1. [スプレッドシートを開く](https://docs.google.com/spreadsheets/d/1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE/edit)
2. メニューから「拡張機能」→「Apps Script」を選択
3. 以下のコマンドを実行してコードを表示:
   ```bash
   node update-spreadsheet.js
   ```
4. 表示されたコードをコピー
5. Apps Script エディタに貼り付け
6. 実行ボタン（▶）をクリック
7. 初回実行時は権限の許可が必要です

### 方法3: コマンドラインから情報表示

```bash
cd /home/user/webapp
node update-spreadsheet.js
```

このコマンドで、最新のスプレッドシートデータと更新手順が表示されます。

## 📝 最新の更新内容（2026-01-09）

### 主な変更点

- ✅ **ヒーローテキスト更新**: 「止まらないデザイン運用を、仕組みでつくる。」
- ✅ **ブランドカラー変更**: #67EDE1（ミントグリーン）
- ✅ **メールアドレス統一**: info@rispondere.jp
- ✅ **公式LINE追加**: @270wnwwg
- ✅ **採用ページ情報更新**:
  - 正社員募集の3ポイント
  - デザイナー募集停止案内
- ✅ **会社情報更新**: 完全な住所（NPWEST 5階まで）

### データ項目数

- **合計**: 32項目
- **カテゴリ**:
  - トップページ: 3項目
  - カラーテーマ: 4項目
  - サービスページ: 2項目
  - 会社紹介ページ: 1項目
  - 採用ページ: 9項目
  - 会社情報: 6項目
  - 制作実績: 3項目
  - その他: 4項目

## 📂 関連ファイル

- `spreadsheet-data.tsv` - スプレッドシートデータ（TSV形式）
- `update-spreadsheet.js` - 更新スクリプト（情報表示・Google Apps Script生成）
- `setup-spreadsheet.js` - 初期セットアップスクリプト

## 🔗 リンク

- **サイトURL**: https://rispondere.github.io/rispondere-website2/
- **GitHubリポジトリ**: https://github.com/Rispondere/rispondere-website2
- **スプレッドシート**: https://docs.google.com/spreadsheets/d/1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE/edit

## ⚙️ 技術情報

- **データ形式**: TSV（タブ区切り）
- **エンコーディング**: UTF-8
- **カラム**: key, value, description
- **API**: OpenSheet（読み込み専用）

## 📞 サポート

更新に関する質問や問題がある場合は、公式LINE（@270wnwwg）までお問い合わせください。
