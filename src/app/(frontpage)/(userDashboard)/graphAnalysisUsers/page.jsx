import UserGraph from '@/components/Dashboard/Users/UserGraph';
import React from 'react';
import PrivateRoutes from '@/libs/PrivateRoute';

const GraphAnalysisUser = () => {
    return (
      <PrivateRoutes>
        <div>
          <UserGraph></UserGraph>
        </div>
        </PrivateRoutes>
    );
};

export default GraphAnalysisUser;