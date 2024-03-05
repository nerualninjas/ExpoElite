"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useReactToPrint } from 'react-to-print';
import Swal from 'sweetalert2';
import useGetSellerSoldProperty from '@/hooks/Seller/useGetSellerSoldProperty';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const SoldProperty = () => {


    const { sellerSoldPropertyData, isPending, refetch } = useGetSellerSoldProperty();
    console.log('hello', sellerSoldPropertyData);
    const SellerSoldProperties = sellerSoldPropertyData;

    // const notify = () => toast("Wow so easy!");

    // react-to-print
    const componentPDF = useRef();


    useEffect(() => {
        console.log(SellerSoldProperties); // Log properties to the console
        // setSoldProperties(soldProperties); // Log properties to the console
    }, [SellerSoldProperties]); // Make sure to add properties to the dependency array


    // generatePDF
    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "Invoicedata",
        onAfterPrint: () => Swal.fire({
            title: "done!",
            text: "Invoice has download successfully!",
            icon: "success"
        })
    });


    return (
        <div>
            <div className='bg-rose-50 rounded-xl'>
                <div className="flex items-center justify-between w-full p-8 rounded-lg">
                    <h2 className="text-xl font-semibold">All Sold Property</h2>
                    {/* <button className="px-4 py-2 font-medium bg-rose-600 text-white rounded-lg hover:bg-rose-200">Refresh</button> */}
                    <button
                        className="btn text-white bg-[#46df6c] hover:bg-[#2f8a43] transition duration-700 ease-in-out"
                        onClick={generatePDF}
                    >
                        Download Sold Report
                    </button>
                </div>
                <div ref={componentPDF} style={{ width: '100%' }} className="overflow-x-auto">
                    <table className="table mx-5 w-full mt-5 mb-10 pb-6">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Property Name</th>
                                <th>Seller Info</th>
                                <th>Buyer Info</th>
                                <th>Property Details</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {SellerSoldProperties?.map((soldProperty, index) => (
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
                                    <td>{soldProperty.propertyName}</td>
                                    {/* <td>{property.SellerName}</td> */}
                                    <td className="px-3 py-2">
                                        <span>{soldProperty.name}</span>
                                        <p className="dark:text-gray-400">{soldProperty.email}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <span>{soldProperty.name}</span>
                                        <p className="dark:text-gray-400">{soldProperty.email}</p>
                                    </td>
                                    <td>
                                        <Link href={`/soldProperty/${soldProperty._id}`}>
                                            <button className="btn text-white bg-rose-500 hover:bg-rose-300 hover:text-black transition duration-700 ease-in-out">View</button>
                                        </Link>
                                    </td>
                                    {/* <td>
                                    <button className="btn text-white bg-rose-500">View</button>
                                </td> */}
                                    {/* <td>
                                    <button
                                        className="btn text-white bg-[#6090e9] hover:bg-[#4053a8] transition duration-700 ease-in-out"
                                        onClick={generatePDF}
                                    >Print Invoice</button>
                                </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <button
                        className="btn text-white bg-[#46df6c] hover:bg-[#2f8a43] transition duration-700 ease-in-out"
                        onClick={generatePDF}
                    >
                        Download Sell Report
                    </button> */}
                    {/* <ToastContainer /> */}
                </div>
            </div>
        </div>
    );
};

export default SoldProperty;