"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import usePropertyAllData from "@/hooks/Propertys/usePropertyAllData";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { useState } from "react";

const AddProduct = () => {
  const { user, loading } = UserAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch } = usePropertyAllData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedType, setSelectedType] = useState("sell");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const closeModal = () => {
    reset();
    document.getElementById("my_modal_1").close();
  };

  const onSubmit = async (data) => {
    console.log(data);

    // Example validation: Check if propertyType is selected


    await axiosSecure.post("/addProperty", data).then((res) => {
      console.log(res.data);
      if (res?.data.insertedId === null) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Player Already Register!",
          position: "top-right",
        });
      } else {
        Swal.fire({
          title: "Property added Success!",
          text: "congratulations !",
          icon: "success",
          position: "top-right",
          timer: 1500,
        });
        refetch();
        closeModal();
      }
    });
  };

  return (
    <div className="w-full  p-8  rounded-xl  ">
      <h3 className="font-bold text-lg">Add a Product</h3>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1 text-sm hidden">
          <label className="block dark-text-gray-400">Property Creator Name</label>
          <input
            {...register("propertyCreator", {
              required: "Product Name is required",
            })}
            value={user?.email} 
            type="text"
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
          {errors.propertyCreator && (
            <p className="text-red-500">{errors.propertyCreator.message}</p>
          )}
        </div>
  
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Product Name</label>
          <input
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
          <label className="block dark-text-gray-400">Image </label>
          <input
            {...register("image", { required: "Image is required" })}
            type="text"
            className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        {/* Product Quantity and Product Price */}
        <div className="flex w-full gap-4 flex-col lg:flex-row">
          <div className="space-y-1 text-sm w-full lg:w-1/2">
            <label className="block dark-text-gray-400">Product Quantity</label>
            <input
              {...register("quantity", {
                required: "Product Quantity is required",
              })}
              type="number"
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
            {errors.quantity && (
              <p className="text-red-500">{errors.quantity.message}</p>
            )}
          </div>
         
        </div>

        <div className="flex w-full gap-4 flex-col lg:flex-row">
          <div className="space-y-1 text-sm w-full lg:w-1/2">
            <label className="block dark-text-gray-400">bedrooms</label>
            <input
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
            <label className="block dark-text-gray-400">Living Room(sq)</label>
            <input
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
          <label className="block dark-text-gray-400">Product Type/Tags</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="sell"
                {...register("propertyType", {
                  required: "Product Type is required",
                })}
                checked={selectedType === "sell"}
                onChange={handleTypeChange}
                className="form-radio h-5 w-5 text-black"
              />
              <span className="ml-2">Sell type property</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                value="rant"
                {...register("propertyType", {
                  required: "Product Type is required",
                })}
                checked={selectedType === "rant"}
                onChange={handleTypeChange}
                className="form-radio h-5 w-5 text-black"
              />
              <span className="ml-2">Rant type property</span>
            </label>
          </div>
          {errors.propertyType && (
            <p className="text-red-500">{errors.propertyType.message}</p>
          )}
        </div>

        {/* Additional Fields based on Product Type */}
        {selectedType === "sell" && (
          <>
            {/* Price Input */}
            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">Price</label>
              <input
                {...register("price", {
                  required: "Price is required",
                })}
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>

            {/* Discount Input */}
            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">Discount (%)</label>
              <input
                {...register("discount", {
                  required: "Discount is required",
                })}
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
              {errors.discount && (
                <p className="text-red-500">{errors.discount.message}</p>
              )}
            </div>
          </>
        )}

        {selectedType === "rant" && (
          <>
            {/* 1 Month Package Input */}
            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">1 Month Package</label>
              <input
                {...register("1MonthPackage", {
                  required: "1 Month Package is required",
                })}
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
              {errors["1MonthPackage"] && (
                <p className="text-red-500">{errors["1MonthPackage"].message}</p>
              )}
            </div>

            {/* 6 Month Package Input */}
            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">6 Month Package</label>
              <input
                {...register("6MonthPackage", {
                  required: "6 Month Package is required",
                })}
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
              {errors["6MonthPackage"] && (
                <p className="text-red-500">{errors["6MonthPackage"].message}</p>
              )}
            </div>

            {/* 1 Year Package Input */}
            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">1 Year Package</label>
              <input
                {...register("1YearPackage", {
                  required: "1 Year Package is required",
                })}
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
              {errors["1YearPackage"] && (
                <p className="text-red-500">{errors["1YearPackage"].message}</p>
              )}
            </div>
          </>
        )}



        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Product location</label>
          <input
            {...register("location", {
              required: "Product location is required",
            })}
            type="text"
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        {/* Product Description */}
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">
            Product Description
          </label>
          <textarea
            {...register("propertyDetails", {
              required: "Product Description is required",
            })}
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
          {errors.propertyDetails && (
            <p className="text-red-500">{errors.propertyDetails.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-2 items-end justify-end">
          <button
           
            type="submit"
            className="block p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn   btn-1"
          >
            Add Product
          </button>
          <form method="dialog">
            <button className="btn btn-error text-white">Close</button>
          </form>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;