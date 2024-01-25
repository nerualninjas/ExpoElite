"use client";
import { useForm } from "react-hook-form";

const EditProduct = ({ productId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // You can add your logic to handle form submission here
  };

  return (
    <div className="w-full p-8 rounded-xl">
      <h3 className="font-bold text-lg">Edit Product</h3>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Product Name</label>
          <input
            {...register("ProductName", {
              required: "Product Name is required",
            })}
            type="text"
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
          {errors.ProductName && (
            <p className="text-red-500">{errors.ProductName.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image </label>
          <input
            {...register("image", { required: "Image is required" })}
            type="file"
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
      {...register("ProductQuantity", {
        required: "Product Quantity is required",
      })}
      type="number"
      className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
    />
    {errors.ProductQuantity && (
      <p className="text-red-500">{errors.ProductQuantity.message}</p>
    )}
  </div>
  <div className="space-y-1 text-sm w-full lg:w-1/2">
    <label className="block dark-text-gray-400">Product Price</label>
    <input
      {...register("ProductPrice", {
        required: "Product Price is required",
      })}
      type="number"
      className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
    />
    {errors.ProductPrice && (
      <p className="text-red-500">{errors.ProductPrice.message}</p>
    )}
  </div>
</div>

{/* Additional Fields for EditProduct */}
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
            {...register("ProductType", {
              required: "Product Type is required",
            })}
            className="w-full px-4 py-3 rounded-md text-black"
          >
            <option value="Business">Type 1</option>
            <option value="Business">Type 1</option>
            <option value="Business">Type 1</option>
            <option value="Business">Type 1</option>
          </select>
          {errors.ProductType && (
            <p className="text-red-500">{errors.ProductType.message}</p>
          )}
        </div>

        {/* Product Description */}
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">
            Product Description
          </label>
          <textarea
            {...register("type", {
              required: "Product Description is required",
            })}
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}
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
  );
};

export default EditProduct;