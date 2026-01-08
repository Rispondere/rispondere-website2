#!/usr/bin/env python3
"""全HTMLファイルのヘッダーロゴを画像対応に更新"""

import os
import re

HTML_FILES = [
    'index.html',
    'service.html',
    'workstyle.html',
    'company.html',
    'recruit.html',
    'faq.html',
    'contact.html',
    'privacy.html'
]

OLD_LOGO = '''      <div class="header__logo">
        <a href="/">有限会社Rispondere</a>
      </div>'''

NEW_LOGO = '''      <div class="header__logo">
        <a href="/">
          <img src="/images/logo/rispondere-logo.png" alt="有限会社Rispondere" class="header__logo-img">
          <span class="header__logo-text">有限会社Rispondere</span>
        </a>
      </div>'''

def update_file(filepath):
    """ファイル内のロゴ部分を更新"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if OLD_LOGO in content:
        content = content.replace(OLD_LOGO, NEW_LOGO)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ {filepath} を更新しました")
        return True
    else:
        print(f"- {filepath} は既に更新済みまたはパターンが見つかりません")
        return False

def main():
    updated = 0
    for filename in HTML_FILES:
        if os.path.exists(filename):
            if update_file(filename):
                updated += 1
    
    print(f"\n合計 {updated} ファイルを更新しました。")

if __name__ == '__main__':
    main()
