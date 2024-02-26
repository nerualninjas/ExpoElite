"use client";

import useAxiosSecure from "./../../hooks/useAxiosSecure";
import usePropertyAllData from "./../../hooks/Propertys/usePropertyAllData";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import productsCollection from "@/models/products";
import { useState } from "react";
 

const EditProduct = ({ propertyData }) => {
  const [openDetail, handleOpenDetails] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { refetch } = usePropertyAllData();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const closeModal = () => {
    reset(); // Reset form fields
    document.getElementById("my_modal_2").close();
  };

  const onSubmit = async (data) => {
    console.log(propertyData._id);
    try {
      await axiosSecure.patch(`/updateProperty/${propertyData._id}`, data);
      console.log("Product updated successfully");

      Swal.fire({
        title: "Property Update Success!",
        text: "Thanks You!",
        icon: "success",
        position: "top-right",
        timer: 1500,
      });

      refetch();

      handleOpenDetails(false);
    } catch (error) {
      console.error("Error updating product:", error);
      

    }
  };

  return (
    <div className="w-full p-8 rounded-xl">
      <button
      onClick={()=>handleOpenDetails(true)}
        className="btn btn-sm btn-warning"
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        // onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Edit
      </button>{" "}
      {openDetail && <div  id="crud-modal"
          tabIndex={0}
          aria-hidden="true"
          className=" fixed center top-0 pt-24 p-4 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"

          >
        <div className="md:flex justify-between gap-4 modal-box   w-full mx-auto space-y-2  p-10 bg-base-300">
          <div className="w-full mb-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Edit Product</h3>
              {/* Product Name */}
              <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">Product Name</label>
                <input
                  defaultValue={propertyData.propertyName}
                  {...register("propertyName", {
                    required: "Product Name is required",
                  })}
                  type="text"
                  className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
                />
                {errors.propertyName && (
                  <p className="text-red-500">{errors.propertyName.message}</p>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">Image url </label>
                <input
                defaultValue={propertyData.image}
                  {...register("image", { required: "Image is required" })}
                  type="text"
                  className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div> 
               <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">Location </label>
                <input
                  {...register("location", { required: "location  is must required" })}
                  type="text"
                  defaultValue={propertyData.location}
                  className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                />
                {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )}
              </div>

              {/* Product Quantity and Product Price */}
              <div className="flex w-full gap-4 flex-col lg:flex-row">
                <div className="space-y-1 text-sm w-full lg:w-1/2">
                  <label className="block dark-text-gray-400">
                    Product Quantity
                  </label>
                  <input
                    {...register("quantity", {
                      required: "Product Quantity is required",
                    })}
                    defaultValue={propertyData.quantity}
                    type="number"
                    className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                  />
                  {errors.quantity && (
                    <p className="text-red-500">{errors.quantity.message}</p>
                  )}
                </div>
                <div className="space-y-1 text-sm w-full lg:w-1/2">
                  <label className="block dark-text-gray-400">
                    Product Price
                  </label>
                  <input
                    defaultValue={propertyData.price}
                    {...register("price", {
                      required: "Product Price is required",
                    })}
                    type="number"
                    className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                  />
                  {errors.price && (
                    <p className="text-red-500">{errors.price.message}</p>
                  )}
                </div>
              </div>

              {/* Additional Fields for EditProduct */}
              <div className="flex w-full gap-4 flex-col lg:flex-row">
                <div className="space-y-1 text-sm w-full lg:w-1/2">
                  <label className="block dark-text-gray-400">bedrooms</label>
                  <input
                    defaultValue={propertyData.bedrooms}
                    {...register("bedrooms", {
                      required: "bedrooms no is required",
                    })}
                    type="number"
                    className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                  />
                  {errors.bedrooms && (
                    <p className="text-red-500">{errors.bedrooms.message}</p>
                  )}
                </div>
                <div className="space-y-1 text-sm w-full lg:w-1/2">
                  <label className="block dark-text-gray-400">bathrooms</label>
                  <input
                    defaultValue={propertyData.bathrooms}
                    {...register("bathrooms", {
                      required: "bathrooms is required",
                    })}
                    type="number"
                    className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                  />
                  {errors.bathrooms && (
                    <p className="text-red-500">{errors.bathrooms.message}</p>
                  )}
                </div>
                <div className="space-y-1 text-sm w-full lg:w-1/2">
                  <label className="block dark-text-gray-400">
                    Living Room(sq)
                  </label>
                  <input
                    defaultValue={propertyData.livingRoom}
                    {...register("livingRoom", {
                      required: "livingRoom is required",
                    })}
                    type="number"
                    className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                  />
                  {errors.livingRoom && (
                    <p className="text-red-500">{errors.livingRoom.message}</p>
                  )}
                </div>
              </div>

 
              <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">
                  Product Type
                </label>

                <input  className="w-full px-4 py-3 rounded-md text-black" value={propertyData.propertyType}  />
          
              </div>

              {/* Product Description */}
              <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">
                  Product Description
                </label>
                <textarea
                  defaultValue={propertyData.propertyDetails}
                  {...register("propertyDetails", {
                    required: "Product Description is required",
                  })}
                  className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
                />
                {errors.propertyDetails && (
                  <p className="text-red-500">
                    {errors.propertyDetails.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex  gap-2 items-end justify-end">
                <button
                  type="submit"
                  className="block p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-1"
                >
                  Update Product
                </button>
                <form method="div">
                  <button onClick={()=>handleOpenDetails(false)} className="btn  btn-error text-white">Close</button>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default EditProduct;
