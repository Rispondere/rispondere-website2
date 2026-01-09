/**
 * 有限会社Rispondere コーポレートサイト
 */

// ハンバーガーメニューの初期化（即時実行・確実に動作）
(function() {
  'use strict';
  
  function init() {
    // ハンバーガーメニューの開閉
    var hamburger = document.querySelector('.header__hamburger');
    var nav = document.querySelector('.header__nav');
    
    if (!hamburger || !nav) {
      console.error('Hamburger or Nav not found!');
      return;
    }
    
    console.log('Menu initialized successfully');
    
    // ハンバーガーボタンのクリック
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      var isOpen = nav.classList.contains('is-open');
      
      if (isOpen) {
        nav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        console.log('Menu closed');
      } else {
        nav.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
        console.log('Menu opened');
      }
    });
    
    // リンククリックでメニューを閉じる
    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        nav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    }
    
    // スムーススクロール
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (var j = 0; j < scrollLinks.length; j++) {
      scrollLinks[j].addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var header = document.querySelector('.header');
          var headerHeight = header ? header.offsetHeight : 0;
          var targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
  }
  
  // 複数のタイミングで初期化を試みる
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // 念のため、loadイベントでも実行
  window.addEventListener('load', function() {
    // すでに初期化済みならスキップ
    var hamburger = document.querySelector('.header__hamburger');
    if (hamburger && !hamburger.hasAttribute('data-initialized')) {
      hamburger.setAttribute('data-initialized', 'true');
      init();
    }
  });
})();
