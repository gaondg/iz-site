// Error tracking utilities for the IzataCore website
import React from 'react';

export const errorConfig = {
  // Error tracking
  enableErrorTracking: true,
  
  // Error reporting
  enableErrorReporting: true,
  
  // Error logging
  enableErrorLogging: true,
  
  // Error boundaries
  enableErrorBoundaries: true,
  
  // Performance errors
  enablePerformanceErrorTracking: true
};

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
}

export const trackError = (error: Error, errorInfo?: any): void => {
  if (!errorConfig.enableErrorTracking) return;
  
  const errorData: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack,
    errorBoundary: errorInfo?.errorBoundary,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    userId: getUserId(),
    sessionId: getSessionId()
  };
  
  // Log error to console
  if (errorConfig.enableErrorLogging) {
    console.error('Error tracked:', errorData);
  }
  
  // Send error to reporting service
  if (errorConfig.enableErrorReporting) {
    sendErrorToReportingService(errorData);
  }
};

export const trackPerformanceError = (error: Error, performanceData?: any): void => {
  if (!errorConfig.enablePerformanceErrorTracking) return;
  
  const errorData: ErrorInfo = {
    message: `Performance Error: ${error.message}`,
    stack: error.stack,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    userId: getUserId(),
    sessionId: getSessionId()
  };
  
  // Log performance error
  console.error('Performance error tracked:', errorData, performanceData);
  
  // Send to reporting service
  if (errorConfig.enableErrorReporting) {
    sendErrorToReportingService(errorData);
  }
};

export const trackJavaScriptError = (event: ErrorEvent): void => {
  if (!errorConfig.enableErrorTracking) return;
  
  const errorData: ErrorInfo = {
    message: event.message,
    stack: event.error?.stack,
    timestamp: Date.now(),
    url: event.filename || window.location.href,
    userAgent: navigator.userAgent,
    userId: getUserId(),
    sessionId: getSessionId()
  };
  
  // Log JavaScript error
  console.error('JavaScript error tracked:', errorData);
  
  // Send to reporting service
  if (errorConfig.enableErrorReporting) {
    sendErrorToReportingService(errorData);
  }
};

export const trackResourceError = (event: Event): void => {
  if (!errorConfig.enableErrorTracking) return;
  
  const target = event.target as HTMLElement;
  const errorData: ErrorInfo = {
    message: `Resource loading error: ${target.tagName}`,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    userId: getUserId(),
    sessionId: getSessionId()
  };
  
  // Log resource error
  console.error('Resource error tracked:', errorData);
  
  // Send to reporting service
  if (errorConfig.enableErrorReporting) {
    sendErrorToReportingService(errorData);
  }
};

export const trackUnhandledRejection = (event: PromiseRejectionEvent): void => {
  if (!errorConfig.enableErrorTracking) return;
  
  const errorData: ErrorInfo = {
    message: `Unhandled Promise Rejection: ${event.reason}`,
    stack: event.reason?.stack,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    userId: getUserId(),
    sessionId: getSessionId()
  };
  
  // Log unhandled rejection
  console.error('Unhandled promise rejection tracked:', errorData);
  
  // Send to reporting service
  if (errorConfig.enableErrorReporting) {
    sendErrorToReportingService(errorData);
  }
};

export const sendErrorToReportingService = (errorData: ErrorInfo): void => {
  // In a real implementation, you would send this to your error reporting service
  // For now, we'll just log it
  console.log('Sending error to reporting service:', errorData);
  
  // Example: Send to Sentry, LogRocket, or your own service
  // fetch('/api/errors', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(errorData),
  // });
};

export const getUserId = (): string | undefined => {
  // In a real implementation, you would get this from your authentication system
  return localStorage.getItem('userId') || undefined;
};

export const getSessionId = (): string | undefined => {
  // In a real implementation, you would get this from your session management
  return sessionStorage.getItem('sessionId') || undefined;
};

export const initializeErrorTracking = (): void => {
  if (typeof window !== 'undefined' && errorConfig.enableErrorTracking) {
    // Track JavaScript errors
    window.addEventListener('error', trackJavaScriptError);
    
    // Track resource loading errors
    window.addEventListener('error', trackResourceError, true);
    
    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', trackUnhandledRejection);
    
    // Track performance errors
    if (errorConfig.enablePerformanceErrorTracking) {
      // Monitor for performance issues
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'longtask') {
            const error = new Error('Long task detected');
            trackPerformanceError(error, { entry });
          }
        });
      });
      
      observer.observe({ entryTypes: ['longtask'] });
    }
  }
};

export const createErrorBoundary = (Component: React.ComponentType<any>) => {
  return class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean; error?: Error; errorInfo?: any }
  > {
    constructor(props: { children: React.ReactNode }) {
      super(props);
      this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }
    
    componentDidCatch(error: Error, errorInfo: any) {
      this.setState({ error, errorInfo });
      trackError(error, errorInfo);
    }
    
    render() {
      if (this.state.hasError) {
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Algo deu errado</h2>
            <p>Ocorreu um erro inesperado. Por favor, recarregue a página.</p>
            <button onClick={() => window.location.reload()}>
              Recarregar Página
            </button>
          </div>
        );
      }
      
      return this.props.children;
    }
  };
};

export const trackUserAction = (action: string, data?: any): void => {
  if (!errorConfig.enableErrorTracking) return;
  
  console.log('User action tracked:', { action, data, timestamp: Date.now() });
  
  // In a real implementation, you would send this to your analytics service
  // Example: Google Analytics, Mixpanel, etc.
};

export const trackPageView = (page: string): void => {
  if (!errorConfig.enableErrorTracking) return;
  
  console.log('Page view tracked:', { page, timestamp: Date.now() });
  
  // In a real implementation, you would send this to your analytics service
  // Example: Google Analytics, Mixpanel, etc.
};

export const trackCustomEvent = (eventName: string, data?: any): void => {
  if (!errorConfig.enableErrorTracking) return;
  
  console.log('Custom event tracked:', { eventName, data, timestamp: Date.now() });
  
  // In a real implementation, you would send this to your analytics service
  // Example: Google Analytics, Mixpanel, etc.
};
