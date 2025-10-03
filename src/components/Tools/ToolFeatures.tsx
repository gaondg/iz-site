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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 15px;
  }
`;

const FeatureIcon = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const FeatureDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ToolFeatures: React.FC = () => {
  const features = [
    {
      icon: '📊',
      title: 'Dashboard Intuitivo',
      description: 'Interface moderna e fácil de usar que permite visualizar todos os seus ativos em um só lugar, com gráficos e métricas em tempo real.'
    },
    {
      icon: '🔧',
      title: 'Gestão de Manutenção',
      description: 'Automatize agendamentos de manutenção, controle de peças e histórico de reparos para manter seus ativos sempre em perfeito funcionamento.'
    },
    {
      icon: '📱',
      title: 'Aplicativo Mobile',
      description: 'Acesse todas as funcionalidades do SmartAsset através do seu smartphone ou tablet, permitindo gestão remota completa.'
    },
    {
      icon: '🔔',
      title: 'Alertas Inteligentes',
      description: 'Receba notificações automáticas sobre vencimentos, manutenções necessárias e anomalias detectadas nos seus ativos.'
    },
    {
      icon: '📈',
      title: 'Relatórios Avançados',
      description: 'Gere relatórios detalhados sobre performance, custos e utilização dos ativos para tomada de decisões estratégicas.'
    },
    {
      icon: '🔗',
      title: 'Integrações',
      description: 'Conecte-se facilmente com sistemas ERP, CMMS e outras ferramentas já utilizadas pela sua empresa.'
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
          <SectionTitle>Recursos do SmartAsset</SectionTitle>
          <SectionSubtitle>
            Descubra todas as funcionalidades que tornam o SmartAsset a solução 
            ideal para gestão inteligente de ativos da sua empresa.
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

export default ToolFeatures;


