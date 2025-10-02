import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO/SEO';
import ContactHero from '../../components/Contact/ContactHero';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';

const ContactContainer = styled.div`
  margin-top: 70px; /* Account for fixed header */
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <SEO page="contact" />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </ContactContainer>
  );
};

export default Contact;
