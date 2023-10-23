import React from 'react';
import CounterContext from './CounterContext';

const ConterProvider = ({children}) => {
	const counterData = [
         {
         	counterImage: '/img/icon-9.png',
         	counterNumber: '123456',
         	counterText: 'Today Transactions'
         },
         {
         	counterImage: '/img/icon-10.png',
         	counterNumber: '123456',
         	counterText: 'Monthly Transactions'
         },
         {
         	counterImage: '/img/icon-2.png',
         	counterNumber: '123456',
         	counterText: 'Total Transactions'
         }
	 ];
   return(
       <>
         <CounterContext.Provider value={counterData}>
         {children}
         </CounterContext.Provider>
       </>
    );
}
export default ConterProvider;