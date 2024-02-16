"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllProductTable = () => {

    const { propertyData, isPending, refetch } = usePropertyAllData();
    console.log('hello', propertyData);
    const properties = propertyData;
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        console.log(properties); // Log properties to the console
    }, [properties]); // Make sure to add properties to the dependency array



    const handlePropertyStatusPublish = async (id) => {
        console.log(id);
        const res = await axiosSecure.patch(`/updatePropertyStatusPublish/${id}`);
        console.log(res.data);
        if (res.data) {
            refetch();
            Swal.fire({
                title: "ok!",
                text: "has Published successfully!",
                icon: "success"
            });
        }
    }


    const handlePropertyStatusUnpublish = async (id) => {
        console.log(id);
        const res = await axiosSecure.patch(`/updatePropertyStatusUnpublish/${id}`);
        console.log(res.data);
        if (res.data) {
            refetch();
            Swal.fire({
                title: "ok!",
                text: "has unpublished successfully!",
                icon: "success"
            });
        }


    }





    return (
        <div className='bg-rose-50 rounded-lg'>
            <div className="flex items-center justify-between w-full p-8 rounded-lg">
                <h2 className="text-xl font-semibold">All Property</h2>
                {/* <button className="px-4 py-2 font-medium bg-rose-600 text-white rounded-lg hover:bg-rose-200">Refresh</button> */}
            </div>
            <div className="overflow-x-auto">
                <table className="table mx-5 w-full mt-5 mb-10 pb-6">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Property Name</th>
                            <th>Seller Info</th>
                            <th>Details</th>
                            <th>Action</th>
                            {/* <th>Action</th> */}
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
                                        src={property.image}
                                        alt="image"
                                    />
                                </td>
                                <td>{property.propertyName}</td>
                                {/* <td>{property.SellerName}</td> */}
                                <td className="px-3 py-2">
                                    <span>Selena hamid</span>
                                    <p className="dark:text-gray-400">selena12@gmail.com</p>
                                </td>
                                <td>
                                    <Link href={`/products/${property._id}`}>
                                        <button className="btn text-white bg-rose-500">View</button>
                                    </Link>
                                </td>
                                <td>
                                    {
                                        property.publishStatus === 'publish' ?


                                            <button
                                                onClick={() => handlePropertyStatusUnpublish(property._id)}
                                                className="btn text-white bg-[#eb4343]">
                                                Unpublish
                                            </button>
                                            :
                                            <button
                                                onClick={() => handlePropertyStatusPublish(property._id)}
                                                className="btn text-white bg-[#53e068]">
                                                Publish
                                            </button>
                                    }
                                </td>
                                {/* <td>
                                    <button
                                        onClick={() => handleTogglePropertyStatus(property._id, property.publishStatus)}
                                        className={`btn text-white ${property.publishStatus === 'unpublish' ? 'bg-[#53e068]' : 'bg-[#eb4343]'}`}>
                                        {property.publishStatus === 'unpublish' ? 'Publish' : 'Unpublish'}
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProductTable;
