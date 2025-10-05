import React from 'react';
import styled,{ keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// --- KEYFRAMES PARA ANIMAÇÃO DA IMAGEM ---
// Reutilizando a animação da imagem da Hero principal
const imageMotion = keyframes`
  0% { transform: scale(1.0) rotate(0.5deg); }
  50% { transform: scale(1.02) rotate(-0.5deg); }
  100% { transform: scale(1.0) rotate(0.5deg); }
`;

// --- STYLED COMPONENTS ---

const HeroContainer = styled.section`
  /* Ajuste o gradiente de fundo para algo que combine com o SmartAsset */
  background: linear-gradient(135deg, #0A1828 0%, #178582 100%); /* Exemplo: tons de azul/verde mais escuros */
  color: white;
  padding: 0; /* Removido padding direto, será no HeroContentWrapper */
  position: relative;
  overflow: hidden; /* Importante para a imagem absoluta */
  min-height: 550px; /* Garante uma altura mínima para o hero */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23178582" stop-opacity="0.1"/><stop offset="100%" stop-color="%23178582" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
    opacity: 0.3;
    z-index: 1;
  }

  @media (max-width: 768px) {
    min-height: auto; /* Remove altura mínima no mobile */
    padding-top: 0; /* Remove padding extra no topo no mobile */
  }
`;

// Wrapper principal que contém o texto e atua como a área de conteúdo visível
const HeroContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem; /* Padding para o conteúdo vertical e lateral */
  display: flex; /* Habilita Flexbox para layout de duas colunas */
  align-items: center;
  position: relative;
  z-index: 2; /* Garante que o texto fique acima da imagem de fundo */
  height: 100%; /* Ocupa a altura disponível no HeroContainer */

  @media (max-width: 768px) {
    flex-direction: column; /* Pilha os elementos no mobile */
    text-align: center;
    padding: 2rem; /* Ajusta padding no mobile */
  }
`;

// Container para o texto (coluna esquerda)
const TextContainer = styled(motion.div)`
  width: 50%; /* Ocupa 50% do HeroContentWrapper */
  max-width: 550px; /* Limita a largura do texto */
  padding-right: 4rem; /* Espaçamento entre texto e imagem */
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;

  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura no mobile */
    max-width: 100%;
    padding-right: 0;
    padding-bottom: 2rem; /* Espaço entre texto e imagem no mobile */
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  /* Gradiente da Hero principal para o título */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #e2e8f0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

// Container da Imagem (coluna direita, absoluta)
const FadedImageContainer = styled(motion.div)`
  position: absolute; /* Posição absoluta dentro do HeroContainer */
  top: 0;
  bottom: 0;
  right: 0; /* Encosta na borda direita */
  width: 50vw; /* Ocupa 50% da largura da viewport */
  display: flex;
  justify-content: flex-start; /* Alinha a imagem à esquerda dentro do seu container */
  align-items: center;
  overflow: hidden;
  z-index: 1; /* Fica atrás do texto */

  img {
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0.5; /* Aumentar opacidade da imagem */
    object-fit: cover; /* Preenche o espaço, cortando se necessário */
    animation: ${imageMotion} 8s ease-in-out infinite alternate; /* Animação sutil */
    transition: opacity 0.5s ease;
  }

  /* Overlay de gradiente para a imagem */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top right, rgba(10, 24, 40, 0.6), rgba(23, 133, 130, 0.6)); /* Gradiente escuro/verde */
    mix-blend-mode: multiply;
  }

  @media (max-width: 768px) {
    position: relative; /* Volta a ser um bloco normal no mobile */
    width: 100%; /* Ocupa 100% da largura */
    height: 300px; /* Altura fixa para a imagem no mobile */
    order: -1; /* Força a imagem a ir para o topo */
    top: auto;
    bottom: auto;
    right: auto;
    
    img {
      animation: none; /* Desliga a animação no mobile */
      opacity: 0.6; /* Ajusta a opacidade no mobile */
    }

    &::after {
      background: linear-gradient(to bottom, rgba(10, 24, 40, 0.7), rgba(23, 133, 130, 0.7)); /* Gradiente ajustado para mobile */
    }
  }
`;

// --- COMPONENTE REACT PRINCIPAL ---

const SmartAssetHero: React.FC = () => {
  return (
    <HeroContainer>
      {/* Imagem de fundo absoluta que ocupa 50% da tela (viewport) */}
      <FadedImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/banner-smart.jpg"
            alt="SmartAsset dashboard e visualizações de dados" 
          />
      </FadedImageContainer>

      {/* Conteúdo centralizado (texto) */}
      <HeroContentWrapper>
        <TextContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>SmartAsset</HeroTitle>
          <HeroSubtitle>
            A ferramenta completa para gestão inteligente de ativos que automatiza 
            processos e otimiza a utilização de recursos da sua empresa.
          </HeroSubtitle>
          {/* Você pode adicionar botões aqui, se quiser */}
          {/*
          <ButtonGroup>
            <PrimaryButton to="/demo">Ver Demo</PrimaryButton>
            <SecondaryButton to="/contato">Falar com Consultor</SecondaryButton>
          </ButtonGroup>
          */}
        </TextContainer>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default SmartAssetHero;