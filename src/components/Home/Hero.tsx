import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Keyframes para o movimento sutil da imagem (motion)
const imageMotion = keyframes`
  0% { transform: scale(1.0) rotate(0.5deg); }
  50% { transform: scale(1.02) rotate(-0.5deg); }
  100% { transform: scale(1.0) rotate(0.5deg); }
`;

// --- Estrutura da Hero ---

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #1C203C 0%, #3B407A 50%, #4A55A2 100%); 
  color: white;
  /* REMOVIDO: padding: 8rem 0; */
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%233B407A" stop-opacity="0.15"/><stop offset="100%" stop-color="%233B407A" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    padding: 0; 
  }
`;

const HeroContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem; /* ADICIONADO AQUI para manter o espaçamento no desktop */
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2; 
  width: 100%; 

  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center;
    padding: 0; /* Remove o padding no mobile para que o conteúdo empilhado controle seu próprio espaçamento */
  }
`;

// Container do Texto
const TextContainer = styled(motion.div)`
  width: 50%; 
  max-width: 550px; 
  padding-right: 4rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3; 

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    /* Mantido o padding para o texto e botão no mobile */
    padding: 2rem 2rem 4rem 2rem; 
    text-align: center;
  }
`;

// Container da Imagem (50% da Viewport, posicionado absolutamente)
const FadedImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50vw; 
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  overflow: hidden;
  z-index: 1; 

  img {
    width: 100%; 
    height: 100%; 
    display: block; 
    opacity: 0.25; 
    object-fit: cover; 
    animation: ${imageMotion} 8s ease-in-out infinite alternate; 
    transition: opacity 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top right, rgba(28, 32, 60, 0.5), rgba(74, 85, 162, 0.5));
    mix-blend-mode: multiply;
  }

  @media (max-width: 768px) {
    /* AJUSTE CRUCIAL: 'top: 0;' garante que a imagem comece no topo do HeroContainer no mobile */
    position: relative; 
    width: 100%; 
    height: 350px; 
    order: -1; 
    top: 0; /* Força o alinhamento no topo */
    bottom: auto;
    right: auto;
    
    img {
      animation: none; 
      opacity: 0.5; 
    }
  }
`;

// --- Restante dos Styled Components (Mantidos) ---

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: white;

    span {
       background: linear-gradient(135deg,rgb(32, 150, 146) 0%, #00FFFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #e2e8f0;
    
    @media (max-width: 768px) {
      font-size: 1rem;
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
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  color: #0A1828;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(23, 133, 130, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(23, 133, 130, 0.4);
  }
`;
const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border: 2px solid white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #1c203c;
  }
`;

// --- Componente React Principal ---

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      {/* Imagem de fundo absoluta que ocupa 50% da tela (viewport) */}
      <FadedImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/fotohero.webp"
            alt="Gráfico e visualizações de dados em uma tela de computador" 
          
          />
      </FadedImageContainer>

      {/* Conteúdo centralizado (texto) */}
      <HeroContentWrapper>
        {/* Div do Texto, agora limitada a 50% da largura do wrapper */}
        <TextContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroText>
            <h1>
              Transformamos <span>dados</span> em decisões e <span>ideias</span> em realidade
            </h1>
            <p>
              Combinamos soluções empresariais inteligentes com ferramentas inovadoras que impulsionam carreiras e projetos.
            </p>
            <ButtonGroup>
              <PrimaryButton to="/contato">Começar Agora</PrimaryButton>
              <SecondaryButton to="/produtos">Conhecer Produtos</SecondaryButton>
            </ButtonGroup>
          </HeroText>
        </TextContainer>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default Hero;