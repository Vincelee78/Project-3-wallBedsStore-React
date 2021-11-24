import React from 'react';
import './App.css';
import logo from './home-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import WallBedContext from "./WallBedContext";
import WallBedListing from "./WallBedListing";







export default class App extends React.Component {
  state = {

    data: [

    ],

  }

  // Base url
  url = "https://6000-azure-whitefish-4d0hnk4z.ws-us17.gitpod.io/api/"


  // Fetch data once the page loads
  componentDidMount() {
    //this.fetchData();
  }

  
  fetchData = async () => {
    try {
      
      let response = await axios.get(this.url + "allproducts")
      this.setState({
        data: response.data
      })

    } catch (e) {
      this.setState({
        active: 'errorMessage'
      })

    }

  }




  render() {
    const context = {
      getWallBed: async () => {
        try {
          let response = await axios.get(this.url + "allproducts")
          console.log(response.data);
          return response.data
        } catch (e) {
          console.log(e)
        }
      },
    }
    return (
      <div className="App">
        <WallBedContext.Provider value={context}>
        <h1>WallBed Listing</h1>
        <div className="row p-0 m-0 d-flex justify-content-between">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 lg-5 g-xl-3">
          <WallBedListing />
          </div>
          </div>
        </WallBedContext.Provider>
      </div>
    );
  }
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

