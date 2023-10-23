import React, {useContext} from 'react';
import FeatureContext from '../../context/FeatureContext';

const FeatureSection = () => {
	const featureData = useContext(FeatureContext);
   return(
       <>
       <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <h1 className="display-6">{featureData.featureHeading}</h1>
                <p className="text-primary fs-5 mb-5">{featureData.featureSubheading}</p>
            </div>
            <div className="row g-5">
                {featureData.lists.map((list, index) => (
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-start">
                        <img className="img-fluid flex-shrink-0" src={list.listIcon} alt=""/>
                        <div className="ps-4">
                            <h5 className="mb-3">{list.listTitle}</h5>
                            <span>{list.listContent}</span>
                        </div>
                    </div>
                </div>
              ))}          


            </div>
        </div>
    </div>
       </>
   );
}
export default FeatureSection;