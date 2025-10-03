import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  background: #0A1828;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 2px solid #178582;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #178582 0%, #00FFFF 100%);
  color: #0A1828;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(23, 133, 130, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(23, 133, 130, 0.4);
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: #1c203c;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2001;

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0A1828;
  z-index: 2000;
  padding-top: 80px;
  border-top: 2px solid #178582;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 2rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1.2rem 0;
  display: block;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: background 0.2s, color 0.2s;
  border-radius: 8px;
  text-align: center;

  &:hover {
    background: #178582;
    color: #0A1828;
  }
`;

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função para fechar o menu mobile ao clicar em qualquer link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">IzataCore</Logo>
        
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          
          <NavItem
            onMouseEnter={() => handleDropdownToggle('produtos')}
            onMouseLeave={() => handleDropdownToggle('produtos')}
          >
            <NavLink to="/produtos">Produtos</NavLink>
            <AnimatePresence>
              {activeDropdown === 'produtos' && (
                <Dropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownItem to="/produtos/curriculo-ai">Curriculo AI</DropdownItem>
                  <DropdownItem to="/produtos/ebook">Ebook</DropdownItem>
                </Dropdown>
              )}
            </AnimatePresence>
          </NavItem>
          
          <NavItem
            onMouseEnter={() => handleDropdownToggle('ferramentas')}
            onMouseLeave={() => handleDropdownToggle('ferramentas')}
          >
            <NavLink to="/ferramentas">Ferramentas</NavLink>
            <AnimatePresence>
              {activeDropdown === 'ferramentas' && (
                <Dropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownItem to="/smartasset">SmartAsset</DropdownItem>
                </Dropdown>
              )}
            </AnimatePresence>
          </NavItem>
          
          <NavItem>
            <NavLink to="/empresa">Empresa</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/contato">Contato</NavLink>
          </NavItem>
          
          <NavItem>
            <CTAButton to="/contato">Começar Agora</CTAButton>
          </NavItem>
        </NavList>

        <MobileMenuButton onClick={handleMobileMenuToggle}>
          ☰
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavList>
              <MobileNavItem>
                <MobileNavLink to="/" onClick={handleMobileLinkClick}>Home</MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink to="/produtos" onClick={handleMobileLinkClick}>Produtos</MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink to="/ferramentas" onClick={handleMobileLinkClick}>Ferramentas</MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink to="/empresa" onClick={handleMobileLinkClick}>Empresa</MobileNavLink>
              </MobileNavItem>
              <MobileNavItem>
                <MobileNavLink to="/contato" onClick={handleMobileLinkClick}>Contato</MobileNavLink>
              </MobileNavItem>
            </MobileNavList>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
