// Analytics utilities for the IzataCore website

export const analyticsConfig = {
  // Google Analytics
  gaId: 'GA_MEASUREMENT_ID',
  
  // Google Tag Manager
  gtmId: 'GTM-XXXXXXX',
  
  // Facebook Pixel
  fbPixelId: 'FB_PIXEL_ID',
  
  // LinkedIn Insight Tag
  linkedinId: 'LINKEDIN_ID'
};

export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Initialize Google Analytics
    if (analyticsConfig.gaId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaId}`;
      document.head.appendChild(script);
      
      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };
      gtag('js', new Date());
      gtag('config', analyticsConfig.gaId);
    }
    
    // Initialize Google Tag Manager
    if (analyticsConfig.gtmId) {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${analyticsConfig.gtmId}');
      `;
      document.head.appendChild(script);
    }
    
    // Initialize Facebook Pixel
    if (analyticsConfig.fbPixelId) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${analyticsConfig.fbPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  }
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsConfig.gaId, {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

export const trackConversion = (conversionId: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency
    });
  }
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
