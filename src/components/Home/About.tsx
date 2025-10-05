import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
`;

const AboutContent = styled.div`
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

const AboutText = styled.div`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem; /* Espaçamento ligeiramente menor */
  margin-top: 2.5rem; /* Margem superior um pouco maior */
`;

const StatItem = styled.div`
  text-align: left; /* Alinhamento à esquerda para um visual mais profissional */
  padding: 1.5rem;
  background: white;
  border-radius: 8px; /* Cantos levemente menos arredondados */
  
  /* ALTERAÇÃO CHAVE: Remove a sombra tradicional e adiciona uma borda sutil */
  border: 1px solid #e0e0e0; 
  box-shadow: none; 
  
  transition: all 0.3s ease;
  
  /* Borda esquerda de destaque (pode ser um gradiente sutil) */
  border-left: 5px solid #178582; 
  
  &:hover {
    transform: translateY(-3px); /* Movimento de hover mais suave */
    border-color: #178582; /* Borda fica mais evidente no hover */
    box-shadow: 0 6px 15px rgba(23, 133, 130, 0.1); /* Sombra sutil, baseada na cor de destaque */
  }

  h3 {
    font-size: 2.8rem; /* NÚMERO MAIOR para dar mais impacto */
    font-weight: 800; /* Mais negrito */
    color: #1c203c; /* Cor do texto principal (mais escuro) */
    margin-bottom: 0.3rem;
    
    /* GRADIENTE NO NÚMERO para um toque moderno */
    background: linear-gradient(45deg, #178582, #00C6C2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: #4a5568;
    font-weight: 500;
    font-size: 0.95rem; /* Texto descritivo ligeiramente menor */
    line-height: 1.2;
    margin: 0;
  }
`;

const AboutImage = styled.div`
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
    background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
    border-radius: 20px;
    opacity: 0.1;
    transform: rotate(5deg);
  }
`;

const ImagePlaceholder = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
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

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AboutText>
            <h2>Sobre a IzataCore</h2>
            <p>
              Somos uma empresa especializada em soluções tecnológicas e automação de processos. 
              Nossa missão é transformar a forma como as empresas operam, oferecendo ferramentas 
              inteligentes que aumentam a produtividade e reduzem custos operacionais.
            </p>
            <p>
              Com anos de experiência no mercado, desenvolvemos produtos e serviços que atendem 
              às necessidades específicas de cada cliente, garantindo resultados excepcionais 
              e crescimento sustentável.
            </p>
            <StatsGrid>
              <StatItem>
                <h3>50+</h3>
                <p>Clientes Atendidos</p>
              </StatItem>
              <StatItem>
                <h3>95%</h3>
                <p>Satisfação dos Clientes</p>
              </StatItem>
              <StatItem>
                <h3>3</h3>
                <p>Produtos Principais</p>
              </StatItem>
              <StatItem>
                <h3>24/7</h3>
                <p>Suporte Técnico</p>
              </StatItem>
            </StatsGrid>
          </AboutText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AboutImage>
            <ImagePlaceholder><img src='/foto2.webp' alt='About Image' /></ImagePlaceholder>
          </AboutImage>
        </motion.div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;