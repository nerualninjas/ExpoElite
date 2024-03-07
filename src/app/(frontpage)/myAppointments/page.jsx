import UserAppointments from '@/components/Dashboard/Seller/appointments/UserAppointments';
import Title2 from '@/components/shared/Title/Title2';
import React from 'react';

const MyAppointments = () => {
    return (
        <div className='pt-2 bg-base-100'>
            <Title2 title="My Booked Appointments"/>
            <UserAppointments />
        </div>
    );
};

export default MyAppointments;