import React from 'react';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CommentUser = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 mx-auto '>
            {
                data.map((item, index) => (
                    <div className='flex justify-between items-center bg-gray-100 p-10 rounded-md gap-4  shadow-md' key={index}>
                        <FontAwesomeIcon className='rounded-full text-rose-400 w-16 h-16' icon={faComments} />
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

export default CommentUser;