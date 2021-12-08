import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WallBedContext from "./WallBedContext";



export default function WallBedsProvider(props) {
  

  // Base url
  const url = "https://wallbeds-project3.herokuapp.com/api/"

  const context = {
    getWallBed: async () => {

      const results = await axios.get(url + "allproducts")  
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
    },

  }

  return (

    <WallBedContext.Provider value={context}>
      {props.children}
    </WallBedContext.Provider>
  );
}
