import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return(
       <>
       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <h2 className="m-0 text-primary"><img className="img-fluid me-2" src="/img/icon-1.png" alt=""
                    style={{width: '45px'}} />CryptoCoin</h2>
        </NavLink>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-4 py-lg-0">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                <NavLink to="/roadmap" className="nav-item nav-link">Roadmap</NavLink>
                <NavLink to="/feature" className="nav-item nav-link">Feature</NavLink>
                <NavLink to="/token" className="nav-item nav-link">Token Sale</NavLink>
                <NavLink to="/faqs" className="nav-item nav-link">FAQs</NavLink>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
            </div>
            <div className="h-100 d-lg-inline-flex align-items-center d-none">
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                        className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                        className="fab fa-twitter"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i
                        className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </nav>

       </>
   );
}
export default Header;