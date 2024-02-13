import React from 'react';
import TotalPropertyVsTotalSell from './TotalPropertyVsTotalSell';
import UserProfile from './UserProfile';

const UserGraph = () => {
    return (
        <div>
            <UserProfile />
            <TotalPropertyVsTotalSell />
        </div>
    );
};

export default UserGraph;