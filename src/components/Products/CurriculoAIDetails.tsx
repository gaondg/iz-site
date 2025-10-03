import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DetailsContainer = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
  color: #1c203c;
`;

const DetailsContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
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
  text-align: center;
  opacity: 0.9;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const StatNumber = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #4a5568;
  font-size: 1.1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)<{ color: string }>`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid ${props => props.color}40;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
`;

const FeatureTitle = styled.h3<{ color: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${props => props.color};
`;

const FeatureDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const CTAButton = styled(motion.div)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  color: #0A1828;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(23, 133, 130, 0.3);
  transition: all 0.3s ease;
  text-align: center;
`;

const CTAContainer = styled.div`
  text-align: center;
`;

const CurriculoAIDetails: React.FC = () => {
  const features = [
    {
      icon: '🧠',
      title: 'IA Avançada',
      description: 'Análise inteligente do seu perfil profissional com algoritmos de última geração',
      color: '#178582'
    },
    {
      icon: '📊',
      title: 'Templates ATS',
      description: 'Modelos otimizados para sistemas de recrutamento automatizado',
      color: '#00FFFF'
    },
    {
      icon: '🎯',
      title: 'Palavras-chave',
      description: 'Otimização automática para palavras-chave do mercado de trabalho',
      color: '#1E3A8A'
    },
    {
      icon: '📈',
      title: 'Performance',
      description: 'Relatórios detalhados de compatibilidade com vagas específicas',
      color: '#178582'
    },
    {
      icon: '🔗',
      title: 'Integração',
      description: 'Conexão direta com LinkedIn e portfólios online',
      color: '#00FFFF'
    },
    {
      icon: '💼',
      title: 'Suporte',
      description: 'Especialistas em carreira disponíveis 24/7 para orientação',
      color: '#1E3A8A'
    }
  ];

  const stats = [
    { number: '95%', label: 'Taxa de Aprovação ATS' },
    { number: '3x', label: 'Mais Entrevistas' },
    { number: '48h', label: 'Tempo de Criação' }
  ];

  return (
    <DetailsContainer>
      <DetailsContent>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #178582 0%, #00FFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            
          </motion.div>
          <SectionTitle>
            Transforme seu currículo.
          </SectionTitle>
          <SectionSubtitle>
            Revolucione sua busca por emprego com inteligência artificial que cria currículos otimizados e estrategicamente posicionados.
          </SectionSubtitle>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StatsGrid>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatCard>
                  <StatNumber
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {stat.number}
                  </StatNumber>
                  <StatLabel>
                    {stat.label}
                  </StatLabel>
                </StatCard>
              </motion.div>
            ))}
          </StatsGrid>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FeaturesGrid>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FeatureCard color={feature.color}>
                  <FeatureIcon
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </FeatureIcon>
                  <FeatureTitle color={feature.color}>
                    {feature.title}
                  </FeatureTitle>
                  <FeatureDescription>
                    {feature.description}
                  </FeatureDescription>
                  
                  {/* Animated background effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '100px',
                      height: '100px',
                      background: `radial-gradient(circle, ${feature.color} 0%, transparent 70%)`,
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: -1
                    }}
                  />
                </FeatureCard>
              </motion.div>
            ))}
          </FeaturesGrid>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <CTAContainer>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Começar Agora - Grátis por 7 dias
            </CTAButton>
          </CTAContainer>
        </motion.div>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default CurriculoAIDetails;