import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HistoryContainer = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
`;

const HistoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 4rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;

    .content {
      margin-left: 2rem;
      text-align: left;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    .content {
      margin-right: 2rem;
      text-align: right;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    text-align: center !important;

    .content {
      margin: 1rem 0 !important;
      text-align: center !important;
    }
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  border: 4px solid white;
  box-shadow: 0 0 0 4px #667eea;
`;

const TimelineContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  flex: 1;
  max-width: 300px;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1c203c;
    margin-bottom: 0.5rem;
  }

  .year {
    color: #667eea;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const CompanyHistory: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Fundação da IzataCore',
      description: 'A empresa foi fundada com a visão de democratizar o acesso a soluções tecnológicas avançadas para empresas de todos os portes.'
    },
    {
      year: '2021',
      title: 'Primeiro Produto Lançado',
      description: 'Lançamos o Curriculo AI, nossa primeira solução baseada em inteligência artificial para criação de currículos profissionais.'
    },
    {
      year: '2022',
      title: 'Expansão da Equipe',
      description: 'Ampliamos nossa equipe de especialistas e desenvolvemos o SmartAsset, nossa plataforma de gestão de ativos.'
    },
    {
      year: '2023',
      title: 'Reconhecimento no Mercado',
      description: 'Recebemos prêmios de inovação e expandimos nossa base de clientes para mais de 50 empresas em todo o Brasil.'
    },
    {
      year: '2024',
      title: 'Futuro Promissor',
      description: 'Continuamos inovando e desenvolvendo novas soluções para atender às necessidades crescentes do mercado.'
    }
  ];

  return (
    <HistoryContainer>
      <HistoryContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Nossa História</SectionTitle>
        </motion.div>

        <Timeline>
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TimelineDot />
              <TimelineContent className="content">
                <div className="year">{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </HistoryContent>
    </HistoryContainer>
  );
};

export default CompanyHistory;

