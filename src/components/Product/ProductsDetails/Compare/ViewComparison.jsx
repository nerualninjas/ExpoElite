"use client";
import React, { useEffect } from 'react';
import usePropertyData from '@/hooks/Propertys/usePropertyData';

const ViewComparison = ({ compareList }) => {
    const { propertySingleData: product1, isPending: isPending1, refetch: refetch1 } = usePropertyData(compareList[0]);
    const { propertySingleData: product2, isPending: isPending2, refetch: refetch2 } = usePropertyData(compareList[1]);

    useEffect(() => {
        refetch1();
        refetch2();
    }, [compareList, refetch1, refetch2]);

    return (
        <div>
            {isPending1 || isPending2 ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Display product comparison */}
                    <div>
                        {/* Product 1 details */}
                        {product1 && (
                            <>
                                <h2>{product1.name}</h2>
                                {/* Display other product details */}
                            </>
                        )}
                    </div>
                    <div>
                        {/* Product 2 details */}
                        {product2 && (
                            <>
                                <h2>{product2.name}</h2>
                                {/* Display other product details */}
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ViewComparison;
