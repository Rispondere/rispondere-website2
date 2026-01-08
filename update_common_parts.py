#!/usr/bin/env python3
"""
全HTMLファイルに共通パーツ（ヘッダー・フッター・CTA）を追加するスクリプト
"""

HEADER_HTML = '''  <!-- ヘッダー -->
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <a href="/">有限会社Rispondere</a>
      </div>
      <nav class="header__nav">
        <a href="/">TOP</a>
        <a href="/service.html">事業内容</a>
        <a href="/workstyle.html">働き方</a>
        <a href="/company.html">会社概要</a>
        <a href="/recruit.html">採用</a>
        <a href="/faq.html">FAQ</a>
        <a href="/contact.html">お問い合わせ</a>
      </nav>
      <button class="header__hamburger" aria-label="メニュー" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>'''

CTA_HTML = '''  <!-- ページ下CTA（全ページ共通） -->
  <section class="page-cta">
    <div class="section__inner">
      <p class="page-cta__text">採用に関するご相談・ご質問は、<br>お問い合わせフォームからご連絡ください。</p>
      <a href="/contact.html" class="page-cta__button">お問い合わせへ</a>
    </div>
  </section>'''

FOOTER_HTML = '''  <!-- フッター -->
  <footer class="footer">
    <div class="footer__company-info">
      <div class="footer__company-name">有限会社Rispondere</div>
      <div class="footer__address">〒460-0007 愛知県名古屋市中区新栄</div>
      <a href="mailto:info@rispondere.jp" class="footer__email">info@rispondere.jp</a>
    </div>
    
    <div class="footer__inner">
      <div class="footer__content">
        <div class="footer__section">
          <h3>会社情報</h3>
          <ul>
            <li><a href="/company.html">会社概要</a></li>
            <li><a href="/service.html">事業内容</a></li>
            <li><a href="/workstyle.html">働き方</a></li>
          </ul>
        </div>
        <div class="footer__section">
          <h3>採用情報</h3>
          <ul>
            <li><a href="/recruit.html">採用情報</a></li>
            <li><a href="/faq.html">よくある質問</a></li>
          </ul>
        </div>
        <div class="footer__section">
          <h3>お問い合わせ</h3>
          <ul>
            <li><a href="/contact.html">お問い合わせフォーム</a></li>
            <li><a href="/mailto:info@rispondere.jp">info@rispondere.jp</a></li>
          </ul>
        </div>
        <div class="footer__section">
          <h3>その他</h3>
          <ul>
            <li><a href="/privacy.html">プライバシーポリシー</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 有限会社Rispondere All Rights Reserved.</p>
      </div>
    </div>
  </footer>'''

import re

def update_html_file(filepath):
    """HTMLファイルのヘッダー・CTA・フッターを更新"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # ヘッダーを統一形式に置換
    content = re.sub(
        r'  <!-- ヘッダー -->.*?</header>',
        HEADER_HTML,
        content,
        flags=re.DOTALL
    )
    
    # CTAを追加（フッター直前）、既存があれば置換
    if '<!-- ページ下CTA（全ページ共通） -->' in content:
        content = re.sub(
            r'  <!-- ページ下CTA.*?</section>',
            CTA_HTML,
            content,
            flags=re.DOTALL
        )
    else:
        # フッター直前に追加
        content = re.sub(
            r'(  <!-- フッター -->)',
            CTA_HTML + '\n\n\\1',
            content
        )
    
    # フッターを統一形式に置換
    content = re.sub(
        r'  <!-- フッター -->.*?</footer>',
        FOOTER_HTML,
        content,
        flags=re.DOTALL
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Updated: {filepath}")

# 処理対象ファイル（index.htmlとservice.htmlは手動で更新済み）
files_to_update = [
    'workstyle.html',
    'company.html',
    'recruit.html',
    'faq.html',
    'contact.html',
    'privacy.html'
]

for file in files_to_update:
    try:
        update_html_file(file)
    except Exception as e:
        print(f"❌ Error updating {file}: {e}")

print("\n✅ All HTML files updated with common parts!")
