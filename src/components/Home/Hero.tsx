import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #0A1828 0%, #178582 50%, #1E3A8A 100%);
  color: white;
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23178582" stop-opacity="0.1"/><stop offset="100%" stop-color="%23178582" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #e2e8f0;
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

const HeroImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
    border-radius: 50%;
    opacity: 0.1;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.2;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.1;
    }
  }
`;

const ComputerScreen = styled.div`
  width: 350px;
  height: 250px;
  background: #1a1a1a;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 3px solid #333;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    height: 20px;
    background: #333;
    border-radius: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #333;
    border-radius: 2px;
  }
`;

const ScreenContent = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: linear-gradient(135deg, #0A1828 0%, #1E3A8A 100%);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  height: 60px;
  margin-bottom: 10px;
`;

const Bar = styled.div<{ height: number; delay: number }>`
  width: 20px;
  height: ${props => props.height}px;
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  border-radius: 2px;
  animation: growUp 1.5s ease-out ${props => props.delay}s both;
  
  @keyframes growUp {
    from {
      height: 0;
    }
    to {
      height: ${props => props.height}px;
    }
  }
`;

const ChartTitle = styled.div`
  color: #00FFFF;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
`;

const DataPoints = styled.div`
  display: flex;
  justify-content: space-between;
  color: #178582;
  font-size: 10px;
  margin-top: 5px;
`;

const LineChart = styled.div`
  position: relative;
  height: 40px;
  margin-top: 10px;
`;

const LinePath = styled.svg`
  width: 100%;
  height: 100%;
  
  .line {
    fill: none;
    stroke: #00FFFF;
    stroke-width: 2;
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: drawLine 2s ease-out 1s both;
  }
  
  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const MetricCard = styled.div`
  background: rgba(23, 133, 130, 0.1);
  border: 1px solid #178582;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  
  .value {
    color: #00FFFF;
    font-size: 14px;
    font-weight: 700;
  }
  
  .label {
    color: #178582;
    font-size: 8px;
    margin-top: 2px;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 10px;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroText>
            <h1>Transforme sua empresa com tecnologia inteligente</h1>
            <p>
              A IzataCore oferece soluções inovadoras em automação de processos e tecnologia 
              para empresas que buscam eficiência e crescimento sustentável.
            </p>
            <ButtonGroup>
              <PrimaryButton to="/contato">Começar Agora</PrimaryButton>
              <SecondaryButton to="/produtos">Conhecer Produtos</SecondaryButton>
            </ButtonGroup>
          </HeroText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroImage>
            <ComputerScreen>
              <ScreenContent>
                <ChartTitle>Performance Analytics</ChartTitle>
                <ChartContainer>
                  <Bar height={45} delay={0.1} />
                  <Bar height={60} delay={0.2} />
                  <Bar height={35} delay={0.3} />
                  <Bar height={70} delay={0.4} />
                  <Bar height={50} delay={0.5} />
                  <Bar height={80} delay={0.6} />
                  <Bar height={55} delay={0.7} />
                </ChartContainer>
                <DataPoints>
                  <span>Jan</span>
                  <span>Fev</span>
                  <span>Mar</span>
                  <span>Abr</span>
                  <span>Mai</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </DataPoints>
                
                <LineChart>
                  <LinePath viewBox="0 0 200 40">
                    <path
                      className="line"
                      d="M10,30 Q50,10 90,25 T170,15"
                    />
                  </LinePath>
                </LineChart>
                
                <MetricsGrid>
                  <MetricCard>
                    <div className="value">+24%</div>
                    <div className="label">Crescimento</div>
                  </MetricCard>
                  <MetricCard>
                    <div className="value">98%</div>
                    <div className="label">Eficiência</div>
                  </MetricCard>
                </MetricsGrid>
              </ScreenContent>
            </ComputerScreen>
          </HeroImage>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
