"use client";
// import useCloudinaryUpload from "@/hooks/media/useCloudinaryUpload";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {

  // const { image, loading, imageUrl, error, uploadImage } = useCloudinaryUpload();
  // console.log(imageUrl);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     uploadImage(file);
  //   }
  // };

  return (
    <footer className="px-4 py-8  bg-[#2C2A47] dark:bg-gray-800 dark:text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex ml-4 items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
            <h2 className="text-3xl md:ml-14  font-extrabold text-white">ExpoElite</h2>
          </div>
          {/* <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li >
              <a rel="noopener noreferrer" href="#" className=" text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className=" text-white">
                Privacy
              </a>
            </li>
          </ul> */}
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank">
              <RiInstagramFill className="text-3xl text-white" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-3xl text-white" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
              <FaTwitter className="text-3xl text-white" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        {/* <input type="file" onChange={handleImageChange} />
      {loading && <p>Uploading image...</p>}
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      {error && <p style={{ color: 'red' }}>{error}</p>} */}
      </div>
    </footer>
  );
};

export default Footer;
