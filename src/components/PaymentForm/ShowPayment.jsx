"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

const ShowPayment = () => {
  const [payments, setPayments] = useState([]);
  


  const { loading,user } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: MyPurchases,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["MyPurchases"],
    enabled: !loading, // Don't fetch data during SSR
    queryFn: async () => {
      const res = await axiosPublic.get(`/showPayment?email=${user?.email}`);
      console.log(res?.data);
      return res?.data;
    },
  });


  return (
    <div className="bg-base-100 p-4 m-4 rounded-xl">
      <div className="text-3xl py-2">
        <h2>Review your order history</h2>
      </div>

      <h4>Total Payment Items: {payments?.length}</h4>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-sm">
            <tr>
              <td>#</td>
              <td>Property Name</td>
              <th>Price</th>
              <th>Purchase Date</th>
              <th>Transaction Id</th>
            
               
            </tr>
          </thead>
          <tbody>
            {MyPurchases?.map((property, index) => (
              <tr key={index} className="">
                <td>{index + 1}</td>
               
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{property?.propertyName}</div>
                    </div>
                  </div>
                </td>
                <td>{property?.price}</td>
                <td>{property?.date}</td>
                <td>{property?.transactionId}</td>
               
                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowPayment;
