/**
 * 有限会社Rispondere コーポレートサイト - デザイン強化版
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
        
        // mailto:リンクで送信
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
   * CMS管理のカラーを読み込んでCSS変数に適用
   */
  function loadDesignColors() {
    fetch('/content/design-colors.json')
      .then(function(response) {
        if (!response.ok) throw new Error('Design colors not found');
        return response.json();
      })
      .then(function(data) {
        // CSS変数に適用
        const root = document.documentElement;
        
        if (data.primary) root.style.setProperty('--color-primary', data.primary);
        if (data.secondary) root.style.setProperty('--color-secondary', data.secondary);
        if (data.bg) root.style.setProperty('--color-bg', data.bg);
        if (data.text) root.style.setProperty('--color-text', data.text);
        
        // 派生カラーの自動計算（オプション）
        if (data.primary) {
          // 明るめの色を生成（簡易版）
          const lightColor = lightenColor(data.primary, 0.9);
          root.style.setProperty('--color-primary-light', lightColor);
          
          // 濃いめの色を生成（簡易版）
          const darkColor = darkenColor(data.primary, 0.8);
          root.style.setProperty('--color-primary-dark', darkColor);
        }
        
        console.log('Design colors applied successfully');
      })
      .catch(function(error) {
        console.log('Design colors not loaded, using defaults:', error.message);
      });
  }

  /**
   * 色を明るくする（簡易版）
   */
  function lightenColor(hex, opacity) {
    // HEXをRGBに変換
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // 白に近づける
    const newR = Math.round(r + (255 - r) * opacity);
    const newG = Math.round(g + (255 - g) * opacity);
    const newB = Math.round(b + (255 - b) * opacity);
    
    return '#' + 
      newR.toString(16).padStart(2, '0') +
      newG.toString(16).padStart(2, '0') +
      newB.toString(16).padStart(2, '0');
  }

  /**
   * 色を暗くする（簡易版）
   */
  function darkenColor(hex, factor) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    const newR = Math.round(r * factor);
    const newG = Math.round(g * factor);
    const newB = Math.round(b * factor);
    
    return '#' + 
      newR.toString(16).padStart(2, '0') +
      newG.toString(16).padStart(2, '0') +
      newB.toString(16).padStart(2, '0');
  }

  /**
   * バナー画像の読み込みと表示制御
   */
  function loadBanners() {
    fetch('/content/banners.json')
      .then(function(response) {
        if (!response.ok) throw new Error('Banners not found');
        return response.json();
      })
      .then(function(data) {
        // トップページのヒーローバナー
        if (data.hero && data.hero.enabled && data.hero.image) {
          const heroImg = document.querySelector('[data-cms-banner="hero"]');
          if (heroImg) {
            heroImg.src = data.hero.image;
            heroImg.parentElement.style.display = 'block';
          }
        }
        
        // 採用ページのバナー
        if (window.location.pathname.includes('recruit')) {
          // トップバナー
          if (data.recruit_top && data.recruit_top.enabled && data.recruit_top.image) {
            const topBanner = document.getElementById('banner-top');
            if (topBanner) {
              const img = topBanner.querySelector('img');
              if (img) {
                img.src = data.recruit_top.image;
                topBanner.style.display = 'block';
              }
            }
          }
          
          // バナー1
          if (data.recruit_banner1 && data.recruit_banner1.enabled && data.recruit_banner1.image) {
            const banner1 = document.getElementById('banner-1');
            if (banner1) {
              const img = banner1.querySelector('img');
              if (img) {
                img.src = data.recruit_banner1.image;
                banner1.style.display = 'block';
              }
            }
          }
          
          // バナー2
          if (data.recruit_banner2 && data.recruit_banner2.enabled && data.recruit_banner2.image) {
            const banner2 = document.getElementById('banner-2');
            if (banner2) {
              const img = banner2.querySelector('img');
              if (img) {
                img.src = data.recruit_banner2.image;
                banner2.style.display = 'block';
              }
            }
          }
          
          // バナー3
          if (data.recruit_banner3 && data.recruit_banner3.enabled && data.recruit_banner3.image) {
            const banner3 = document.getElementById('banner-3');
            if (banner3) {
              const img = banner3.querySelector('img');
              if (img) {
                img.src = data.recruit_banner3.image;
                banner3.style.display = 'block';
              }
            }
          }
        }
        
        console.log('Banners loaded successfully');
      })
      .catch(function(error) {
        console.log('Banners not loaded:', error.message);
      });
  }

  /**
   * CMSからコンテンツを読み込む
   */
  function loadCMSContent() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    
    const contentPath = '/content/' + page + '.json';
    
    fetch(contentPath)
      .then(function(response) {
        if (!response.ok) throw new Error('Content not found');
        return response.json();
      })
      .then(function(data) {
        applyContentToPage(data, page);
      })
      .catch(function(error) {
        console.log('CMS content not loaded:', error.message);
      });
  }

  /**
   * ページにCMSコンテンツを適用
   */
  function applyContentToPage(data, page) {
    switch(page) {
      case 'index':
        applyIndexContent(data);
        break;
      case 'recruit':
        applyRecruitContent(data);
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
   * 採用ページのコンテンツ適用
   */
  function applyRecruitContent(data) {
    // data-cms-recruit属性を持つ要素にコンテンツを適用
    Object.keys(data).forEach(function(key) {
      const element = document.querySelector('[data-cms-recruit="' + key + '"]');
      if (element) {
        if (typeof data[key] === 'string') {
          element.innerHTML = data[key].replace(/\n/g, '<br>');
        }
      }
    });
  }

  /**
   * FAQページのコンテンツ適用
   */
  function applyFAQContent(data) {
    if (data.faqs && Array.isArray(data.faqs)) {
      const faqContainer = document.querySelector('.faq');
      if (faqContainer) {
        faqContainer.innerHTML = '';
        
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
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initHamburgerMenu();
        initSmoothScroll();
        initContactForm();
        loadDesignColors();      // カラー読み込み（最優先）
        loadBanners();           // バナー読み込み
        loadCMSContent();        // コンテンツ読み込み
        loadLogo();
      });
    } else {
      initHamburgerMenu();
      initSmoothScroll();
      initContactForm();
      loadDesignColors();
      loadBanners();
      loadCMSContent();
      loadLogo();
    }
  }

  // 初期化実行
  init();

})();
