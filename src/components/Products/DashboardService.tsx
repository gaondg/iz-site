import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServiceContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0A1828 0%, #178582 50%, #1E3A8A 100%);
  color: white;
`;

const ServiceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const CTAButton = styled(Link)`
  background: white;
  color: #0A1828;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 0 auto;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  }
`;

const CTAContainer = styled.div`
  text-align: center;
`;

const DashboardService: React.FC = () => {
  const services = [
    {
      icon: '📊',
      title: 'Análise de Dados',
      description: 'Transformamos seus dados brutos em insights valiosos através de análises profundas e visualizações claras.'
    },
    {
      icon: '🎨',
      title: 'Design Personalizado',
      description: 'Criamos dashboards únicos e intuitivos que se adaptam perfeitamente ao seu negócio e necessidades.'
    },
    {
      icon: '⚡',
      title: 'Tempo Real',
      description: 'Monitore seus KPIs e métricas importantes com atualizações em tempo real e alertas automáticos.'
    },
    {
      icon: '🔗',
      title: 'Integração Completa',
      description: 'Conectamos todas as suas ferramentas e sistemas para uma visão unificada dos seus dados.'
    }
  ];

  return (
    <ServiceContainer>
      <ServiceContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Dashboards Personalizáveis</SectionTitle>
          <SectionSubtitle>
            Transforme seus dados em decisões inteligentes com nossos dashboards 
            personalizados desenvolvidos especialmente para sua empresa.
          </SectionSubtitle>
        </motion.div>

        <ServiceGrid>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ServiceCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </motion.div>
          ))}
        </ServiceGrid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CTAContainer>
            <CTAButton to="/contato">
              Solicitar Orçamento Personalizado
            </CTAButton>
          </CTAContainer>
        </motion.div>
      </ServiceContent>
    </ServiceContainer>
  );
};

export default DashboardService;
