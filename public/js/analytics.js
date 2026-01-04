/**
 * FIREFITNESS Analytics - 統合計測スクリプト
 * GA4 + GTM + Clarity + カスタムイベント
 *
 * 使用方法:
 * 1. GA4_MEASUREMENT_ID と GTM_CONTAINER_ID を設定
 * 2. 全HTMLの<head>内に <script src="/js/analytics.js"></script> を追加
 */

(function() {
    'use strict';

    // ========================================
    // 設定（TODO: 実際のIDに置き換えてください）
    // ========================================
    const CONFIG = {
        GA4_MEASUREMENT_ID: 'G-QN2VNZB80Z', // GA4の測定ID
        GTM_CONTAINER_ID: 'GTM-XXXXXXX',    // GTMのコンテナID（必要に応じて設定）
        CLARITY_PROJECT_ID: 'uw1aa9kro8',   // Clarity（設定済み）
        DEBUG: false
    };

    // ========================================
    // ユーティリティ
    // ========================================
    function log(message) {
        if (CONFIG.DEBUG || window.location.search.includes('debug=true')) {
            console.log('[FF Analytics]', message);
        }
    }

    // UTMパラメータを取得
    function getUTMParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            source: params.get('utm_source') || '',
            medium: params.get('utm_medium') || '',
            campaign: params.get('utm_campaign') || '',
            term: params.get('utm_term') || '',
            content: params.get('utm_content') || ''
        };
    }

    // セッションストレージにUTMを保存
    function saveUTMToSession() {
        const utm = getUTMParams();
        if (utm.source) {
            sessionStorage.setItem('ff_utm', JSON.stringify(utm));
            log('UTM saved: ' + JSON.stringify(utm));
        }
    }

    // 保存されたUTMを取得
    function getSavedUTM() {
        const saved = sessionStorage.getItem('ff_utm');
        return saved ? JSON.parse(saved) : getUTMParams();
    }

    // ========================================
    // Google Analytics 4
    // ========================================
    function initGA4() {
        if (!CONFIG.GA4_MEASUREMENT_ID || CONFIG.GA4_MEASUREMENT_ID.includes('XXXX')) {
            log('GA4 ID not configured - skipping');
            return;
        }

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + CONFIG.GA4_MEASUREMENT_ID;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', CONFIG.GA4_MEASUREMENT_ID, {
            send_page_view: true
        });

        log('GA4 initialized: ' + CONFIG.GA4_MEASUREMENT_ID);
    }

    // ========================================
    // Google Tag Manager
    // ========================================
    function initGTM() {
        if (!CONFIG.GTM_CONTAINER_ID || CONFIG.GTM_CONTAINER_ID.includes('XXXX')) {
            log('GTM ID not configured - skipping');
            return;
        }

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', CONFIG.GTM_CONTAINER_ID);

        log('GTM initialized: ' + CONFIG.GTM_CONTAINER_ID);
    }

    // ========================================
    // Microsoft Clarity
    // ========================================
    function initClarity() {
        if (window.clarity) {
            log('Clarity already loaded');
            return;
        }

        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", CONFIG.CLARITY_PROJECT_ID);

        log('Clarity initialized: ' + CONFIG.CLARITY_PROJECT_ID);
    }

    // ========================================
    // カスタムイベントトラッキング
    // ========================================
    const FFAnalytics = {
        // LINEボタンクリック
        trackLineClick: function(buttonLocation) {
            const utm = getSavedUTM();
            const eventData = {
                event: 'line_click',
                button_location: buttonLocation || 'unknown',
                page_path: window.location.pathname,
                utm_source: utm.source,
                utm_medium: utm.medium,
                utm_campaign: utm.campaign
            };

            if (window.gtag) {
                gtag('event', 'line_click', eventData);
            }

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(eventData);

            if (window.clarity) {
                clarity('set', 'line_click', buttonLocation);
            }

            log('LINE click tracked: ' + buttonLocation);
        },

        // 予約ボタンクリック
        trackReserveClick: function(buttonLocation) {
            const utm = getSavedUTM();
            const eventData = {
                event: 'reserve_click',
                button_location: buttonLocation || 'unknown',
                page_path: window.location.pathname,
                utm_source: utm.source,
                utm_medium: utm.medium,
                utm_campaign: utm.campaign
            };

            if (window.gtag) {
                gtag('event', 'reserve_click', eventData);
            }

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(eventData);

            if (window.clarity) {
                clarity('set', 'reserve_click', buttonLocation);
            }

            log('Reserve click tracked: ' + buttonLocation);
        },

        // 電話ボタンクリック
        trackPhoneClick: function(buttonLocation) {
            const eventData = {
                event: 'phone_click',
                button_location: buttonLocation || 'unknown',
                page_path: window.location.pathname
            };

            if (window.gtag) {
                gtag('event', 'phone_click', eventData);
            }

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(eventData);

            log('Phone click tracked: ' + buttonLocation);
        },

        // スクロール深度
        trackScrollDepth: function() {
            let tracked = { 25: false, 50: false, 75: false, 90: false };

            window.addEventListener('scroll', function() {
                const scrollPercent = Math.round(
                    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
                );

                [25, 50, 75, 90].forEach(function(threshold) {
                    if (scrollPercent >= threshold && !tracked[threshold]) {
                        tracked[threshold] = true;

                        if (window.gtag) {
                            gtag('event', 'scroll_depth', {
                                percent: threshold,
                                page_path: window.location.pathname
                            });
                        }

                        log('Scroll depth: ' + threshold + '%');
                    }
                });
            });
        },

        // ページ滞在時間
        trackTimeOnPage: function() {
            const startTime = Date.now();

            window.addEventListener('beforeunload', function() {
                const timeOnPage = Math.round((Date.now() - startTime) / 1000);

                if (window.gtag) {
                    gtag('event', 'time_on_page', {
                        seconds: timeOnPage,
                        page_path: window.location.pathname
                    });
                }
            });
        }
    };

    window.FFAnalytics = FFAnalytics;

    // ========================================
    // 自動イベントバインディング
    // ========================================
    function bindAutoEvents() {
        // LINEボタン自動検出
        document.querySelectorAll('a[href*="lin.ee"], a[href*="line.me"], a[href*="/line-"]').forEach(function(el, index) {
            el.addEventListener('click', function() {
                const section = el.closest('section');
                const location = section ? section.id || 'section_' + index :
                                 el.closest('footer') ? 'footer' :
                                 el.closest('.fixed-cta') ? 'fixed_cta' : 'cta_' + index;
                FFAnalytics.trackLineClick(location);
            });
        });

        // 予約ボタン自動検出
        document.querySelectorAll('a[href*="reserve"], a[href*="hacomono"], a[href="#reserve"]').forEach(function(el, index) {
            el.addEventListener('click', function() {
                const section = el.closest('section');
                const location = section ? section.id || 'section_' + index : 'reserve_' + index;
                FFAnalytics.trackReserveClick(location);
            });
        });

        // 電話リンク自動検出
        document.querySelectorAll('a[href^="tel:"]').forEach(function(el) {
            el.addEventListener('click', function() {
                FFAnalytics.trackPhoneClick('phone_link');
            });
        });

        log('Auto events bound');
    }

    // ========================================
    // 初期化
    // ========================================
    function init() {
        log('Initializing FIREFITNESS Analytics...');

        saveUTMToSession();
        initGA4();
        initGTM();
        initClarity();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                bindAutoEvents();
                FFAnalytics.trackScrollDepth();
                FFAnalytics.trackTimeOnPage();
            });
        } else {
            bindAutoEvents();
            FFAnalytics.trackScrollDepth();
            FFAnalytics.trackTimeOnPage();
        }

        log('Analytics initialized');
    }

    init();

})();
