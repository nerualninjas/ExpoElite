"use client"
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tab_style.css';
import Title from "../shared/Title/Tilte";
import PopularProperty from "./PopularProperty";
import SpecialOfferProperty from "./SpecialOfferProperty";
const MostPopular = ({ house }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
      fetch("property.json")
        .then((res) => res.json())
        .then((data) => setProperties(data));
    }, []);
    return (
        <div className="w-full mx-auto lg:py-16">
          <Title title="Popular and Offered Properties" className="mb-20 md:mb-10 pt-4"/>
            <Tabs className=" mx-auto  flex flex-col justify-center items-center">
        <TabList className='mx-auto pt-6'>
          <Tab>Most Popular</Tab>
         
          <Tab>Special Offers</Tab>
          {/* <Tab>Near Me</Tab> */}
        
        </TabList>
    
        <TabPanel className=" mx-auto ">
            
           
            <PopularProperty />
        
        </TabPanel>
        <TabPanel className='mx-auto'>
          
          
           <SpecialOfferProperty />
           
          
        </TabPanel>
        {/* <TabPanel>
          <p>
         near me
          </p>
        </TabPanel> */}
        
      </Tabs>
        </div>
    );
};

export default MostPopular;