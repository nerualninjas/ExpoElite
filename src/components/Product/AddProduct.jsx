import { useState } from "react";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import usePropertyAllData from "@/hooks/Propertys/usePropertyAllData";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const AddProduct = () => {
  const { user, loading } = UserAuth();
  const axiosSecure = useAxiosSecure();
  const { propertyData, refetch } = usePropertyAllData();

  const email = user?.email;

  const [selectedType, setSelectedType] = useState("Sell");
  const apiKey = "ed43ba8e57abccece726e3d23ee12a6e";
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const closeModal = () => {
    document.getElementById("my_modal_1").close();
  };

  const initialFormData = {
    propertyCreator: email,
    specialOffers: "",
    propertyName: "",
    image: "",
    bedrooms: "",
    bathrooms: "",
    livingRoom: "",
    price: "",
    location: "",
    month1: "",
    month6: "",
    month12: "",
    description: "",
    propertyCategory: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const photoURL = e.target.photoURL.files[0];

    const imageFile = { image: photoURL };

    try {
      const res = await axiosSecure.post(imageHostingApi, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const myData = {
        //product info 
        ...formData,
        propertyType: selectedType === "Sell" ? "Sell" : "Rent",
        
       //sellar info
        email: user?.email,
        sellerImage: user?.photoURL,
        sellerName: user?.displayName,
        
        //image link 
        image: res.data.data.url,
        image2: e.target.photoURL2.value,
        image3: e.target.photoURL3.value,
       
        //init data 
        AddedDate: new Date(),
        propertyMainId: propertyData?.length + 1,
        likeBy: [],
        dislikeBy: [" "],
        publishStatus: "unpublish",
        commentLogs: [
          {
            commentBy: " ",
            comment: " ",
            commentDate: " ",
            commentTime: " ",
          },
        ],

      };

      axiosSecure.post("/addProperty", myData).then((res) => {
        if (res?.data.insertedId === null) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Player Already Registered!",
            position: "top-right",
          });
        } else {
          Swal.fire({
            title: "Property added Success!",
            text: "Congratulations!",
            icon: "success",
            position: "top-right",
            timer: 1500,
          });
          refetch();
          closeModal();
          setFormData(initialFormData);
        }
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="w-full p-8 rounded-xl">
      <h3 className="font-bold text-lg">Add a Property</h3>

      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Property Name</label>
          <input
            required
            value={formData.propertyName}
            onChange={handleChange}
            name="propertyName"
            type="text"
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image 1</label>
          <input
            name="photoURL"
            required
            type="file"
            className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image 2 </label>
          <input
            name="photoURL2"
            type="text"
            className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
          />
        </div>{" "}
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image 3 </label>
          <input
            name="photoURL3"

            type="text"
            className="w-full bg-white text-black px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
          />
        </div>
        <div className="flex w-full gap-4 flex-col lg:flex-row">
          <div className="space-y-1 text-sm w-full lg:w-1/2">
            <label className="block dark-text-gray-400">Bedrooms</label>
            <input
              required
              value={formData.bedrooms}
              onChange={handleChange}
              name="bedrooms"
              type="number"
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm w-full lg:w-1/2">
            <label className="block dark-text-gray-400">Bathrooms</label>
            <input
              required
              value={formData.bathrooms}
              onChange={handleChange}
              name="bathrooms"
              type="number"
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm w-full lg:w-1/2">
            <label className="block dark-text-gray-400">Living Room(sq)</label>
            <input
              required
              value={formData.livingRoom}
              onChange={handleChange}
              name="livingRoom"
              type="number"
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Property Type/Tags</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Sell"
                name="Sell"
                checked={selectedType === "Sell"}
                onChange={handleTypeChange}
                className="form-radio h-5 w-5 text-black"
              />
              <span className="ml-2">Sell type property</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Rent"
                name="Rent"
                checked={selectedType === "Rent"}
                onChange={handleTypeChange}
                className="form-radio h-5 w-5 text-black"
              />
              <span className="ml-2">Rent type property</span>
            </label>
          </div>
        </div>
        {selectedType === "Sell" && (
          <>
            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">Price</label>
              <input
                value={formData.price}
                onChange={handleChange}
                name="price"
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">Discount (%)</label>
              <input
                value={formData.discount}
                onChange={handleChange}
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
            </div>
            <div className="">
              <label className="block dark-text-gray-400">
                Special Offers
                <input
                  type="number"
                  onChange={handleChange}
                  value={formData.specialOffers}
                  name="specialOffers"
                  className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
                />
              </label>
            </div>
          </>
        )}
        {selectedType === "Rent" && (
          <>
            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">
                1 Month Package
              </label>
              <input
                value={formData.month1}
                onChange={handleChange}
                name="month1"
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">
                6 Month Package
              </label>
              <input
                value={formData.month6}
                onChange={handleChange}
                name="month6"
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block dark-text-gray-400">1 Year Package</label>
              <input
                value={formData.month12}
                onChange={handleChange}
                name="month12"
                type="number"
                className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
              />
            </div>
          </>
        )}
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Property location</label>
          <input
            required
            value={formData.location}
            onChange={handleChange}
            name="location"
            type="text"
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Property Category</label>
          <input
            required
            value={formData.propertyCategory}
            onChange={handleChange}
            name="propertyCategory"
            type="text"
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">
            Property Description
          </label>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>
        <div className="flex gap-2 items-end justify-end">
          <button
            type="submit"
            className="block p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-1"
          >
            Add Property
          </button>
          <button
            type="button"
            className="btn btn-error text-white"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
