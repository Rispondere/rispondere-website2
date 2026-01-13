# 独自ドメイン rispondere.co.jp 設定ガイド

## 概要
GitHub Pagesで公開中の Rispondere コーポレートサイトを、独自ドメイン `rispondere.co.jp` に接続する手順を説明します。

**現在のURL:**  
`https://rispondere.github.io/rispondere.co.jp/`

**設定後のURL:**  
`https://rispondere.co.jp`

---

## 📋 作業の流れ（全4ステップ）

1. ✅ **CNAMEファイルの作成**（完了）
2. ⚙️ **GitHub Pages の Custom domain 設定**
3. 🌐 **お名前.com 側の DNS（CNAME）設定**
4. 🔒 **HTTPS（SSL）有効化**

---

## ✅ ステップ1：CNAMEファイルの作成（完了）

リポジトリのルートディレクトリに `CNAME` ファイルを作成しました。

**ファイル内容:**
```
rispondere.co.jp
```

**確認URL:**  
https://github.com/Rispondere/rispondere.co.jp/blob/main/CNAME

---

## ⚙️ ステップ2：GitHub Pages の Custom domain 設定

### 手順

#### 1. GitHubリポジトリの設定画面を開く
```
https://github.com/Rispondere/rispondere.co.jp/settings/pages
```

#### 2. Custom domain セクションを見つける
ページ中央にある「Custom domain」という項目を探します。

#### 3. ドメインを入力
- **入力欄に以下を入力:**
  ```
  rispondere.co.jp
  ```
- **「Save」ボタンをクリック**

#### 4. DNS チェック待機
- 保存後、GitHub が DNS の確認を開始します
- 「DNS check in progress...」と表示されます
- **お名前.com 側の DNS 設定が完了するまで、このチェックは成功しません**

---

## 🌐 ステップ3：お名前.com 側の DNS（CNAME）設定

### 前提条件
- お名前.com で `rispondere.co.jp` ドメインを取得済み
- お名前.com の管理画面にログイン可能

### 手順

#### 1. お名前.com の管理画面にログイン
```
https://www.onamae.com/
```

#### 2. DNS設定画面に移動
1. ログイン後、トップページから **「ドメイン」** メニューをクリック
2. **「DNS関連機能の設定」** をクリック
3. `rispondere.co.jp` を選択
4. **「次へ」** をクリック

#### 3. DNS レコード設定画面を開く
- **「DNSレコード設定を利用する」** の **「設定する」** ボタンをクリック

#### 4. CNAME レコードを追加

以下の2つのレコードを追加します：

##### レコード1：www付きドメイン
| 項目 | 入力内容 |
|------|---------|
| **ホスト名** | `www` |
| **TYPE** | `CNAME` |
| **VALUE** | `rispondere.github.io` |
| **TTL** | `3600`（デフォルトのまま） |

##### レコード2：ルートドメイン（Apexドメイン）
| 項目 | 入力内容 |
|------|---------|
| **ホスト名** | `@` または 空欄 |
| **TYPE** | `A` |
| **VALUE** | 以下の4つのIPアドレスを順番に登録 |
| | `185.199.108.153` |
| | `185.199.109.153` |
| | `185.199.110.153` |
| | `185.199.111.153` |
| **TTL** | `3600`（デフォルトのまま） |

**重要：**  
- Aレコードは **4つすべて** 登録してください
- GitHub Pages の公式IPアドレスです

#### 5. 設定を保存
- 入力完了後、**「追加」** ボタンをクリック
- 設定内容を確認して **「確認」** → **「設定する」** をクリック

#### 6. DNS 反映を待つ
- DNS の反映には **数分〜最大48時間** かかる場合があります
- 通常は **30分〜1時間** で反映されます

---

## 🔍 DNS 設定の確認方法

### ターミナル（コマンドプロンプト）で確認

#### CNAME レコードの確認
```bash
nslookup www.rispondere.co.jp
```

**正しく設定されている場合の出力例:**
```
www.rispondere.co.jp
    canonical name = rispondere.github.io
```

#### A レコードの確認
```bash
nslookup rispondere.co.jp
```

**正しく設定されている場合の出力例:**
```
Address: 185.199.108.153
Address: 185.199.109.153
Address: 185.199.110.153
Address: 185.199.111.153
```

---

## 🔒 ステップ4：HTTPS（SSL）有効化

### 手順

#### 1. GitHub Pages 設定画面に戻る
```
https://github.com/Rispondere/rispondere.co.jp/settings/pages
```

