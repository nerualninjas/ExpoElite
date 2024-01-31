// import React from 'react';
// import { getSingleProperty } from '@/utils/getSingleProperty';


//     const PropertyDetailPage = async ({ params }) => {
//         const { data: property } = await getSingleProperty(params.propertyId);
//         console.log(data);
//     return (
//         <div>
//             PropertyDetail page
//             {params.propertyId}
//         </div>
//     );
// };

// export default PropertyDetailPage;


//   if (isPending) {
//     return <div>Loading...</div>;
//   }


//   if (!propertyData) {
//     return { propertyData: null, isPending: false, refetch: refetch };
//   }
//   return (
//     <div>
//       <h1>{propertyData.title}</h1>
//       {/* Display other details of the property */}
//       <p>Price: ${propertyData.price}</p>
//       <p>Bedrooms: {propertyData.bedrooms}</p>
//       {/* Add other property details as needed */}
//     </div>
//   );
// };
// "use client"
// import { useRouter } from 'next/navigation';

// import usePropertyData from '@/hooks/Propertys/usePropertyData';

// const PropertyDetails = () => {
//   const router = useRouter();
// //   const { propertyId } = router.query;
// const { propertyId } = router.query || {};
 
//  // Fetch property data using the usePropertyData hook
//  const { propertyData, isPending, refetch } = usePropertyData(propertyId);

//  if (isPending) {
//    return <div>Loading...</div>;
//  }

//  if (!propertyData) {
//    return <div>Property not found.</div>;
//  }

//  // Destructure propertyData
//  const { title, price, /* other properties */ } = propertyData;

//  return (
//    <div>
//      <h1>{title}</h1>
//      <p>Price: ${price}</p>
//      {/* Display other details of the property */}
//    </div>
//  );
// };
// export default PropertyDetails;

// Your component file
"use client";
import usePropertyData  from '@/hooks/Propertys/usePropertyData';

const PropertyDetails = ({ propertyId }) => {
  const { propertyData, isPending, refetch } = usePropertyData(propertyId);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!propertyData) {
    return <div>Property not found.</div>;
  }

  // const { title, price /* other properties */ } = propertyData;
  const { title, price } = propertyData || {};

  return (
    <div>
      <h1>{title}</h1>
      <p>Price: ${price}</p>
      {/* Display other details of the property */}
    </div>
  );
};

export default PropertyDetails;