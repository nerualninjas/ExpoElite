"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
 
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useSellerProperty from "@/hooks/Propertys/useSellerProperty";
const SetOffer = ({ propertyData }) => {
  const [openDetail, handleOpenDetails] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { refetch } = useSellerProperty();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const closeModal = () => {
    reset(); 
    document.getElementById("my_modal_2").close();
  };

  const onSubmit = async (data) => {
    console.log(propertyData._id);
    try {
      await axiosSecure.patch(`/updateProperty/${propertyData._id}`, data);

        Swal.fire({
          title: "Property Update Success!",
          text: "Thanks You!",
          icon: "success",
          position: "top-right",
          timer: 1500,
        });

      reset();
      refetch();

      handleOpenDetails(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="w-full p-8 rounded-xl">
      <button
        onClick={() => handleOpenDetails(true)}
        className="btn btn-sm btn-info"
        data-modal-target="offer-modal"
        data-modal-toggle="offer-modal"
        // onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Set offer
      </button>{" "}
      {openDetail && (
        <div
          id="offer-modal"
          tabIndex={0}
          aria-hidden="true"
          className=" fixed center top-0 pt-24 p-4 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="md:flex justify-between gap-4 modal-box   w-full mx-auto space-y-2  p-10 bg-base-300">
            <div className="w-full mb-10">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-lg">Set offer by time Product</h3>
                {/* Product Name */}
                <div className="space-y-1 text-sm">
                  <label className="block dark-text-gray-400 font-bold">
                    Product Name: {propertyData.propertyName}
                  </label>
                </div>

                <div className="flex w-full gap-4 flex-col lg:flex-row ">
                  <div className="space-y-1 text-sm w-full lg:w-1/2">
                    <label className="block dark-text-gray-400">
                      Old Price
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
                  <div className="space-y-1 text-sm w-full lg:w-1/2">
                    <label className="block dark-text-gray-400">
                      Offer Price
                    </label>
                    <input
                      defaultValue={propertyData.offerPrice}
                      {...register("offerPrice", {
                        required: "Product offer price is required",
                      })}
                      type="number"
                      className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                    />
                    {errors.offerPrice && (
                      <p className="text-red-500">
                        {errors.offerPrice.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block dark-text-gray-400">
                    Offer Start Date
                  </label>
                  <input
                    {...register("offerStartDate", {
                      required: "offer Start Date  is must required",
                    })}
                    type="Date"
                    defaultValue={propertyData.offerStartDate}
                    className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                  />
                  {errors.offerStartDate && (
                    <p className="text-red-500">
                      {errors.offerStartDate.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block dark-text-gray-400">
                    Offer End Date
                  </label>
                  <input
                    {...register("offerEndDate", {
                      required: "offerEndDate  is must required",
                    })}
                    type="Date"
                    defaultValue={propertyData.offerEndDate}
                    className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                  />
                  {errors.offerEndDate && (
                    <p className="text-red-500">
                      {errors.offerEndDate.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1 text-sm">
                  <label className="block dark-text-gray-400">
                    Offer note:
                  </label>
                  <textarea
                    defaultValue={propertyData.offerDetails}
                    {...register("offerDetails", {
                      required: "Product Description is required",
                    })}
                    className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
                  />
                  {errors.offerDetails && (
                    <p className="text-red-500">
                      {errors.offerDetails.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex  gap-2 items-end justify-end">
                  <button
                    type="submit"
                    className="block p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-1"
                  >
                    Set offer Product
                  </button>
                  <form method="div">
                    <button
                      onClick={() => handleOpenDetails(false)}
                      className="btn  btn-error text-white"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetOffer;
