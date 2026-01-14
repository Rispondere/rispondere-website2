# 📐 Rispondereサイト レイアウト改善ガイド

**最終更新**: 2026-01-13  
**目的**: PC/スマホで見やすい改行・レイアウトに統一

---

## 🎯 改善方針

### 基本原則

1. **文字の途中で改行しない**
   - ❌ 悪い例: 「デザイン会<br>社」
   - ✅ 良い例: 「デザイン会社」

2. **意味のまとまりで改行する**
   - ✅ 見出しと説明文は別の行
   - ✅ 重要なフレーズは1行にまとめる

3. **PC/スマホで適切に表示**
   - PCでは横長レイアウト
   - スマホでは縦長レイアウト

---

## 📱 レスポンシブ改行の実装

### CSSメディアクエリの活用

```css
/* PC用改行（デフォルト） */
.text-pc-br {
  display: inline;
}

/* スマホ用改行 */
@media (max-width: 768px) {
  .text-pc-br {
    display: block;
  }
}
```

### HTMLでの使用例

```html
<!-- PCで改行、スマホで改行なし -->
<p>
  Rispondereは、<span class="text-pc-br"></span>
  デザイン会社です。
</p>

<!-- PCで1行、スマホで改行 -->
<p>
  名古屋を拠点とする<br class="sp-only">
  デザイン会社です。
</p>
```

---

## ✅ 改善すべきページと箇所

### 1. トップページ（index.html）

#### ヒーローセクション

**現在**:
```html
<h1 class="hero__title">
  止まらないデザイン運用を、<br>
  仕組みでつくる。
</h1>
```

**改善案**:
```html
<h1 class="hero__title">
  <span class="title-line">止まらないデザイン運用を、</span><br>
  <span class="title-line">仕組みでつくる。</span>
</h1>
```

---

### 2. サービスページ（service.html）

#### サービス説明

**現在**:
```html
<p class="card__text">
  バナー、Webサイトなど、<br>
  目的に合わせたデザイン制作。
</p>
```

**改善案**:
```html
<p class="card__text">
  バナー、Webサイトなど、<br class="sp-only">
  目的に合わせたデザイン制作。
</p>
```

---

### 3. 採用ページ（recruit.html）

#### 募集要項

**現在**:
```html
<p class="hero__text">
  腰を据えて働きながら、<br>
  制作の進行を整え、<br>
  更新が止まらない状態をつくる仕事です。
</p>
```

**改善案**:
```html
<p class="hero__text">
  腰を据えて働きながら、<br>
  制作の進行を整え、<br class="sp-only">
  更新が止まらない状態を<br class="sp-only">
  つくる仕事です。
</p>
```

---

## 📊 改善優先度

| ページ | 優先度 | 改善箇所 |
|-------|-------|---------|
| index.html | 高 | ヒーロー、できることセクション |
| recruit.html | 高 | ヒーロー、募集要項 |
| service.html | 中 | サービス説明 |
| about.html | 中 | 会社紹介文 |
| contact.html | 低 | フォーム説明 |

---

## 🛠️ 実装手順

### ステップ1: CSS追加

`styles.css` に以下を追加：

```css
/* スマホ専用改行 */
.sp-only {
  display: none;
}

@media (max-width: 768px) {
  .sp-only {
    display: inline;
  }
}

/* PC専用改行 */
.pc-only {
  display: inline;
}

@media (max-width: 768px) {
  .pc-only {
    display: none;
  }
}

/* タイトル行の最適化 */
.title-line {
  display: inline-block;
  min-width: 100%;
}

@media (max-width: 768px) {
  .title-line {
    min-width: auto;
  }
}
```

---

### ステップ2: HTML調整

各ページで改行を調整：

1. **意味のまとまりで改行**
2. **PC/スマホで適切な位置に `<br>` を配置**
3. **`sp-only` / `pc-only` クラスを活用**

---

## 📝 改善例

### Before（改善前）

```html
<p>
  Rispondere（リスポンドレ）は、<br>
  広告・Web・販促物の制作を行うデザイン会社です。<br>
  「作って終わり」ではなく、更新しやすく、<br>
  運用し続けられるデザインを大切にしています。
</p>
```

**問題点**:
- PCで不自然な改行が多い
- スマホで1行が長すぎる

---

### After（改善後）

```html
<p>
  Rispondere（リスポンドレ）は、<br class="sp-only">
  広告・Web・販促物の制作を行う<br class="sp-only">
  デザイン会社です。<br>
  「作って終わり」ではなく、<br class="sp-only">
  更新しやすく、運用し続けられる<br class="sp-only">
  デザインを大切にしています。
</p>
```

**改善点**:
- PCでは読みやすい自然な改行
- スマホでは適切な位置で改行

---

## 🎯 完成イメージ

### PCでの表示

```
┌───────────────────────────────────────┐
│  Rispondere（リスポンドレ）は、        │
│  広告・Web・販促物の制作を行う         │
│  デザイン会社です。                    │
│  「作って終わり」ではなく、             │
│  更新しやすく、運用し続けられる         │
│  デザインを大切にしています。           │
└───────────────────────────────────────┘
```

### スマホでの表示

```
┌─────────────────┐
│ Rispondere      │
│ （リスポンドレ）│
│ は、広告・Web・ │
│ 販促物の制作を  │
│ 行うデザイン会社│
│ です。          │
│ 「作って終わり」│
│ ではなく、      │
│ 更新しやすく、  │
│ 運用し続けられる│
│ デザインを大切に│
│ しています。    │
└─────────────────┘
```

---

## 📞 サポート

- **メール**: info@rispondere.co.jp
- **LINE**: [@270wnwwg](https://line.me/R/ti/p/@270wnwwg)
- **GitHub**: https://github.com/Rispondere/rispondere-website2

---

**完成度**: ガイドライン作成完了  
**次のステップ**: 各ページのHTML調整

🎉 **このガイドに沿って、全ページのレイアウトを改善します！**
