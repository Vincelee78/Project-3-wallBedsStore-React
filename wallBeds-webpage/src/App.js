import React from "react";
import WallBedsProvider from "./WallBedsProvider";
import LandingPage from "./LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from "./RegisterForm";
import WallBedDetails from "./WallBedDetails";
import WallBedListing from "./WallBedListing";
import LoginForm from "./LoginPage";
// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div id="nav">
        <div class="logo pt-2 ps-2">
          <img src='https://dp.image-gmkt.com/SG/GMKT.IMG/front_image/minishop/2014/01/02/a6b99c03-175e-40eb-8edb-104c4e3c488e.s_110-w-fs-st_s.jpg' class="main-logo" />
          <a style={{ 'font-family': 'Stencil Std, fantasy' }}><b>Space-Saving Furniture Systems</b></a>
        </div>

        <ul>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              data-bs-toggle="dropdown">HOME</a>
            <ul class="dropdown-menu">
              <li>
                <Link to="/" class="dropdown-item" href="#">Home Page</Link>
              </li>
              <li><a class="dropdown-item" href="#">Directions</a></li>
              <li><a class="dropdown-item" href="#">Telephone</a></li>
            </ul>
          </li>

          <li><a href="" class="navlink">ABOUT </a></li>
          <li>
            <Link to="/shop_All_Beds" class="navlink">CATALOGUE</Link>
          </li>
          <li><a href="" class="" style={{'text-decoration': 'none'}}>

            {/* <div
              class="d-flex"
            >
              Hi,

            </div>
            <a
              href="/users/logout"
              class=""
            >Logout</a> */}

            <div class="d-flex justify-content-center me-4">Welcome, guest.</div>
            <a
              href="/users/login"
              class="btn btn-success btn-sm me-3"
            >Login</a>
            <a
              href="/register"
              class="btn btn-primary btn-sm me-4"
            >Register</a>


          </a>
          </li>
        </ul>

      </div>
      <Switch>
      <WallBedsProvider>
        {/* Home route */}
        <Route exact path="/">
          <LandingPage />
        </Route>

        {/* All Wall Beds route */}
        <Route exact path="/shop_All_Beds">
          <WallBedListing />
        </Route>

        {/* User Register route */}
        <Route exact path="/register">
          <RegisterForm/>
        </Route>
        
        <Route exact path="/users/login">
          <LoginForm />
        </Route>

        <Route exact path="/product/:productId">
          <WallBedDetails/>
          </Route>
    
        {/* <Route exact path="/details">
          <WallBedDetails/>
          </Route> */}
          
          </WallBedsProvider>
      </Switch>
    </Router>
  );
}

//       <React.Fragment>
//         {/* Logo and Title of website */}
//         <div id="nav">
//           <img src={logo} alt={logo} id="logo" />
//           <a style={{ fontFamily: 'Impact, fantasy', textDecoration: 'none' }} id="pagename" href='App.js'>MedRadiology</a>
//           {/* Navbar bootstrap */}
//           <nav class="navbar navbar-expand-lg navbar-light">
//             <div class="row d-flex flex-row">
//               <button class="navbar-toggler d-flex justify-content-end p-4 ml-auto d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               {/* Navbar pages */}
//               <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav me-auto mb-2 mb-lg-0 main-nav">
//                   <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#" onClick={this.setActiveAbout}>ABOUT</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#" onClick={this.setActiveReports}>REPORTS</a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#" onClick={this.setActiveAllCases}>ALL CASES</a>
//                   </li>

//                   <li class="nav-item">
//                     <a class="nav-link" href="#" onClick={this.setActiveRadiologist}>RADIOLOGIST INFORMATION</a>
//                   </li>
//                 </ul>

//               </div>
//             </div>
//           </nav>

//         </div>
//         <div id="infowords"> Online Resource for radiologists, radiology trainees and students</div>

//         {/* Conditional rendering of components in each page */}
//         {this.state.active === 'Reports' ? <div className='title4'><Report /></div> : null}
//         {this.state.active === 'RadiologistInfo' ? <div className='title5'><RadiologistInfo /></div> : null}
//         {this.state.active === 'About' ? <div className='title6'><About /></div> : null}

//         {/* Collapsible Accordion for Carousel */}
//         <div className="App">
//           <Accordion defaultActiveKey="0">
//             <Accordion.Item eventKey="0">
//               <Accordion.Header></Accordion.Header>
//               <Accordion.Body>

//                 {/* Carousel */}
//                 <div className='carouselTitle'>
//                   <Carousel fade>
//                     <Carousel.Item interval={3000}>
//                       <img
//                         className="d-block w-100"
//                         src="https://www.elsevier.com/__data/assets/image/0012/1022133/Radiology-at-a-Crossroads_Five-converging-trends-reshaping-the-need-for-diagnostic-decision-support.JPG"
//                         alt="First slide"
//                       />
//                       <Carousel.Caption>

//                       </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item interval={3000}>
//                       <img
//                         className="d-block w-100"
//                         src="https://d1hj7uubji8r0c.cloudfront.net/sites/radiology/files/styles/max_width_full/public/images/2020-02/pcir_cover_photos_hi_res_resize.jpg?itok=VHDBxu-X"
//                         alt="Second slide"
//                       />

//                       <Carousel.Caption>

//                       </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item interval={3000}>
//                       <img
//                         className="d-block w-100"
//                         src="https://www.carestream.com/blog/wp-content/uploads/2020/01/future_of_diag_imaging_fb_1_2020_en.jpg"
//                         alt="Third slide"
//                       />

//                       <Carousel.Caption>

//                       </Carousel.Caption>
//                     </Carousel.Item>
//                   </Carousel>
//                 </div>

//               </Accordion.Body>
//             </Accordion.Item>
//           </Accordion>


//           {/* sss design for fixed background image scrolling */}
//           <div className="wrapper">
//             <div className='innerwrapper'>

//               {/* Conditional rendering of components in the Navtabs */}
//               {(this.state.active !== 'AllCasesContent' && this.state.active !== 'Reports' && this.state.active !== 'RadiologistInfo' && this.state.active !== 'About') && <p className="title" id="title1"><FeaturedCaseContents /></p>}
//               <div className='wrapper2'>
//                 {this.state.active === 'AllCasesContent' ? <div className='title3'><AllCasesContent /> </div> : null} {this.state.active === 'errorMessage' ? <div className='title3'> <ErrorMessage /></div> : null}

//               </div>
//             </div>
//             <div className='fixed-bg bg-1'>
//             </div>
//             <div className="fixed-bg bg-2"><span className="title1" > </span></div>

//             <div className="fixed-bg bg-3"><span className="title2" ></span></div>

//           </div>

//         </div>

//       </React.Fragment >

//     );
//   }
// }

