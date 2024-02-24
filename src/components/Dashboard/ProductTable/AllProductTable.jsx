"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useNotification from "@/hooks/notifications/useNotificationCreate";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import ReactPaginate from 'react-paginate';



const AllProductTable = () => {

    const { propertyData, isPending, refetch } = usePropertyAllData();
    const properties = propertyData;
    const axiosSecure = useAxiosSecure();
    const { notificationPost } = useNotification()
    const { user } = UserAuth()

    // // pagination
    // const [data, setData] = useState([]);
    // const [limit, setLimit] = useState(5);
    // const [pageCount, setPageCount] = useState(1);
    // const currentPage = useRef();

    useEffect(() => {
        console.log(properties); // Log properties to the console
    }, [properties]); // Make sure to add properties to the dependency array



    const handlePropertyStatusPublish = async (id) => {
        console.log(id);
        const res = await axiosSecure.patch(`/updatePropertyStatusPublish/${id}`);
        console.log(res.data.data);
        if (res.data) {
            refetch();
            Swal.fire({
                title: "ok!",
                text: "has Published successfully!",
                icon: "success"
            });
            const email = res.data.data.propertyCreator;
            const photo = res.data.data.image;
            // const notificationPhoto = res?.data.image;
            // notifiacation add for like start
            // need import ----dooo
            // import useNotification from "@/hooks/notifications/useNotificationCreate";
            // const { notificationPost } = useNotification()
            const data = {
                userEmail: email,
                notificationData: [{
                    notificationText: `${res.data.data.propertyName} Published!`,
                    notifyUserPhoto: photo,
                    notificationPath: `/products/${id}`,
                    notificationStatus: "unread"
                }]
            }
            // post api for notication 
            notificationPost(data)

            //notification end
        }
    }


    const handlePropertyStatusUnpublish = async (id) => {
        console.log(id);
        const res = await axiosSecure.patch(`/updatePropertyStatusUnpublish/${id}`);

        if (res?.data) {
            refetch();
            Swal.fire({
                title: "ok!",
                text: "has unpublished successfully!",
                icon: "success"
            });
            const email = res.data.data.propertyCreator;
            const photo = res.data.data.image;
            const data = {
                userEmail: email,
                notificationData: [{
                    notificationText: `${res.data.data.propertyName} unpublished!`,
                    notifyUserPhoto: photo,
                    notificationPath: `/products/${id}`,
                    notificationStatus: "unread"
                }]
            }
            // post api for notication 
            notificationPost(data)
        }


    }
    // //pagination
    // useEffect(() => {
    //     currentPage.current = 1;
    //     getAllProperty();
    // }, [])


    //pagination
    function handlePageClick(e) {
        console.log(e);
        // currentPage.current = e.selected + 1;
        // getAllProperty();


    }

    // const getAllProperty = async () => {
    //     await axiosSecure.get(`getAllProperty?page=${currentPage.current}&limit=${limit}`)
    //     if (res.data) {
    //         console.log(data, "userData");
    //         setPageCount(data.pageCount);
    //         setData(data.result)

    //     }

    // }


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
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={8}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    marginPagesDisplayed={2}
                    containerClassName="flex justify-center my-3"
                    pageClassName="page-item bg-white py-4 px-4 border border-rose-600"
                    pageLinkClassName="page-link"
                    previousClassName="page-item bg-rose-300 py-4 px-4 border border-rose-600"
                    previousLinkClassName="page-link"
                    nextClassName="page-item bg-rose-300 py-4 px-4 border border-rose-600"
                    nextLinkClassName="page-link"
                    activeClassName="text-rose-600 bg-rose-50"
                    disabledClassName="bg-rose-300"
                />
            </div>
        </div>
    );
};

export default AllProductTable;
