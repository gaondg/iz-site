// Lazy loading utilities for the IzataCore website
import React from 'react';

export const lazyLoadConfig = {
  // Intersection Observer options
  rootMargin: '50px',
  threshold: 0.1,
  
  // Image loading
  placeholderImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PC9zdmc+',
  
  // Loading states
  loadingClass: 'lazy-loading',
  loadedClass: 'lazy-loaded',
  errorClass: 'lazy-error'
};

export const createLazyImage = (src: string, alt: string, className?: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = lazyLoadConfig.placeholderImage;
  img.alt = alt;
  img.className = `${lazyLoadConfig.loadingClass} ${className || ''}`;
  img.setAttribute('data-src', src);
  
  return img;
};

export const lazyLoadImage = (img: HTMLImageElement) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        const src = image.getAttribute('data-src');
        
        if (src) {
          image.src = src;
          image.classList.remove(lazyLoadConfig.loadingClass);
          image.classList.add(lazyLoadConfig.loadedClass);
          
          image.onload = () => {
            image.classList.add(lazyLoadConfig.loadedClass);
          };
          
          image.onerror = () => {
            image.classList.add(lazyLoadConfig.errorClass);
          };
        }
        
        observer.unobserve(image);
      }
    });
  }, {
    rootMargin: lazyLoadConfig.rootMargin,
    threshold: lazyLoadConfig.threshold
  });
  
  observer.observe(img);
};

export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach((img) => {
    lazyLoadImage(img as HTMLImageElement);
  });
};

export const lazyLoadComponent = (importFunction: () => Promise<{ default: React.ComponentType<any> }>, fallback?: React.ReactNode) => {
  return React.lazy(importFunction);
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};

export const createImagePlaceholder = (width: number, height: number, color: string = '#f8f9fa'): string => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `)}`;
};

export const optimizeImageSrc = (src: string, width?: number, height?: number, quality?: number): string => {
  const params = new URLSearchParams();
  
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  
  return `${src}?${params.toString()}`;
};

export const createResponsiveImage = (src: string, alt: string, sizes: string, className?: string): HTMLImageElement => {
  const img = createLazyImage(src, alt, className);
  img.setAttribute('sizes', sizes);
  img.setAttribute('loading', 'lazy');
  
  return img;
};

export const initializeLazyLoading = () => {
  if (typeof window !== 'undefined') {
    // Initialize lazy loading for existing images
    lazyLoadImages();
    
    // Set up mutation observer for dynamically added images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const images = element.querySelectorAll('img[data-src]');
            images.forEach((img) => {
              lazyLoadImage(img as HTMLImageElement);
            });
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};
