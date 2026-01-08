# 有限会社Rispondere コーポレートサイト

## プロジェクト概要

有限会社Rispondere様のコーポレートサイトです。純粋なHTML/CSS/JavaScriptで構築され、Decap CMS（旧Netlify CMS）を使用した管理画面を実装しています。

**バージョン**: 5.0（管理画面完全版）  
**最終更新**: 2026年1月8日  
**サイトURL**: https://luminous-rabanadas-b8d3a3.netlify.app/  
**管理画面URL**: https://luminous-rabanadas-b8d3a3.netlify.app/admin/

**最新の改善**:
- 🎨 全体デザインを有名デザイナーレベルに洗練
- 🖼️ ロゴシステムの実装（SVG形式、レスポンシブ対応）
- 📄 workstyle.htmlの大幅改善（カード形式、視覚的階層）
- ✨ マイクロインタラクションとアニメーション追加
- ♿ アクセシビリティ強化（フォーカス、コントラスト、アニメーション削減モード）
- 🔐 **管理画面（Decap CMS）完全実装** ⭐ NEW!
- 📱 Netlify Identity + Git Gateway 連携完了
- 📚 完全な管理画面マニュアル作成（画像サイズ・容量ガイド付き）

---

## 🎯 採用ページの特徴（2本立て構成）

採用ページ（recruit.html）は、将来を見据えた2本立て構成を採用しています：

### 募集① 業務サポート職（現在募集中）
- **対象**: 今回の正社員募集
- **内容**: 制作進行・事務・運営サポート
- **強み**: 4つの勝ち要素を完備
  1. 安心設計（未経験でも大丈夫が根拠付き）
  2. 具体的な仕事の景色（1日の流れ・成果物・関わる人）
  3. 向いている人／向かない人（ミスマッチ削減）
  4. 選考フローが明確（電話→面談→次）

### 募集② デザイン職（将来募集枠）
- **対象**: 将来の募集に備えた予告枠
- **内容**: 登録受付中・事前登録可能
- **メリット**: 後から増築せず、採用基盤が最初から整う

**この構成により**:
- ✅ 将来の増設でページが崩れない
- ✅ 応募者が自分の適性を判断できる
- ✅ 会社としての採用基盤が強化される
- ✅ 求人媒体の審査にも有利

---

## 📁 プロジェクト構成

```
/home/user/webapp/
├── index.html                    # トップページ
├── service.html                  # 事業内容
├── workstyle.html                # 仕事・働き方
├── company.html                  # 会社概要
├── faq.html                      # よくある質問
├── recruit.html                  # 採用情報（2本立て） ⭐
├── contact.html                  # お問い合わせ
├── privacy.html                  # プライバシーポリシー
├── css/
│   └── styles.css                # 共通スタイル（カラー変数対応）
├── js/
│   └── main.js                   # 共通スクリプト（CMS連携）
├── images/
│   └── placeholder.svg           # プレースホルダー画像
├── content/                      # CMSコンテンツ
│   ├── design-colors.json        # デザインカラー設定 ⭐
│   ├── banners.json              # バナー画像管理 ⭐
│   ├── site-config.json          # サイト設定
│   ├── index.json                # トップページ
│   ├── service.json              # 事業内容
│   ├── workstyle.json            # 仕事・働き方
│   ├── company.json              # 会社概要
│   ├── recruit.json              # 採用情報（拡充版） ⭐
│   └── faq/                      # FAQ項目（複数ファイル）
└── admin/                        # 管理画面
    ├── index.html
    └── config.yml                # CMS設定（日本語対応） ⭐
```

---

## 🎨 デザインシステム

### カラー管理（CSS変数）

すべての色は管理画面から変更可能です。CSSでは以下の変数で管理：

```css
:root {
  --color-primary: #2c3e50;   /* メインカラー */
  --color-secondary: #3498db;  /* サブカラー */
  --color-bg: #ffffff;         /* 背景色 */
  --color-text: #333333;       /* 文字色 */
}
```

管理画面で色を変更すると、全ページに自動反映されます。

### デザイン要素

- **帯（ピル型）見出し**: セクションの区切りを明確化
- **番号付きポイント**: 01/02/03 で視覚的に強調
- **カード**: 角丸＋影で情報をまとめる
- **特大数字**: 給与・年収を大きく表示
- **タイムライン**: 1日の流れを視覚化

---

## 🖼️ 画像管理（3種類）

### A. ヒーロー画像（横長・1枚）
- **場所**: 採用ページ最上部
- **形式**: 横長推奨
- **管理**: /admin/ → バナー画像管理 → 採用ページ - ヒーロー画像

### B. 制作実績ギャラリー（最大6枚）
- **場所**: 「リスポンドレの仕事」セクション内
- **形式**: 正方形または横長
- **管理**: /admin/ → 採用ページ → 制作実績ギャラリー

### C. 縦長バナー（0〜3枚）
- **場所**: ページ内に任意挿入
  - バナー1: 業務サポート職セクション終了後
  - バナー2: デザイン職セクション後
  - バナー3: よくある質問後（最終位置）
- **形式**: 縦長推奨
- **管理**: /admin/ → バナー画像管理 → 採用ページ - 縦長バナー1/2/3

---

## ⚙️ 管理画面（Decap CMS）

### アクセス方法
1. サイトをGitHub Pagesにデプロイ
2. `https://[YOUR-SITE]/admin/` にアクセス
3. GitHub認証でログイン

### 管理できる項目（日本語表示）

#### デザイン設定
- **カラー設定**: メイン/サブ/背景/文字色をHEX形式で変更
- **バナー画像管理**: 各種バナーのON/OFF切替・画像アップロード

