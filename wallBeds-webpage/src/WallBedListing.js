import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import WallBedContext from './WallBedContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";






export default function WallBedListing() {

  const url = "https://6000-azure-whitefish-4d0hnk4z.ws-us17.gitpod.io/api/"

  const [data, setData] = useState([]);
  const [result, setResult] = useState("");
  let context = useContext(WallBedContext);

  useEffect(() => {
    const getWall = async () => {
      let data = await context.getWallBed();
      setData(data)
    }
    getWall()
  }, [])
  console.log(context)

  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    const search = await axios.post(url + "allproducts", {
      username: data.username,
      email:data.email,
      password:data.password
  });
  setResult(search)
}

  return (<React.Fragment >

    <div class="row">

      <div class="col-sm-2">
        <b>
          <p class='ps-3' style={{ "font-size": "20px;" }}>Search Wall Beds</p>
        </b>

        <form class="px-2" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="_csrf" value="{{csrfToken}}" />
          <h3 class="m-1 mt-3 pl-3 font-serif font-bold">Advanced Filter: </h3>
          <div class="m-1 pl-3 pr-2 flex">
            <button type="submit" class="text-white btn btn-success btn-sm px-2 rounded-3 me-2">Filter
              Wall Beds</button>
            <a href="/" class="btn btn-primary btn-sm px-2 ml-2 rounded-3">Reset</a>
          </div>
          <div class="m-1 pl-3 pr-2 font-light text-sm">Enter filter and click
            <b> Filter Wall Beds </b>
            to filter. Click
            <b> Reset </b>
            to reset filters.
          </div>

          <input {...register("name")} placeholder="Name" name='name' />
          <br />
          <input {...register("mincost")} placeholder="Minimum Cost" name='mincost' />
          <br />
          <input {...register("maxcost")} placeholder="Maximum Cost" name='maxcost' />
          <br />
          <input {...register("maxcost")} placeholder="Maximum Cost" name='maxcost' />
          <br />
          <input {...register("bedsizes")} placeholder="Maximum Cost" name='bedsizes' />
          <br />
          <input {...register("maxcost")} placeholder="Maximum Cost" name='maxcost' />
          <br />
          <input {...register("maxcost")} placeholder="Maximum Cost" name='maxcost' />
          <br />
          <input {...register("maxcost")} placeholder="Maximum Cost" name='maxcost' />
          <br />

          <input type="submit" class="btn btn-primary btn-sm my-3" value="Search" />
        </form>

      </div>
      <div class="col-sm-10">
        <h3 class="ps-4" style={{ 'font-family': 'Stencil Std' }}>Wall Beds</h3>
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
      </div>
    </div>



  </React.Fragment>);
}