
import React from 'react';
import PrivateRoutes from '@/libs/PrivateRoute';
import UsersChatData from '@/components/Dashboard/Admin/UserChatData/UsersChatData';


const allUserChatData = () => {
    return (
        <PrivateRoutes>
            <div>
                <UsersChatData />
            </div>
        </PrivateRoutes>
    );
};

export default allUserChatData;