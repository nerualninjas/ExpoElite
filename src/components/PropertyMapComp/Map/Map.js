"use client"
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import "./mapStyle.css"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup,useMap  } from 'react-leaflet';
import {Icon} from "leaflet"
const Map = () => {


  const markers = [
    {
      geocode:[23.774609,90.4219455],
      popUp: "New Propertry"
    },
    {
      geocode:[23.704083,90.3654296],
      popUp: "New Propertry 2"
    },
    {
      geocode:[23.7613228,90.3894193],
      popUp: <> New Propertry 3 Details
      <img scr="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=" />
      </>
    },
    {
      geocode:[23.7824917,90.3704936],
      popUp: "New Propertry 4"
    },
  ]

  const customImg = new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38,38],
  })

  const position = [23.774609,90.4219455]; 
  // https://www.google.com/maps/@23.774609,90.4219455,15z?entry=ttu
    return (
       
        <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {markers.map(marker =>(
      <Marker position={marker.geocode} icon={customImg}>

      <Popup>
        {marker.popUp}
        <img src="https://media.istockphoto.com/id/1326353127/photo/estate-agent-showround.jpg" alt="" />
      </Popup>
      </Marker>
    ))}
  
      

  </MapContainer>
        
    );
};

export default Map;



