"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

// --- CORES E CONFIGURAÇÕES ---
const SMART_COLOR_START = "#00FFFF"
const SMART_COLOR_END = "#178582"
const DARK_BG_PRIMARY = "#0A1828"
const DARK_BG_SECONDARY = "#1c203c"
const ACCENT_COLOR = "#E67E22"
const ACCENT_SECONDARY = "#F39C12"

// --- ANIMAÇÕES (Mantidas) ---
const pulseGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3),
                0 0 60px rgba(0, 255, 255, 0.2),
                inset 0 0 30px rgba(0, 255, 255, 0.1);
  }
  50% { 
    box-shadow: 0 0 50px rgba(0, 255, 255, 0.5),
                0 0 80px rgba(0, 255, 255, 0.3),
                inset 0 0 40px rgba(0, 255, 255, 0.15);
  }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(5deg); }
  66% { transform: translateY(-10px) rotate(-5deg); }
`

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

const rotateGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

// --- STYLED COMPONENTS ---

const ServicesContainer = styled.section`
  padding: 8rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0; /* Reduz padding no mobile */
  }

  background: linear-gradient(180deg, ${DARK_BG_SECONDARY} 0%, ${DARK_BG_PRIMARY} 100%);
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
    background: 
      radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(23, 133, 130, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`

const FloatingShape = styled(motion.div)<{ $delay: number; $size: number; $left: string; $top: string }>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
  border-radius: 50%;
  background: linear-gradient(135deg, ${SMART_COLOR_START}20, ${SMART_COLOR_END}20);
  border: 2px solid ${SMART_COLOR_START}30;
  animation: ${float} ${(props) => 6 + props.$delay}s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    /* Esconde ou reduz significativamente as formas flutuantes no mobile para performance */
    display: none; 
    width: ${(props) => props.$size * 0.5}px;
    height: ${(props) => props.$size * 0.5}px;
  }
`

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const BadgeContainer = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${SMART_COLOR_START}15, ${SMART_COLOR_END}15);
  border: 1px solid ${SMART_COLOR_START}40;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
`

const BadgeIcon = styled.span`
  font-size: 1.2rem;
  animation: ${float} 3s ease-in-out infinite;
`

const BadgeText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, ${SMART_COLOR_START}, ${SMART_COLOR_END});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(135deg, ${SMART_COLOR_START} 0%, ${SMART_COLOR_END} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* OTIMIZAÇÃO: Reduz tamanho no mobile */
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: #cbd5e0;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* OTIMIZAÇÃO: Reduz tamanho no mobile */
    margin-bottom: 3rem;
  }
`

const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`

const FeaturedServiceCard = styled(motion.div)`
  max-width: 1100px;
  width: 100%;
  border-radius: 30px;
  background: linear-gradient(145deg, ${DARK_BG_PRIMARY}, #0d1f2d);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  animation: ${pulseGlow} 4s infinite alternate;
  overflow: hidden;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(135deg, ${SMART_COLOR_START}, ${SMART_COLOR_END}, ${SMART_COLOR_START});
    background-size: 200% 200%;
    animation: ${rotateGradient} 3s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    /* Remove a animação de glow no mobile para melhorar a performance */
    animation: none; 
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 4rem 4rem 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem; /* OTIMIZAÇÃO: Reduz padding no mobile */
  }
`

const ProductTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, ${SMART_COLOR_START} 0%, ${SMART_COLOR_END} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
  line-height: 1;
  letter-spacing: -2px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px; /* OTIMIZAÇÃO: Reduz a largura da barra no mobile */
    height: 3px;
    background: linear-gradient(90deg, ${ACCENT_COLOR}, ${ACCENT_SECONDARY});
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem; /* OTIMIZAÇÃO: Reduz tamanho no mobile */
    letter-spacing: -1px;
  }
`

const ProductTagline = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  line-height: 1.4;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* OTIMIZAÇÃO: Reduz tamanho no mobile */
  }
`

const ProductDescription = styled.p`
  color: #cbd5e0;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  max-width: 850px;

  @media (max-width: 768px) {
    font-size: 1rem; /* OTIMIZAÇÃO: Reduz tamanho no mobile */
  }
`

const FeatureGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin: 2rem 0 2.5rem;
  padding: 0;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* OTIMIZAÇÃO: Uma única coluna no mobile */
    gap: 1rem;
    margin: 1.5rem 0 2rem;
  }
`

const FeatureItem = styled(motion.li)<{ $isHovered: boolean }>`
  font-size: 1.05rem;
  font-weight: 500;
  color: ${(props) => (props.$isHovered ? "#ffffff" : "#a0aec0")};
  position: relative;
  padding: 1rem 1.5rem 1rem 3.5rem;
  background: ${(props) =>
    props.$isHovered ? `linear-gradient(90deg, ${SMART_COLOR_START}15, transparent)` : "transparent"};
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 3px solid ${(props) => (props.$isHovered ? ACCENT_COLOR : "transparent")};
  text-align: left;

  &::before {
    content: '⚡';
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%) ${(props) => (props.$isHovered ? "scale(1.2)" : "scale(1)")};
    font-size: 1.5rem;
    transition: all 0.3s ease;
    filter: ${(props) => (props.$isHovered ? `drop-shadow(0 0 8px ${ACCENT_COLOR})` : "none")};
  }

  &:hover {
    transform: translateX(5px); /* Reduz o deslocamento no hover */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1rem 0.8rem 3rem; /* Ajusta padding no mobile */
    &:hover {
      transform: none; /* Desativa a transformação no hover do mobile */
    }
  }
`

const CTAButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* OTIMIZAÇÃO: Botões empilhados no mobile */
    gap: 0.8rem;
    width: 100%;
  }
