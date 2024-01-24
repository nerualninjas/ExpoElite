"use client"
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 import './tab_style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faBath,
  faCouch
} from "@fortawesome/free-solid-svg-icons";
import { FaLocationArrow } from "react-icons/fa";
const MostPopular = ({ house }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
      fetch("property.json")
        .then((res) => res.json())
        .then((data) => setProperties(data));
    }, []);
    return (
        <div className="container">
            <Tabs>
        <TabList>
          <Tab>Most Popular</Tab>
         
          <Tab>Special Offers</Tab>
          <Tab>Near Me</Tab>
        
        </TabList>
    
        <TabPanel>
            
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
            {properties.map((property, index) => (
           


             <div key={index}  className="px-2 py-2 container rounded-xl flex justify-center items-center max-w-[440px] bg-base-100 shadow-xl">
             <div className="w-1/3">
              <img 
                   src={property.imageUrl}  
                   alt={property.title}  
                   className="rounded-xl w-[130px] h-[118px]"
                 />
             </div >
             <div className="ml-2 w-2/3">
             <h2 className="card-title font-bold text-lg text-[#2C2946] text-left pb-1">
                   {property?.title}
                 </h2>
               <h2 className="card-title font-bold text-sm  text-left pb-2 text-[#ff385d]">
                   ${property?.price}
                 </h2>
               <div className="">
               <div className="flex text-xs  w-full    content-stretch justify-between pb-2">
                  <div className="w-1/3">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faBed}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property.bedrooms} </span>
                    </div>
                  
                  </div>
                  <div className="w-1/3">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property.bathrooms} </span>
                    </div>
                   
                  </div>
                  <div className="w-1/3">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faCouch}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property.livingRoom} </span>
                    </div>
                  
                  </div>
                  </div>

                  <hr className="pb-2" />
                <div className="card-actions py-2 flex justify-between w-full">
                  <div className="text-xs ">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-gray-500 mr-1"
                      />
                      {property.location}
                    </div>
                  </div>
                 
                </div>
               </div>
             </div>
           </div>
          
          ))}
            </div>
        
        </TabPanel>
        <TabPanel>
          <p>
           special offers
           
          </p>
        </TabPanel>
        <TabPanel>
          <p>
         near me
          </p>
        </TabPanel>
        
      </Tabs>
        </div>
    );
};

export default MostPopular;