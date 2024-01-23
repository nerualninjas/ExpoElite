"use client";
import AddProduct from "@/components/Product/AddProduct";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <button>Add New Product</button>

      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>

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
