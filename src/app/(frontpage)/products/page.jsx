"use client";
import Link from "next/link";
import AddProduct from "@/components/Product/AddProduct";
import ManageProduct from "@/components/Product/ManageProduct";
import React from "react";
import useAUser from '@/hooks/users/useAUser';
import { useState } from "react";
import useSellerProperty from '@/hooks/Propertys/useSellerProperty';
import PrivateRoutes from "@/libs/PrivateRoute";


const ProductPage = () => {
  const { userInfoData } = useAUser();
  const {sellerPropertyLength}=useSellerProperty();
  const [sellerNotify,handleSellerNotify]=useState();
  return (
    <PrivateRoutes>
      <div className=" w-full">
      <div className="  font-bold ml-4 mt-10 ">

        {userInfoData?.membership === "free" ?
      <>
        {sellerPropertyLength < 3 ? <button
          className="btn btn-1 "
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add a Property
        </button>: 
        //free user limit button
       <button
          className="btn btn-1 "
         onClick = {handleSellerNotify}
        >
          Add a Property
        </button>
        }
      </>
        :
        <> {userInfoData?.membership === "premium-monthly" 
        || userInfoData?.membership === "premium-yearly" && <button
        className="btn btn-1 "
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add a Property
      </button> } </>
        
        }

        {sellerNotify && <>
        
          <p className="text-rose-400 py-1">Free seller limit end! need Premium Subscription</p> 
          <Link className='p-1  rounded-md bg-rose-400 text-white'  href="/profile"
        > Choose a Plan 
                </Link>
        </>
        
       }
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
    </PrivateRoutes>
  );
};

export default ProductPage;
