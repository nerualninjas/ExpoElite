"use client"
import useSellerAllAppointments from '@/hooks/appointments/useSellerAllAppointments';
import useNotification from '@/hooks/notifications/useNotificationCreate';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ManageAppointments = () => {
    const axiosSecure = useAxiosSecure();
    const router = useRouter();
    const { notificationPost } = useNotification()
    const { sellerAppointmentData, isPending, refetch } = useSellerAllAppointments();
   console.log(sellerAppointmentData);

    const handleApprove = async (appointmentId, email, photo) => {
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
          text: ' appointment has been successfully Approved.',
        });
        
      }
                //    notification add  start
        const data = {
            userEmail: email,
            notificationData: [{
              notificationText: "Appointment Approved",
              notificationPath:"/myAppointments",
              notifyUserPhoto: photo,
              notificationStatus: "unread"
            }]
          }
          notificationPost(data)
  
          //notification end
          
          router.push("/");
    
        
        
          

        } catch (error) {
            console.error('Error approving Appointment status:', error);
        }
       

    
    
    };

    const handleReject = async (appointmentId, email, photo) => {
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
         //    notification add  start
         const data = {
            userEmail: email,
            notificationData: [{
              notificationText: "Appointment Rejected",
              notificationPath:"/myAppointments",
              notifyUserPhoto: photo,
              notificationStatus: "unread"
            }]
          }
          notificationPost(data)
  
          //notification end
          
          router.push("/");
    
             
            

        } catch (error) {
            console.error('Error approving Appointment status:', error);
        }

    };

    return (
        <div>
            <div className="overflow-x-auto table-zebra ">
                <table className="table mx-5 w-full mt-5 mb-10 pb-6">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-rose-500' >
                            <th> </th>
                            <th>User Image</th>
                            <th> User Info</th>
                            <th> Property Info</th>
                            <th>Appointment Time</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sellerAppointmentData?.map((appointment, index) => (
                            <tr className='table-pin-rows' key={appointment?._id}>
                                <td>{index + 1}</td>
                                <td>
                                <Image
                                        width={20}
                                        height={20}
                                        src={appointment?.userPhoto}
                                        alt="image"
                                        className="rounded-full w-[70px] h-[70px]"
                                    />
                                </td>
                              
                                    
                                <td>
                                
                                    <span className='font-semibold'>Name: </span>{appointment?.userName}
                                <br />
                                <span className='font-semibold'>Email: </span>{appointment?.userEmail}
                                </td>
                              

                                <td><span className='font-semibold'> </span>{appointment?.propertyName}
                                <br />
                                <span className='font-semibold'>Location: </span>{appointment?.propertyLocation}
                                </td>
                                <td>{appointment?.appointmentDate} 
                                <br />
                                {appointment?.appointmentStartTime}  - {appointment?.appointmentEndTime}
                                </td>
                                

                                <td>
                                    {appointment?.appointmentStatus === 'pending' ? (
                                      <div>
                                         <button
                                                className="btn  font-semibold text-lg text-white bg-[#477a4f] mr-2 hover:rounded-none"
                                                onClick={() => handleApprove(appointment._id, appointment?.userEmail, appointment?.userPhoto)}
                                            >
                                               <div><FontAwesomeIcon icon={faCircleCheck} /></div> <div className='text-sm'>Approve </div>
                                            </button>
                                          
                                            <button
                                                className="btn text-white bg-[#e96060] hover:rounded-none"
                                                onClick={() => handleReject(appointment._id, appointment?.userEmail, appointment?.userPhoto)}
                                            >
                                                <div><FontAwesomeIcon icon={faCircleXmark} /></div> <div className='text-sm'> Reject</div>
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