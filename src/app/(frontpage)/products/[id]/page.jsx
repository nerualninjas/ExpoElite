import PropertyDetail from "@/components/Product/ProductsDetails/PropertyDetails";
import RentPropertyDetails from "@/components/Product/ProductsDetails/Rent/RentPropertyDetails";

const PropertyDetails = ({ params }) => {
  const { propertyType } = params;
  return (
    <div>
      {/* Display other details of the property*/}
      {/* <PropertyDetail propertyId={params?.id} /> */}

      {/* for different sell nd rent */}

      { propertyType === "Sell" ? <PropertyDetail propertyId={params?.id} /> 
      : <RentPropertyDetails propertyId={params?.id} /> }
    </div>
  );
};

export default PropertyDetails;
