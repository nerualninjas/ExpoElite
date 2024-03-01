import PropertyDetail from "@/components/Product/ProductsDetails/PropertyDetails";
import RentPropertyDetails from "@/components/Product/ProductsDetails/Rent/RentPropertyDetails";
import PrivateRoutes from '@/libs/PrivateRoute';
const PropertyDetails = ({ params }) => {
  const { propertyType } = params;
  return (
    <div>
      <PrivateRoutes>
      {/* Display other details of the property*/}
      <PropertyDetail propertyId={params?.id} />

      {/* for different sell nd rent */}

      {/* { propertyType === "Sell" ? (
        <> 
        <PropertyDetail propertyId={params?.id} />
        </>
      )
      : (
        <RentPropertyDetails propertyId={params?.id} />
      )} */}
      </PrivateRoutes>
    </div>
  );
};

export default PropertyDetails;
