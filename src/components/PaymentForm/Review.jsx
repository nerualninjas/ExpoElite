import React, { useState, useEffect } from 'react';
import useAUser from '@/hooks/users/useAUser';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Review = ({ transactionId }) => {
    const { userInfoData } = useAUser();
    const { axiosPublic } = useAxiosPublic();
    const [reviewText, setReviewText] = useState('');
    console.log('axiosPublic:', axiosPublic);
  

    const closeModal = () => {
        document.getElementById('my_modal_1').close();
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            userEmail: userInfoData.userEmail,
            userPhoto: userInfoData.userPhoto,
            userName: userInfoData.userName,
            transactionId,
            review: reviewText,
        };

        try {
            console.log('reviewData:', reviewData);
            const res = await axiosPublic.post('/addReview', reviewData);
            console.log(res.data);
            closeModal();
            Swal.fire('Success', 'Review submitted successfully!', 'success');
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'Failed to submit review', 'error');
        }
    };


    return (
        <div className="w-full  p-8  rounded-xl  ">
            <h1>Review</h1>
            <form className="space-y-6" onSubmit={onSubmit}>
                <div className="space-y-1 text-sm">
                    <label className="block dark-text-gray-400">
                        User Name:
                        <input
                            required
                            type="text"
                            disabled
                            value={userInfoData?.userName}
                            name="propertyCreator"
                            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
                        />
                    </label>
                    <label className="block dark-text-gray-400">
                        User Email:
                        <input
                            required
                            type="text"
                            disabled
                            value={userInfoData?.userEmail}
                            name="propertyCreator"
                            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
                        />
                    </label>
                    <label className="block dark-text-gray-400">Write your review</label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
                    ></textarea>
                </div>
                <div className="flex gap-2 items-end justify-end">
                    <button
                        type="submit"
                        className="block p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-1"
                    >
                        Add Review
                    </button>
                    <button type="button" onClick={closeModal} className="btn btn-error text-white">
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Review;
