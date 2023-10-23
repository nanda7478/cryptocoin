import React, { useContext } from 'react';
import CounterContext from '../../context/CounterContext';

const CounterSection = () => {
	const counterData = useContext(CounterContext);
     return(
         <>
	       <div className="container-xxl bg-light py-5 my-5">
	        <div className="container py-5">
	            <div className="row g-5">
                  {counterData.map((data, index) => (
	                <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s" key={index}>
	                    <img className="img-fluid mb-4" src={data.counterImage} alt=""/>
	                    <h1 className="display-4" data-toggle="counter-up">{data.counterNumber}</h1>
	                    <p className="fs-5 text-primary mb-0">{data.counterText}</p>
	                </div>
                   ))}              

	            </div>
	        </div>
	    </div>
         </>
     );
}
export default CounterSection;