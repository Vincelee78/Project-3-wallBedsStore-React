import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'animate.css';
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
    state = {
        data: [],
    }

    render() {
        return (<React.Fragment>

            <div className='carouselTitle bg-dark rounded-3 w-100'>
                <Carousel fade>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '650px', 'filter': 'brightness(110%)', 'opacity': '0.8' }}
                            src="https://www.smartbeds.it/images/smartbeds-slide-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px', 'filter': 'brightness(120%)' }}>
                            <h3 className="animated fadeInLeft">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds" className="butn">SHOP ALL BEDS</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '650px', 'filter': 'brightness(110%)', 'opacity': '0.8' }}
                            src="https://www.smartbeds.it/images/smartbeds-slide-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px', 'filter': 'brightness(120%)' }}>
                            <h3 className="animated fadeInRight ">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds" className="butn ">SHOP ALL BEDS</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '650px', 'filter': 'brightness(110%)', 'opacity': '0.8' }}
                            src="https://www.smartbeds.it/images/smartbeds-slide-4.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px', 'filter': 'brightness(120%)' }}>
                            <h3 className="animated fadeInLeft">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds" className="butn">SHOP ALL BEDS</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <footer class="text-center text-lg-start bg-light text-muted">
                {/* <!-- Section: Social media --> */}
                <section
                    class="d-flex justify-content-center justify-content-lg-between px-5 p-3 border-bottom"
                >
                    {/* <!-- Left --> */}
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="https://www.facebook.com/" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.google.com/" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="https://www.instagram.com/" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                <section class="">
                    <div class="container text-center text-md-start mb-1 d-flex justify-content-between">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto ">
                                {/* <!-- Content --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-bed me-3"></i>Space-Saving Furniture Systems Pte Ltd
                                </h6>
                                <p>
                                    Refund is allowed if the furniture arrives in a damaged condition. The consumer has 3 days to file a claim after they receive the bed and provide photo evidence to our email.
                                    Use of and orders placed through this website are strictly subject to Space-Saving Furniture Systems Pte Ltd's terms and conditions.
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Quick links
                                </h6>
                                <p>
                                    <a href="/shop_All_Beds" class="text-reset">All Beds</a>
                                </p>

                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Gem Mall, 123 Mountbatten Rd, Singapore 542637</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@spacesavingsystems.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 65 234 567 88</p>
                                <p><i class="fas fa-print me-3"></i> + 65 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* <!-- Copyright --> */}
                <div class="text-center p-2" style={{ "background-color": "rgba(0, 0, 0, 0.1)" }}>
                    © 2021 Copyright: All rights reserved
                    <a class="text-reset fw-bold" href="#"></a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </React.Fragment>)
    }
}