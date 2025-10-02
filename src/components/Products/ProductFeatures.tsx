import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesContainer = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
`;

const FeaturesContent = styled.div`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
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

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 auto 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const ProductFeatures: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Implementação Rápida',
      description: 'Nossos produtos são desenvolvidos para serem implementados rapidamente, minimizando o tempo de configuração e maximizando o retorno sobre o investimento.'
    },
    {
      icon: '🔒',
      title: 'Segurança Avançada',
      description: 'Utilizamos as mais modernas tecnologias de segurança para proteger seus dados e garantir a privacidade de suas informações.'
    },
    {
      icon: '📊',
      title: 'Relatórios Detalhados',
      description: 'Acompanhe o desempenho de seus processos com relatórios em tempo real e análises detalhadas que ajudam na tomada de decisões.'
    },
    {
      icon: '🔧',
      title: 'Personalização Total',
      description: 'Adaptamos nossos produtos às necessidades específicas da sua empresa, garantindo uma solução sob medida para seu negócio.'
    },
    {
      icon: '📱',
      title: 'Interface Intuitiva',
      description: 'Desenvolvemos interfaces simples e intuitivas que facilitam o uso por todos os membros da sua equipe, independente do nível técnico.'
    },
    {
      icon: '🔄',
      title: 'Integração Fácil',
      description: 'Nossos produtos se integram facilmente com os sistemas existentes da sua empresa, sem a necessidade de grandes mudanças na infraestrutura.'
    }
  ];

  return (
    <FeaturesContainer>
      <FeaturesContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Por que escolher nossos produtos?</SectionTitle>
          <SectionSubtitle>
            Desenvolvemos soluções que combinam tecnologia de ponta com facilidade de uso, 
            garantindo resultados excepcionais para sua empresa.
          </SectionSubtitle>
        </motion.div>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <FeatureCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            </motion.div>
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default ProductFeatures;
