import React, {useContext} from 'react';
import FaqContext from '../../context/FaqContext';

const FaqSection = () => {
    const faqsData = useContext(FaqContext);
   return(
       <>
         <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <h1 className="display-6">{faqsData.faqsHeading}</h1>
                <p className="text-primary fs-5 mb-5">{faqsData.faqsSubheading}</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="accordion" id="accordionExample">
                       {faqsData.faqs.map((faq, index) => (
                        <div className={`accordion-item wow fadeInUp ${index === 0 ? 'show' : ''}`} data-wow-delay="0.1s">
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`collapse${index}`}>
                                    {faq.faqTitle}
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {faq.faqContent}
                                </div>
                            </div>
                        </div>
                       ))}

                    </div>
                </div>
            </div>
        </div>
    </div>
       </>
   	);
}
export default FaqSection;