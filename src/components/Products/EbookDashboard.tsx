import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DashboardContainer = styled.section`
  padding: 6rem 0;
  background: #1c203c;
  color: white;
`;

const DashboardContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  text-align: center;
  opacity: 0.9;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// Layout com grid específico
const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

// Card principal - ocupa 2 colunas
const MainCardWrapper = styled.div`
  grid-column: 1 / -1;
`;

// Cards laterais
const SideCardWrapper = styled.div`
  display: contents;
`;

// Card de processo - ocupa 2 colunas na horizontal
const ProcessCardWrapper = styled.div`
  grid-column: 1 / -1;
`;

// Card principal - destaque
const MainCard = styled(motion.div)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(23, 133, 130, 0.2);
  position: relative;
  color: #0A1828; /* Mudança para cor escura para contraste */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    z-index: 1;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

// Cards secundários
const DashboardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

// Card de processo
const ProcessCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const CardIcon = styled(motion.div)<{ size?: string }>`
  font-size: ${props => props.size || '3rem'};
  margin-bottom: 1.5rem;
  display: block;
  text-align: center;
  /* Ícones nos cards secundários são brancos */
  color: ${props => props.color || 'white'}; 
`;

const CardTitle = styled.h3<{ size?: string, color?: string }>`
  font-size: ${props => props.size || '1.8rem'};
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.color || 'white'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardDescription = styled.p<{ size?: string, color?: string }>`
  color: ${props => props.color || 'rgba(255, 255, 255, 0.9)'};
  line-height: 1.6;
  font-size: ${props => props.size || '1.1rem'};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li<{ color?: string }>`
  color: ${props => props.color || 'rgba(255, 255, 255, 0.9)'};
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 1rem;
  text-align: left; /* Alinha as features à esquerda */

  &::before {
    content: '📚'; /* Novo ícone para Ebook */
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.9rem;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProcessStep = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #0A1828;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  color: #0A1828;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 10px 30px rgba(23, 133, 130, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(23, 133, 130, 0.4);
  }
`;

const CTAContainer = styled.div`
  text-align: center;
`;

const EbookDashboard: React.FC = () => {
  const processSteps = [
    {
      number: '1',
      title: 'Tema e Instruções',
      description: 'Defina o assunto, tom de voz e público-alvo do seu Ebook.'
    },
    {
      number: '2',
      title: 'Geração pela IA',
      description: 'Nossa IA cria o conteúdo, estrutura e capítulos do rascunho.'
    },
    {
      number: '3',
      title: 'Revisão e Estilo',
      description: 'Personalize o texto, adicione exemplos e ajuste o design final.'
    },
    {
      number: '4',
      title: 'Publicação Final',
      description: 'Exporte seu Ebook pronto em PDF, ePub ou publique na plataforma.'
    }
  ];

  return (
    <DashboardContainer>
      <DashboardContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem'
            }}
          >
            ✍️
          </motion.div>
          <SectionTitle>
            Ebook Creator AI
          </SectionTitle>
          <SectionSubtitle>
           Plataforma onde você cria seu Ebook de maneira **fácil, prática e totalmente assistida por Inteligência Artificial**. Escreva seu próximo best-seller em minutos!
          </SectionSubtitle>
        </motion.div>

        <DashboardLayout>
          {/* Card Principal - Criação por IA em Destaque */}
          <MainCardWrapper>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MainCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon size="3rem" color="#0A1828">✨</CardIcon>
                <CardTitle size="1.8rem" color="#0A1828">Geração de Conteúdo com IA</CardTitle>
                <CardDescription size="1.1rem" color="#0A1828">
                  Deixe nossa IA cuidar da escrita. Forneça o tópico e ela criará capítulos, seções e parágrafos coerentes e engajadores em minutos.
                </CardDescription>
                <FeatureList>
                  <FeatureItem color="#0A1828">Criação de esqueleto e sumário automáticos</FeatureItem>
                  <FeatureItem color="#0A1828">Expansão de tópicos com um clique</FeatureItem>
                  <FeatureItem color="#0A1828">Verificação de plágio e originalidade</FeatureItem>
                  <FeatureItem color="#0A1828">Sugestões de tom de voz (Formal, Casual, Educacional)</FeatureItem>
                </FeatureList>
              </MainCard>
            </motion.div>
          </MainCardWrapper>

          {/* Cards Laterais */}
          <SideCardWrapper>
            {/* Design e Formatação */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <DashboardCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>🎨</CardIcon>
                <CardTitle>Design Profissional</CardTitle>
                <CardDescription>
                  Templates visuais prontos para formatação perfeita e exportação para múltiplos formatos.
                </CardDescription>
                <FeatureList>
                  <FeatureItem>Templates de capa personalizáveis</FeatureItem>
                  <FeatureItem>Exportação para PDF, ePub e Kindle</FeatureItem>
                  <FeatureItem>Ajuste automático de margens e fontes</FeatureItem>
                </FeatureList>
              </DashboardCard>
            </motion.div>

            {/* Otimização SEO e Nicho */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <DashboardCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon>📈</CardIcon>
                <CardTitle>Otimização para Nicho</CardTitle>
                <CardDescription>
                  Análise de palavras-chave e sugestões de tópicos com maior demanda em seu segmento.
                </CardDescription>
                <FeatureList>
                  <FeatureItem>Análise de mercado de Ebooks</FeatureItem>
                  <FeatureItem>Sugestão de títulos atraentes</FeatureItem>
                  <FeatureItem>Otimização de descrição (blurb)</FeatureItem>
                </FeatureList>
              </DashboardCard>
            </motion.div>
          </SideCardWrapper>

          {/* Card de Processo - Horizontal */}
          <ProcessCardWrapper>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ProcessCard
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <CardIcon size="2.5rem">📚</CardIcon>
                <CardTitle size="1.8rem">Nosso Processo de 4 Etapas</CardTitle>
                <CardDescription size="1.1rem">
                  Transforme uma ideia em um Ebook publicado em um fluxo de trabalho simples e intuitivo.
                </CardDescription>
                <ProcessSteps>
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    >
                      <ProcessStep
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <StepNumber>{step.number}</StepNumber>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </ProcessStep>
                    </motion.div>
                  ))}
                </ProcessSteps>
              </ProcessCard>
            </motion.div>
          </ProcessCardWrapper>
        </DashboardLayout>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <CTAContainer>
            <CTAButton to="/contato">
              🚀 Começar Agora - Crie Seu Ebook em 10 Minutos
            </CTAButton>
          </CTAContainer>
        </motion.div>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default EbookDashboard;