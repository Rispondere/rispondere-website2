/**
 * 有限会社Rispondere コーポレートサイト
 */

(function() {
  'use strict';
  
  // ハンバーガーメニューの初期化
  function initHamburgerMenu() {
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');
    
    if (!hamburger || !nav) {
      console.error('Menu elements not found');
      return;
    }
    
    // ハンバーガーメニューのクリックイベント
    hamburger.addEventListener('click', function() {
      const isOpen = nav.classList.contains('is-open');
      
      if (isOpen) {
        nav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        nav.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
      }
    });
    
    // ナビゲーションリンクをクリックしたらメニューを閉じる
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // スムーススクロールの初期化
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // DOMContentLoaded後に初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initHamburgerMenu();
      initSmoothScroll();
    });
  } else {
    // DOMがすでに読み込まれている場合は即座に実行
    initHamburgerMenu();
    initSmoothScroll();
  }
})();
