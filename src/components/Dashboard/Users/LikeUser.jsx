"use client"
import React from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAUserLike from '@/hooks/users/useAUserLike';
const LikeUser = () => {
    const { MyLikes } = useAUserLike();
    console.log(MyLikes);
    const count = MyLikes?.totalLikes;

    
    return (
        
                    <div className='flex justify-between items-center bg-gray-100 p-10 rounded-md gap-4  shadow-md' >
                        <FontAwesomeIcon className='rounded-full text-rose-400 w-16 h-16' icon= {faHeart} />
                        <div className='flex flex-col justify-between items-center text-center'>
                            <p className='text-rose-600 '>Likes</p>
                            <p className='text-rose-600 text-2xl'>{count}</p>
                        </div>
                    </div>
              
    );
};

export default LikeUser;