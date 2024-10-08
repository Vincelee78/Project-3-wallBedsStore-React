import React from "react";
import '../App.css';
import WallBedImage from "../images/murphy-bed-cherry.jpg";

export default function AboutUs() {


    return (
        <React.Fragment>
            <div class="containerAbout d-flex flex-column">
                <div class="mx-4 rounded-3 about">

                    <div className='d-flex justify-content-center flex-column display-5' style={{}}>

                        <div className='text-center mb-3' style={{fontSize: '40px'}} >What is space-saving furniture?</div>
                        <div className='d-flex justify-content-center'>
                            <img class='w-50 ' src={WallBedImage} alt='defaultImag'/>
                        </div>
                    </div>
                    <h5 class=" my-3 " style={{}}>

                        Ever noticed how small and compact our flats are? Built-to-order (BTO) flats are getting more compact with each project.
                        Thus, the need for effective usage of space is in demand. People are finding ways to minimize space usage when in reality,
                        the solution is to maximize what you have. How? Introducing: <b>Space-saving Furniture.</b>
                    </h5>
                    <hr class="my-4" />
                    <div class="footer" style={{}}>
                        <h5>
                            Space-saving furniture is designed to make full use of limited spaces by incorporating multiple furniture into one or adding new and unique functions. They are often associated with minimalistic and hidden furniture.
                            Examples include Wall Beds, also known as Murphy Beds, Multifunctional Tables where it functions as a coffee and a dining table, Extendable Table, Bunk Beds, and many more. This concept allows users to maximize the
                            space they already have without the worry of purchasing separate bulky beds, shelves, or tables and taking up a lot of space.
                            Current and future homeowners should consider switching to space-saving furniture as a cost-effective method and an efficient way to maximize their living space.
                        </h5>
                        <hr class="my-4" />
                        <h4>About Space-Saving Furniture Systems:</h4>
                        <h5 >
                            Space-Saving Furniture Systems was set up in 2021 with a vision to improve people’s homes through space-saving. As new houses come up with decreasing space, we realize
                            the need to offer people space-saving solutions.
                            <br /><br /><h4 className="aboutSection">For more information, please contact info@spacesavingsystems.com.</h4>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}