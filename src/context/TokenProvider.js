import React from 'react';
import TokenContext from './TokenContext';

const TokenProvider = ({children}) => {
    return(
       <>
         <TokenContext.Provider>
          {children}
         </TokenContext.Provider>
       </>
    );
}
export default TokenProvider;