"use client";
import AddProduct from "@/components/Product/AddProduct";
import ManageProduct from "@/components/Product/ManageProduct";
import React from "react";

const ProductPage = () => {
  return (
    <div className=" w-full">
      <div className="  font-bold ml-4  ">
        Product management <hr /> <br />
        <button
          className="btn btn-1 "
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add a Product
        </button>
      </div>
      <div className="">
        <ManageProduct/>
      </div>

      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box m-0 bg-base-300">
          <div className="modal-action">
            <AddProduct />
          </div>
        </div>
      </dialog>

      
    </div>
  );
};

export default ProductPage;
