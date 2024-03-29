"use client"
import React from 'react';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAUserComment from '@/hooks/users/useAUserComment';
const CommentUser = () => { 
    const { MyComments } = useAUserComment();
    const count = MyComments?.totalComments;
    return (

       
        <div className='flex justify-between items-center bg-gray-100 p-10 rounded-md gap-4  shadow-md' >
            <FontAwesomeIcon className='rounded-full text-rose-400 w-16 h-16' icon={faComments} />
            <div className='flex flex-col justify-between items-center text-center'>
                <p className='text-rose-600 '>Comments</p>
                <p className='text-rose-600 text-2xl'>{count}</p>
            </div>
        </div>

    );
};

export default CommentUser;