// SEO utilities for the IzataCore website

export const seoConfig = {
  title: 'IzataCore - Soluções em Tecnologia e Automação',
  description: 'IzataCore oferece soluções inovadoras em tecnologia e automação de processos. Conheça nossos produtos: Curriculo AI, Ebook e SmartAsset.',
  keywords: 'tecnologia, automação, processos, curriculo ai, smartasset, ebook, gestão de ativos, inteligência artificial',
  author: 'IzataCore',
  url: 'https://izatacore.com',
  image: 'https://izatacore.com/og-image.jpg',
  twitter: '@izatacore',
  facebook: 'izatacore'
};

export const pageSeo = {
  home: {
    title: 'IzataCore - Transforme sua empresa com tecnologia inteligente',
    description: 'A IzataCore oferece soluções inovadoras em automação de processos e tecnologia para empresas que buscam eficiência e crescimento sustentável.',
    keywords: 'tecnologia, automação, processos, eficiência, crescimento, empresa'
  },
  products: {
    title: 'Produtos IzataCore - Curriculo AI e Ebook',
    description: 'Conheça nossos produtos: Curriculo AI para criação inteligente de currículos e Ebook com conteúdo educacional especializado.',
    keywords: 'curriculo ai, ebook, produtos, inteligência artificial, conteúdo educacional'
  },
  tools: {
    title: 'SmartAsset - Gestão Inteligente de Ativos',
    description: 'SmartAsset é a plataforma completa para gestão de ativos que automatiza processos e otimiza a utilização de recursos da sua empresa.',
    keywords: 'smartasset, gestão de ativos, automação, processos, otimização'
  },
  company: {
    title: 'Sobre a IzataCore - Nossa história e equipe',
    description: 'Conheça a história da IzataCore, nossa visão, valores e equipe de especialistas que trabalham para transformar a tecnologia em soluções práticas.',
    keywords: 'sobre, história, equipe, visão, valores, empresa'
  },
  contact: {
    title: 'Contato IzataCore - Fale conosco',
    description: 'Entre em contato com a IzataCore e descubra como podemos impulsionar o crescimento do seu negócio com nossas soluções tecnológicas.',
    keywords: 'contato, fale conosco, suporte, atendimento'
  }
};

export const generateMetaTags = (page: keyof typeof pageSeo) => {
  const seo = pageSeo[page];
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    'og:title': seo.title,
    'og:description': seo.description,
    'og:type': 'website',
    'og:url': seoConfig.url,
    'og:image': seoConfig.image,
    'twitter:card': 'summary_large_image',
    'twitter:title': seo.title,
    'twitter:description': seo.description,
    'twitter:image': seoConfig.image,
    'twitter:site': seoConfig.twitter,
    'twitter:creator': seoConfig.twitter
  };
};

