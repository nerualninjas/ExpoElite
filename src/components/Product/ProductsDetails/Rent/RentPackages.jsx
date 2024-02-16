import usePropertyData from '@/hooks/Propertys/usePropertyData';
import React from 'react';

const RentPackages = ({propertyId}) => {
    const { propertySingleData, isPending, refetch } = usePropertyData(
        propertyId
    );
    const { propertyName, propertyType, price, image, bathrooms, bedrooms, livingRoom } = propertySingleData || {};
    return (
        <div>
monthly packages
        </div>
    );
};

export default RentPackages;