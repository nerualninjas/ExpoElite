"use client"
import { useState } from "react";
import Swal from "sweetalert2";
import useAUserPurchase from "@/hooks/users/useAUserPurchase";
import Title2 from "../shared/Title/Title2";
import Image from "next/image";
import useAddReview from "@/hooks/reviews/useAddReview";
import useAUser from "@/hooks/users/useAUser";

const MyOrder = () => {
    const { MyPurchases } = useAUserPurchase();
    const { addReview } = useAddReview(); 
    const [reviews, setReviews] = useState({});
    const { userInfoData } = useAUser();
    const handleReviewClick = (transactionId) => {
        Swal.fire({
            title: 'Write your review',
            input: 'textarea',
            inputPlaceholder: 'Write your review here...',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            confirmButtonColor: '#F43F5E',
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#2196f3',
        }). then((result) => {
            if (result.isConfirmed) {
                const reviewText = result.value;
                const user = userInfoData; // Assuming userInfoData contains user details
                const reviewData = {
                    userEmail: user.email,
                    userPhoto: user.photo,
                    userName: user.name,
                    transactionId,
                    review: reviewText,
                };
                try {
                    addReview(reviewData);
                    Swal.fire('Success', 'Review submitted successfully!', 'success');
                } catch (error) {
                    console.error('Error submitting review:', error);
                    Swal.fire('Error', 'Failed to submit review', 'error');
                }
            }
        });
    };

    return (
        <div className="bg-white text-black p-4 m-4 rounded-xl">
            <Title2 title="Review My Order History " className=" mt-6" />
            <div className='bg-rose-200 rounded py-10 px-4 md:px-20 my-10 md:mx-10'>
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
                        </div>
                         {/* <div className="flex flex-col items-start justify-center">
                                <p><span className="font-bold">Name: </span> {property?.propertyName}</p>
                                <p><span className="font-bold">Amount: </span> {property?.price}</p>
                              
                            </div>

                            <div className="flex flex-col items-start justify-center">
                                <p><span className="font-bold">Purchase Date: </span>{property?.date}</p>
                                <p><span className="font-bold">Transaction Id: </span>{property?.transactionId}</p>
                            </div> */}
                        <button
                            className="px-4 py-2 font-bold rounded bg-rose-600 hover:bg-rose-300 text-white hover:text-rose-700"
                            onClick={() => handleReviewClick(property.transactionId)}
                        >
                            Review
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrder;