`

const CTAButton = styled(Link)<{ $variant?: "primary" | "secondary" }>`
  background: ${(props) =>
    props.$variant === "secondary" ? "transparent" : `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_SECONDARY})`};
  color: white;
  padding: 1.3rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
  border: ${(props) => (props.$variant === "secondary" ? `2px solid ${SMART_COLOR_START}` : "none")};
  box-shadow: ${(props) => (props.$variant === "secondary" ? "none" : `0 10px 30px ${ACCENT_COLOR}60`)};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: ${(props) =>
      props.$variant === "secondary" ? `0 10px 30px ${SMART_COLOR_START}40` : `0 15px 40px ${ACCENT_COLOR}80`};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%; /* OTIMIZAÇÃO: Ocupa a largura total */
    justify-content: center;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    transform: none !important; /* Remove transformações complexas no mobile */
    box-shadow: none !important;
  }
`

const ButtonIcon = styled.span`
  font-size: 1.3rem;
  transition: transform 0.3s ease;

  ${CTAButton}:hover & {
    transform: translateX(5px);
  }
`

const FloatingImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 350px;
  margin: 0 auto 3rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(0, 255, 255, 0.2),
    0 0 0 1px rgba(0, 255, 255, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.03) 10px,
      rgba(255, 255, 255, 0.03) 20px
    );
    animation: ${shimmer} 20s linear infinite;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 2;
    filter: brightness(1.1) contrast(1.1);
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.03); /* Reduz o zoom no hover */
  }

  @media (max-width: 768px) {
    height: 200px; /* OTIMIZAÇÃO: Reduz a altura da imagem no mobile */
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.1);
    &::before {
      animation: none; /* Desativa o shimmer no mobile para performance */
    }
    &:hover img {
      transform: scale(1); /* Remove o zoom no hover do mobile */
    }
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 255, 255, 0.2);
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* OTIMIZAÇÃO: Uma única coluna no mobile */
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
`

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  background: linear-gradient(135deg, ${SMART_COLOR_START}08, ${SMART_COLOR_END}08);
  border: 1px solid ${SMART_COLOR_START}20;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, ${SMART_COLOR_START}15, ${SMART_COLOR_END}15);
    border-color: ${SMART_COLOR_START}40;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    &:hover {
      transform: none;
    }
  }
`

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, ${SMART_COLOR_START}, ${SMART_COLOR_END});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #a0aec0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`

// --- COMPONENTE PRINCIPAL ---

const FeaturedSmartAsset: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const smartAsset = {
    title: "SmartAsset",
    tagline: "Otimize seus Ativos, Automatize seus Processos, Maximize seus Resultados.",
    description:
      "SmartAsset é a plataforma de gestão inteligente que usa o poder da Automação e Inteligência Artificial para otimizar o ciclo de vida dos seus ativos. Tenha controle total, reduza custos operacionais e garanta a longevidade dos seus equipamentos.",
    features: [
      "Controle 360º de Ativos: Gerencie localização, inventário e ciclo de vida",
      "Automação Inteligente de Workflow: Elimine tarefas manuais e erros",
      "Business Intelligence (BI): Relatórios em tempo real para decisões estratégicas",
      "Manutenção Preditiva: Preveja falhas e reduza o tempo de inatividade",
    ],
    stats: [
      { value: "95%", label: "Redução de Erros" },
      { value: "60%", label: "Economia de Tempo" },
      { value: "24/7", label: "Monitoramento" },
    ],
    imageSrc: "/login-smart.webp",
  }

  return (
    <ServicesContainer id="smartasset">
      {/* Formas flutuantes decorativas (Escondidas no mobile via CSS) */}
      <FloatingShape $delay={0} $size={100} $left="10%" $top="15%" />
      <FloatingShape $delay={1} $size={150} $left="85%" $top="25%" />
      <FloatingShape $delay={2} $size={80} $left="15%" $top="75%" />
      <FloatingShape $delay={1.5} $size={120} $left="90%" $top="80%" />

      <ServicesContent>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}>
          <BadgeContainer
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BadgeIcon>🚀</BadgeIcon>
            <BadgeText>Solução Principal</BadgeText>
          </BadgeContainer>

          <SectionTitle>Conheça o SmartAsset</SectionTitle>
          <SectionSubtitle>
            A plataforma completa que integra gestão de ativos e automação inteligente para transformar a eficiência
            operacional do seu negócio.
          </SectionSubtitle>
        </motion.div>

        <FeaturedWrapper>
          <FeaturedServiceCard
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <ContentWrapper>
              <FloatingImageContainer
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img
                  src={smartAsset.imageSrc || "/placeholder.svg"}
                  alt="Interface da plataforma SmartAsset com dashboard e análises em tempo real"
                />
              </FloatingImageContainer>

              <ProductTitle>{smartAsset.title}</ProductTitle>
              <ProductTagline>{smartAsset.tagline}</ProductTagline>
              <ProductDescription>{smartAsset.description}</ProductDescription>

              <FeatureGrid>
                {smartAsset.features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    $isHovered={hoveredFeature === index}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureGrid>

              <CTAButtonWrapper>
                <CTAButton to="/contato" $variant="primary">
                  Solicitar Demonstração
                  <ButtonIcon>→</ButtonIcon>
                </CTAButton>
              </CTAButtonWrapper>

              <StatsGrid>
                {smartAsset.stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                ))}
              </StatsGrid>
            </ContentWrapper>
          </FeaturedServiceCard>
        </FeaturedWrapper>
      </ServicesContent>
    </ServicesContainer>
  )
}

export default FeaturedSmartAsset