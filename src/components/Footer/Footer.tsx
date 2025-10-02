import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #0A1828;
  color: white;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #178582;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: #ccc;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: #667eea;
      transform: translateY(-2px);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>IzataCore</h3>
          <p>
            Soluções em tecnologia e automação de processos para empresas que buscam inovação e eficiência.
          </p>
          <SocialLinks>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">tw</a>
            <a href="#" aria-label="Facebook">fb</a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Produtos</h3>
          <ul>
            <li><Link to="/produtos/curriculo-ai">Curriculo AI</Link></li>
            <li><Link to="/produtos/ebook">Ebook</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Ferramentas</h3>
          <ul>
            <li><Link to="/ferramentas/smartasset">SmartAsset</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Empresa</h3>
          <ul>
            <li><Link to="/empresa/visao">Visão</Link></li>
            <li><Link to="/empresa/historia">História</Link></li>
            <li><Link to="/empresa/equipe">Equipe</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <ul>
            <li><Link to="/contato">Fale Conosco</Link></li>
            <li>contato@izatacore.com</li>
            <li>+55 (11) 99999-9999</li>
          </ul>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 IzataCore. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
