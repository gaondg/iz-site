import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TeamContainer = styled.section`
  padding: 6rem 0;
  background: white;
`;

const TeamContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const TeamAvatar = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  margin: 0 auto 1.5rem;
  font-weight: bold;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1c203c;
  margin-bottom: 0.5rem;
`;

const TeamPosition = styled.p`
  color: #667eea;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const TeamDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const TeamSocial = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4a5568;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const CompanyTeam: React.FC = () => {
  const team = [
    {
      name: 'Maria Silva',
      position: 'CEO & Fundadora',
      description: 'Especialista em tecnologia com mais de 15 anos de experiência em desenvolvimento de software e gestão de equipes.',
      initials: 'MS'
    },
    {
      name: 'João Santos',
      position: 'CTO',
      description: 'Engenheiro de software com expertise em inteligência artificial e arquitetura de sistemas distribuídos.',
      initials: 'JS'
    },
    {
      name: 'Ana Costa',
      position: 'Diretora de Produtos',
      description: 'Especialista em UX/UI e gestão de produtos, responsável por garantir que nossas soluções atendam às necessidades dos clientes.',
      initials: 'AC'
    },
    {
      name: 'Carlos Lima',
      position: 'Diretor Comercial',
      description: 'Profissional com vasta experiência em vendas B2B e relacionamento com clientes corporativos.',
      initials: 'CL'
    }
  ];

  return (
    <TeamContainer>
      <TeamContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Nossa Equipe de Liderança</SectionTitle>
          <SectionSubtitle>
            Conheça os especialistas que lideram a IzataCore e trabalham 
            incansavelmente para entregar soluções excepcionais aos nossos clientes.
          </SectionSubtitle>
        </motion.div>

        <TeamGrid>
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TeamCard
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <TeamAvatar>{member.initials}</TeamAvatar>
                <TeamName>{member.name}</TeamName>
                <TeamPosition>{member.position}</TeamPosition>
                <TeamDescription>{member.description}</TeamDescription>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn">in</a>
                  <a href="#" aria-label="Twitter">tw</a>
                  <a href="#" aria-label="Email">@</a>
                </TeamSocial>
              </TeamCard>
            </motion.div>
          ))}
        </TeamGrid>
      </TeamContent>
    </TeamContainer>
  );
};

export default CompanyTeam;



