import React from 'react';
import styled, { keyframes } from 'styled-components'; // Importa keyframes para a animação
import { motion } from 'framer-motion';

// --- KEYFRAMES PARA ANIMAÇÃO DA IMAGEM ---
const imageMotion = keyframes`
  0% { transform: scale(1.0) rotate(-0.5deg); }
  50% { transform: scale(1.02) rotate(0.5deg); }
  100% { transform: scale(1.0) rotate(-0.5deg); }
`;

// --- STYLED COMPONENTS ---

const HeroContainer = styled.section`
  /* O Flexbox principal define as duas colunas */
  display: flex;
  color: white;
  min-height: 550px; /* Garante uma altura mínima, ou use 100vh - header */
  position: relative;
  overflow: hidden;
  padding: 0; /* Remove padding */

  @media (max-width: 768px) {
    flex-direction: column; /* Pilha os elementos no mobile */
    min-height: auto;
  }
`;

// Container da Imagem (coluna esquerda)
const ImageWrapper = styled(motion.div)`
  width: 50vw; /* Ocupa 50% da largura da viewport */
  position: relative;
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem preencha o container */
    display: block;
    opacity: 0.5; /* Opacidade aplicada à imagem de fundo */
    animation: ${imageMotion} 8s ease-in-out infinite alternate;
  }

  /* Overlay de gradiente sobre a imagem para escurecer/dar tom */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top left, rgba(28, 32, 60, 0.7), rgba(45, 55, 72, 0.7)); /* Gradiente escuro */
    mix-blend-mode: multiply;
  }
  
  @media (max-width: 768px) {
    width: 100%; /* Ocupa a largura total no mobile */
    height: 300px; /* Altura fixa para a imagem no mobile */
    order: -1; /* Manda a imagem para o topo */
    
    img {
      animation: none;
      opacity: 0.6;
    }
  }
`;

// Container do Texto (coluna direita)
const TextWrapper = styled.div`
  width: 50%;
  background: linear-gradient(135deg, #1c203c 0%, #2d3748 100%); /* Cor de fundo/gradiente do texto */
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  padding: 6rem 2rem; /* Padding vertical e lateral */
  position: relative;
  z-index: 2; /* Garante que o texto fique por cima */
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem 2rem;
    text-align: center;
  }
`;

// Conteúdo interno do texto
const HeroContent = styled.div`
  max-width: 500px; /* Limita a largura do texto para melhor leitura */
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  /* Gradiente do texto (mantido o original para o Curriculo AI) */
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
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(118, 75, 162, 0.6);
  }
`;


// --- COMPONENTE REACT PRINCIPAL ---

const EbookHero: React.FC = () => {

  return (
    <HeroContainer>
      {/* 1. IMAGEM NA ESQUERDA (50vw) */}
      <ImageWrapper
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* A imagem deve ser acessível na raiz, ex: /banner-curriculo.webp na pasta public */}
        <img 
          src='/banner-ebook.webp'
          alt="Tela de notebook com livros"
        />
      </ImageWrapper>

      {/* 2. TEXTO NA DIREITA (50%) */}
      <TextWrapper>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroTitle>Ebook Creator AI</HeroTitle>
            <HeroSubtitle>
            Transforme suas ideias em um Ebook completo em minutos. Nossa plataforma usa Inteligência Artificial para gerar o conteúdo, a estrutura e o design do seu livro.
            </HeroSubtitle>
            
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Crie Seu Currículo Grátis
            </CTAButton>

          </motion.div>
        </HeroContent>
      </TextWrapper>
    </HeroContainer>
  );
};

export default EbookHero