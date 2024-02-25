"use client"
import React, { useContext, useState } from 'react';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import ShowComment from '../ShowComment';

import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import { UserAuth } from '@/app/(auth)/context/AuthContext';


const Comment = ({ propertyId }) => {

    const {user}=UserAuth()
    const axiosSecure = useAxiosSecure();
  
    const [commentText, setCommentText] = useState('');
    const { propertySingleData, refetch } = usePropertyData(propertyId);
    const { propertyName, commentLogs } = propertySingleData || {};

    const handleComment = async (e) => {
        e.preventDefault();
    
        try {
            // Get the user details
            const userEmail = user?.email || "anonymous@example.com"; // Provide a default email if the user is not authenticated
            const userName = user?.displayName || "Anonymous"; // Provide a default name if the user is not authenticated
    
            // Prepare the comment data
            const commentData = {
                commentBy: userEmail,
                comment: commentText,
                commentDate: new Date().toISOString().split('T')[0], // Format: "YYYY-MM-DD"
                commentTime: new Date().toLocaleTimeString(),
            };
    
            // Send the comment to the backend using the PUT method
            await axiosSecure.put(`/addComment?id=${propertyId}`, commentData);
    
            // Refetch property data after commenting
            refetch();
    
            // Clear the comment input field
            setCommentText('');
        } catch (error) {
            console.error('Error adding comment', error);
        }
    };
    
    return (
        <div className='mb-10'>
             <div>
        <h1 className="text-xl my-4 font-extrabold text-black ">Comment Section</h1>   
        </div>

            {commentLogs && commentLogs?.length > 1 ? (
    <div className='overflow-y-scroll max-h-[300px]'>
        {commentLogs.slice(1).map((commentData, index) => (
            <ShowComment key={index} commentData={commentData} />
        ))}
    </div>
) : null}       
            <div>
                {/* --------------------inputComment---------------------- */}
               
                <form onSubmit={handleComment}>
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-rose-200  dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 rounded-t-lg dark:bg-gray-800">
                            <label className="sr-only">Your comment</label>
                            <textarea name="commentText" id="comment" rows="4" value={commentText} onChange={(e) => setCommentText(e.target.value)} className="w-full px-0 text-sm text-gray-900 bg-rose-100 border-2 pl-2 pt-1 focus:ring-0 dark:text-white placeholder-gray-700 dark:placeholder-gray-700" placeholder="Write a comment..." required></textarea>                    
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" className="inline-flex items-center  text-xs font-medium text-center bg-rose-600 text-white px-4 py-2  text-extrabold rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Post comment
                            </button>
                            
                        </div>
                    </div>
                </form>
                <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
            </div>  

        </div>
    );
};

export default Comment;