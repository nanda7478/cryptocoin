import React from 'react';
import PageHeader from './headersection/PageHeader';
import FaqProvider from '../context/FaqProvider';
import FaqSection from './sections/FaqSection';

const Faqs = () => { 
   return(
       <>
       <PageHeader title="FAQs" image="/img/hero-2.png" />
       <FaqProvider>
        <FaqSection />
       </FaqProvider>
       </>
   );
}
export default Faqs;