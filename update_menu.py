#!/usr/bin/env python3
import re

# 新しいスクリプト
new_script = '''  <script>
  // スマホメニュー - 完全版（タッチイベント対応）
  (function() {
    'use strict';
    
    function initMenu() {
      var hamburger = document.querySelector('.header__hamburger');
      var nav = document.querySelector('.header__nav');
      
      if (!hamburger || !nav) {
        console.error('Menu elements not found');
        return;
      }
      
      console.log('Menu initialized');
      
      // タップ/クリック両方に対応
      function toggleMenu(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        
        var isOpen = nav.classList.contains('is-open');
        console.log('Toggle menu, current state:', isOpen ? 'open' : 'closed');
        
        if (isOpen) {
          nav.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        } else {
          nav.classList.add('is-open');
          hamburger.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        }
        
        console.log('New state:', nav.classList.contains('is-open') ? 'open' : 'closed');
      }
      
      // click, touchstart, touchend すべてに対応
      hamburger.addEventListener('click', toggleMenu, { passive: false });
      hamburger.addEventListener('touchstart', function(e) {
        e.preventDefault();
        toggleMenu(e);
      }, { passive: false });
      
      // リンククリックでメニューを閉じる
      var links = nav.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
          nav.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      }
      
      // メニュー外をタップしたら閉じる
      document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
          if (nav.classList.contains('is-open')) {
            nav.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
          }
        }
      });
      
      console.log('Menu events attached');
    }
    
    // 複数のタイミングで初期化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMenu);
    } else {
      initMenu();
    }
    
    window.addEventListener('load', function() {
      setTimeout(initMenu, 100);
    });
  })();
  </script>'''

files = ['service.html', 'about.html', 'recruit.html', 'contact.html']

for filename in files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 古いインラインスクリプトを新しいものに置換
        pattern = r'  <script>\s*(?://[^\n]*\n)?  \(function\(\)\{.*?\}\)\(\);\s*</script>'
        
        if re.search(pattern, content, re.DOTALL):
            new_content = re.sub(pattern, new_script, content, flags=re.DOTALL)
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f'✅ Updated {filename}')
        else:
            print(f'⚠️  Pattern not found in {filename}')
    except Exception as e:
        print(f'❌ Error updating {filename}: {e}')

print('\n✅ All files processed!')
