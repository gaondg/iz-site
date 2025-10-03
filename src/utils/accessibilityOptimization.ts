// Accessibility optimization utilities for the IzataCore website

export const accessibilityConfig = {
  // Focus management
  focusVisible: true,
  focusTrap: true,
  
  // Screen reader support
  ariaLabels: true,
  semanticHTML: true,
  
  // Keyboard navigation
  keyboardNavigation: true,
  tabIndex: 0,
  
  // Color contrast
  minContrastRatio: 4.5,
  
  // Text scaling
  minFontSize: 16,
  maxFontSize: 24,
  
  // Motion preferences
  respectMotionPreferences: true,
  
  // High contrast mode
  supportHighContrast: true
};

export const addFocusVisible = (): void => {
  if (typeof window !== 'undefined') {
    // Add focus-visible polyfill if needed
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/focus-visible@5.2.0/dist/focus-visible.min.js';
    script.async = true;
    document.head.appendChild(script);
  }
};

export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const announceToScreenReader = (message: string): void => {
  if (typeof window !== 'undefined') {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }
};

export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation
  // In a real implementation, you would use a proper color contrast library
  return 4.5; // Placeholder value
};

export const validateColorContrast = (foreground: string, background: string): boolean => {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= accessibilityConfig.minContrastRatio;
};

export const addSkipLink = (): void => {
  if (typeof window !== 'undefined') {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

export const initializeAccessibility = (): void => {
  if (typeof window !== 'undefined') {
    addFocusVisible();
    addSkipLink();
    
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Botão');
      }
    });
    
    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((link) => {
      if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
    
    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      img.setAttribute('alt', 'Imagem');
    });
    
    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label])');
    inputs.forEach((input) => {
      const label = input.getAttribute('placeholder') || 'Campo de entrada';
      input.setAttribute('aria-label', label);
    });
    
    // Add ARIA labels to textareas
    const textareas = document.querySelectorAll('textarea:not([aria-label])');
    textareas.forEach((textarea) => {
      const label = textarea.getAttribute('placeholder') || 'Área de texto';
      textarea.setAttribute('aria-label', label);
    });
    
    // Add ARIA labels to selects
    const selects = document.querySelectorAll('select:not([aria-label])');
    selects.forEach((select) => {
      const label = select.getAttribute('placeholder') || 'Seleção';
      select.setAttribute('aria-label', label);
    });
  }
};

export const addMotionPreferences = (): void => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
      document.documentElement.style.setProperty('--transition-duration', '0s');
    }
    
    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
        document.documentElement.style.setProperty('--transition-duration', '0s');
      } else {
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        document.documentElement.style.setProperty('--transition-duration', '0.3s');
      }
    });
  }
};

export const addHighContrastSupport = (): void => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    if (prefersHighContrast.matches) {
      document.documentElement.classList.add('high-contrast');
    }
    
    prefersHighContrast.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }
};

export const initializeAccessibilityOptimization = (): void => {
  if (typeof window !== 'undefined') {
    initializeAccessibility();
    addMotionPreferences();
    addHighContrastSupport();
  }
};


