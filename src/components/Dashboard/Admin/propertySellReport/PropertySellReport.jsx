"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import useGetSoldProperty from '@/hooks/soldProperty/useGetSoldProperty';


const PropertySellReport = () => {

    const { soldPropertyData, isPending, refetch } = useGetSoldProperty();
    console.log('hello', soldPropertyData);
    const soldProperties = soldPropertyData;

    useEffect(() => {
        console.log(soldProperties); // Log properties to the console
    }, [soldProperties]); // Make sure to add properties to the dependency array

    return (
        <div className='bg-rose-50 rounded-xl'>
            <div className="flex items-center justify-between w-full p-8 rounded-lg">
                <h2 className="text-xl font-semibold">All Property Sell Report</h2>
                {/* <button className="px-4 py-2 font-medium bg-rose-600 text-white rounded-lg hover:bg-rose-200">Refresh</button> */}
            </div>
            <div className="overflow-x-auto">
                <table className="table mx-5 w-full mt-5 mb-10 pb-6">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Property Id</th>
                            <th>Property Name</th>
                            <th>Seller Info</th>
                            <th>Property Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {soldProperties?.map((soldProperty, index) => (
                            <tr key={soldProperty._id}>
                                <th>{index + 1}</th>
                                {/* <td>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={soldProperty.image}
                                        alt="image"
                                    />
                                </td> */}
                                <td>{soldProperty.propertyId}</td>
                                <td>{soldProperty.propertyName}</td>
                                {/* <td>{property.SellerName}</td> */}
                                <td className="px-3 py-2">
                                    <span>{soldProperty.name}</span>
                                    <p className="dark:text-gray-400">{soldProperty.email}</p>
                                </td>
                                {/* <td>
                                    <Link href={`/products/${property._id}`}>
                                        <button className="btn text-white bg-rose-500">View</button>
                                    </Link>
                                </td> */}
                                <td>
                                    <button className="btn text-white bg-rose-500">View</button>
                                </td>
                                <td>
                                    <button className="btn text-white bg-[#eb4343]">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PropertySellReport;