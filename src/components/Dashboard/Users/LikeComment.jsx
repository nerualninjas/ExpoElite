
import React from 'react';
import { faHeart, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const LikeComment = () => {
    const data = [
        {
            icon : faHeart,
            name : "Like",
            count : 100,
        },
        {
            icon : faComments,
            name : "Comments",
            count : 50,
        }
    ]
    return (
        <div className='flex flex-col md:flex-row justify-center items-center  mx-auto '>
            {
                data.map((item, index) => (
                    <div className='flex items-center justify-between bg-gray-100 p-10 rounded-md gap-2' key={index}>
                        <FontAwesomeIcon className='rounded-full text-rose-400 w-20 h-20' icon={item.icon} />
                        {/* <p>{item.name}</p> */}
                        <p className='text-rose-600 text-2xl'>{item.count}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default LikeComment;