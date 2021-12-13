import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import WallBedContext from './WallBedContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../api/url";



export default function WallBedListing() {

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [minCost, setminCost] = useState('');
  const [maxCost, setmaxCost] = useState('');
  const [bedSize, setBedSize] = useState('1');
  const [bedOrientation, setBedOrientation] = useState('1');
  const [mattressType, setMattressType] = useState('1');
  const [frameColour, setFrameColour] = useState('1');
  const [woodColour, setwoodColour] = useState(['1']);
  let context = useContext(WallBedContext);

  useEffect(() => {
    const getWall = async () => {
      let data = await context.getWallBed();
      setData(data)
    }
    getWall()
  }, [])
  

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const search = await axios.get(baseUrl + "search", {
      params: {
        name: data.name,
        minCost: data.minCost,
        maxCost: data.maxCost,
        bedSize: parseInt(data.bedSize),
        bedOrientation: parseInt(data.bedOrientation),
        mattressType: parseInt(data.mattressType),
        frameColour: parseInt(data.frameColour),
        woodColour: parseInt(data.woodColour.map(a => (a))),
      }

    });
    
    setData(search.data);
  }


  const handleSelect = function (selectedItems) {
    const woodColour = [];
    for (let i = 0; i < selectedItems.length; i++) {
      woodColour.push(selectedItems[i].value);
    }
    setwoodColour(woodColour);
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
            <a href="/shop_All_Beds" class="btn btn-primary btn-sm px-2 ml-2 rounded-3">Reset</a>
          </div>
          <div class="m-1 pl-3 pr-2 font-light text-sm">Enter filter and click
            <b> Filter Wall Beds </b>
            to filter. Click
            <b> Reset </b>
            to reset filters.
          </div>

          <input {...register("name")} placeholder="Name" name="name" value={name} onChange={(evt) => setName(evt.target.value)} />
          <br />
          <input {...register("minCost")} placeholder="Minimum Cost" name='minCost' value={minCost} onChange={(evt) => setminCost(evt.target.value)} />
          <br />
          <input {...register("maxCost")} placeholder="Maximum Cost" name='maxCost' value={maxCost} onChange={(evt) => setmaxCost(evt.target.value)} />

          <div class='my-1'> Bed Sizes:
            <select {...register("bedSize")} value={bedSize} name='bedSize' onChange={(evt) => setBedSize(evt.target.value)}>
              <option value="1" >Single Bed</option>
              <option value="2">Double Bed</option>
            </select>
          </div>

          <div class='my-1'> Bed Orientation:
            <select {...register("bedOrientation")} value={bedOrientation} name='bedOrientation' onChange={(evt) => setBedOrientation(evt.target.value)}>
              <option value="1">Vertical</option>
              <option value="2">Horizontal</option>
            </select>
          </div>

          <div class='my-1'> Mattress Type:
            <select {...register("mattressType")} value={mattressType} onChange={(evt) => setMattressType(evt.target.value)}>
              <option value="1">Spring</option>
              <option value="2">Foam</option>
            </select>
          </div>

          <div class='my-1'> Bed Frame Colour:
            <select {...register("frameColour")} value={frameColour} onChange={(evt) => setFrameColour(evt.target.value)}>
              <option value="1">Wood</option>
              <option value="2">Aluminium</option>
            </select>
          </div>

          <div class='my-1'> Wood Panel Colours:
            <select {...register("woodColour")} multiple={true} value={woodColour} onChange={(e) => { handleSelect(e.target.selectedOptions) }}>
              <option value="1">White</option>
              <option value="2">Walnut</option>
            </select>
          </div>

          <input type="submit" class="btn btn-primary btn-sm my-3" value="Search" />
        </form>

      </div>
      <div class="col-sm-10 ">
        <h3 class="ps-4" style={{ 'font-family': 'Stencil Std' }}>Wall Beds</h3>
        <img className='w-100 wallBedImgCatalogue' src="https://www.mspgreenville.com/wp-content/uploads/2018/07/F61A4157-1500x630.jpg" style={{ "height": "450px" }} alt='defaultImage'/>

        <div className=" wallBedCard d-flex justify-content-evenly flex-wrap mt-5 align-content-around ">
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