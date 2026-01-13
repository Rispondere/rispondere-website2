# 制作実績画像の変更マニュアル

## 概要
このマニュアルでは、Rispondereコーポレートサイトの制作実績画像を変更する手順を説明します。

---

## 📁 画像の配置場所

制作実績の画像は、以下のディレクトリに保存されています：

```
/images/logo/
```

### 現在使用されている画像

| ファイル名 | 用途 | サイズ目安 |
|-----------|------|-----------|
| サイトサンプル_バンフレット.jpg | バンフレット制作 | 547 KB |
| サイトサンプル_求人バナー.jpg | Web制作サポート | 804 KB |
| サイトサンプル_印刷物.jpg | 広告素材制作 | 627 KB |

---

## 🖼️ 推奨画像仕様

制作実績の画像は、以下の仕様を推奨します：

### アスペクト比
- **16:9（横長）** を推奨
- 例：1600px × 900px、1200px × 675px、800px × 450px

### ファイル形式
- **JPEG (.jpg)** を推奨
- PNG形式も使用可能（ファイルサイズに注意）

### ファイルサイズ
- **500KB〜1MB程度** を推奨
- 最大でも2MB以下に抑える（ページ読み込み速度を考慮）

### 画像の品質
- 解像度：**最小 800px × 450px** 以上
- 推奨解像度：**1200px × 675px** または **1600px × 900px**
- スマホ・PCどちらでも美しく表示される品質を確保

---

## 🔧 画像変更の手順

### 方法1：GitHub経由で変更（推奨）

#### ステップ1：GitHubリポジトリにアクセス
```
https://github.com/Rispondere/rispondere.co.jp
```

#### ステップ2：画像をアップロード
1. `images/logo/` フォルダを開く
2. 「Add file」→「Upload files」をクリック
3. 新しい画像をドラッグ&ドロップ
4. コミットメッセージを入力（例：「制作実績画像を更新」）
5. 「Commit changes」をクリック

#### ステップ3：HTMLファイルを編集
画像のファイル名を変更した場合は、以下のHTMLファイルも更新が必要です：

##### トップページ（index.html）
```html
<!-- 118行目付近 -->
<img src="https://rispondere.github.io/rispondere.co.jp/images/logo/サイトサンプル_バンフレット.jpg" ...>
<img src="https://rispondere.github.io/rispondere.co.jp/images/logo/サイトサンプル_求人バナー.jpg" ...>
<img src="https://rispondere.github.io/rispondere.co.jp/images/logo/サイトサンプル_印刷物.jpg" ...>
```

##### サービスページ（service.html）
```html
<!-- 120行目、129行目、138行目付近 -->
<img src="https://rispondere.github.io/rispondere.co.jp/images/logo/サイトサンプル_バンフレット.jpg" ...>
<img src="https://rispondere.github.io/rispondere.co.jp/images/logo/サイトサンプル_求人バナー.jpg" ...>
<img src="https://rispondere.github.io/rispondere.co.jp/images/logo/サイトサンプル_印刷物.jpg" ...>
```

#### ステップ4：確認
変更後、以下のURLで表示を確認してください：
- トップページ：https://rispondere.github.io/rispondere.co.jp/
- サービスページ：https://rispondere.github.io/rispondere.co.jp/service.html

---

### 方法2：ローカル環境で変更

#### ステップ1：リポジトリをクローン
```bash
git clone https://github.com/Rispondere/rispondere.co.jp.git
cd rispondere.co.jp
```

#### ステップ2：画像を配置
新しい画像を `images/logo/` フォルダに配置します。

#### ステップ3：HTMLファイルを編集
テキストエディタで `index.html` と `service.html` を開き、
`<img src="..."` の部分を新しいファイル名に変更します。

#### ステップ4：変更をコミット&プッシュ
```bash
git add .
git commit -m "Update: 制作実績画像を変更"
git push origin main
```

#### ステップ5：GitHub Pagesで確認
1〜2分後、サイトに反映されます。

---

## 📝 画像変更時のチェックリスト

### ファイル確認
- [ ] 画像のアスペクト比は16:9か？
- [ ] ファイルサイズは2MB以下か？
- [ ] ファイル名は適切か？（日本語OK、スペースは避ける）

### HTML更新確認
- [ ] `index.html` の画像パスを更新したか？
- [ ] `service.html` の画像パスを更新したか？
- [ ] altテキストも適切に変更したか？

### 表示確認
- [ ] トップページで正しく表示されているか？
- [ ] サービスページで正しく表示されているか？
- [ ] スマホ表示で崩れていないか？
- [ ] 画像が鮮明に表示されているか？

---

## 🎨 キャプションテキストの変更

画像の下に表示されるキャプション（説明文）も変更できます。

### トップページ（index.html）
```html
<!-- 127行目、152行目、177行目付近 -->
<h4 class="work-card__title">バンフレット制作</h4>
<h4 class="work-card__title">Web制作サポート</h4>
<h4 class="work-card__title">広告素材制作</h4>
```

### サービスページ（service.html）
```html
<!-- 123行目、132行目、141行目付近 -->
<p style="font-size: 14px; color: var(--color-text-light);">バンフレット制作</p>
<p style="font-size: 14px; color: var(--color-text-light);">Web制作サポート</p>
<p style="font-size: 14px; color: var(--color-text-light);">広告素材制作</p>
```

---

## 🚨 トラブルシューティング

### 画像が表示されない
1. **ファイル名が正しいか確認**
   - HTMLに記載されているファイル名と、実際のファイル名が一致しているか
   
2. **画像のパスを確認**
   - `https://rispondere.github.io/rispondere.co.jp/images/logo/ファイル名.jpg`
   - パスが正しいか、大文字・小文字も含めて確認

3. **キャッシュをクリア**
   - **PC（Chrome）**: `Ctrl + Shift + R`（Mac: `Cmd + Shift + R`）
   - **iPhone（Safari）**: アドレスバーを長押し → 再読み込み
   - **Android（Chrome）**: メニュー（⋮）→ 履歴 → 閲覧データを削除

### 画像が荒い・ぼやけている
- 画像の解像度が低い可能性があります
- **推奨：1200px × 675px 以上** の画像を使用してください

### ファイルサイズが大きすぎる
- 画像圧縮ツールを使用してください
  - TinyPNG：https://tinypng.com/
  - Squoosh：https://squoosh.app/

---

## 📞 サポート

画像変更でお困りの場合は、お気軽にお問い合わせください。

- **公式LINE**: [@270wnwwg](https://line.me/R/ti/p/@270wnwwg)
- **メール**: info@rispondere.jp
- **サイトURL**: https://rispondere.github.io/rispondere.co.jp/
- **GitHubリポジトリ**: https://github.com/Rispondere/rispondere.co.jp

---

## 📅 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-01-12 | マニュアル初版作成 |

