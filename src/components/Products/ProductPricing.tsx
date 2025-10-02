import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PricingContainer = styled.section`
  padding: 6rem 0;
  background: white;
`;

const PricingContent = styled.div`
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PricingCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  &.featured {
    border: 2px solid #667eea;
    transform: scale(1.05);

    &::before {
      content: 'Mais Popular';
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }
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
  font-size: 1.8rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 0.5rem;
`;

const ProductSubtitle = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const PriceContainer = styled.div`
  margin-bottom: 2rem;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 0.5rem;
`;

const PricePeriod = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  text-align: left;

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
      color: #667eea;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const ProductButton = styled(Link)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
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
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
`;

const ContactNote = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem;
  margin-top: 4rem;
  border: 1px solid #e2e8f0;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1c203c;
    margin-bottom: 1rem;
  }

  p {
    color: #4a5568;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ContactButton = styled(Link)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
`;

const ProductPricing: React.FC = () => {
  const products = [
    {
      icon: '🤖',
      title: 'Curriculo AI',
      subtitle: 'Inteligência Artificial para Currículos',
      price: 'R$ 97',
      period: 'por mês',
      features: [
        'Criação ilimitada de currículos',
        'Templates profissionais',
        'Otimização para ATS',
        'Análise de mercado',
        'Suporte por email',
        'Atualizações regulares'
      ],
      featured: true
    },
    {
      icon: '📚',
      title: 'Ebook',
      subtitle: 'Conteúdo Educacional Especializado',
      price: 'R$ 47',
      period: 'único',
      features: [
        'Acesso vitalício',
        'Múltiplos formatos',
        'Conteúdo atualizado',
        'Certificado incluído',
        'Suporte especializado',
        'Atualizações gratuitas'
      ],
      featured: false
    }
  ];

  return (
    <PricingContainer>
      <PricingContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Preços dos Produtos</SectionTitle>
          <SectionSubtitle>
            Escolha o plano que melhor se adapta às suas necessidades. 
            Todos os nossos produtos vêm com garantia de satisfação.
          </SectionSubtitle>
        </motion.div>

        <PricingGrid>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <PricingCard
                className={product.featured ? 'featured' : ''}
                whileHover={{ scale: product.featured ? 1.05 : 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ProductIcon>{product.icon}</ProductIcon>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductSubtitle>{product.subtitle}</ProductSubtitle>
                <PriceContainer>
                  <Price>{product.price}</Price>
                  <PricePeriod>{product.period}</PricePeriod>
                </PriceContainer>
                <ProductFeatures>
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ProductFeatures>
                <ProductButton to="/contato">
                  {product.featured ? 'Começar Agora' : 'Saiba Mais'}
                </ProductButton>
              </PricingCard>
            </motion.div>
          ))}
        </PricingGrid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactNote>
            <h3>Precisa de algo personalizado?</h3>
            <p>
              Nossos especialistas podem criar uma solução sob medida para sua empresa. 
              Entre em contato conosco para discutir suas necessidades específicas e 
              receber uma proposta personalizada.
            </p>
            <ContactButton to="/contato">Falar com Especialista</ContactButton>
          </ContactNote>
        </motion.div>
      </PricingContent>
    </PricingContainer>
  );
};

export default ProductPricing;
