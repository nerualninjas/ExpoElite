"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import EditProduct from "./EditProdut";
import usePropertyAllData from "./../../hooks/Propertys/usePropertyAllData";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

const ManageProduct = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { propertyData, isPending, refetch } = usePropertyAllData();
  const [properties, setProperties] = useState(propertyData);

  useEffect(() => {
    // fetch("property.json")
    //   .then((res) => res.json())
    //   .then((data) => setProperties(data));
    setProperties(propertyData);
    refetch();
  }, [propertyData]);

  const handleDeleteProduct = (propertie) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(propertie._id);
        await axiosPublic
          .delete(`/deleteProperty/${propertie._id}`)
          .then((res) => {
            console.log(res?.data);
            refetch();
            Swal.fire({
              title: "Deleted?",
              text: "You product deleted Successfully!",
              icon: "success",
              timer: 1000,
            });
          });
      }
    });
  };

  return (
    <div className="bg-base-200 p-4 m-4 rounded-xl">
      <div className="text-3xl py-2 ">
        <h2> Manage Product</h2>
      </div>

      <h4>Total Product: {properties?.length}</h4>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className=" text-sm">
            <tr>
              <td>No</td>
              <td>Name</td>
              <th>price</th>
              <th>bedrooms</th>
              <th>bathrooms</th>
              <th>livingRoom</th>
              <th>location</th>
              <th>type</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {properties?.map((property, index) => (
              <tr key={index} className="  ">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          height={100}
                          width={150}
                          src={property?.image}
                          alt="Contest Image"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{property?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{property?.price}</td>
                <td>{property?.bedrooms}</td>
                <td>{property?.bathrooms}</td>
                <td>{property?.livingRoom}</td>
                <td>{property?.location}</td>
                <td>{property?.type}</td>

                <td className="flex items-center gap-2">
                  <EditProduct property={property} />
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDeleteProduct(property)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
