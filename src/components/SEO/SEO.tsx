import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags } from '../../utils/seo';

interface SEOProps {
  page: 'home' | 'products' | 'tools' | 'company' | 'contact';
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  page,
  title,
  description,
  keywords,
  image,
  url
}) => {
  const metaTags = generateMetaTags(page);
  
  const finalTitle = title || metaTags.title;
  const finalDescription = description || metaTags.description;
  const finalKeywords = keywords || metaTags.keywords;
  const finalImage = image || metaTags['og:image'];
  const finalUrl = url || metaTags['og:url'];

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="IzataCore" />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="IzataCore" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content="@izatacore" />
      <meta name="twitter:creator" content="@izatacore" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={finalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "IzataCore",
          "description": "Soluções em tecnologia e automação de processos",
          "url": "https://izatacore.com",
          "logo": "https://izatacore.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-99999-9999",
            "contactType": "customer service",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://linkedin.com/company/izatacore",
            "https://twitter.com/izatacore",
            "https://facebook.com/izatacore"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
