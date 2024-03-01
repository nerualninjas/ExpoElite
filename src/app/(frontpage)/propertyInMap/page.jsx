"use client"


import Map from "@/components/PropertyMapComp/Map/Map";

const PropertyViewInMap = () => {
    

    
    return (
        <div>
            <h2 className="text-2xl font-bold"><span className="text-rose-500">Property</span> Map View </h2>
            {/* list property  */}
   
        {/* Map view  */}
       
        {typeof window !== 'undefined' && (
<Map  />
        )}
        
        </div>
    );
};

export default PropertyViewInMap;