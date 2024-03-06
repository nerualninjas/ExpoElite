"use client"
import React, { useEffect, useState } from 'react';
import PropertyCard from "@/components/PropertyMapComp/PropertyCard/PropertyCard";
// import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import "./mapStyle.css"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
// import markers from './mapData.js'

const Map = () => {
  // const { propertyData, isPending, refetch } = usePropertyAllData();
  const [markerPosition, setPosition] = useState([0, 0]);
console.log(markerPosition);
  const markers = [
    {
      geocode:[23.774609,90.4219455],
      title: "New Propertry",
      image: "https://expo-elite-dev.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRh87QrJ%2F050-584x438.jpg&w=640&q=75"
      
    },
    {
      geocode:[23.704083,90.3654296],
      title: "New Propertry 2",
      image: "https://expo-elite-dev.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FsgjwpCs3%2Fht5.jpg&w=640&q=75"
    },
    {
      geocode:[23.7613228,90.3894193],
      title: "New Propertry 3 Details",
      image: "https://expo-elite-dev.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRh87QrJ%2F050-584x438.jpg&w=640&q=75"
      
    },
    {
      geocode:[23.7824917,90.3704936],
      title: "New Propertry 4",
      image: "https://expo-elite-dev.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRh87QrJ%2F050-584x438.jpg&w=640&q=75"
      
    },
    {
      geocode:[34.0508703,-118.2448169],
      title: "New Propertry 5",
      image: "https://expo-elite-dev.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRh87QrJ%2F050-584x438.jpg&w=640&q=75"
      
    },
    {
      geocode:[34.0572071,-118.2663982],
      title: "New Propertry 6",
      image: "https://expo-elite-dev.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRh87QrJ%2F050-584x438.jpg&w=640&q=75"
      
    },
    {
      geocode:[34.0383255,-118.2435527],
      title: "New Propertry 7",
      image: "https://expo-elite-dev.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRh87QrJ%2F050-584x438.jpg&w=640&q=75"
      
    },
  ]





  const customImg = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
  });

  const position = [23.774609, 90.4219455];

  return (
    <div>
      <PropertyCard setPosition={setPosition} />

      {/* Conditionally render the MapContainer only on the client-side */}
      {typeof window !== 'undefined' && (
        <MapContainer center={markerPosition} zoom={12}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MarkerClusterGroup chunkedLoading>
            {markers?.map((marker, i) => (
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
