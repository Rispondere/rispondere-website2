#!/bin/bash
# すべてのHTMLファイルにタッチ対応メニュースクリプトを追加

cd /home/user/webapp

NEW_SCRIPT='  <script>
  // スマホメニュー - 完全版（タッチイベント対応）
  (function() {
    '\''use strict'\'';
    
    function initMenu() {
      var hamburger = document.querySelector('\''.header__hamburger'\'');
      var nav = document.querySelector('\''.header__nav'\'');
      
      if (!hamburger || !nav) {
        console.error('\''Menu elements not found'\'');
        return;
      }
      
      console.log('\''Menu initialized'\'');
      
      // タップ/クリック両方に対応
      function toggleMenu(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        
        var isOpen = nav.classList.contains('\''is-open'\'');
        console.log('\''Toggle menu, current state:'\'', isOpen ? '\''open'\'' : '\''closed'\'');
        
        if (isOpen) {
          nav.classList.remove('\''is-open'\'');
          hamburger.setAttribute('\''aria-expanded'\'', '\''false'\'');
          document.body.style.overflow = '\'\'\'';
        } else {
          nav.classList.add('\''is-open'\'');
          hamburger.setAttribute('\''aria-expanded'\'', '\''true'\'');
          document.body.style.overflow = '\''hidden'\'';
        }
        
        console.log('\''New state:'\'', nav.classList.contains('\''is-open'\'') ? '\''open'\'' : '\''closed'\'');
      }
      
      // click, touchstart, touchend すべてに対応
      hamburger.addEventListener('\''click'\'', toggleMenu, { passive: false });
      hamburger.addEventListener('\''touchstart'\'', function(e) {
        e.preventDefault();
        toggleMenu(e);
      }, { passive: false });
      
      // リンククリックでメニューを閉じる
      var links = nav.querySelectorAll('\''a'\'');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('\''click'\'', function() {
          nav.classList.remove('\''is-open'\'');
          hamburger.setAttribute('\''aria-expanded'\'', '\''false'\'');
          document.body.style.overflow = '\'\'\'';
        });
      }
      
      // メニュー外をタップしたら閉じる
      document.addEventListener('\''click'\'', function(e) {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
          if (nav.classList.contains('\''is-open'\'')) {
            nav.classList.remove('\''is-open'\'');
            hamburger.setAttribute('\''aria-expanded'\'', '\''false'\'');
            document.body.style.overflow = '\'\'\'';
          }
        }
      });
      
      console.log('\''Menu events attached'\'');
    }
    
    // 複数のタイミングで初期化
    if (document.readyState === '\''loading'\'') {
      document.addEventListener('\''DOMContentLoaded'\'', initMenu);
    } else {
      initMenu();
    }
    
    window.addEventListener('\''load'\'', function() {
      setTimeout(initMenu, 100);
    });
  })();
  </script>'

for file in service.html about.html recruit.html contact.html; do
  if [ -f "$file" ]; then
    echo "Updating $file..."
    # scriptタグの前にある古いスクリプトを探して置換
    if grep -q "<script>" "$file"; then
      # 最後の<script>タグの前に新しいスクリプトを挿入（既存を削除）
      sed -i '/<script>/,/<\/script>/{/<script>/!{/<\/script>/!d;};}' "$file"
      sed -i "s|  <script src=\"/rispondere-website2/js/main.js\"></script>|$NEW_SCRIPT\n  <script src=\"/rispondere-website2/js/main.js\"></script>|" "$file"
    fi
  fi
done

echo "All files updated!"
