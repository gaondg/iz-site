import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTAContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0A1828 0%, #178582 50%, #1E3A8A 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
    opacity: 0.3;
  }
`;

const CTAContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: white;
  color: #0A1828;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  padding: 1.2rem 2.5rem;
  border: 2px solid white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #0A1828;
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  span {
    font-size: 1.5rem;
  }

  p {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const CTA: React.FC = () => {
  return (
    <CTAContainer>
      <CTAContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CTATitle>Pronto para transformar sua empresa?</CTATitle>
          <CTASubtitle>
            Junte-se a centenas de empresas que já confiam na IzataCore 
            para automatizar processos e impulsionar o crescimento.
          </CTASubtitle>
          <ButtonGroup>
            <PrimaryButton to="/contato">Começar Agora</PrimaryButton>
            <SecondaryButton to="/produtos">Conhecer Produtos</SecondaryButton>
          </ButtonGroup>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* <FeaturesList>
            <FeatureItem>
              <span>🚀</span>
              <p>Implementação Rápida</p>
            </FeatureItem>
            <FeatureItem>
              <span>🔒</span>
              <p>Segurança Garantida</p>
            </FeatureItem>
            <FeatureItem>
              <span>📞</span>
              <p>Suporte 24/7</p>
            </FeatureItem>
            <FeatureItem>
              <span>💰</span>
              <p>ROI Comprovado</p>
            </FeatureItem>
          </FeaturesList> */}
        </motion.div>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTA;
