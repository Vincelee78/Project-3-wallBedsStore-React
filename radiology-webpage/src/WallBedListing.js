import React, { useContext, useEffect, useState } from "react";
import WallBedContext from './WallBedContext'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function WallBedListing() {
    const [data, setData] = useState([]);
    const context = useContext(WallBedContext);

    useEffect(()=>{
        context.getWallBed().then(setData)
    }, [])
    
    
    return <React.Fragment>
        
    {data.map(b => (
        <div class ="card" style={{"width": "18rem"}} key={b._id}>
        <img src={b.image_url} class ="card-img-top" alt="image_url"/>
        <div class ="card-body">
        <p class ="card-text">{b.name}</p>
        </div>
        </div>
    ))}
        

  </React.Fragment>;
}