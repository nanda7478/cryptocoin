import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AboutContext from '../../context/AboutContext';

const AboutSection = () => {
	const aboutData = useContext(AboutContext);
   return(
       <>
         <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src={aboutData.AboutImage} alt=""/>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <h1 className="display-6">{aboutData.aboutTitle}</h1>
                        <p className="text-primary fs-5 mb-4">{aboutData.aboutSubtitle}</p>
                        <p>{aboutData.aboutContentOne}</p>
                        <p className="mb-4">{aboutData.aboutContentTwo}</p>
                        {aboutData.lists.map((list, index) => (
                        <div className="d-flex align-items-center mb-2">
                            <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                            <span>{list.listtitle}</span>
                        </div>
                        ))}
                        <Link className="btn btn-primary py-3 px-4" to={aboutData.aboutPageUrl}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
       </>
   );
}
export default AboutSection;