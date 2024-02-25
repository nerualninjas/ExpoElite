"use client"

import useUserAllAppointments from '@/hooks/appointments/useUserAllAppointments';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Image from 'next/image';
import React from 'react';

const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'green';
      case 'pending':
        return '#30A9F2';
      case 'rejected':
        return 'red';
      default:
        return 'black'; // Set a default color or handle other cases as needed
    }
  };

const UserAppointments = () => {
    
    const { userAppointmentData, isPending, refetch } = useUserAllAppointments();
   console.log(userAppointmentData);



    return (
        <div>
              {userAppointmentData?.length > 0 ?(

<div className="overflow-x-auto bg-base-200">
<table className="table mx-5 w-full mt-5 mb-10 pb-6">
    {/* head */}
    <thead>
        <tr className='text-lg text-rose-500'>
            <th> </th>
           
            {/* <th>Seller Email</th> */}
            <th> Seller Name</th>
            <th>Property Location</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Appointment Status</th>

        </tr>
    </thead>
    <tbody>
        {userAppointmentData?.map((appointment, index) => (
            <tr key={appointment?._id}>
                <th>{index + 1}</th>
              
                {/* <th>{appointment.sellerEmail}</th> */}
                <td>{appointment?.sellerName}</td>
                
                <td>
                    {/* <Image
                        width={60}
                        height={60}
                        src={appointment?.userPhoto}
                        alt="image"
                        className="rounded-full w-[60px] h-[60px]"
                    /> */}
                    {appointment?.propertyName}
                </td>
                <td>{appointment?.appointmentDate} </td>
                <td>{appointment?.appointmentStartTime}  - {appointment?.appointmentEndTime} </td>
                
                <td className='text-xl font-semibold' style={{ color: getStatusColor(appointment?.appointmentStatus) }}>
  {appointment?.appointmentStatus}
</td>
   
        

            </tr>
        ))}
    </tbody>
</table>
</div>
              ):( <p className='text-center my-10 text-yellow-500 font-semibold text-xl'>You didn't book any appointment yet.</p>)
              }
          
        </div>
    );
};

export default UserAppointments;