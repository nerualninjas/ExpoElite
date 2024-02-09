"use client";

import useAxiosSecure from "./../../hooks/useAxiosSecure";
import usePropertyAllData from "./../../hooks/Propertys/usePropertyAllData";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import productsCollection from "@/models/products";
 

const EditProduct = ({ property }) => {
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
    console.log(property._id);
    try {
      await axiosSecure.patch(`/updateProperty/${property._id}`, data);
      console.log("Product updated successfully");

      Swal.fire({
        title: "Property Update Success!",
        text: "Thanks You!",
        icon: "success",
        position: "top-right",
        timer: 1500,
      });

      refetch();
      closeModal(); // Close modal on successful update
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle error, show error message to the user
    }
  };

  return (
    <div className="w-full p-8 rounded-xl">
      <button
        className="btn btn-sm btn-warning"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Edit
      </button>{" "}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box m-0 bg-base-300">
          <div className="modal-action">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Edit Product</h3>
              {/* Product Name */}
              <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">Product Name</label>
                <input
                  defaultValue={property?.propertyName}
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
                defaultValue={property?.image}
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
                  defaultValue={property?.location}
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
                    defaultValue={property?.quantity}
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
                    defaultValue={property?.price}
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
                    defaultValue={property?.bedrooms}
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
                    defaultValue={property?.bathrooms}
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
                    defaultValue={property?.livingRoom}
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

              {/* Product Type/Tags */}
              <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">
                  Product Type/Tags
                </label>
                <select
                  defaultValue={property?.propertyType}
                  {...register("propertyType", {
                    required: "Product Type is required",
                  })}
                  className="w-full px-4 py-3 rounded-md text-black"
                >
                  <option value="Business">Type 1</option>
                  <option value="Business">Type 1</option>
                  <option value="Business">Type 1</option>
                  <option value="Business">Type 1</option>
                </select>
                {errors.propertyType && (
                  <p className="text-red-500">{errors.propertyType.message}</p>
                )}
              </div>

              {/* Product Description */}
              <div className="space-y-1 text-sm">
                <label className="block dark-text-gray-400">
                  Product Description
                </label>
                <textarea
                  defaultValue={property?.propertyDetails}
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
              <div className="flex gap-2 items-end justify-end">
                <button
                  type="submit"
                  className="block p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-1"
                >
                  Update Product
                </button>
                <form method="dialog">
                  <button className="btn btn-error text-white">Close</button>
                </form>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditProduct;
