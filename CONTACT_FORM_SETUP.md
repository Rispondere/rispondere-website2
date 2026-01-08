# 問い合わせフォーム設定手順

## 🎯 目的
- 問い合わせを `rispo.manager@nagopre.com` に送信
- フォームのメールアドレスを表に出さない
- 完全無料で運用

---

## ✅ 推奨方法：Googleフォーム（最も簡単・確実）

### Step 1: Googleフォームを作成

1. https://forms.google.com/ にアクセス
2. **「空白」のフォームを作成**
3. タイトル：**「お問い合わせ」**

### Step 2: フォーム項目を追加

以下の質問を追加：

1. **お名前**
   - 質問タイプ：記述式
   - 必須：ON

2. **メールアドレス**
   - 質問タイプ：記述式
   - 必須：ON

3. **お問い合わせ内容**
   - 質問タイプ：段落
   - 必須：ON

### Step 3: メール通知を設定

1. フォームの「回答」タブをクリック
2. 右上の「...」メニュー → **「新しい回答についてのメール通知を受け取る」**
3. これで自分のGoogleアカウントに通知が届きます

**重要**: Googleフォームの通知は作成者のメールアドレスに届きます。`rispo.manager@nagopre.com` で作成してください。

### Step 4: フォームのURLを取得

1. 右上の「送信」ボタンをクリック
2. 「リンク」タブを選択
3. **「URLを短縮」をOFF**にする
4. URLをコピー（例：`https://docs.google.com/forms/d/e/XXXXX/viewform`）

### Step 5: contact.html を更新

以下のコードで `contact.html` のフォーム部分を置き換えます：

```html
<!-- Googleフォーム埋め込み -->
<div style="max-width: 800px; margin: 0 auto;">
  <iframe 
    src="ここにGoogleフォームのURL" 
    width="100%" 
    height="800" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
    読み込んでいます…
  </iframe>
</div>
```

---

## 📋 代替方法：Formspree（メール転送サービス）

もし「完全に自社フォームに見せたい」場合は Formspree を使用できます。

### Step 1: Formspree でアカウント作成

1. https://formspree.io/ にアクセス
2. **無料プラン**で登録
3. メールアドレス：`rispo.manager@nagopre.com`

### Step 2: フォームを作成

1. ダッシュボードで「New Form」をクリック
2. フォーム名：「Rispondere お問い合わせ」
3. 送信先：`rispo.manager@nagopre.com`

### Step 3: フォームIDを取得

作成後、フォームIDが表示されます（例：`xyzabc12`）

### Step 4: contact.html を更新

`contact.html` の以下の行を変更：

```html
<!-- 変更前 -->
<form action="https://formspree.io/f/XXXXXXXX" method="POST" id="contact-form">

<!-- 変更後 -->
<form action="https://formspree.io/f/xyzabc12" method="POST" id="contact-form">
```

---

## 🎯 推奨：Googleフォーム

- ✅ 完全無料
- ✅ スパム対策が強い
- ✅ メール通知が確実
- ✅ 回答をスプレッドシートで管理できる
- ✅ 設定が簡単

---

## 📸 次のステップ

1. Googleフォームを作成
2. フォームのURLを教えてください
3. 私が `contact.html` を更新します

または、Formspree を使う場合は：

1. Formspree でフォームIDを取得
2. フォームIDを教えてください
3. 私が `contact.html` を更新します
