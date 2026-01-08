/**
 * 有限会社Rispondere コーポレートサイト - メインスクリプト
 */

(function() {
  'use strict';

  /**
   * ハンバーガーメニューの開閉
   */
  function initHamburgerMenu() {
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');

    if (hamburger && nav) {
      hamburger.addEventListener('click', function() {
        nav.classList.toggle('is-open');
        
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
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * フォーム送信処理
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // 簡易バリデーション
        if (!name || !email || !message) {
          alert('すべての項目を入力してください。');
          return;
        }
        
        // メールアドレスの形式チェック
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('正しいメールアドレスを入力してください。');
          return;
        }
        
        // mailto:リンクで送信（実際の運用ではサーバー側の処理が必要）
        const subject = encodeURIComponent('【コーポレートサイト】お問い合わせ');
        const body = encodeURIComponent(
          'お名前: ' + name + '\n' +
          'メールアドレス: ' + email + '\n\n' +
          'お問い合わせ内容:\n' + message
        );
        
        window.location.href = 'mailto:info@rispondere.jp?subject=' + subject + '&body=' + body;
        
        // フォームをリセット
        form.reset();
        alert('お問い合わせフォームを開きます。メールソフトから送信してください。');
      });
    }
  }

  /**
   * CMSからコンテンツを読み込む
   */
  function loadCMSContent() {
    // ページ識別
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    
    // コンテンツファイルのパス
    const contentPath = '/content/' + page + '.json';
    
    // コンテンツを取得
    fetch(contentPath)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Content not found');
        }
        return response.json();
      })
      .then(function(data) {
        // データを適用
        applyContentToPage(data, page);
      })
      .catch(function(error) {
        console.log('CMS content not loaded:', error.message);
        // CMSコンテンツが無い場合はHTMLの内容をそのまま使用
      });
  }

  /**
   * ページにCMSコンテンツを適用
   */
  function applyContentToPage(data, page) {
    // ページ別の処理
    switch(page) {
      case 'index':
        applyIndexContent(data);
        break;
      case 'faq':
        applyFAQContent(data);
        break;
      default:
        applyDefaultContent(data);
        break;
    }
  }

  /**
   * トップページのコンテンツ適用
   */
  function applyIndexContent(data) {
    if (data.hero_title) {
      const heroTitle = document.querySelector('.hero__title');
      if (heroTitle) heroTitle.innerHTML = data.hero_title.replace(/\n/g, '<br>');
    }
    
    if (data.hero_text) {
      const heroText = document.querySelector('.hero__text');
      if (heroText) heroText.innerHTML = data.hero_text.replace(/\n/g, '<br>');
    }
  }

  /**
   * FAQページのコンテンツ適用
   */
  function applyFAQContent(data) {
    if (data.faqs && Array.isArray(data.faqs)) {
      const faqContainer = document.querySelector('.faq');
      if (faqContainer) {
        // 既存のFAQをクリア
        faqContainer.innerHTML = '';
        
        // FAQアイテムを生成
        data.faqs.forEach(function(faq) {
          const item = document.createElement('div');
          item.className = 'faq__item';
          
          const question = document.createElement('div');
          question.className = 'faq__question';
          question.textContent = faq.question;
          
          const answer = document.createElement('div');
          answer.className = 'faq__answer';
          answer.innerHTML = faq.answer.replace(/\n/g, '<br>');
          
          item.appendChild(question);
          item.appendChild(answer);
          faqContainer.appendChild(item);
        });
      }
    }
  }

  /**
   * デフォルトのコンテンツ適用
   */
  function applyDefaultContent(data) {
    // テキストコンテンツの置き換え
    Object.keys(data).forEach(function(key) {
      const element = document.querySelector('[data-cms="' + key + '"]');
      if (element) {
        if (typeof data[key] === 'string') {
          element.innerHTML = data[key].replace(/\n/g, '<br>');
        }
      }
    });
  }

  /**
   * ロゴ画像の読み込み
   */
  function loadLogo() {
    fetch('/content/site-config.json')
      .then(function(response) {
        if (!response.ok) throw new Error('Config not found');
        return response.json();
      })
      .then(function(data) {
        if (data.logo) {
          const logoElements = document.querySelectorAll('.header__logo img');
          logoElements.forEach(function(img) {
            img.src = data.logo;
          });
        }
      })
      .catch(function(error) {
        console.log('Logo config not loaded:', error.message);
      });
  }

  /**
   * 初期化
   */
  function init() {
    // DOM読み込み完了後に実行
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initHamburgerMenu();
        initSmoothScroll();
        initContactForm();
        loadCMSContent();
        loadLogo();
      });
    } else {
      initHamburgerMenu();
      initSmoothScroll();
      initContactForm();
      loadCMSContent();
      loadLogo();
    }
  }

  // 初期化実行
  init();

})();
