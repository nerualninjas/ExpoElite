"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

import Image from "next/image";

const ShowPayment = () => {
  const [payments, setPayments] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/showPayment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data))
      .catch((error) => {
        console.error("Error fetching payment data:", error);
         
      });
  }, []);

  return (
    <div className="bg-base-200 p-4 m-4 rounded-xl">
      <div className="text-3xl py-2">
        <h2>Review your order history</h2>
      </div>

      <h4>Total Payment Items: {payments?.length}</h4>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-sm">
            <tr>
              <td>No</td>
              <td>Property Name</td>
              <th>Price</th>
              <th>Date</th>
              <th>transactionId</th>
              <th>status</th>
               
            </tr>
          </thead>
          <tbody>
            {payments?.map((property, index) => (
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
                <td>{property?.status}</td>
                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowPayment;
