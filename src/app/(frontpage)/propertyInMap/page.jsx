"use client"

import React from 'react';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Map from "@/components/PropertyMapComp/Map/Map";
const PropertyViewInMap = () => {
    return (
        <div>
            {/* list property  */}
        <div>
            
      Property List with Sweeper
      
       </div>

        {/* Map view  */}
        <div>
<Map />
            Map from api
        </div>
        </div>
    );
};

export default PropertyViewInMap;