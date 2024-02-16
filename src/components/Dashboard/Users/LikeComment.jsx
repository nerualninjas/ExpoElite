
import React from 'react';
import { faHeart, faComments, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const LikeComment = () => {
    const data = [
        {
            icon: faHeart,
            name: "Like",
            count: 13,
        },
        {
            icon: faComments,
            name: "Comments",
            count: 9,
        },
        {
            icon: faShop,
            name: "Purchases",
            count: 1,
        }
    ]
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 mx-auto '>
            {
                data.map((item, index) => (
                    <div className='flex justify-between items-center bg-gray-100 p-10 rounded-md gap-4  shadow-md' key={index}>
                        <FontAwesomeIcon className='rounded-full text-rose-400 w-16 h-16' icon={item.icon} />
                        <div className='flex flex-col justify-between items-center text-center'>
                            <p className='text-rose-600 '>{item.name}</p>
                            <p className='text-rose-600 text-2xl'>{item.count}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default LikeComment;