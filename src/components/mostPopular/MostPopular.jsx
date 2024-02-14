"use client"
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 import './tab_style.css';

import PopularProperty from "./PopularProperty";
const MostPopular = ({ house }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
      fetch("property.json")
        .then((res) => res.json())
        .then((data) => setProperties(data));
    }, []);
    return (
        <div className="w-full mx-auto lg:py-16">
            <Tabs className=" mx-auto  flex flex-col justify-center items-center">
        <TabList>
          <Tab>Most Popular</Tab>
         
          <Tab>Special Offers</Tab>
          <Tab>Near Me</Tab>
        
        </TabList>
    
        <TabPanel className=" mx-auto ">
            
           
            <PopularProperty />
        
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