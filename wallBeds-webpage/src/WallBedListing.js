import React, { useContext, useEffect, useState } from "react";
import WallBedContext from './WallBedContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";




export default function WallBedListing() {
  const [data, setData] = useState([]);
  let context = useContext(WallBedContext);

  useEffect(() => {
    const getWall = async () => {
      let data = await context.getWallBed();
      setData(data)
    }
    getWall()
  }, [])
  console.log(context)
  return (<React.Fragment >
    <h3 style={{ 'font-family': '"Cormorant Garamond",serif' }}>Wall Beds</h3>
    <img className='w-100' src="https://www.mspgreenville.com/wp-content/uploads/2018/07/F61A4157-1500x630.jpg" style={{ "height": "450px" }} />
  
    <div className=" wallBedCard d-flex justify-content-evenly mt-5">
      {data.map((b) => {

        return <div class="card " key={b._id}>
          <img src={b.image_url} class="card-img-top p-3 " style={{ "width": "400px", "height": "400px" }} alt="image_url" />
          <div class="card-body d-flex justify-content-center">
            <Link to={"/product/" + b.id} class='card-text border p-2' style={{
              "font-family": "Lato,sans-serif", "text-decoration": "none", 'color': 'black', 'text-transform': 'uppercase',
              'letter-spacing': '2px', 'text-align': 'center', 
            }}>{b.name}</Link>
          </div>
        </div>


      }
      )}
    </div>



  </React.Fragment>);
}