import Profile from '@/components/Dashboard/Users/Profile';
import React from 'react';
import PrivateRoutes from '@/libs/PrivateRoute';

const UserProfile = () => {
    return (
        <PrivateRoutes>
            <Profile></Profile>
        </PrivateRoutes>
    );
};

export default UserProfile;