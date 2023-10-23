import React from 'react';
import PageHeader from './headersection/PageHeader';
import TokenProvider from '../context/TokenProvider';
import TokenSection from './sections/TokenSection';

const Token = () => {
   return(
      <>
      <PageHeader title="Token Sale" image="/img/hero-2.png" />
       <TokenProvider>
     <TokenSection />
    </TokenProvider>
      </>
   );
}
export default Token;