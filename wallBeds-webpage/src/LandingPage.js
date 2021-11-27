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

            {/* <div class="home-hero-img">
                <div class="hero-wrapper">
                    <h2 class="hero-text">Welcome to Tea Empire
                    </h2><a class="cta" href="/products"> see all teas</a>
                </div>
            </div> */}

            {/* <div class="bg-light rounded-lg w-100 " style={{
                backgroundImage: `url("https://www.smartbeds.it/images/smartbeds-slide-1.jpg")`,
                "backgroundRepeat": "no-repeat", "backgroundPosition": "center", 'width':'100%', 'height':'600px'
            }}>
                <h2 class="display-6 text-end text-light pe-3">Welcome to Space Saving Furniture</h2>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div> */}

            <div className='carouselTitle bg-dark rounded-3 w-100'>
                <Carousel fade>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '700px' }}
                            src="https://www.smartbeds.it/images/smartbeds-slide-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px' }}>
                            <h3 className="animated fadeInLeft">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds"  className="butn">Shop beds</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '700px' }}
                            src="https://www.smartbeds.it/images/smartbeds-slide-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px' }}>
                            <h3 className="animated fadeInRight">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds" href='' className="butn">Shop beds</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100" style={{ 'height': '700px' }}
                            src="https://www.smartbeds.it/images/smartbeds-slide-4.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='text-end' style={{ 'padding-bottom': '250px' }}>
                            <h3 className="animated fadeInLeft">Space Saving Furniture</h3>
                            <Link to="/shop_All_Beds"  className="butn">Shop beds</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

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