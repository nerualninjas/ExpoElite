"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import usePropertyAllData from "./../../hooks/Propertys/usePropertyAllData";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import EditProduct from "./EditProdut";
import Image from "next/image";
import useSellerProperty from "@/hooks/Propertys/useSellerProperty";
import SetOffer from "./SetOffer";
import Link from "next/link";
import Title2 from "../shared/Title/Title2";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageProduct = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  // const { propertyData, isPending, refetch } = usePropertyAllData();
  const { sellerProperty, isPending, refetch } = useSellerProperty();

  const [properties, setProperties] = useState(sellerProperty);

  useEffect(() => {
    setProperties(sellerProperty);
    refetch();
  }, [sellerProperty]);

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
        <Title2 title="Manage Properties" />
      </div>

      <h4 className="text-xl text-rose-600">
        Total Property:{" "}
        <span className="font-bold text-black">{properties?.length}</span>
      </h4>

      <div className=" w-full overflow-x-auto">
        <table className="table">
          <thead className=" text-sm p-0 m-0 ">
            <tr>
              <td>No</td>
              <td>Image</td>
              <td>Name</td>
              <th>Price</th>
              <th>bedrooms</th>
              <th>Bathrooms</th>
              <th>LivingRoom</th>
              <th>Location</th>
              <th>Status</th>
              <th>Type</th>
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
                        <Link href={`/products/${property?._id}`}>
                          <Image
                            height={100}
                            width={150}
                            src={property?.image}
                            alt="Image"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <Link href={`/products/${property?._id}`}>
                        {" "}
                        {property?.propertyName}{" "}
                      </Link>
                      {/* <div className="font-bold">{property?.propertyName}</div> */}
                    </div>
                  </div>
                </td>
                <td>{property?.price}</td>
                <td>{property?.bedrooms}</td>
                <td>{property?.bathrooms}</td>
                <td>{property?.livingRoom}</td>
                <td>{property?.location}</td>
                <td>{property?.publishStatus}</td>
                <td
                  className={
                    property?.propertyType === "rent" ? " text-green-500 " : " "
                  }
                >
                  {property?.propertyType === "rent" ? (
                    property?.propertyType
                  ) : (
                    <span className="text-red-500">
                      {property?.propertyType}
                    </span>
                  )}
                </td>

                <td className="flex items-center gap-2  p-0 m-0">
                  <EditProduct propertyData={property} />
                  <SetOffer propertyData={property} />
                  <button
                    className="btn btn-sm text-white btn-error"
                    onClick={() => handleDeleteProduct(property)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
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
