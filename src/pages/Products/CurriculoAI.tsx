import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';
import ProductHero from '../../components/Products/ProductHero';
import ProductDetails from '../../components/Products/ProductDetails';
import CurriculoAIFeatures from '../../components/Products/CurriculoAIFeatures';
import CurriculoAIDashboard from '../../components/Products/CurriculoAIDashboard';
import CurriculoAIHero from '../../components/Products/CurriculoAI';
import CurriculoAIDetails from '../../components/Products/CurriculoAIDetails';

const CurriculoAIContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const CurriculoAI: React.FC = () => {
  return (
    <CurriculoAIContainer>
      <SEO page="products" />
      <CurriculoAIHero />
      <CurriculoAIDetails />
      <CurriculoAIDashboard />
      <CurriculoAIFeatures />
    </CurriculoAIContainer>
  );
};

export default CurriculoAI;
