import React from 'react';
import FeatureContext from './FeatureContext';

const FeatureProvider = ({children}) => {
	const featureData = {
		featureHeading: 'Why Us!',
		featureSubheading: 'The Best In The crypto Industry',
		lists: [
		  {
		  	listIcon: '/img/icon-7.png',
		  	listTitle: 'Easy To Start',
		  	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo'
		  },
		  {
		  	listIcon: '/img/icon-6.png',
		  	listTitle: 'Safe & Secure',
		  	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo'
		  },
		  {
		  	listIcon: '/img/icon-5.png',
		  	listTitle: 'Affordable Plans',
		  	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo'
		  },
		  {
		  	listIcon: '/img/icon-4.png',
		  	listTitle: 'Secure Storage',
		  	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo'
		  },
		  {
		  	listIcon: '/img/icon-3.png',
		  	listTitle: 'Protected By Insurance',
		  	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo'
		  },
		  {
		  	listIcon: '/img/icon-8.png',
		  	listTitle: '24/7 Support',
		  	listContent: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo'
		  }
		]
	}
   return(
       <>
         <FeatureContext.Provider value={featureData}>
          {children}
         </FeatureContext.Provider>
       </>
   	);
}
export default FeatureProvider;