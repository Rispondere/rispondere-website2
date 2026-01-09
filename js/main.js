/**
 * 有限会社Rispondere コーポレートサイト - シンプル版
 */

(function() {
  'use strict';

  /**
   * ハンバーガーメニューの開閉
   */
  function initHamburgerMenu() {
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');

    console.log('Hamburger:', hamburger);
    console.log('Nav:', nav);

    if (hamburger && nav) {
      hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked!');
        nav.classList.toggle('is-open');
        console.log('Nav classes:', nav.className);
        
        // アクセシビリティ対応
        const isOpen = nav.classList.contains('is-open');
        hamburger.setAttribute('aria-expanded', isOpen);
      });

      // ナビゲーションリンクをクリックしたらメニューを閉じる
      const navLinks = nav.querySelectorAll('a');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          nav.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', false);
        });
      });
    } else {
      console.error('Hamburger or nav not found!');
    }
  }

  /**
   * スムーススクロール
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * 初期化
   */
  function init() {
    initHamburgerMenu();
    initSmoothScroll();
  }

  // DOMContentLoaded後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
