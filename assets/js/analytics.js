/**
 * Google Analytics 4 (GA4) 設定
 * スプレッドシートから計測IDを読み込んで動的に設定
 */

(function() {
  'use strict';

  /**
   * GA4を初期化
   */
  function initGA4(measurementId) {
    if (!measurementId || measurementId === '') {
      console.log('⚠️ GA4 計測IDが設定されていません');
      return;
    }

    // Google Analytics スクリプトを動的に読み込み
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script1);

    // gtag関数を初期化
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);

    console.log('✅ GA4 初期化完了: ' + measurementId);
  }

  /**
   * スプレッドシートからGA4設定を読み込み
   */
  function loadGA4Settings() {
    const SHEET_ID = '1o7-qkf3FUXXfvgRXCMg0QA7ClnTps7Wt99YeNP1zTIE';
    const SHEET_NAME = 'settings';
    const API_URL = 'https://opensheet.elk.sh/' + SHEET_ID + '/' + SHEET_NAME;

    fetch(API_URL)
      .then(function(response) {
        if (!response.ok) throw new Error('GA4 settings not found');
        return response.json();
      })
      .then(function(data) {
        // データをキー:値のマップに変換
        const settings = {};
        data.forEach(function(row) {
          if (row.key && row.value) {
            settings[row.key] = row.value;
          }
        });

        // GA4計測IDを取得して初期化
        if (settings.ga4_measurement_id) {
          initGA4(settings.ga4_measurement_id);
        }
      })
      .catch(function(error) {
        console.log('⚠️ GA4設定を読み込めませんでした:', error.message);
      });
  }

  /**
   * カスタムイベントを送信
   */
  window.trackEvent = function(eventName, eventParams) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventParams || {});
      console.log('📊 GA4 Event:', eventName, eventParams);
    }
  };

  /**
   * 採用ページの応募ボタンクリックを計測
   */
  function trackRecruitButtons() {
    const recruitButtons = document.querySelectorAll('a[href*="contact"]');
    recruitButtons.forEach(function(button) {
      // 採用ページからのクリックのみ
      if (window.location.pathname.includes('recruit')) {
        button.addEventListener('click', function() {
          window.trackEvent('recruit_apply_click', {
            'event_category': 'recruit',
            'event_label': 'apply_button',
            'page_path': window.location.pathname
          });
        });
      }
    });
  }

  // 初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadGA4Settings();
      trackRecruitButtons();
    });
  } else {
    loadGA4Settings();
    trackRecruitButtons();
  }

})();
