"use client"

import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const ShowPayment = () => {
  const { loading, user } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const { data: MyPurchases, isPending, refetch } = useQuery({
    queryKey: ["MyPurchases"],
    enabled: !loading, // Don't fetch data during SSR
    queryFn: async () => {
      const res = await axiosPublic.get(`/showPayment?email=${user?.email}`);
      console.log(res?.data);
      return res?.data;
    },
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="text-3xl mb-4">
        <h2 className="font-bold">Review Your Order History</h2>
      </div>

      <h4 className="text-lg mb-2">Total Payment Items: {MyPurchases?.length}</h4>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Property Name</th>
              <th className="py-2">Price</th>
              <th className="py-2">Purchase Date</th>
              <th className="py-2">Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {MyPurchases?.map((property, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{property?.propertyName}</td>
                <td className="py-2">${property?.price}</td>
                <td className="py-2">{property?.date}</td>
                <td className="py-2">{property?.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowPayment;
