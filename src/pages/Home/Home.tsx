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
      
      {/* 🛑 AQUI ESTÁ A MUDANÇA: Cada componente deve ter seu próprio Suspense
           para que a falha de carregamento de um (se houver) não afete os outros.
           A ORDEM de carregamento ainda será sequencial.
      */}
      
      {/* Para ganhos reais, você deve carregar estes módulos apenas no scroll,
          mas se o objetivo é apenas garantir o Code Splitting, deixe assim: */}
          
      <Suspense fallback={null}>
          <About />
      </Suspense>
      <Suspense fallback={null}>
          <Services />
      </Suspense>
      <Suspense fallback={null}>
          <Products />
      </Suspense>
      <Suspense fallback={null}>
          <Testimonials />
      </Suspense>
      <Suspense fallback={null}>
          <CTA />
      </Suspense>
    </HomeContainer>
  );
};

export default Home;
