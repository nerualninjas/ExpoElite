
"use client";
import PropertyDetail from '@/components/details/PropertyDetails';
import usePropertyData  from '@/hooks/Propertys/usePropertyData';

const PropertyDetails = ({ propertyId }) => {
  const { propertySingleData, isPending, refetch } = usePropertyData(propertyId);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!propertySingleData) {
    return <div>Property not found.</div>;
  }

  // const { title, price /* other properties */ } = propertyData;
  const { propertyName, price } = propertySingleData || {};

  return (
    <div>
      <h1>{propertyName}</h1>
      <p>Price: ${price}</p> 
      {/* Display other details of the property*/}
   <PropertyDetail />

    </div>
  );
};

export default PropertyDetails;