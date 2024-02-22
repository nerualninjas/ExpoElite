"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import useAxiosPublic from "./../../hooks/useAxiosPublic";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import useAUserPurchase from "@/hooks/users/useAUserPurchase";
import Title2 from "../shared/Title/Title2";

const MyOrder = () => {
    const [payments, setPayments] = useState([]);
    // usehook for show payment history
    const { MyPurchases } = useAUserPurchase();


    // const { loading,user } = UserAuth();
    // const axiosPublic = useAxiosPublic();

    // const {
    //   data: MyPurchases,
    //   isPending,
    //   refetch,
    // } = useQuery({
    //   queryKey: ["MyPurchases"],
    //   enabled: !loading, // Don't fetch data during SSR
    //   queryFn: async () => {
    //     const res = await axiosPublic.get(`/MyOrder?email=${user?.email}`);
    //     console.log(res?.data);
    //     return res?.data;
    //   },
    // });

    // // Calculate total payment items length
    const totalPaymentItems = MyPurchases?.length || 0;
    const handleReviewClick = (transactionId) => {
        // Add your review logic here, for example, show a confirmation dialog
        Swal.fire({
            title: 'Write your review',
            input: 'textarea',
            inputPlaceholder: 'Write your review here...',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            confirmButtonColor: '#F43F5E',
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#2196f3',
        }).then((result) => {
            if (result.isConfirmed) {
                const review = result.value;
                // You can send the review to your backend or handle it as needed
                console.log('Review submitted:', review);
            }
        });
    };
    return (
        <div className="bg-white text-black p-4 m-4 rounded-xl">
            <Title2 title="Review My Order History " className=" mt-6" />
            <h2 className="text-2xl ml-10 font-semibold  text-[#54595F]">
                <span className="text-rose-600">Total Purchase:</span> {totalPaymentItems}
            </h2>

            {/* <h4>Total Payment Items: {totalPaymentItems}</h4> */}


            <div className=' bg-rose-200  rounded py-10  px-4 md:px-20 my-10 md:mx-10'>
                {MyPurchases?.map((property, index) => (
                    <div key={index} className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className="text-xl font-bold">{index + 1}</p>
                        <Image src={property?.image} alt="property image" width={150} height={150} />
                        <div className="flex md:hidden ">
                            <div className="flex flex-col items-start justify-center mx-10">
                                <p><span className="font-bold">Name: </span> {property?.propertyName}</p>
                                <p><span className="font-bold">Amount: </span> {property?.price}</p>
                                <p><span className="font-bold">Purchase Date: </span>{property?.date}</p>
                                <p><span className="font-bold">Transaction Id: </span>{property?.transactionId}</p>
                            </div>

                        </div>
                        <div className="hidden md:flex md:gap-4">
                            <div className="flex flex-col items-start justify-center">
                                <p><span className="font-bold">Name: </span> {property?.propertyName}</p>
                                <p><span className="font-bold">Amount: </span> {property?.price}</p>
                                <p><span className="font-bold">Purchase Date: </span>{property?.date}</p>
                                <p><span className="font-bold">Transaction Id: </span>{property?.transactionId}</p>
                            </div>
                            {/* <div className="flex flex-col items-start justify-center">
                                <p><span className="font-bold">Name: </span> {property?.propertyName}</p>
                                <p><span className="font-bold">Amount: </span> {property?.price}</p>
                              
                            </div>

                            <div className="flex flex-col items-start justify-center">
                                <p><span className="font-bold">Purchase Date: </span>{property?.date}</p>
                                <p><span className="font-bold">Transaction Id: </span>{property?.transactionId}</p>
                            </div> */}
                        </div>

                        <button
                            className="px-4 py-2 font-bold rounded bg-rose-600 hover:bg-rose-300 text-white hover:text-rose-700"
                            onClick={() => handleReviewClick(property.transactionId)}
                        >
                            Review
                        </button>
                    </div>
                ))}

                {/* will take to rentdetails page */}
                {/* <Link href={'/rent'} className='bg-rose-600 hover:bg-rose-100 text-white hover:text-rose-700 px-4 py-2 rounded text-extrabold'>Wanna Rent?</Link> */}

            </div>
        </div>

    );
};

export default MyOrder;
