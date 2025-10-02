import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO/SEO';
import ToolHero from '../../components/Tools/ToolHero';
import ToolDetails from '../../components/Tools/ToolDetails';
import ToolFeatures from '../../components/Tools/ToolFeatures';
import ToolBenefits from '../../components/Tools/ToolBenefits';

const ToolsContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const Tools: React.FC = () => {
  return (
    <ToolsContainer>
      <SEO page="tools" />
      <ToolHero />
      <ToolDetails />
      <ToolFeatures />
      <ToolBenefits />
    </ToolsContainer>
  );
};

export default Tools;
