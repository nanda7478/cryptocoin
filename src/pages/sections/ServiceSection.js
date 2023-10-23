import React, { useContext } from 'react';
import ServiceContext from '../../context/ServiceContext';

const ServiceSection = () => {
	const serviceData  = useContext(ServiceContext);
    return(
       <>
         <div className="container-xxl bg-light py-5 my-5">
        <div className="container py-5">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <h1 className="display-6">{serviceData.serviceHeading}</h1>
                <p className="text-primary fs-5 mb-5">{serviceData.serviceSubheadign}</p>
            </div>
            <div className="row g-4">
               {serviceData.lists.map((list, index) => (
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                    <div className="service-item bg-white p-5">
                        <img className="img-fluid mb-4" src={list.listIcon} alt=""/>
                        <h5 className="mb-3">{list.listTitle}</h5>
                        <p>{list.listContent}</p>
                        <a href={list.listLink}>Read More <i className="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                ))}


            </div>
        </div>
    </div>
       </>
    );
}
export default ServiceSection;