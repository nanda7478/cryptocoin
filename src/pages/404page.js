import React from 'react';
import PageHeader from './headersection/PageHeader';

const NotFoundPage = () => {
   return(
      <>
      <PageHeader title="404 Error" image="/img/hero-2.png" />

    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to
                        our home page or try to use a search?</p>
                    <a className="btn btn-primary py-3 px-4" href="">Go Back To Home</a>
                </div>
            </div>
        </div>
    </div>

      </>
   );
}
export default NotFoundPage;