import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VisionContainer = styled.section`
  padding: 6rem 0;
  background: white;
`;

const VisionContent = styled.div`
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

const VisionText = styled.div`
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

const VisionCard = styled.div`
  background: #f8f9fa;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1c203c;
    margin-bottom: 1rem;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    font-size: 1.1rem;
  }
  
`;

const VisionImage = styled.div`
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

     img {
    width: 50%;
    height: 50%;
    object-fit: cover; /* Garante que a imagem preencha o container sem distorcer, cortando se necessário */
    border-radius: 20px; /* Opcional: Adicionar borda arredondada na imagem */
  }
`;

const CompanyVision: React.FC = () => {
  return (
    <VisionContainer>
      <VisionContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VisionText>
            <h2>Nossa Visão</h2>
            <p>
              A IzataCore nasceu da visão de transformar a forma como as empresas 
              lidam com tecnologia e automação de processos. Acreditamos que a 
              tecnologia deve ser acessível, intuitiva e, acima de tudo, eficaz 
              para resolver problemas reais do dia a dia empresarial.
            </p>
            <p>
              Nossa missão é democratizar o acesso a soluções tecnológicas avançadas, 
              oferecendo ferramentas que realmente fazem a diferença no crescimento 
              e na eficiência dos nossos clientes.
            </p>
          </VisionText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VisionImage>
            <ImagePlaceholder><img src='/visao-da-empresa.webp' alt='Vision Image' /></ImagePlaceholder>
          </VisionImage>
        </motion.div>
      </VisionContent>

      <VisionContent>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <VisionImage>
            <ImagePlaceholder>💡</ImagePlaceholder>
          </VisionImage>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <VisionText>
            <h2>Nossos Valores</h2>
            <VisionCard>
              <h3>Inovação</h3>
              <p>
                Estamos sempre em busca de novas tecnologias e metodologias que 
                possam agregar valor aos nossos produtos e serviços.
              </p>
            </VisionCard>
            <VisionCard>
              <h3>Qualidade</h3>
              <p>
                Comprometemo-nos a entregar soluções de alta qualidade que superem 
                as expectativas dos nossos clientes.
              </p>
            </VisionCard>
            <VisionCard>
              <h3>Transparência</h3>
              <p>
                Mantemos uma comunicação clara e transparente em todos os nossos 
                relacionamentos e processos.
              </p>
            </VisionCard>
          </VisionText>
        </motion.div>
      </VisionContent>
    </VisionContainer>
  );
};

export default CompanyVision;

