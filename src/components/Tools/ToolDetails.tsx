import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DetailsContainer = styled.section`
  padding: 6rem 0;
  background: white;
`;

const DetailsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const DetailsText = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1c203c;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 2rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;

  li {
    color: #4a5568;
    margin-bottom: 1rem;
    position: relative;
    padding-left: 2rem;
    font-size: 1.1rem;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: #1c203c;
  padding: 1rem 2rem;
  border: 2px solid #1c203c;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1c203c;
    color: white;
  }
`;

const DetailsImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    opacity: 0.1;
    transform: rotate(5deg);
  }
`;

const ImagePlaceholder = styled.div`
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const ToolDetails: React.FC = () => {
  return (
    <DetailsContainer>
      <DetailsContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <DetailsText>
            <h2>O que é o SmartAsset?</h2>
            <p>
              O SmartAsset é uma plataforma completa de gestão de ativos que automatiza 
              processos e otimiza a utilização de recursos da sua empresa. Desenvolvido 
              com tecnologia de ponta, oferece uma solução integrada para monitoramento, 
              manutenção e análise de performance de todos os seus ativos.
            </p>
            <p>
              Com interface intuitiva e relatórios em tempo real, o SmartAsset permite 
              que sua equipe tome decisões mais assertivas e eficientes, resultando em 
              economia de tempo e recursos significativos.
            </p>
            <FeaturesList>
              <li>Gestão centralizada de todos os ativos</li>
              <li>Automação de processos de manutenção</li>
              <li>Relatórios em tempo real</li>
              <li>Integração com sistemas existentes</li>
              <li>Alertas inteligentes</li>
              <li>Análise de performance</li>
            </FeaturesList>
            <ButtonGroup>
              <PrimaryButton to="/contato">Solicitar Demonstração</PrimaryButton>
              <SecondaryButton to="#recursos">Ver Recursos</SecondaryButton>
            </ButtonGroup>
          </DetailsText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DetailsImage>
            <ImagePlaceholder>⚡</ImagePlaceholder>
          </DetailsImage>
        </motion.div>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default ToolDetails;
