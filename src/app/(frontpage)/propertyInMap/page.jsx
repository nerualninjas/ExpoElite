"use client"

import React from 'react';

import { useEffect, useRef, useState } from 'react';

import Map from "@/components/PropertyMapComp/Map/Map";

const PropertyViewInMap = () => {
    

    
    return (
        <div>
            <h2 className="text-2xl font-bold"><span className="text-rose-500">Property</span> Map View </h2>
            {/* list property  */}
        <div>
            
    
      
       </div>

        {/* Map view  */}
        <div>
        {typeof window !== 'undefined' && (
<Map  />
        )}
        </div>
        </div>
    );
};

export default PropertyViewInMap;