#### 採用ページ（2本立て）
- ヒーロー - メインコピー・サブコピー
- 会社紹介（短く）
- 制作実績ギャラリー（最大6枚）
- **募集① 業務サポート職**
  - 職種名・仕事内容説明
  - ポイント3つ（タイトル・説明）
  - 年収例・月収例
  - 給与の仕組み（手当リスト）
  - 向いている人・向かない人
  - 1日の流れ
  - 具体的な業務（カード）
  - 勤務について・福利厚生
  - 選考フロー
- **募集② デザイン職（将来枠）**
  - ステータス表示・紹介文
  - 求めるスキル（例）
  - ポートフォリオ案内
- 応募について（安心の締め）

#### その他のページ
- サイト設定（サイト名・ロゴ）
- トップページ
- 事業内容・仕事・働き方・会社概要
- よくある質問（追加・削除可能）

---

## 🚀 デプロイ手順

### 1. GitHubリポジトリ作成

```bash
# ローカルでの準備（既に完了）
cd /home/user/webapp
git init
git add .
git commit -m "Initial commit"

# GitHubに新規リポジトリを作成後
git remote add origin https://github.com/[USERNAME]/[REPO_NAME].git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages有効化

1. GitHubリポジトリのSettings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / Folder: `/ (root)`
4. Save
5. 数分後に `https://[USERNAME].github.io/[REPO_NAME]/` で公開

### 3. Decap CMS設定更新

`admin/config.yml` の以下を更新：

```yaml
backend:
  name: github
  repo: [USERNAME]/[REPO_NAME]  # ← あなたのリポジトリ名に変更
  branch: main
```

変更後、コミット＆プッシュ：

```bash
git add admin/config.yml
git commit -m "Update CMS configuration"
git push
```

### 4. GitHub OAuth認証（Netlifyを使用）

1. Netlifyアカウント作成（無料）
2. New site from Git → GitHub連携
3. Deploy settings: 何も設定せず Deploy
4. Site settings → Identity → Enable Git Gateway
5. これで `/admin/` からログイン可能

---

## 🛠️ 技術仕様

- **フレームワーク**: なし（純HTML/CSS/JS）
- **ビルドツール**: なし（npmなし）
- **CMS**: Decap CMS（旧Netlify CMS）
- **認証**: GitHub OAuth（Netlify経由）
- **ホスティング**: GitHub Pages
- **デザインシステム**: CSS変数（カスタムプロパティ）

---

## 📝 カスタマイズ

### 色を変える
1. `/admin/` にログイン
2. デザイン設定 → カラー設定
3. 各色をHEX形式で入力（例: #ff0000）
4. 保存

### 採用ページの内容を変更
1. `/admin/` にログイン
2. 採用ページ → 採用情報（2本立て）
3. 各項目を日本語で編集
4. 保存

### 画像を追加・変更
1. `/admin/` にログイン
2. 該当する画像項目を開く
3. 画像をアップロード or 削除
4. 表示ON/OFFを切替
5. 保存

---

## 📚 ドキュメント

### 🔰 初心者向けガイド（NEW!）
- **BEGINNER_DEPLOY_GUIDE.md** - 超初心者向けデプロイガイド（完全図解）⭐
- **STEP_BY_STEP_GUIDE.md** - 画像で見るステップバイステップガイド（所要時間20分）⭐

### 📖 管理画面・設定ガイド
- **CMS_MANUAL.md** - 管理画面の完全マニュアル（画像サイズ・容量・圧縮ツール詳細付き）⭐ v2.0
- **IMAGE_SIZE_GUIDE.md** - 画像サイズ・容量早見表（印刷・PDF保存推奨）⭐ NEW!
- **ADMIN_QUICK_START.md** - 管理画面クイックスタート（5分で理解）
- **GITHUB_OAUTH_SETUP.md** - GitHub OAuth認証設定ガイド（図解付き）

### 📋 納品・技術ドキュメント
- **README.md** - このファイル（プロジェクト概要）
- **MANUAL.md** - 旧マニュアル（参考）
- **DELIVERY_REPORT_V5.md** - 最新の納品報告書
- **DESIGN_V5_SUMMARY.md** - デザイン改善のビジュアルサマリー

### ⚙️ 設定ガイド
- **FORMSPREE_SETUP.md** - お問い合わせフォーム設定手順
- **GA4_SETUP.md** - Google Analytics 4 設定手順
- **images/logo/LOGO_README.md** - ロゴ差し替え手順

---

## 📧 サポート

ご質問やカスタマイズのご相談は、開発者までお問い合わせください。

---

**有限会社Rispondere コーポレートサイト**  
制作日: 2026年1月8日  
バージョン: 3.0（採用ページ2本立て完成版）

---

---

## 🚀 管理画面へのアクセス

### URL
```
https://YOUR-SITE.com/admin/
```

### ログイン方法
1. 上記URLにアクセス
2. 「GitHubでログイン」をクリック
3. GitHubアカウントで認証

**詳しい手順は CMS_MANUAL.md をご覧ください。**

---

## 📞 お問い合わせ

サイトに関するご質問・ご要望は、以下からお問い合わせください：

- **メール**: info@rispondere.jp
- **お問い合わせフォーム**: https://YOUR-SITE.com/contact.html
- **管理画面**: https://YOUR-SITE.com/admin/

---

**制作**: GenSpark AI Developer  
**最終更新**: 2026年1月8日  
**バージョン**: 5.0（デザイン洗練版 + 管理画面マニュアル完備）
