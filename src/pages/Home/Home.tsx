import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Home/Hero';

const About = React.lazy(() => import('../../components/Home/About'));
const Products = React.lazy(() => import('../../components/Home/Products'));
const Services = React.lazy(() => import('../../components/Home/Services'));
const Testimonials = React.lazy(() => import('../../components/Home/Testimonials'));
const CTA = React.lazy(() => import('../../components/Home/CTA'));

const HomeContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SEO page="home" />
      <Hero />
      <Suspense fallback={<div style={{padding: '2rem', textAlign: 'center'}}>Carregando...</div>}>
        <About />
        <Products />
        <Services />
        <Testimonials />
        <CTA />
      </Suspense>
    </HomeContainer>
  );
};

export default Home;
