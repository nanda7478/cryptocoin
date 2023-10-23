import React from 'react';
import PageHeader from './headersection/PageHeader';
import FeatureProvider from '../context/FeatureProvider';
import FeatureSection from './sections/FeatureSection';

const Feature = () => {
   return(
      <>
      <PageHeader title="Feature" image="/img/hero-2.png" />
      <FeatureProvider>
       <FeatureSection />
      </FeatureProvider>
      </>
   );
}
export default Feature;