import ManageAppointments from '@/components/Dashboard/Seller/appointments/ManageAppointments';
import Title2 from '@/components/shared/Title/Title2';
import React from 'react';

const AppointmentManage = () => {
    return (
        <div>
            <Title2 title="Manage Appointments"/>
            <ManageAppointments />
        </div>
    );
};

export default AppointmentManage;