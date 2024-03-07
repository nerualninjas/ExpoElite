"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import useAUserPurchase from "@/hooks/users/useAUserPurchase";
import Title2 from "../shared/Title/Title2";
import Image from "next/image";

import useAUser from "@/hooks/users/useAUser";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Review from "./Review";

const MyOrder2 = () => {
    const { MyPurchases } = useAUserPurchase();
    const [reviews, setReviews] = useState({});
    const { userInfoData } = useAUser();
    const { axiosPublic } = useAxiosPublic();
    const [selectedTransactionId, setSelectedTransactionId] = useState(null);
    const handleReviewClick = (transactionId) => {
        if (!userInfoData) {
            Swal.fire('Error', 'User information not available', 'error');
            return;
        }
        setSelectedTransactionId(transactionId);
        document.getElementById('my_modal_1').showModal();
    };
    const totalPurchases = MyPurchases?.length || 0;

    return (
        <div className="bg-white text-black p-4 m-4 rounded-xl">
            <Title2 title="Review My Order History " className=" mt-6" />
            <h1 className="text-2xl font-bold text-[#54595F] ml-10">Total Purchases: <span className="font-bold text-rose-500">{totalPurchases}</span></h1>
            <div className=''>
                {MyPurchases?.map((property, index) => (
                    <div key={index} className='flex flex-col md:flex-row justify-between items-center gap-4 bg-rose-200 rounded py-10 px-4 md:px-20 my-10 md:mx-10'>
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
                        </div>
                        <button
                            className="px-4 py-2 font-bold rounded bg-rose-600 hover:bg-rose-300 text-white hover:text-rose-700"
                            onClick={() => handleReviewClick(property.transactionId)}
                        >
                            Review
                        </button>

                        {/* modal */}
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box m-0 bg-base-300">
                                <div className="modal-action">
                                    {selectedTransactionId && <Review transactionId={selectedTransactionId} />}
                                </div>
                            </div>
                        </dialog>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrder2;
