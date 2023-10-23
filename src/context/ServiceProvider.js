import React from 'react';
import ServiceContext from './ServiceContext';

const ServiceProvider = ({children}) => {
	const serviceData = {
		 serviceHeading: 'Services',
		 serviceSubheading: 'Buy, Sell And Exchange Cryptocurrency',
		 lists: [
             {
             	listIcon: '/img/icon-7.png',
             	listTitle: 'Currency Wallet',
             	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
             	listLink: '#'
             },
             {
             	listIcon: '/img/icon-3.png',
             	listTitle: 'Currency Transaction',
             	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
             	listLink: '#'
             },
             {
             	listIcon: '/img/icon-9.png',
             	listTitle: 'Bitcoin Investment',
             	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
             	listLink: '#'
             },
             {
             	listIcon: '/img/icon-5.png',
             	listTitle: 'Currency Exchange',
             	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo#',
             	listLink: '#'
             },
             {
             	listIcon: '/img/icon-2.png',
             	listTitle: 'Bitcoin Escrow',
             	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
             	listLink: '#'
             },
             {
             	listIcon: '/img/icon-8.png',
             	listTitle: 'Token Sale',
             	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
             	listLink: '#'
             }
		 ]
	}
   return(
       <>
         <ServiceContext.Provider value={serviceData}>
          {children}
         </ServiceContext.Provider>
       </>
   );
}
export default ServiceProvider;