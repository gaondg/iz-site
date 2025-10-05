import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- STYLED COMPONENTS BASE ---

const ServicesContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0A1828 0%, #178582 50%, #1E3A8A 100%);
  color: white;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #e2e8f0;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

// Card Base (sutil e transparente)
const ServiceCard = styled(motion.div)`
  background: rgba(50, 85, 241, 0.1);
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

// Elementos internos (usados para aninhamento)
const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1c203c 0%, #3B407A 100%); /* Base icon color (dark) */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 auto 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #e2e8f0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  text-align: left;

  li {
    color: #e2e8f0;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #00FFFF;
      font-weight: bold;
    }
  }
`;

const ServiceButton = styled(Link)`
  background: #E67E22; /* Cor de contraste (Laranja) */
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(230, 126, 34, 0.4);
  }
`;

// --- NOVO: ESTILOS DE DESTAQUE PARA O SMARTASSET ---

const FeaturedServiceCard = styled(ServiceCard)`
  /* 1. FUNDO VIBRANTE E SÓLIDO */
  background: linear-gradient(160deg, #178582 0%, #00FFFF 100%);
  color: #0A1828;
  
  /* 2. BORDA E SOMBRA DE DESTAQUE */
  border: 1px solid white; 
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5), 
              0 0 40px rgba(0, 255, 255, 0.4); 
  
  /* 3. EFEITO HOVER MAIS INTENSO */
  &:hover {
    background: linear-gradient(160deg, #178582 0%, #00FFFF 100%);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 
                0 0 60px rgba(0, 255, 255, 0.6); 
  }

  /* AJUSTE CORES INTERNAS DO CARD DE DESTAQUE (SINTAXE CORRIGIDA) */
  ${ServiceIcon} {
      /* Ícone fica escuro para contraste no fundo claro */
      background: linear-gradient(135deg, #1c203c 0%, #3B407A 100%);
  }
  
  ${ServiceTitle} {
    color:rgb(22, 40, 61); /* Título escuro */
  }

  ${ServiceDescription} {
    color: #0A1828; /* Descrição escura */
  }

  ${ServiceFeatures} li {
    color: #0A1828; /* Cor do texto da lista */
  }
  
  ${ServiceFeatures} li::before {
    color: #E67E22; /* Cor de check-mark de destaque (Laranja) */
  }
  
  ${ServiceButton} {
    /* Botão de cor de fundo inversa (Laranja) */
    background: #E67E22;
    color: white;
  }
`;

// --- COMPONENTE REACT PRINCIPAL ---

const Services: React.FC = () => {
  const services = [
    {
      icon: '⚡',
      title: 'SmartAsset',
      isFeatured: true, // Adiciona o flag de destaque
      description: 'Plataforma completa de gestão de ativos que automatiza processos e otimiza a utilização de recursos da sua empresa.',
      features: [
        'Gestão centralizada de ativos',
        'Automação de processos',
        'Relatórios em tempo real',
        'Integração com sistemas existentes'
      ]
    }
  ];

  return (
    <ServicesContainer>
      <ServicesContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Nossos Serviços</SectionTitle>
          <SectionSubtitle>
            Soluções especializadas em automação e tecnologia para impulsionar 
            a eficiência e o crescimento do seu negócio.
          </SectionSubtitle>
        </motion.div>

        <ServicesGrid>
          {services.map((service, index) => {
            // Lógica para renderizar o Card em destaque
            const CardComponent = service.isFeatured ? FeaturedServiceCard : ServiceCard;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CardComponent
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <ServiceIcon>{service.icon}</ServiceIcon> */}
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceFeatures>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ServiceFeatures>
                  <ServiceButton to={`/${service.title.toLowerCase()}`}>
                    Saiba Mais
                  </ServiceButton>
                </CardComponent>
              </motion.div>
            );
          })}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;