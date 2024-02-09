"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import usePropertyData from '@/hooks/Propertys/usePropertyData';
import Link from 'next/link';

const AllProductTable = () => {

    const { AllProductData } = usePropertyData();
    console.log(AllProductData);
    const properties = AllProductData;

    useEffect(() => {
        console.log(properties); // Log properties to the console
    }, [properties]); // Make sure to add properties to the dependency array

    return (
        <div className='bg-rose-50 rounded-lg'>
            <div className="flex items-center justify-between w-full p-8 rounded-lg">
                <h2 className="text-xl font-semibold">All Property</h2>
                <button className="px-4 py-2 font-medium bg-rose-600 text-white rounded-lg hover:bg-rose-200">Refresh</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table mx-5 w-full mt-5 mb-10 pb-6">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Property Name</th>
                            {/* <th>Seller Name</th> */}
                            <th>Details</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {properties?.map((property, index) => (
                            <tr key={property._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={`/images/${property.image}`}
                                        alt="image"
                                    />
                                </td>
                                <td>{property.propertyName}</td>
                                {/* <td>{property.SellerName}</td> */}
                                <td>
                                    <Link href={`products/${property._id}`}>
                                        <button className="btn btn-1 text-white bg-rose-500 btn-sm">View</button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn text-white bg-[#53e068]">Approve</button>
                                </td>
                                <td>
                                    <button className="btn text-white bg-[#eb4343]">Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProductTable;
