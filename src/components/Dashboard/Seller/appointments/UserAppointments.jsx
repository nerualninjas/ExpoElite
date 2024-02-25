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
        return 'blue';
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
            <div className="overflow-x-auto bg-base-200">
                <table className="table mx-5 w-full mt-5 mb-10 pb-6">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                           
                            <th>Seller Email</th>
                            <th> Seller Name</th>
                            <th> User Image</th>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {userAppointmentData?.map((appointment, index) => (
                            <tr key={appointment?._id}>
                                <th>{index + 1}</th>
                              
                                <th>{appointment.sellerEmail}</th>
                                <td>{appointment?.sellerName}</td>
                                
                                <td>
                                    <Image
                                        width={60}
                                        height={60}
                                        src={appointment?.userPhoto}
                                        alt="image"
                                        className="rounded-full w-[60px] h-[60px]"
                                    />
                                </td>
                                <td>{appointment?.appointmentDate} </td>
                                <td>{appointment?.appointmentStartTime}  - {appointment?.appointmentEndTime} </td>
                                
                                <td className='text-xl font-bold' style={{ color: getStatusColor(appointment?.appointmentStatus) }}>
                  {appointment?.appointmentStatus}
                </td>
                   
                        

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserAppointments;