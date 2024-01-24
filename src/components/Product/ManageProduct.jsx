"use client";
 
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleDeleteProduct = (propertie) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(propertie._id);
      }
    });
  };

  const handleMakeApprove = (propertie) => {
    console.log(propertie);
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
            {properties.map((property, index) => (
              <tr key={index} className="  " >
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          height={100}
                          width={150}
                          src={property?.imageUrl}
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

                <td className="flex gap-2">
                  <button className="btn btn-sm btn-warning">Edit</button>{" "}
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
