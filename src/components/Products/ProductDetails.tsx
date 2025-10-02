import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DetailsContainer = styled.section`
  padding: 6rem 0;
  background: white;
`;

const DetailsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1c203c;
  text-align: center;
  margin-bottom: 4rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ProductIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`;

const ProductInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1c203c;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4a5568;
    font-size: 1.1rem;
  }
`;

const ProductDescription = styled.p`
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;

  li {
    color: #4a5568;
    margin-bottom: 0.75rem;
    position: relative;
    padding-left: 1.5rem;
    font-size: 1.1rem;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #178582;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const ProductButton = styled(Link)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  color: #0A1828;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;
  width: 100%;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(23, 133, 130, 0.3);
  }
`;

const ProductDetails: React.FC = () => {
  const products = [
    {
      icon: '🤖',
      title: 'Curriculo AI',
      subtitle: 'Inteligência Artificial para Currículos',
      description: 'Plataforma inteligente que cria currículos otimizados usando inteligência artificial para destacar suas habilidades e experiência de forma profissional e eficaz.',
      features: [
        'Análise inteligente de perfil profissional',
        'Templates personalizados e modernos',
        'Otimização para sistemas ATS',
        'Análise de mercado de trabalho em tempo real',
        'Sugestões de melhorias baseadas em IA',
        'Exportação em múltiplos formatos'
      ]
    },
    {
      icon: '📊',
      title: 'Dashboards Personalizáveis',
      subtitle: 'Soluções de Business Intelligence',
      description: 'Criamos dashboards personalizados que transformam seus dados em insights acionáveis. Nossa equipe desenvolve soluções de Business Intelligence sob medida para suas necessidades específicas.',
      features: [
        'Análise completa de dados da sua empresa',
        'Dashboards interativos e responsivos',
        'Integração com suas ferramentas existentes',
        'Relatórios automáticos e em tempo real',
        'Visualizações personalizadas e intuitivas',
        'Suporte técnico especializado contínuo'
      ]
    },
    {
      icon: '📚',
      title: 'Ebook',
      subtitle: 'Conteúdo Educacional Especializado',
      description: 'Conteúdo educacional especializado em tecnologia e automação, desenvolvido por nossos especialistas para capacitar profissionais e empresas.',
      features: [
        'Conteúdo atualizado e relevante',
        'Formatos diversos (PDF, EPUB, MOBI)',
        'Acesso vitalício ao material',
        'Suporte especializado incluído',
        'Atualizações regulares de conteúdo',
        'Certificado de conclusão'
      ]
    }
  ];

  return (
    <DetailsContainer>
      <DetailsContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Nossos Produtos e Serviços</SectionTitle>
        </motion.div>

        <ProductsGrid>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProductCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ProductHeader>
                  <ProductIcon>{product.icon}</ProductIcon>
                  <ProductInfo>
                    <h3>{product.title}</h3>
                    <p>{product.subtitle}</p>
                  </ProductInfo>
                </ProductHeader>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductFeatures>
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ProductFeatures>
                <ProductButton to={`/produtos/${product.title.toLowerCase().replace(' ', '-')}`}>
                  Saiba Mais
                </ProductButton>
              </ProductCard>
            </motion.div>
          ))}
        </ProductsGrid>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default ProductDetails;
