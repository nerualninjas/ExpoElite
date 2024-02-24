import React from 'react';
import TotalPropertyVsTotalSell from './TotalPropertyVsTotalSell';
import UserProfile from './UserProfile';
import SelledPropertyLocation from './SelledPropertyLocation';
import LikeUser from './LikeUser';
import PurchaseUser from './PurchaseUser';
import CommentUser from './CommentUser';
import Title2 from '@/components/shared/Title/Title2';

const UserGraph = () => {
    return (
        <div className='p-10'>
            <Title2 title='User Dashboard' />
            <div className='flex flex-col md:flex-row justify-center items-center gap-3 mb-10'>
                <UserProfile className='w-full md:w-1/2 ' />
                <LikeUser className='w-full md:w-1/2' /> 
                <CommentUser className='w-full md:w-1/2' />
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