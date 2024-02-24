"use client"
import useAllAppointments from '@/hooks/appointments/useAllAppointments';
import useSellerAllAppointments from '@/hooks/appointments/useSellerAllAppointments';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Image from 'next/image';
import React from 'react';
import Swal from 'sweetalert2';

const ManageAppointments = () => {
    const axiosSecure = useAxiosSecure();
    const { sellerAppointmentData, isPending, refetch } = useSellerAllAppointments();
   console.log(sellerAppointmentData);


    const handleApprove = async (appointmentId) => {
        try {
            console.log('Attempting to approve appointment with ID:', appointmentId);
           
           const res=  await axiosSecure.patch(`/updateStatus/${appointmentId}`, {
            appointmentStatus: 'approved'

        });
        console.log(res.data);
           console.log(res.data.data.modifiedCount);
           if(res.data.data.modifiedCount===1){
            refetch();
             Swal.fire({
          icon: 'success',
          title: 'Appointment Approved!',
          text: 'Your appointment has been successfully Approved.',
        });
      }
           
           
        
          

        } catch (error) {
            console.error('Error approving Appointment status:', error);
        }

    };

    const handleReject = async (appointmentId) => {
        try {
            // Update the user's role status to 'approved' and role to 'seller'
         const res=   await axiosSecure.patch(`/updateStatus/${appointmentId}`,{
            appointmentStatus: 'rejected'

        });
        console.log(res.data);
        console.log(res.data);
        if(res.data.data.modifiedCount===1){
         refetch();
          Swal.fire({
       icon: 'success',
       title: 'Appointment Rejected!',
       text: 'This appointment has been  Rejected.',
     });
   }
             
            

        } catch (error) {
            console.error('Error approving Appointment status:', error);
        }

    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table mx-5 w-full mt-5 mb-10 pb-6">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Seller Email</th>
                            <th> User Name</th>
                            <th> User Email</th>
                            <th> User Image</th>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sellerAppointmentData?.map((appointment, index) => (
                            <tr key={appointment?._id}>
                                <th>{index + 1}</th>
                                <th>{appointment.sellerEmail}</th>
                                <td>{appointment?.userName}</td>
                                <td>{appointment?.userEmail}</td>
                                <td>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={appointment?.userPhoto}
                                        alt="image"
                                        className="rounded-full w-[70px] h-[70px]"
                                    />
                                </td>
                                <td>{appointment?.appointmentDate} </td>
                                <td>{appointment?.appointmentStartTime}  - {appointment?.appointmentEndTime} </td>

                                <td>
                                    {appointment?.appointmentStatus === 'pending' ? (
                                      <div>
                                         <button
                                                className="btn text-white bg-[#3a9648]"
                                                onClick={() => handleApprove(appointment._id)}
                                            >
                                                Approve <br /> Request
                                            </button>

                                            <button
                                                className="btn text-white bg-[#e96060]"
                                                onClick={() => handleReject(appointment._id)}
                                            >
                                                Reject <br /> Request
                                            </button>
                                      </div>
                                        
                                    ) : appointment?.appointmentStatus === 'approved' ? (
                                        <span style={{ color: '#3a9648' }}>Approved</span>
                                    ) : appointment?.appointmentStatus === 'rejected' ? (
                                        <span style={{ color: 'red' }}>Rejected</span>
                                    ) : null}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAppointments;