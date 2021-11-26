import React, { useContext, useEffect, useState } from "react";
import WallBedContext from './WallBedContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";




export default function WallBedListing() {
  const [data, setData] = useState([]);
  let context = useContext(WallBedContext);

  useEffect(() => {
    const getWall=async() =>{
      let data = await context.getWallBed();
      setData(data)
    }
    getWall()
  }, [])
  console.log(context)
  return (<React.Fragment>

    {data.map((b) => {
      
      return <div class="card " key={b._id}>
        <img src={b.image_url} class="card-img-top p-3 " style={{ "width": "400px", "height": "400px" }} alt="image_url" />
        <div class="card-body d-flex justify-content-center">
          <Link to={"/product/" + b.id} class='card-text' style={{ "font-family": "Lato,sans-serif", "text-decoration": "none" }}>{b.name}</Link>
        </div>
      </div>
    }
    )}


  </React.Fragment>);
}