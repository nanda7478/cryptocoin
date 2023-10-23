import React from 'react';
import PageHeader from './headersection/PageHeader';
import AboutProvider from '../context/AboutProvider';
import AboutSection from './sections/AboutSection';

const About = () => {
  return(
     <>
     <PageHeader title="About Us" image="/img/hero-2.png" />
     <AboutProvider>
      <AboutSection />
     </AboutProvider>
     </>
  );
}
export default About;