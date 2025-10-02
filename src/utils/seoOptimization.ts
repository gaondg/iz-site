// SEO optimization utilities for the IzataCore website

export const seoConfig = {
  // Meta tags
  title: 'IzataCore - Soluções em Tecnologia e Automação',
  description: 'IzataCore oferece soluções inovadoras em tecnologia e automação de processos. Conheça nossos produtos: Curriculo AI, Ebook e SmartAsset.',
  keywords: 'tecnologia, automação, processos, curriculo ai, smartasset, ebook, gestão de ativos, inteligência artificial',
  author: 'IzataCore',
  url: 'https://izatacore.com',
  image: 'https://izatacore.com/og-image.jpg',
  twitter: '@izatacore',
  facebook: 'izatacore',
  
  // Structured data
  organization: {
    name: 'IzataCore',
    description: 'Soluções em tecnologia e automação de processos',
    url: 'https://izatacore.com',
    logo: 'https://izatacore.com/logo.png',
    contactPoint: {
      telephone: '+55-11-99999-9999',
      contactType: 'customer service',
      availableLanguage: 'Portuguese'
    },
    sameAs: [
      'https://linkedin.com/company/izatacore',
      'https://twitter.com/izatacore',
      'https://facebook.com/izatacore'
    ]
  }
};

export const generateStructuredData = (type: 'Organization' | 'WebSite' | 'WebPage' | 'Product' | 'Service' | 'BreadcrumbList' | 'FAQPage' | 'LocalBusiness', data?: any) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return baseData;
};

export const generateOrganizationStructuredData = () => {
  return generateStructuredData('Organization', seoConfig.organization);
};

export const generateWebsiteStructuredData = () => {
  return generateStructuredData('WebSite', {
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    description: seoConfig.organization.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://izatacore.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  });
};

export const generateWebPageStructuredData = (pageData: {
  name: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => {
  return generateStructuredData('WebPage', {
    name: pageData.name,
    description: pageData.description,
    url: pageData.url,
    image: pageData.image || seoConfig.image,
    datePublished: pageData.datePublished || new Date().toISOString(),
    dateModified: pageData.dateModified || new Date().toISOString(),
    author: pageData.author || seoConfig.organization.name,
    publisher: seoConfig.organization
  });
};

export const generateProductStructuredData = (productData: {
  name: string;
  description: string;
  image: string;
  brand: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}) => {
  return generateStructuredData('Product', {
    name: productData.name,
    description: productData.description,
    image: productData.image,
    brand: {
      '@type': 'Brand',
      name: productData.brand
    },
    offers: {
      '@type': 'Offer',
      price: productData.offers.price,
      priceCurrency: productData.offers.priceCurrency,
      availability: productData.offers.availability
    }
  });
};

export const generateServiceStructuredData = (serviceData: {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}) => {
  return generateStructuredData('Service', {
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      '@type': 'Organization',
      name: serviceData.provider
    },
    areaServed: serviceData.areaServed,
    serviceType: serviceData.serviceType
  });
};

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  });
};

export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  });
};

export const generateLocalBusinessStructuredData = (businessData: {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  url: string;
  openingHours: string[];
}) => {
  return generateStructuredData('LocalBusiness', {
    name: businessData.name,
    description: businessData.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.addressCountry
    },
    telephone: businessData.telephone,
    email: businessData.email,
    url: businessData.url,
    openingHours: businessData.openingHours
  });
};

export const generateSitemap = (pages: Array<{ url: string; lastmod: string; changefreq: string; priority: number }>) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
};

export const generateRobotsTxt = (allow: boolean = true, sitemapUrl?: string) => {
  let robots = `User-agent: *\n${allow ? 'Allow: /' : 'Disallow: /'}\n`;
  
  if (sitemapUrl) {
    robots += `\nSitemap: ${sitemapUrl}`;
  }
  
  return robots;
};

export const optimizeMetaTags = (pageData: {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
}) => {
  const metaTags = {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    'og:title': pageData.title,
    'og:description': pageData.description,
    'og:type': 'website',
    'og:url': pageData.url,
    'og:image': pageData.image || seoConfig.image,
    'og:site_name': seoConfig.organization.name,
    'twitter:card': 'summary_large_image',
    'twitter:title': pageData.title,
    'twitter:description': pageData.description,
    'twitter:image': pageData.image || seoConfig.image,
    'twitter:site': seoConfig.twitter,
    'twitter:creator': seoConfig.twitter
  };
  
  return metaTags;
};

export const initializeSEOOptimization = () => {
  if (typeof window !== 'undefined') {
    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }
    
    // Add hreflang tags for internationalization
    const hreflang = document.createElement('link');
    hreflang.rel = 'alternate';
    hreflang.hreflang = 'pt-BR';
    hreflang.href = window.location.href;
    document.head.appendChild(hreflang);
    
    // Add viewport meta tag if not present
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }
  }
};
