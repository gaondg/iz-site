// Performance optimization utilities for the IzataCore website

export const performanceConfig = {
  // Image optimization
  imageQuality: 85,
  imageFormats: ['webp', 'avif', 'jpg', 'png'],
  
  // Lazy loading
  lazyLoadThreshold: 100,
  
  // Preloading
  preloadCriticalResources: true,
  
  // Caching
  cacheStrategy: 'stale-while-revalidate',
  
  // Compression
  enableGzip: true,
  enableBrotli: true,
  
  // Bundle splitting
  enableCodeSplitting: true,
  
  // Service worker
  enableServiceWorker: true
};

export const optimizeImage = (src: string, width?: number, height?: number, quality?: number): string => {
  const params = new URLSearchParams();
  
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', (quality || performanceConfig.imageQuality).toString());
  
  return `${src}?${params.toString()}`;
};

export const preloadResource = (href: string, as: string, type?: string): void => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    
    document.head.appendChild(link);
  }
};

export const preloadCriticalResources = (): void => {
  if (typeof window !== 'undefined') {
    // Preload critical CSS
    preloadResource('/critical.css', 'style');
    
    // Preload critical fonts
    preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', 'style');
    
    // Preload critical images
    preloadResource('/hero-image.jpg', 'image');
  }
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

export const createPerformanceObserver = (callback: PerformanceObserverCallback): PerformanceObserver | null => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    return new PerformanceObserver(callback);
  }
  return null;
};

export const observeWebVitals = (): void => {
  if (typeof window !== 'undefined') {
    // Observe Largest Contentful Paint
    const lcpObserver = createPerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    
    if (lcpObserver) {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }
    
    // Observe First Input Delay
    const fidObserver = createPerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
      });
    });
    
    if (fidObserver) {
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
    
    // Observe Cumulative Layout Shift
    const clsObserver = createPerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          console.log('CLS:', (entry as any).value);
        }
      });
    });
    
    if (clsObserver) {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }
};

export const optimizeBundle = (): void => {
  if (typeof window !== 'undefined') {
    // Enable code splitting
    if (performanceConfig.enableCodeSplitting) {
      // This would be handled by webpack or your bundler
      console.log('Code splitting enabled');
    }
    
    // Enable service worker
    if (performanceConfig.enableServiceWorker && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }
};

export const initializePerformanceOptimization = (): void => {
  if (typeof window !== 'undefined') {
    // Preload critical resources
    preloadCriticalResources();
    
    // Observe web vitals
    observeWebVitals();
    
    // Optimize bundle
    optimizeBundle();
    
    // Set up performance monitoring
    if (window.performance && window.performance.mark) {
      window.performance.mark('performance-optimization-initialized');
    }
  }
};

export const getPerformanceMetrics = (): Record<string, number> => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
    };
  }
  
  return {};
};