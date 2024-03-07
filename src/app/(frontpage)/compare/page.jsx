"use client";
import React, { useState } from 'react';
import ViewComparison from '@/components/Product/ProductsDetails/Compare/ViewComparison';
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import PrivateRoutes from '@/libs/PrivateRoute';

const ComparePages = ({propertyId}) => {
    const { user, loading } = UserAuth();
   
    return (
        <PrivateRoutes>
            <div>
            <ViewComparison propertyId={propertyId} />
        </div>
        </PrivateRoutes>
    );
};

export default ComparePages;
