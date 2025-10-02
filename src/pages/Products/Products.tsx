import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';
import ProductHero from '../../components/Products/ProductHero';
import ProductDetails from '../../components/Products/ProductDetails';
import ProductFeatures from '../../components/Products/ProductFeatures';
import DashboardService from '../../components/Products/DashboardService';

const ProductsContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <SEO page="products" />
      <ProductHero />
      <ProductDetails />
      <DashboardService />
      <ProductFeatures />
    </ProductsContainer>
  );
};

export default Products;
