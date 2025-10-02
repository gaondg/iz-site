// Performance monitoring utilities for the IzataCore website

export const performanceConfig = {
  // Performance thresholds
  lcpThreshold: 2500, // Largest Contentful Paint
  fidThreshold: 100,  // First Input Delay
  clsThreshold: 0.1,  // Cumulative Layout Shift
  fcpThreshold: 1800, // First Contentful Paint
  ttfbThreshold: 600, // Time to First Byte
  
  // Monitoring intervals
  monitoringInterval: 1000,
  
  // Error tracking
  enableErrorTracking: true,
  
  // Performance tracking
  enablePerformanceTracking: true
};

export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  fmp: number;
  tti: number;
}

export const getPerformanceMetrics = (): PerformanceMetrics => {
  const metrics: PerformanceMetrics = {
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    fmp: 0,
    tti: 0
  };
  
  if (typeof window !== 'undefined' && window.performance) {
    // Get navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metrics.ttfb = navigation.responseStart - navigation.requestStart;
    }
    
    // Get paint timing
    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        metrics.fcp = entry.startTime;
      }
    });
    
    // Get LCP
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      metrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
    }
    
    // Get FID
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      const fidEntry = fidEntries[0] as PerformanceEventTiming;
      metrics.fid = fidEntry.processingStart - fidEntry.startTime;
    }
    
    // Get CLS
    const clsEntries = performance.getEntriesByType('layout-shift');
    let clsValue = 0;
    clsEntries.forEach(entry => {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    });
    metrics.cls = clsValue;
  }
  
  return metrics;
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
      
      if (lastEntry.startTime > performanceConfig.lcpThreshold) {
        console.warn('LCP is above threshold:', lastEntry.startTime);
      }
    });
    
    if (lcpObserver) {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }
    
    // Observe First Input Delay
    const fidObserver = createPerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fid = (entry as PerformanceEventTiming).processingStart - (entry as PerformanceEventTiming).startTime;
        console.log('FID:', fid);
        
        if (fid > performanceConfig.fidThreshold) {
          console.warn('FID is above threshold:', fid);
        }
      });
    });
    
    if (fidObserver) {
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
    
    // Observe Cumulative Layout Shift
    const clsObserver = createPerformanceObserver((list) => {
      const entries = list.getEntries();
      let clsValue = 0;
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      
      console.log('CLS:', clsValue);
      
      if (clsValue > performanceConfig.clsThreshold) {
        console.warn('CLS is above threshold:', clsValue);
      }
    });
    
    if (clsObserver) {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }
};

export const trackPerformance = (): void => {
  if (typeof window !== 'undefined' && window.performance) {
    const metrics = getPerformanceMetrics();
    
    // Log performance metrics
    console.log('Performance Metrics:', metrics);
    
    // Check thresholds
    if (metrics.lcp > performanceConfig.lcpThreshold) {
      console.warn('LCP threshold exceeded:', metrics.lcp);
    }
    
    if (metrics.fid > performanceConfig.fidThreshold) {
      console.warn('FID threshold exceeded:', metrics.fid);
    }
    
    if (metrics.cls > performanceConfig.clsThreshold) {
      console.warn('CLS threshold exceeded:', metrics.cls);
    }
    
    if (metrics.fcp > performanceConfig.fcpThreshold) {
      console.warn('FCP threshold exceeded:', metrics.fcp);
    }
    
    if (metrics.ttfb > performanceConfig.ttfbThreshold) {
      console.warn('TTFB threshold exceeded:', metrics.ttfb);
    }
  }
};

export const initializePerformanceMonitoring = (): void => {
  if (typeof window !== 'undefined') {
    // Start monitoring when page loads
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        observeWebVitals();
        trackPerformance();
      });
    } else {
      observeWebVitals();
      trackPerformance();
    }
    
    // Monitor performance periodically
    setInterval(trackPerformance, performanceConfig.monitoringInterval);
    
    // Monitor performance on page unload
    window.addEventListener('beforeunload', () => {
      trackPerformance();
    });
  }
};

export const getResourceTiming = (): PerformanceEntry[] => {
  if (typeof window !== 'undefined' && window.performance) {
    return performance.getEntriesByType('resource');
  }
  return [];
};

export const getNavigationTiming = (): PerformanceNavigationTiming | null => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation || null;
  }
  return null;
};

export const getPaintTiming = (): PerformanceEntry[] => {
  if (typeof window !== 'undefined' && window.performance) {
    return performance.getEntriesByType('paint');
  }
  return [];
};

export const getLongTaskTiming = (): PerformanceEntry[] => {
  if (typeof window !== 'undefined' && window.performance) {
    return performance.getEntriesByType('longtask');
  }
  return [];
};

export const analyzePerformance = (): {
  score: number;
  recommendations: string[];
} => {
  const metrics = getPerformanceMetrics();
  let score = 100;
  const recommendations: string[] = [];
  
  // LCP scoring
  if (metrics.lcp > performanceConfig.lcpThreshold) {
    score -= 20;
    recommendations.push('Optimize Largest Contentful Paint (LCP)');
  }
  
  // FID scoring
  if (metrics.fid > performanceConfig.fidThreshold) {
    score -= 20;
    recommendations.push('Optimize First Input Delay (FID)');
  }
  
  // CLS scoring
  if (metrics.cls > performanceConfig.clsThreshold) {
    score -= 20;
    recommendations.push('Optimize Cumulative Layout Shift (CLS)');
  }
  
  // FCP scoring
  if (metrics.fcp > performanceConfig.fcpThreshold) {
    score -= 20;
    recommendations.push('Optimize First Contentful Paint (FCP)');
  }
  
  // TTFB scoring
  if (metrics.ttfb > performanceConfig.ttfbThreshold) {
    score -= 20;
    recommendations.push('Optimize Time to First Byte (TTFB)');
  }
  
  return {
    score: Math.max(0, score),
    recommendations
  };
};
