"use client"
import useAllAppointments from '@/hooks/appointments/useAllAppointments';
import React from 'react';

const Appointments = () => {
    const getStatusColor = (status) => {
        switch (status) {
          case 'approved':
            return 'green';
          case 'pending':
            return '#00719c';
          case 'rejected':
            return 'red';
          default:
            return 'black'; // Set a default color or handle other cases as needed
        }
      };

    const { appointmentData, isPending, refetch } = useAllAppointments();
    console.log(appointmentData);
 
 
     return (
         <div>
               {appointmentData?.length > 0 ?(
 
 <div className="bg-base-100 overflow-x-auto">
 <table className="table mx-5 w-full mt-5 mb-10 pb-6 table-zebra">
     {/* head */}
     <thead>
         <tr className='text-lg text-rose-500'>
             <th> </th>
            
             {/* <th>Seller Email</th> */}
             <th> Seller Info</th>
             <th>User Info</th>
             <th>Property Name</th>
             <th>Appointment Time</th>
             <th>Appointment Status</th>
 
         </tr>
     </thead>
     <tbody>
         {appointmentData?.map((appointment, index) => (
             <tr key={appointment?._id}>
                 <th>{index + 1}</th>
               
             
                 <td><span className='font-semibold'>Name: </span>{appointment.sellerName}
                                 <br />
                                 <span className='font-semibold'>Email: </span>{appointment.sellerEmail}
                </td>
                <td><span className='font-semibold'>Name: </span>{appointment.userName}
                                 <br />
                                 <span className='font-semibold'>Email: </span>{appointment.userEmail}
                </td>
                 
                 <td>
                     
                     {appointment?.propertyName}
                 </td>
                 <td>{appointment?.appointmentDate}
                 <br />{appointment?.appointmentStartTime}  - {appointment?.appointmentEndTime}  </td>
                
                 
                 <td className=' font-semibold capitalize' style={{ color: getStatusColor(appointment?.appointmentStatus) }}>
   {appointment?.appointmentStatus}
 </td>
 
 
             </tr>
         ))}
     </tbody>
 </table>
 </div>
               ):( <p className='text-center my-10 text-yellow-500 font-semibold text-xl'>No Appointment booked yet.</p>)
               }
           
         </div>
     );
 };
export default Appointments;