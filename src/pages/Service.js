import React from 'react';
import PageHeader from './headersection/PageHeader';
import ServiceProvider from '../context/ServiceProvider';
import ServiceSection from './sections/ServiceSection';

const Service = () => {
   return(
      <>
      <PageHeader title="Services" image="/img/hero-2.png" />
      <ServiceProvider>
      <ServiceSection />
      </ServiceProvider>
      </>
   );
}
export default Service;