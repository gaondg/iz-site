import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO/SEO';
import CompanyHero from '../../components/Company/CompanyHero';
import CompanyVision from '../../components/Company/CompanyVision';
import CompanyHistory from '../../components/Company/CompanyHistory';
import CompanyTeam from '../../components/Company/CompanyTeam';

const CompanyContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const Company: React.FC = () => {
  return (
    <CompanyContainer>
      <SEO page="company" />
      <CompanyHero />
      <CompanyVision />
      <CompanyHistory />
      <CompanyTeam />
    </CompanyContainer>
  );
};

export default Company;
