import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesContainer = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
  position: relative;
`;

const FeaturesContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

// Layout simplificado
const FeaturesLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

// Card principal - destaque
const MainFeatureCard = styled(motion.div)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 20px;
  padding: 3rem;
  color: white;
  box-shadow: 0 10px 30px rgba(23, 133, 130, 0.2);
`;

// Cards secundários
const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

// Card de estatísticas
const StatsCard = styled(motion.div)`
  background: #1c203c;
  border-radius: 20px;
  padding: 2.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(28, 32, 60, 0.2);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #00FFFF 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const FeatureIcon = styled(motion.div)<{ size?: string }>`
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.size === '100px' ? '3rem' : '2.5rem'};
  color: white;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 2;
`;

const FeatureTitle = styled.h3<{ size?: string; color?: string }>`
  font-size: ${props => props.size || '1.5rem'};
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.color || '#1c203c'};
  position: relative;
  z-index: 2;
`;

const FeatureDescription = styled.p<{ size?: string; color?: string }>`
  color: ${props => props.color || '#4a5568'};
  line-height: 1.6;
  font-size: ${props => props.size || '1.1rem'};
  position: relative;
  z-index: 2;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  position: relative;
  z-index: 2;
`;

const FeatureListItem = styled.li`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 1rem;

  &::before {
    content: '✨';
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const CurriculoAIFeatures: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'IA Avançada',
      description: 'Algoritmos de machine learning que analisam milhares de currículos de sucesso para criar o seu.',
      isMain: true
    },
    {
      icon: '📈',
      title: 'Resultados Comprovados',
      description: '3x mais entrevistas e 95% de aprovação em sistemas ATS comprovados pelos nossos usuários.',
      isMain: false
    },
    {
      icon: '⏰',
      title: 'Economia de Tempo',
      description: 'Crie um currículo profissional em minutos, não em horas. Nossa IA faz o trabalho pesado.',
      isMain: false
    },
    {
      icon: '🎯',
      title: 'Otimização ATS',
      description: 'Compatibilidade garantida com sistemas de recrutamento automatizado de grandes empresas.',
      isMain: false
    },
    {
      icon: '📊',
      title: 'Análise em Tempo Real',
      description: 'Score de compatibilidade e sugestões de melhoria baseadas nas tendências do mercado.',
      isMain: false
    },
    {
      icon: '🔒',
      title: 'Segurança Total',
      description: 'Seus dados são protegidos com criptografia de nível bancário e nunca são compartilhados.',
      isMain: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Aprovação ATS' },
    { number: '3x', label: 'Mais Entrevistas' },
    { number: '48h', label: 'Tempo de Criação' },
    { number: '10k+', label: 'Currículos Criados' }
  ];

  return (
    <FeaturesContainer>
      <FeaturesContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <SectionTitle>
            Por que escolher o Currículo AI?
          </SectionTitle>
          <SectionSubtitle>
            Descubra as vantagens únicas que fazem do nosso Currículo AI a escolha inteligente para impulsionar sua carreira.
          </SectionSubtitle>
        </motion.div>

        <FeaturesLayout>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {feature.isMain ? (
                <MainFeatureCard
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <FeatureIcon size="80px">{feature.icon}</FeatureIcon>
                  <FeatureTitle size="1.8rem" color="white">
                    {feature.title}
                  </FeatureTitle>
                  <FeatureDescription size="1.1rem" color="rgba(255,255,255,0.9)">
                    {feature.description}
                  </FeatureDescription>
                </MainFeatureCard>
              ) : (
                <FeatureCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              )}
            </motion.div>
          ))}
        </FeaturesLayout>

        {/* Seção de Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <StatsCard
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <FeatureTitle size="1.8rem" color="white" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Números que Falam por Si
            </FeatureTitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <StatItem
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                </motion.div>
              ))}
            </StatsGrid>
          </StatsCard>
        </motion.div>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default CurriculoAIFeatures;