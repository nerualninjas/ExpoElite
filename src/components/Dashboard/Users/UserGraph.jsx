import React from 'react';
import TotalPropertyVsTotalSell from './TotalPropertyVsTotalSell';
import UserProfile from './UserProfile';
import SelledPropertyLocation from './SelledPropertyLocation';
import LikeUser from './LikeUser';
import PurchaseUser from './PurchaseUser';

const UserGraph = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 mb-10'>
                <UserProfile className='w-full md:w-1/2 ' />
                <LikeUser className='w-full md:w-1/2' />
                <PurchaseUser className='w-full md:w-1/2' />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <TotalPropertyVsTotalSell className='w-full md:w-1/2 ' />
                <SelledPropertyLocation className='w-full md:w-1/2' />
            </div>
        </div>
    );
};

export default UserGraph;