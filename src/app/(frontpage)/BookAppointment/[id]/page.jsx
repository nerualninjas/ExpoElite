
import AppointmentForm from '@/components/appointment/AppointmentForm';
import React from 'react';

const AppointmentPage = ({ params }) => {
    return (
        <div>
           
            <AppointmentForm propertyId={params?.id} />
        </div>
    );
};

export default AppointmentPage;