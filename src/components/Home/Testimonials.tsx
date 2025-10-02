import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 6rem 0;
  background: #f8f9fa;
`;

const TestimonialsContent = styled.div`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    color: #667eea;
    position: absolute;
    top: -1rem;
    left: -1rem;
    font-family: serif;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
`;

const AuthorInfo = styled.div`
  text-align: left;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1c203c;
    margin-bottom: 0.25rem;
  }

  p {
    color: #4a5568;
    font-size: 0.9rem;
  }
`;

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "A IzataCore transformou completamente nossa gestão de ativos. O SmartAsset nos permitiu automatizar processos que antes consumiam horas, resultando em uma economia significativa de tempo e recursos.",
      author: "Maria Silva",
      position: "Diretora de Operações",
      company: "TechCorp"
    },
    {
      text: "O Curriculo AI é uma ferramenta incrível. Em poucos minutos, consegui criar um currículo profissional que destacou minhas habilidades de forma muito mais eficaz do que eu conseguiria sozinha.",
      author: "João Santos",
      position: "Gerente de Projetos",
      company: "Inovação Ltda"
    },
    {
      text: "O suporte técnico da IzataCore é excepcional. Sempre que precisamos de ajuda, a equipe está disponível e resolve nossos problemas rapidamente. Recomendo para qualquer empresa que busca eficiência.",
      author: "Ana Costa",
      position: "CTO",
      company: "StartupXYZ"
    }
  ];

  return (
    <TestimonialsContainer>
      <TestimonialsContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>O que nossos clientes dizem</SectionTitle>
          <SectionSubtitle>
            Depoimentos reais de empresas que transformaram seus processos 
            com nossas soluções tecnológicas.
          </SectionSubtitle>
        </motion.div>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TestimonialCard
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AuthorAvatar>
                  <AuthorInfo>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position} - {testimonial.company}</p>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </motion.div>
          ))}
        </TestimonialsGrid>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
};

export default Testimonials;
