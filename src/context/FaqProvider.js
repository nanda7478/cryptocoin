import React from 'react';
import FaqContext from './FaqContext';

const FaqProvider = ({children}) => {
	const faqsData = {
		faqsHeading: 'FAQs',
		faqsSubheading: 'Frequently Asked Questions',
		faqs: [
            {
            	faqTitle: 'How to build a website?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            },
            {
            	faqTitle: 'How long will it take to get a new website?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            },
            {
            	faqTitle: 'Do you only create HTML websites?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            },
            {
            	faqTitle: 'Will my website be mobile-friendly?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            },
            {
            	faqTitle: 'Will you maintain my site for me?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            },
            {
            	faqTitle: 'I am on a strict budget. Do you have any low cost options?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            },
            {
            	faqTitle: 'Will you maintain my site for me?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            },
            {
            	faqTitle: 'I am on a strict budget. Do you have any low cost options?',
            	faqContent: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
            }
		]
	}
   return(
       <>
         <FaqContext.Provider value={faqsData}>
         {children}
         </FaqContext.Provider>
       </>
   	);
}
export default FaqProvider;