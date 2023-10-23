import React from 'react';
import AboutProvider from '../context/AboutProvider';
import AboutSection from './sections/AboutSection';
import CounterProvider from '../context/CounterProvider';
import CounterSection from './sections/CounterSection';
import FeatureProvider from '../context/FeatureProvider';
import FeatureSection from './sections/FeatureSection';
import ServiceProvider from '../context/ServiceProvider';
import ServiceSection from './sections/ServiceSection';
import FaqProvider from '../context/FaqProvider';
import FaqSection from './sections/FaqSection';
import TokenProvider from '../context/TokenProvider';
import TokenSection from './sections/TokenSection';

const Home = () => {
  return(
      <>
        <div className="container-fluid hero-header bg-light py-5 mb-5">
	        <div className="container py-5">
	            <div className="row g-5 align-items-center">
	                <div className="col-lg-6">
	                    <h1 className="display-4 mb-3 animated slideInDown">Make Better Life With Trusted CryptoCoin</h1>
	                    <p className="animated slideInDown">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
	                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
	                        magna dolore erat amet</p>
	                    <a href="" className="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
	                </div>
	                <div className="col-lg-6 animated fadeIn">
	                    <img className="img-fluid animated pulse infinite" style={{animationDuration: '3s'}} src="/img/hero-1.png"
	                        alt="" />
	                </div>
	            </div>
	        </div>
	    </div>
       
     <AboutProvider>
      <AboutSection />
     </AboutProvider>
     
     <CounterProvider>
      <CounterSection />
     </CounterProvider>
    
     <FeatureProvider>
      <FeatureSection />
     </FeatureProvider>
    
    <ServiceProvider>
      <ServiceSection />
    </ServiceProvider>

    
    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <h1 className="display-6">Roadmap</h1>
                <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
            </div>
            <div className="owl-carousel roadmap-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="roadmap-item">
                    <div className="roadmap-point"><span></span></div>
                    <h5>January 2045</h5>
                    <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-point"><span></span></div>
                    <h5>March 2045</h5>
                    <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-point"><span></span></div>
                    <h5>May 2045</h5>
                    <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-point"><span></span></div>
                    <h5>July 2045</h5>
                    <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-point"><span></span></div>
                    <h5>September 2045</h5>
                    <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                </div>
                <div className="roadmap-item">
                    <div className="roadmap-point"><span></span></div>
                    <h5>November 2045</h5>
                    <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                </div>
            </div>
        </div>
    </div>

    <TokenProvider>
     <TokenSection />
    </TokenProvider>

    <FaqProvider>
    <FaqSection/>
    </FaqProvider>


      </>
  );
}
export default Home;