"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useNotification from "@/hooks/notifications/useNotificationCreate";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';




const AllProductTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    console.log('hi', currentPage);
    const [pageLimit, setPageLimit] = useState(5);
    const { propertyData, isPending, refetch } = usePropertyAllData(currentPage, pageLimit);
    const properties = propertyData;
    const axiosSecure = useAxiosSecure();
    const { notificationPost } = useNotification()
    const { user } = UserAuth()

    const [displayProperty, setDisplayData] = useState(properties)




    useEffect(() => {
        refetch()
        setDisplayData(properties)
    }, [properties, refetch, pageLimit, currentPage])


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




    //pagination start

    const handlePagination = (e) => {
        e.preventDefault()
        const pageLimitValue = e.target.value;
        console.log(pageLimitValue);
        setPageLimit(pageLimitValue)


    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const totalPage = properties?.length;


    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)

        }
        // console.log(currentPage, totalPage);
    }

    // pagination end



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
                            <th>Id</th>
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
                        {displayProperty?.map((property, index) => (
                            <tr key={property._id}>
                                <th>{property._id}</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePagination}
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
                /> */}
                <div className="flex justify-between items-center gap-2 my-3">
                    <div className='font-semibold ml-2'>
                        Rows Per Page
                        <select onChange={handlePagination} value={pageLimit} className="p-2 border-2 bg-blue-gray-50" name="limit" id="">

                            <option value={3}>
                                3
                            </option>
                            <option value={5}>
                                5
                            </option>
                            <option value={10}>
                                10
                            </option>
                            <option value={20}>
                                20
                            </option>
                        </select>

                    </div>
                    <div className="flex justify-between items-center mr-2 text-black font-semibold text-base rounded-lg">
                        <button className='btn border-none text-rose-600 font-bold text-base' onClick={handlePreviousPage} >
                            <FaAngleLeft className='text-rose-600 font-bold' />
                            Previous
                        </button>
                        Current Page:{currentPage}
                        <button className='btn border-none text-base font-bold text-rose-600' onClick={handleNextPage}>
                            Next
                            <FaAngleRight className='text-rose-600 font-bold' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllProductTable;
