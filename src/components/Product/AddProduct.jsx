"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import usePropertyAllData from "@/hooks/Propertys/usePropertyAllData";

const AddProduct = () => {
  const axiosSecure = useAxiosSecure();
  const {refetch}=usePropertyAllData()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    // You can add your logic to handle form submission here
    await axiosSecure.post("/addProperty", data).then((res) => {
      // console.log(res.data);
      if (res?.data.insertedId === null) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Player Already Register!",
          position: "top-right",
          footer: `<a href="#">Please check </a>`,
        });
      } else {
        Swal.fire({
          title: "Property added Success!",
          text: "Thanks You!",
          icon: "success",
          position: "top-right",
          timer: 1500,
        });
        refetch()
      }
    });
  };

  return (
    <div className="w-full  p-8  rounded-xl  ">
      <h3 className="font-bold text-lg">Add a Product</h3>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
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
        {/* need to done image Upload  */}
        {/* Image URL */}
        {/* <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image </label>
          <input
            {...register("image", { required: "Image is required" })}
            type="file"
            className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div> */}

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
          <div className="space-y-1 text-sm w-full lg:w-1/2">
            <label className="block dark-text-gray-400">Product Price</label>
            <input
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

        {/* Product Type/Tags */}
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Product Type/Tags</label>
          <select
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
