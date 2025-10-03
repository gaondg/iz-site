import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InfoContainer = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
`;

const InfoContent = styled.div`
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

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const InfoCard = styled(motion.div)`
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

const InfoIcon = styled.div`
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

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1rem;
`;

const InfoDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const InfoLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #764ba2;
  }
`;

const MapContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-top: 2rem;
`;

const MapTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'E-mail',
      description: 'Envie-nos um e-mail e responderemos em até 24 horas.',
      link: 'contato@izatacore.com',
      href: 'mailto:contato@izatacore.com'
    },
    {
      icon: '📞',
      title: 'Telefone',
      description: 'Ligue para nós de segunda a sexta, das 9h às 18h.',
      link: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Converse conosco pelo WhatsApp para atendimento rápido.',
      link: '+55 (11) 99999-9999',
      href: 'https://wa.me/5511999999999'
    },
    {
      icon: '📍',
      title: 'Endereço',
      description: 'Nossa sede está localizada em São Paulo, SP.',
      link: 'São Paulo, SP - Brasil',
      href: '#'
    }
  ];

  return (
    <InfoContainer>
      <InfoContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Outras Formas de Contato</SectionTitle>
          <SectionSubtitle>
            Escolha a forma mais conveniente para entrar em contato conosco. 
            Estamos sempre disponíveis para ajudar.
          </SectionSubtitle>
        </motion.div>

        <InfoGrid>
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <InfoCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <InfoIcon>{method.icon}</InfoIcon>
                <InfoTitle>{method.title}</InfoTitle>
                <InfoDescription>{method.description}</InfoDescription>
                <InfoLink href={method.href}>{method.link}</InfoLink>
              </InfoCard>
            </motion.div>
          ))}
        </InfoGrid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MapContainer>
            <MapTitle>Nossa Localização</MapTitle>
            <MapPlaceholder>
              🗺️ Mapa Interativo
            </MapPlaceholder>
          </MapContainer>
        </motion.div>
      </InfoContent>
    </InfoContainer>
  );
};

export default ContactInfo;


