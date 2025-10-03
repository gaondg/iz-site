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

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 1.5rem;
  }
`;

const DetailsText = styled.div`
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.25rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1c203c;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.25rem;
  }

  li {
    color: #4a5568;
    margin-bottom: 1rem;
    position: relative;
    padding-left: 2rem;
    padding-right: 1rem;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding-left: 1.5rem;
      padding-right: 0.5rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      padding-left: 1.2rem;
      padding-right: 0.25rem;
    }

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
      font-size: 1.2rem;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
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
  display: inline-block;
  text-align: center;
  min-width: 200px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
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
  display: inline-block;
  text-align: center;
  min-width: 200px;

  &:hover {
    background: #1c203c;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 5rem;
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

  @media (max-width: 1024px) {
    width: 350px;
    height: 250px;
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    height: 180px;
    font-size: 2.5rem;
  }
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


