"use client";
import React, { useState } from 'react';
import ViewComparison from '@/components/Product/ProductsDetails/Compare/ViewComparison';
import { UserAuth } from '@/app/(auth)/context/AuthContext';

const ComparePages = ({propertyId}) => {
    const { user, loading } = UserAuth();
   
    return (
        <div>
            <ViewComparison propertyId={propertyId} />
        </div>
    );
};

export default ComparePages;
