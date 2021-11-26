import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WallBedContext from "./WallBedContext";
import WallBedListing from "./WallBedListing";
// import { useHistory } from "react-router-dom";
// import WallBedDetails from './WallBedDetails';



export default function WallBedsProvider(props) {
  

  // Base url
  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us17.gitpod.io/api/"

  const context = {
    getWallBed: async () => {

      const results = await axios.get(url + "allproducts")  
        // console.log(response.data)
        // setProducts(response.data);
      
      
      return results.data;
    },

    getProductByID: async (wantedProductID) => {
      try {
        const response = await axios.get(`${url}allproducts/${wantedProductID}`)
        const product = response.data;
        return product;
      } catch (e) {
        console.log(e.message)
      }
    }
  }


  // const context = {
  //   getWallBed: async () => {
  //     try {
  //       let response = await axios.get(this.url + "allproducts")
  //       console.log(response.data);
  //       return response.data
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   },
  // }
  return (
    <div className="wallBedListings d-flex justify-content-evenly">
    <WallBedContext.Provider value={context}>
      {props.children}
    </WallBedContext.Provider>
     </div>
  );
}