#### 2. DNS チェックの成功を確認
- Custom domain 欄に緑色のチェックマーク ✅ が表示されていることを確認
- 「DNS check successful」と表示されます

#### 3. HTTPS を有効化
- **「Enforce HTTPS」** にチェックを入れる
- すぐにチェックできない場合は、数分待ってから再度試してください
- SSL証明書の発行には **数分〜最大24時間** かかる場合があります

#### 4. 完了確認
- **「Your site is published at https://rispondere.co.jp」** と表示されれば完了！

---

## 📊 設定完了後の確認

### 1. サイトにアクセス
以下のURLで正しく表示されることを確認してください：

- `https://rispondere.co.jp`
- `https://www.rispondere.co.jp`
- `http://rispondere.co.jp` → `https://rispondere.co.jp` にリダイレクト

### 2. 全ページの動作確認
- トップページ: https://rispondere.co.jp/
- サービス: https://rispondere.co.jp/service.html
- 会社紹介: https://rispondere.co.jp/about.html
- 採用: https://rispondere.co.jp/recruit.html
- お問い合わせ: https://rispondere.co.jp/contact.html

### 3. スマホでの表示確認
- iPhone（Safari）でアクセス
- Android（Chrome）でアクセス

---

## 🚨 トラブルシューティング

### DNS check が成功しない場合

**原因1：DNS がまだ反映されていない**
- **対処法:** 30分〜1時間待ってから再度確認

**原因2：DNS レコードの設定ミス**
- **対処法:** お名前.com の DNS 設定を再確認
  - CNAME レコード: `www` → `rispondere.github.io`
  - A レコード: `@` → 4つのIPアドレス

**原因3：既存の DNS 設定が競合している**
- **対処法:** お名前.com で `rispondere.co.jp` の既存レコードを削除してから再設定

### HTTPS が有効化できない場合

**原因1：DNS チェックがまだ成功していない**
- **対処法:** DNS チェックが成功してから再試行

**原因2：SSL証明書の発行待ち**
- **対処法:** 数分〜24時間待つ（通常は30分以内に発行される）

### サイトが表示されない場合

**原因1：DNS がまだ反映されていない**
- **対処法:** ブラウザのキャッシュをクリアして再試行

**原因2：古いURLがキャッシュされている**
- **対処法:** シークレットモード（プライベートブラウジング）で確認

---

## 📝 設定チェックリスト

設定が完了したら、以下を確認してください：

### GitHub 側
- [ ] CNAME ファイルがリポジトリのルートに存在する
- [ ] Custom domain が `rispondere.co.jp` に設定されている
- [ ] DNS check が成功している（緑色のチェックマーク）
- [ ] Enforce HTTPS がONになっている

### お名前.com 側
- [ ] CNAME レコード：`www` → `rispondere.github.io`
- [ ] A レコード：`@` → 4つのIPアドレス登録済み
- [ ] DNS 設定が保存されている

### サイト確認
- [ ] https://rispondere.co.jp でアクセスできる
- [ ] https://www.rispondere.co.jp でアクセスできる
- [ ] HTTP → HTTPS へ自動リダイレクトされる
- [ ] 鍵マーク🔒が表示されている（SSL有効）
- [ ] 全ページが正常に表示される

---

## 🎯 設定後の注意事項

### サイト内のURLについて
現在のサイトは `/rispondere.co.jp/` というパスを使用していますが、独自ドメインでは **ルートディレクトリ** として公開されます。

**変更の必要はありません。** GitHub Pagesが自動的に処理します。

### 旧URLからのリダイレクト
旧URL `https://rispondere.github.io/rispondere.co.jp/` も引き続きアクセス可能です。

必要に応じて、GitHub Pages の設定で自動リダイレクトを有効にできます。

---

## 📞 サポート

設定でお困りの場合は、お気軽にお問い合わせください。

- **公式LINE**: [@270wnwwg](https://line.me/R/ti/p/@270wnwwg)
- **メール**: info@rispondere.co.jp
- **GitHub リポジトリ**: https://github.com/Rispondere/rispondere.co.jp

---

## 📚 参考資料

### GitHub Pages 公式ドキュメント
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

### GitHub Pages の公式IPアドレス（最新版）
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

最新情報は以下で確認できます：
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

---

## 📅 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-01-12 | 独自ドメイン設定ガイド初版作成 |
| 2026-01-12 | CNAMEファイル作成完了 |

