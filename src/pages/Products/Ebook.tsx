import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';
import EbookHero from '../../components/Products/Ebook';
import EbookDetails from '../../components/Products/EbookDetails';
import EbookDashboard from '../../components/Products/EbookDashboard';
import EbookFeatures from '../../components/Products/EbookFeatures';

const CurriculoAIContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const CurriculoAI: React.FC = () => {
  return (
    <CurriculoAIContainer>
      <SEO page="products" />
      <EbookHero />
      <EbookDetails />
      <EbookDashboard />
      <EbookFeatures />
    </CurriculoAIContainer>
  );
};

export default CurriculoAI;
