import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WallBedContext from "./WallBedContext";
import { baseUrl } from '../api/url';



export default function WallBedsProvider(props) {

  const context = {
    getWallBed: async () => {

      const results = await axios.get(baseUrl + "allproducts")
      return results.data;
    },

    getProductByID: async (wantedProductID) => {
      try {
        const response = await axios.get(`${baseUrl}allproducts/${wantedProductID}`)
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
