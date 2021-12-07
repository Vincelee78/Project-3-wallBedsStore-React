import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'animate.css';
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
    state = {

        data: [

        ],
    }


    render() {
        return (<React.Fragment>

            <div className='carouselTitle bg-dark rounded-3 w-100'>
                <Carousel fade>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '650px', 'filter': 'brightness(110%)', 'opacity': '0.8'}}
                            src="https://www.smartbeds.it/images/smartbeds-slide-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px','filter': 'brightness(120%)' }}>
                            <h3 className="animated fadeInLeft">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds" className="butn">SHOP ALL BEDS</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '650px', 'filter': 'brightness(110%)' , 'opacity': '0.8'}}
                            src="https://www.smartbeds.it/images/smartbeds-slide-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px','filter': 'brightness(120%)' }}>
                            <h3 className="animated fadeInRight ">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds" className="butn ">SHOP ALL BEDS</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '650px','filter': 'brightness(110%)' , 'opacity': '0.8'}}
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

                {/* <!-- Section: Links  --> */}
                <section class="">
                    <div class="container text-center text-md-start mb-1 d-flex justify-content-between">
                        {/* <!-- Grid row --> */}
                        <div class="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto ">
                                {/* <!-- Content --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-bed me-3"></i>Space-Saving Furniture Systems Pte Ltd
                                </h6>
                                <p>
                                Use of and orders placed through this website are strictly subject to Space-Saving Furniture Systems Pte Ltd's terms and conditions. 
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Quick links
                                </h6>
                                <p>
                                    <a href="/shop_All_Beds" class="text-reset">All Beds</a>
                                </p>
    
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
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
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div class="text-center p-2" style={{"background-color": "rgba(0, 0, 0, 0.1)"}}>
                    © 2021 Copyright: All rights reserved
                    <a class="text-reset fw-bold" href="#"></a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}

            {/* <div class="footer-wrapper">
                <div class="footer d-flex justify-content-between">
                    <section class="footer-left">
                        <p class="footer-header">quick links</p>
                        <ul class="footer-list">
                            <li class="footer-link">
                                <a class="footer-link-cta" href="/products">
                                    All Teas</a>
                            </li>
                        </ul>
                    </section>
                    <section class="footer-center">
                        <p class="footer-header">download our app</p>
                        <ul class="footer-list">
                            <li class="footer-link">
                                <a href="https://play.google.com/store" target="_blank" rel="noreferrer" class="footer-link-cta">Google Play Store</a>
                            </li>
                            <li class="footer-link">
                                <a href="https://www.apple.com/sg/app-store/" target="_blank" rel="noreferrer" class="footer-link-cta">Apple App Store</a>
                            </li>
                        </ul>
                    </section>
                    <section class="footer-right">
                        <p class="footer-header">contact</p>
                        <ul class="footer-list">
                            <li class="footer-link">
                                <p class="footer-text">SG: 6888 8888 | 8123 8123</p>
                            </li>
                            <li class="footer-link">
                                <p class="footer-text" style={{"font-size":"0.8em"}}>
                                    © All rights reserved</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div> */}
            {/* <div class="hp-rs revslider-initialised tp-simpleresponsive" id="revslider-206" style={{ 'height': '100%', 'max-height': 'none' }}>
                <ul style={{ 'display': 'block', 'overflow': 'hidden', 'width': '100%', 'height': '100%', 'max-height': 'none' }}>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" style={{ 'width': '100%', 'height': '100%', 'overflow': 'hidden', 'z-index': '18', 'visibility': 'hidden', 'opacity': '0' }} class="active-revslide">

                        <div class="slotholder" style={{ 'width': '100%', 'height': '100%' }} data-duration="undefined" data-zoomstart="undefined" data-zoomend="undefined" data-rotationstart="undefined" data-rotationend="undefined" data-ease="undefined" data-bgpositionend="undefined" data-bgposition="center center" data-kenburns="undefined" data-easeme="undefined" data-bgfit="cover" data-bgfitend="undefined" data-owidth="undefined" data-oheight="undefined"><div class="tp-bgimg defaultimg" data-lazyload="/images/smartbeds-slide-1.jpg" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" data-lazydone="undefined" src="/images/smartbeds-slide-1.jpg" data-src="/images/dummy.png" style={{ 'background-color': 'rgba(0, 0, 0, 0)', 'background-repeat': 'no-repeat', 'background-image': 'url(&quot;/images/smartbeds-slide-1.jpg&quot;)', 'background-size': 'cover', 'background-position': 'center center', 'width': '100%', 'height': '100%', 'opacity': '1', 'visibility': 'inherit' }}></div></div>

                        <div class="tp-caption fade sfl slider-caption start" data-x="right" data-y="center" data-voffset="150" data-hoffset="-100" data-speed="1500" data-start="1500" data-easing="Power1.easeIn" style={{ 'transition': 'opacity 0.15s linear 0s', 'min-height': '0px', 'min-width': '0px', 'line-height': '52px', 'border-width': '0px', 'margin': '0px', 'padding': '0px', 'letter-spacing': '0px', 'font-size': '36px', 'left': '499.188px', 'top': '475.719px', 'visibility': 'visible', 'opacity': '0', 'transform': 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00166, -50, 0, 0, 1)' }}>
                            WALL BEDS
                            <small>Increases your living space</small>
                        </div>
                    </li>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" style={{ 'width': '100%', 'height': '100%', 'overflow': 'hidden', 'z-index': '18', 'visibility': 'hidden', 'opacit': '0' }} class="active-revslide">

                        <div class="slotholder" style={{ 'width': '100%', 'height': '100%' }} data-duration="undefined" data-zoomstart="undefined" data-zoomend="undefined" data-rotationstart="undefined" data-rotationend="undefined" data-ease="undefined" data-bgpositionend="undefined" data-bgposition="center center" data-kenburns="undefined" data-easeme="undefined" data-bgfit="cover" data-bgfitend="undefined" data-owidth="undefined" data-oheight="undefined"><div class="tp-bgimg defaultimg" data-lazyload="/images/smartbeds-slide-2.jpg" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" data-lazydone="undefined" src="/images/smartbeds-slide-2.jpg" data-src="/images/dummy.png" style={{ 'background-color': 'rgba(0, 0, 0, 0)', 'background-repeat': 'no-repeat', 'background-image': 'url(&quot;/images/smartbeds-slide-2.jpg&quot;)', 'background-size': 'cover', 'background-position': 'center center', 'width': '100%', 'height': '100%', 'opacity': '1', 'visibility': 'inherit' }}></div></div>

                        <div class="tp-caption fade sfl slider-caption start" data-x="right" data-y="center" data-voffset="150" data-hoffset="-100" data-speed="1500" data-start="1500" data-easing="Power1.easeIn" style={{ 'transition': 'opacity 0.15s linear 0s', 'min-height': '0px', 'min-width': '0px', 'line-height': '52px', 'border-width': '0px', 'margin': '0px', 'padding': '0px', 'letter-spacing': '0px', 'font-size': '36px', 'left': '499.188px', 'top': '475.719px', 'visibility': 'visible', 'opacity': '0', 'transform': 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00166, -50, 0, 0, 1)' }}>
                            SMART BEDS
                            <small>Increases your living space</small>
                        </div>
                    </li> */}
            {/* <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" style="width: 100%; height: 100%; overflow: hidden; z-index: 18; visibility: hidden; opacity: 0;" class="active-revslide">

                        <div class="slotholder" style={{'width':'100%','height':'100%'}} data-duration="undefined" data-zoomstart="undefined" data-zoomend="undefined" data-rotationstart="undefined" data-rotationend="undefined" data-ease="undefined" data-bgpositionend="undefined" data-bgposition="center center" data-kenburns="undefined" data-easeme="undefined" data-bgfit="cover" data-bgfitend="undefined" data-owidth="undefined" data-oheight="undefined"><div class="tp-bgimg defaultimg" data-lazyload="/images/smartbeds-slide-3.jpg" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" data-lazydone="undefined" src="/images/smartbeds-slide-3.jpg" data-src="/images/dummy.png" style="background-color: rgba(0, 0, 0, 0); background-repeat: no-repeat; background-image: url(&quot;/images/smartbeds-slide-3.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit;"></div></div>

                        <div class="tp-caption fade sfl slider-caption start" data-x="right" data-y="center" data-voffset="150" data-hoffset="-100" data-speed="1500" data-start="1500" data-easing="Power1.easeIn" style="transition: opacity 0.15s linear 0s; min-height: 0px; min-width: 0px; line-height: 52px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-size: 36px; left: 499.188px; top: 475.719px; visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00166, -50, 0, 0, 1);">
                            SMART BEDS
                            <small>Increases your living space</small>
                        </div>
                    </li>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" style="width: 100%; height: 100%; overflow: hidden; z-index: 18; visibility: hidden; opacity: 0;" class="active-revslide">

                        <div class="slotholder" style="width:100%;height:100%;" data-duration="undefined" data-zoomstart="undefined" data-zoomend="undefined" data-rotationstart="undefined" data-rotationend="undefined" data-ease="undefined" data-bgpositionend="undefined" data-bgposition="center center" data-kenburns="undefined" data-easeme="undefined" data-bgfit="cover" data-bgfitend="undefined" data-owidth="undefined" data-oheight="undefined"><div class="tp-bgimg defaultimg" data-lazyload="/images/smartbeds-slide-4.jpg" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" data-lazydone="undefined" src="/images/smartbeds-slide-4.jpg" data-src="/images/dummy.png" style="background-color: rgba(0, 0, 0, 0); background-repeat: no-repeat; background-image: url(&quot;/images/smartbeds-slide-4.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit;"></div></div>

                        <div class="tp-caption fade sfl slider-caption start" data-x="right" data-y="center" data-voffset="150" data-hoffset="-100" data-speed="1500" data-start="1500" data-easing="Power1.easeIn" style="transition: opacity 0.15s linear 0s; min-height: 0px; min-width: 0px; line-height: 52px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-size: 36px; left: 499.188px; top: 475.719px; visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00166, -50, 0, 0, 1);">
                            SMART BEDS
                            <small>Increases your living space</small>
                        </div>
                    </li>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" style="width: 100%; height: 100%; overflow: hidden; visibility: inherit; opacity: 1; z-index: 20;" class="active-revslide current-sr-slide-visible">

                        <div class="slotholder" style="width:100%;height:100%;" data-duration="undefined" data-zoomstart="undefined" data-zoomend="undefined" data-rotationstart="undefined" data-rotationend="undefined" data-ease="undefined" data-bgpositionend="undefined" data-bgposition="center center" data-kenburns="undefined" data-easeme="undefined" data-bgfit="cover" data-bgfitend="undefined" data-owidth="undefined" data-oheight="undefined"><div class="tp-bgimg defaultimg" data-lazyload="/images/smartbeds-slide-5.jpg" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" data-lazydone="undefined" src="/images/smartbeds-slide-5.jpg" data-src="/images/dummy.png" style="background-color: rgba(0, 0, 0, 0); background-repeat: no-repeat; background-image: url(&quot;/images/smartbeds-slide-5.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit;"></div></div>

                        <div class="tp-caption fade sfl slider-caption start" data-x="right" data-y="center" data-voffset="150" data-hoffset="-100" data-speed="1500" data-start="1500" data-easing="Power1.easeIn" style="transition: opacity 0.15s linear 0s; min-height: 0px; min-width: 0px; line-height: 52px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-size: 36px; left: 499.188px; top: 475.719px; visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.0025, 0, 0, 0, 1);">
                            SMART BEDS
                            <small>Increases your living space</small>
                        </div>
                    </li> */}
            {/* </ul> */}
            {/* <div class="tp-loader spinner0" style={{ 'display': 'none' }}>
                    <div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div>
                    <div class="bounce2"></div><div class="bounce3"></div>
                </div>
                <div class="tp-bannertimer" style={{ 'visibility': 'visible', 'width': '54.1222%', 'transform': 'translate3d(0px, 0px, 0px)' }}>
                </div> */}
            {/* </div> */}
        </React.Fragment>)
    }
}