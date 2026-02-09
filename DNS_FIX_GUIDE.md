# DNS設定修正ガイド｜rispondere.co.jp

## 🚨 問題の概要

**現象**：https://rispondere.co.jp/ にアクセスすると「An error occurred」エラーが表示される

**原因**：お名前.comのDNS設定で、GitHub Pagesの正しいIPアドレスが設定されていない

**現在のIP**：160.251.71.54（お名前.comのサーバー）❌  
**正しいIP**：185.199.108.153〜111.153（GitHub Pagesのサーバー）✅

---

## 🔧 修正手順（お名前.com DNS設定）

### ステップ1：お名前.com DNS設定ページを開く

1. お名前.com にログイン：https://www.onamae.com/
2. 「ドメイン」タブをクリック
3. 「DNS」ボタンをクリック
4. `rispondere.co.jp` の「変更」ボタンをクリック

---

### ステップ2：現在の誤ったAレコードを削除

以下のレコードを**削除**してください：

| タイプ | ホスト名 | 値 | 操作 |
|--------|----------|-----|------|
| A | rispondere.co.jp | 160.251.71.54 | ❌ 削除 |
| A | @ | 160.251.71.54 | ❌ 削除 |
| A | www | 160.251.71.54 | ❌ 削除 |

**注意**：以下のレコードは**削除しないでください**（メール用）：
- `A    mail.rispondere.co.jp    160.251.71.48` ✅ 保持
- `A    ml-cp.rispondere.co.jp   160.251.71.48` ✅ 保持

---

### ステップ3：GitHub Pages用のAレコードを追加

以下の**8つのAレコード**を追加してください：

#### @ レコード（4つ）

| タイプ | ホスト名 | 値（IPアドレス） | TTL |
|--------|----------|------------------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

#### www レコード（4つ）

| タイプ | ホスト名 | 値（IPアドレス） | TTL |
|--------|----------|------------------|-----|
| A | www | 185.199.108.153 | 600 |
| A | www | 185.199.109.153 | 600 |
| A | www | 185.199.110.153 | 600 |
| A | www | 185.199.111.153 | 600 |

---

### ステップ4：その他のレコードは保持

以下のレコードは**そのまま保持**してください：

#### メールサーバー設定（保持）

```
MX   @   mail83.onamae.ne.jp   優先度: 10
```

#### SPFレコード（保持）

```
TXT  @   v=spf1 include:_spf.onamae.ne.jp ~all
```

#### DKIM/DomainKey（保持）

```
TXT  default._domainkey.rispondere.co.jp   （既存の値をそのまま）
```

---

### ステップ5：設定を保存

1. 「追加」ボタンをクリック
2. 「確認画面へ進む」をクリック
3. 内容を確認して「設定する」をクリック

---

## ⏱️ DNS反映時間

- **最短**：5分〜30分
- **通常**：1〜2時間
- **最長**：48時間

---

## 🔍 反映確認方法

### 方法1：ブラウザで確認

1. https://rispondere.co.jp/ にアクセス
2. ページが正常に表示されればOK
3. キャッシュをクリアして再読み込み（Ctrl+Shift+R または Cmd+Shift+R）

### 方法2：DNSチェックツールで確認

以下のサイトで `rispondere.co.jp` のAレコードを確認：

- **DNS Checker**：https://dnschecker.org/
- **What's My DNS**：https://www.whatsmydns.net/

**正しい結果**：以下のいずれかのIPが表示される
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### 方法3：コマンドで確認（Windows）

```cmd
nslookup rispondere.co.jp
```

**正しい結果例**：
```
名前:    rispondere.co.jp
Addresses: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
```

---

## 📋 最終的なDNS設定一覧

### Aレコード

| ホスト名 | 値 | 用途 |
|----------|-----|------|
| @ | 185.199.108.153 | GitHub Pages（ルート） |
| @ | 185.199.109.153 | GitHub Pages（ルート） |
| @ | 185.199.110.153 | GitHub Pages（ルート） |
| @ | 185.199.111.153 | GitHub Pages（ルート） |
| www | 185.199.108.153 | GitHub Pages（www） |
| www | 185.199.109.153 | GitHub Pages（www） |
| www | 185.199.110.153 | GitHub Pages（www） |
| www | 185.199.111.153 | GitHub Pages（www） |
| mail | 160.251.71.48 | メールサーバー |
| ml-cp | 160.251.71.48 | メール管理 |

### MXレコード

| ホスト名 | 値 | 優先度 |
|----------|-----|--------|
| @ | mail83.onamae.ne.jp | 10 |

### TXTレコード

| ホスト名 | 値 | 用途 |
|----------|-----|------|
| @ | v=spf1 include:_spf.onamae.ne.jp ~all | SPF（メール認証） |
| default._domainkey | （DKIM値） | DKIM（メール認証） |

---

## ❓ トラブルシューティング

### Q1：48時間経ってもサイトが表示されない

**確認事項**：
1. お名前.comのDNS設定で、Aレコードが正しく設定されているか
2. GitHub Pagesの設定で、`rispondere.co.jp` がカスタムドメインに設定されているか
3. GitHub リポジトリに `CNAME` ファイルがあるか

### Q2：「DNS_PROBE_FINISHED_NXDOMAIN」エラーが出る

**原因**：DNSレコードが見つからない

**対処法**：
1. お名前.comのDNS設定を再確認
2. ネームサーバーが正しく設定されているか確認
   - ns-rs1.gmoserver.jp
   - ns-rs2.gmoserver.jp

### Q3：HTTPSエラーが出る

**原因**：GitHub PagesのHTTPS証明書が未発行

**対処法**：
1. GitHub リポジトリの Settings → Pages を開く
2. 「Enforce HTTPS」のチェックを一度外す
3. DNS反映を待つ（数時間）
4. 再度「Enforce HTTPS」にチェックを入れる

### Q4：メールが受信できなくなった

**確認事項**：
- MXレコードが削除されていないか
- `mail.rispondere.co.jp` のAレコードが残っているか

---

## 📞 サポート情報

### GitHub Pages 設定確認

リポジトリ：https://github.com/Rispondere/rispondere-website2

Settings → Pages で以下を確認：
- Custom domain：`rispondere.co.jp`
- Enforce HTTPS：✅ チェック
- Source：`main` ブランチ / root

### お問い合わせ

- **メール**：info@rispondere.co.jp
- **公式LINE**：@270wnwwg
- **サイト**：https://rispondere.co.jp/

---

## 📚 関連ドキュメント

- [CUSTOM_DOMAIN_SETUP.md](./CUSTOM_DOMAIN_SETUP.md) - カスタムドメイン設定ガイド
- [GOOGLE_SEARCH_CONSOLE_SETUP.md](./GOOGLE_SEARCH_CONSOLE_SETUP.md) - Search Console設定

---

**作成日**：2026-01-14  
**最終更新**：2026-01-14  
**対象ドメイン**：rispondere.co.jp  
**DNS管理**：お名前.com  
**ホスティング**：GitHub Pages
