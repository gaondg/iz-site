import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BenefitsContainer = styled.section`
  padding: 6rem 0;
  background: white;
`;

const BenefitsContent = styled.div`
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const BenefitCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const BenefitIcon = styled.div`
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

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const StatsContainer = styled.div`
  background: linear-gradient(135deg, #1c203c 0%, #2d3748 100%);
  border-radius: 20px;
  padding: 3rem;
  color: white;
  margin-top: 4rem;
`;

const StatsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatItem = styled.div`
  text-align: center;

  h4 {
    font-size: 3rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #e2e8f0;
  }
`;

const ToolBenefits: React.FC = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Redução de Custos',
      description: 'Diminua significativamente os custos operacionais através da otimização do uso de ativos e prevenção de falhas.'
    },
    {
      icon: '⏰',
      title: 'Economia de Tempo',
      description: 'Automatize processos manuais e reduza o tempo gasto em tarefas administrativas relacionadas à gestão de ativos.'
    },
    {
      icon: '📈',
      title: 'Aumento da Produtividade',
      description: 'Mantenha seus ativos sempre funcionando em perfeitas condições, garantindo máxima produtividade da sua equipe.'
    },
    {
      icon: '🔍',
      title: 'Visibilidade Total',
      description: 'Tenha controle completo sobre todos os seus ativos, com informações detalhadas sobre status, localização e histórico.'
    },
    {
      icon: '🛡️',
      title: 'Prevenção de Problemas',
      description: 'Identifique e resolva problemas antes que se tornem críticos, evitando paradas não programadas e custos extras.'
    },
    {
      icon: '📊',
      title: 'Tomada de Decisão',
      description: 'Baseie suas decisões em dados reais e relatórios detalhados sobre performance e utilização dos ativos.'
    }
  ];

  const stats = [
    { value: '40%', label: 'Redução de Custos' },
    { value: '60%', label: 'Economia de Tempo' },
    { value: '95%', label: 'Satisfação dos Clientes' },
    { value: '24/7', label: 'Monitoramento' }
  ];

  return (
    <BenefitsContainer>
      <BenefitsContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Benefícios do SmartAsset</SectionTitle>
          <SectionSubtitle>
            Descubra como o SmartAsset pode transformar a gestão de ativos da sua empresa 
            e gerar resultados excepcionais.
          </SectionSubtitle>
        </motion.div>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <BenefitCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            </motion.div>
          ))}
        </BenefitsGrid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <StatsContainer>
            <StatsTitle>Resultados Comprovados</StatsTitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatItem key={index}>
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </StatItem>
              ))}
            </StatsGrid>
          </StatsContainer>
        </motion.div>
      </BenefitsContent>
    </BenefitsContainer>
  );
};

export default ToolBenefits;
