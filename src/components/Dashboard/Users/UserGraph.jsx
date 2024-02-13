import React from 'react';
import TotalPropertyVsTotalSell from './TotalPropertyVsTotalSell';
import UserProfile from './UserProfile';
import LikeComment from './LikeComment';
import SelledPropertyLocation from './SelledPropertyLocation';

const UserGraph = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <UserProfile className='w-full md:w-1/2' />
                <TotalPropertyVsTotalSell className='w-full md:w-1/2' />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <LikeComment />
                <SelledPropertyLocation />
            </div>
        </div>
    );
};

export default UserGraph;