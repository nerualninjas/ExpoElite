import React from 'react';
import TotalPropertyVsTotalSell from './TotalPropertyVsTotalSell';
import UserProfile from './UserProfile';
import LikeComment from './LikeComment';

const UserGraph = () => {
    return (
        <div>
            <UserProfile />
            <LikeComment />
            <TotalPropertyVsTotalSell />
        </div>
    );
};

export default UserGraph;