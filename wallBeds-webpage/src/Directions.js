import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import * as Location from "./data/location.json";



export default function DirectionsPage() {

    const [location, setlocation] = useState(null);


    return (
        <React.Fragment>
            <h5 class='mb-2 mx-5 mt-2'> If you would like to head down to our showroom, you can find us at the Gem Mall, 123 Mountbatten Rd, Singapore 542637 (Please find 
                the location by clicking on the blue marker on the map). <br/><br/>The nearest MRT station to us is Mountbatten MRT station (The other blue marker on the map). </h5>
            <MapContainer center={[1.29, 103.85]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {Location.features.map(location => (
                    <Marker
                        key={location.properties.PARK_ID}
                        position={[
                            location.geometry.coordinates[1],
                            location.geometry.coordinates[0]
                        ]}

                        onClick={() => {
                            setlocation(location);
                        }}>
                        <Popup
                            position={[
                                location.geometry.coordinates[1],
                                location.geometry.coordinates[0]
                            ]}
                            onClose={() => {
                                setlocation(true);
                            }}
                        >
                            <div>
                                <h5>{location.properties.NAME}</h5>
                                <p>{location.properties.DESCRIPTION}</p>
                            </div>
                        </Popup>

                    </Marker>

                ))}




            </MapContainer>

        </React.Fragment>
    )


}