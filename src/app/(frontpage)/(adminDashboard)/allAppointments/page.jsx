import Appointments from '@/components/Dashboard/Admin/appointments/Appointments';
import Title2 from '@/components/shared/Title/Title2';
import PrivateRoutes from '@/libs/PrivateRoute';
import React from 'react';

const allAppointments = () => {
    return (
        <PrivateRoutes>
            <div className='pt-5 bg-base-100'>
                <Title2 title="All Appointments" />
                <Appointments />
            </div>
        </PrivateRoutes>
    );
};

export default allAppointments;