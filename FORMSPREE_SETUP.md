# Formspree 設定ガイド（お問い合わせフォーム）

## 📧 Formspree とは

Formspreeは、静的サイト（GitHub Pages等）でフォーム送信機能を実現できる無料サービスです。  
HTMLフォームにメールアドレスを表示せずに、指定したメールアドレスに送信できます。

---

## 🚀 Formspree セットアップ手順

### 1. Formspreeアカウント作成

1. [Formspree](https://formspree.io/) にアクセス
2. 「Get Started」をクリック
3. メールアドレスとパスワードを入力してアカウント作成
4. 確認メールが届くので、リンクをクリックして認証

### 2. フォームの作成

1. Formspreeダッシュボードにログイン
2. 「+ New Form」をクリック
3. フォーム名を入力（例：Rispondere お問い合わせ）
4. **Email**欄に送信先メールアドレスを入力:
   ```
   rispo.manager@nagopre.com
   ```
5. 「Create Form」をクリック
6. **フォームID**が発行されます（例：`xpznabcd`）

### 3. HTMLファイルの更新

`contact.html` の以下の箇所を更新してください：

#### 変更前
```html
<form action="https://formspree.io/f/XXXXXXXX" method="POST" id="contact-form">
```

#### 変更後
```html
<form action="https://formspree.io/f/xpznabcd" method="POST" id="contact-form">
```

**⚠️ 重要**: `xpznabcd` を実際のフォームIDに置き換えてください。

### 4. リダイレクト先URLの更新

`contact.html` の以下の箇所を更新してください：

#### 変更前
```html
<input type="hidden" name="_next" value="https://[YOUR-SITE-URL]/contact.html?success=true">
```

#### 変更後
```html
<input type="hidden" name="_next" value="https://rispondere.github.io/corporate-site/contact.html?success=true">
```

**⚠️ 重要**: URLを実際のサイトURLに置き換えてください。

---

## 🎨 Formspree 高度な設定

### 自動返信メールの設定（オプション）

Formspreeダッシュボードで以下を設定できます：

1. フォームを選択
2. 「Settings」タブ
3. 「Autoresponder」を有効化
4. 自動返信メールの件名と本文を入力

例：
```
件名：お問い合わせありがとうございます
本文：
お問い合わせいただきありがとうございます。
担当者より3営業日以内にご連絡いたします。

有限会社Rispondere
```

### スパム対策の設定

Formspreeは自動的にスパム対策を行いますが、以下の設定も可能です：

1. reCAPTCHA統合（Settings → reCAPTCHA）
2. Honeypotフィールド（自動設定済み）
3. IPアドレス制限

---

## 📊 送信データの確認

### Formspreeダッシュボードで確認

1. Formspreeにログイン
2. フォームを選択
3. 「Submissions」タブ
4. 送信されたデータが一覧表示されます

### メールで受信

設定したメールアドレス（`rispo.manager@nagopre.com`）に以下の形式でメールが届きます：

```
件名：【コーポレートサイト】お問い合わせ

お名前: 山田太郎
メールアドレス: yamada@example.com
お問い合わせ内容:
採用情報について質問があります。
```

---

## 🧪 テスト方法

### 1. ローカルテスト
1. contact.htmlをブラウザで開く
2. フォームに情報を入力
3. 「送信する」をクリック
4. 送信完了メッセージが表示されるか確認
5. rispo.manager@nagopre.com にメールが届くか確認

### 2. 本番テスト
1. GitHub Pagesにデプロイ
2. 公開URLでcontact.htmlを開く
3. 同様にテスト送信
4. メール受信確認

---

## 💰 料金プラン

### Freeプラン（推奨）
- **月間送信数**: 50件まで
- **フォーム数**: 1個
- **費用**: 無料
- **メールアドレス非表示**: ✅

### Goldプラン（必要に応じて）
- **月間送信数**: 1,000件
- **フォーム数**: 無制限
- **費用**: $10/月
- **高度な機能**: 自動返信、ファイルアップロード等

※ 月50件以下であれば、無料プランで十分です。

---

## 🔧 トラブルシューティング

### フォーム送信後にエラーが表示される
- フォームIDが正しいか確認
- Formspreeでフォームがアクティブになっているか確認
- ブラウザのコンソールでエラーを確認

### メールが届かない
- Formspreeダッシュボードの「Submissions」で送信履歴を確認
- スパムフォルダを確認
- メールアドレスが正しいか確認（rispo.manager@nagopre.com）

### 送信完了メッセージが表示されない
- `_next` パラメータのURLが正しいか確認
- JavaScriptが正しく読み込まれているか確認（main.js）

---

## 📝 設定チェックリスト

- ✅ Formspreeアカウント作成
- ✅ フォーム作成（送信先: rispo.manager@nagopre.com）
- ✅ フォームID取得
- ✅ contact.html の action URL更新
- ✅ contact.html の _next URL更新（実際のサイトURL）
- ✅ GitHub Pagesにデプロイ
- ✅ テスト送信
- ✅ メール受信確認
- ✅ 自動返信設定（オプション）

---

## 🔒 セキュリティについて

### メールアドレス非表示
✅ HTMLソースコードに `rispo.manager@nagopre.com` は表示されません  
✅ Formspree側で送信先を管理するため、スパムメールのリスクが低い

### データ保護
✅ FormspreeはGDPR準拠  
✅ 送信データは暗号化されて保存  
✅ いつでもデータを削除可能

---

**有限会社Rispondere コーポレートサイト**  
Formspree 設定ガイド  
作成日: 2026年1月8日

**送信先メールアドレス**: rispo.manager@nagopre.com  
**画面表示**: なし（Formspree経由で送信）
