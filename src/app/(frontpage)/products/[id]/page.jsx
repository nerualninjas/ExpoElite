import PropertyDetail from "@/components/Product/ProductsDetails/PropertyDetails";

const PropertyDetails = ({ params }) => {
  return (
    <div>
      {/* Display other details of the property*/}

      <PropertyDetail propertyId={params?.id} />
    </div>
  );
};

export default PropertyDetails;
