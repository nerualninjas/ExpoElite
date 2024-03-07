"use client"


// import Map from "@/components/PropertyMapComp/Map/Map";
import  dynamic  from 'next/dynamic';
const Map = dynamic(()=> import("@/components/PropertyMapComp/Map/Map"), {ssr:false}); //disable server-side redering 

const PropertyMapPage = () => {
    

    
    return (
        <div>
            <h2 className="text-2xl font-bold"><span className="text-rose-500">Property</span> Map View </h2>
            {/* list property  */}
   
        {/* Map view  */}
       
       
 <Map  /> 
       
        
        </div>
    );
};

export default PropertyMapPage;