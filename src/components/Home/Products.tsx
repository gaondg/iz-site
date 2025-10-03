import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsContainer = styled.section`
  padding: 6rem 0;
  background: white;
`;

const ProductsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProductIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 auto 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;

  li {
    color: #4a5568;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
    }
  }
`;

const ProductButton = styled(Link)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
`;

const Products: React.FC = () => {
  const products = [
    {
      icon: '🤖',
      title: 'Curriculo AI',
      description: 'Plataforma inteligente que cria currículos otimizados usando inteligência artificial para destacar suas habilidades e experiência.',
      features: [
        'Análise inteligente de perfil',
        'Templates personalizados',
        'Otimização para ATS',
        'Análise de mercado de trabalho'
      ]
    },
    {
      icon: '📚',
      title: 'Ebook',
      description: 'Conteúdo educacional especializado em tecnologia e automação, desenvolvido por nossos especialistas.',
      features: [
        'Conteúdo atualizado',
        'Formatos diversos',
        'Acesso vitalício',
        'Suporte especializado'
      ]
    }
  ];

  return (
    <ProductsContainer>
      <ProductsContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Nossos Produtos</SectionTitle>
          <SectionSubtitle>
            Soluções inovadoras desenvolvidas para atender às necessidades específicas 
            de cada cliente e impulsionar o crescimento do seu negócio.
          </SectionSubtitle>
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ProductIcon>{product.icon}</ProductIcon>
                <ProductTitle>{product.title}</ProductTitle>
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
      </ProductsContent>
    </ProductsContainer>
  );
};

export default Products;


