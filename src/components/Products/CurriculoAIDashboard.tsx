import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DashboardContainer = styled.section`
  padding: 6rem 0;
  background: #1c203c;
  color: white;
`;

const DashboardContent = styled.div`
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// Layout com grid específico
const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

// Card principal - ocupa 2 colunas
const MainCardWrapper = styled.div`
  grid-column: 1 / -1;
`;

// Cards laterais
const SideCardWrapper = styled.div`
  display: contents;
`;

// Card de processo - ocupa 2 colunas na horizontal
const ProcessCardWrapper = styled.div`
  grid-column: 1 / -1;
`;

// Card principal - destaque
const MainCard = styled(motion.div)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(23, 133, 130, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    z-index: 1;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

// Cards secundários
const DashboardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

// Card de processo
const ProcessCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const CardIcon = styled(motion.div)<{ size?: string }>`
  font-size: ${props => props.size || '3rem'};
  margin-bottom: 1.5rem;
  display: block;
  text-align: center;
`;

const CardTitle = styled.h3<{ size?: string }>`
  font-size: ${props => props.size || '1.8rem'};
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardDescription = styled.p<{ size?: string }>`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: ${props => props.size || '1.1rem'};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
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

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProcessStep = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #0A1828;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  color: #0A1828;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 10px 30px rgba(23, 133, 130, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(23, 133, 130, 0.4);
  }
`;

const CTAContainer = styled.div`
  text-align: center;
`;

const CurriculoAIDashboard: React.FC = () => {
  const processSteps = [
    {
      number: '1',
      title: 'Upload do CV',
      description: 'Envie seu currículo atual ou informações básicas'
    },
    {
      number: '2',
      title: 'Análise IA',
      description: 'Nossa IA analisa e identifica pontos de melhoria'
    },
    {
      number: '3',
      title: 'Otimização',
      description: 'Criamos versão otimizada com palavras-chave'
    },
    {
      number: '4',
      title: 'Download',
      description: 'Receba seu CV pronto em múltiplos formatos'
    }
  ];

  return (
    <DashboardContainer>
      <DashboardContent>
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
              marginBottom: '1rem'
            }}
          >
            🤖
          </motion.div>
          <SectionTitle>
            Dashboard Currículo AI
          </SectionTitle>
          <SectionSubtitle>
            Monitore e otimize seu currículo em tempo real com nossa plataforma inteligente de análise e melhoria contínua.
          </SectionSubtitle>
        </motion.div>

        <DashboardLayout>
          {/* Card Principal - Análise em Tempo Real */}
          <MainCardWrapper>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MainCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon size="3rem">📊</CardIcon>
                <CardTitle size="1.8rem">Análise em Tempo Real</CardTitle>
                <CardDescription size="1.1rem">
                  Nossa IA monitora constantemente seu currículo e identifica oportunidades de melhoria baseadas nas tendências do mercado.
                </CardDescription>
                <FeatureList>
                  <FeatureItem>Score de compatibilidade ATS em tempo real</FeatureItem>
                  <FeatureItem>Alertas de palavras-chave em alta</FeatureItem>
                  <FeatureItem>Análise de competitividade no mercado</FeatureItem>
                  <FeatureItem>Relatórios de performance semanais</FeatureItem>
                </FeatureList>
              </MainCard>
            </motion.div>
          </MainCardWrapper>

          {/* Cards Laterais */}
          <SideCardWrapper>
            {/* Templates Inteligentes */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <DashboardCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>🎨</CardIcon>
                <CardTitle>Templates Inteligentes</CardTitle>
                <CardDescription>
                  Modelos adaptativos que se ajustam automaticamente ao seu perfil e área de atuação.
                </CardDescription>
                <FeatureList>
                  <FeatureItem>Design responsivo para ATS</FeatureItem>
                  <FeatureItem>Adaptação automática de layout</FeatureItem>
                  <FeatureItem>Cores e tipografia otimizadas</FeatureItem>
                </FeatureList>
              </DashboardCard>
            </motion.div>

            {/* Integração LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <DashboardCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>🔗</CardIcon>
                <CardTitle>Integração LinkedIn</CardTitle>
                <CardDescription>
                  Sincronização automática com seu perfil LinkedIn para manter consistência entre plataformas.
                </CardDescription>
                <FeatureList>
                  <FeatureItem>Sincronização bidirecional</FeatureItem>
                  <FeatureItem>Atualização automática de experiências</FeatureItem>
                  <FeatureItem>Análise de perfil social</FeatureItem>
                </FeatureList>
              </DashboardCard>
            </motion.div>
          </SideCardWrapper>

          {/* Card de Processo - Horizontal */}
          <ProcessCardWrapper>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ProcessCard
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon size="2.5rem">⚡</CardIcon>
                <CardTitle size="1.8rem">Como Funciona</CardTitle>
                <CardDescription size="1.1rem">
                  Processo simples e automatizado para criar o currículo perfeito em minutos.
                </CardDescription>
                <ProcessSteps>
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    >
                      <ProcessStep
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <StepNumber>{step.number}</StepNumber>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </ProcessStep>
                    </motion.div>
                  ))}
                </ProcessSteps>
              </ProcessCard>
            </motion.div>
          </ProcessCardWrapper>
        </DashboardLayout>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <CTAContainer>
            <CTAButton to="/contato">
              🚀 Começar Agora - Teste Grátis
            </CTAButton>
          </CTAContainer>
        </motion.div>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default CurriculoAIDashboard;