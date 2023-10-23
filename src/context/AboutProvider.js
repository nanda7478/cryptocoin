import React from 'react';
import AboutContext from './AboutContext';

const AboutProvider = ({children}) => {
	const aboutData = {
		aboutTitle: 'About Us',
		aboutSubtitle: 'The Most Trusted Cryptocurrency Platform',
		aboutContentOne:'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
		aboutContentTwo: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.',
		lists:[
           {
           	listtitle:'Tempor erat elitr rebum at clita'
           },
           {
           	listtitle:'Tempor erat elitr rebum at clita'
           },
           {
           	listtitle:'Tempor erat elitr rebum at clita'
           }
		],
		aboutPageUrl: '/about',
		AboutImage: '/img/about.png' 
	}
   return(
       <>
         <AboutContext.Provider value={aboutData}>
          {children}
         </AboutContext.Provider>
       </>
   );
}
export default AboutProvider;