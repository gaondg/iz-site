import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO/SEO';
import ToolHero from '../../components/Tools/ToolHero';
import ToolDetails from '../../components/Tools/ToolDetails';
import ToolFeatures from '../../components/Tools/ToolFeatures';
import ToolBenefits from '../../components/Tools/ToolBenefits';

const SmartAssetContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const SmartAsset: React.FC = () => {
  return (
    <SmartAssetContainer>
      <SEO page="tools" />
      <ToolHero />
      <ToolDetails />
      <ToolFeatures />
      <ToolBenefits />
    </SmartAssetContainer>
  );
};

export default SmartAsset;
