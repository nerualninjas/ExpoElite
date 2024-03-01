"use client"
import React from 'react';
import PropertyCard from "@/components/PropertyMapComp/PropertyCard/PropertyCard";
import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useEffect, useRef, useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import "./mapStyle.css"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup,useMap  } from 'react-leaflet';
import {Icon} from "leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
import markers from './mapData.js'
const Map = () => {

  const { propertyData, isPending, refetch }= usePropertyAllData()
 
  const [markerPosition,setPosition]=useState([0,0])


  const customImg = new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38,38],
  })

  // useEffect(()=>{
  //   console.log(markerPosition);
  // },[markers])

  const position=[23.774609,90.4219455]
  // https://www.google.com/maps/@23.774609,90.4219455,15z?entry=ttu
    return (
<div>
<PropertyCard setPosition={setPosition} />

       {/* //scrollWheelZoom={false} */}
{typeof window !== 'undefined' && (
<MapContainer center={position} zoom={12} > 
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

<MarkerClusterGroup
chunkedLoading
>
    {markers?.map((marker,i) =>(
      <Marker key={i} position={marker?.geocode} icon={customImg}>

      <Popup>
        <>
       <h2 className="text-md font-bold py-1"> {marker?.title}</h2>
        <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={marker.title}
              className="w-full object-cover h-[140px]"
              src={marker.image}
            />
        </>
      </Popup>
      </Marker>
    ))}
    </MarkerClusterGroup>
  
      

  </MapContainer>
  )}
        </div>
    );
};

export default Map;



