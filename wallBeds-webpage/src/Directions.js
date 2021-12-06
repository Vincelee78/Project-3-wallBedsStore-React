import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import * as Location from "./data/location.json";



export default function DirectionsPage() {

    const [location, setlocation] = useState(null);


    return (
        <React.Fragment>
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