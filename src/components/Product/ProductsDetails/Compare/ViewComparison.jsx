"use client";
import React, { useEffect, useState } from 'react';
import usePropertyData from '@/hooks/Propertys/usePropertyData';
import Title2 from '@/components/shared/Title/Title2';
import {
    faBath,
    faBed,
    faCouch,
    faMapMarkerAlt,
    faTimes,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Swal from 'sweetalert2';

const ViewComparison = ({ propertyId }) => {
    const { propertySingleData, isPending } = usePropertyData(propertyId);
    const { propertyName, propertyCategory, price, image, bathrooms, bedrooms, livingRoom } = propertySingleData || {};

    const productIds = localStorage.getItem('productIds');
    const compareList = JSON.parse(productIds);
    // console.log(compareList[0], compareList[1]);


    const { propertySingleData: product1, isPending: isPending1, refetch: refetch1 } = usePropertyData(compareList[0]);
    const { propertySingleData: product2, isPending: isPending2, refetch: refetch2 } = usePropertyData(compareList[1]);

    useEffect(() => {
        refetch1();
        refetch2();
    }, [compareList, refetch1, refetch2]);
    // console.log(compareList)


    const renderDifferences = () => {
        if (!product1 || !product2) return null;
        let betterProductPrice = "";
        let betterProductBedrooms = "";
        let betterProductBathrooms = "";
        let betterProductLivingRoom = "";
        // Calculate differences
        if (product1.price === product2.price) {
            betterProductPrice = "Both products have the same price";
        }
        else if (product1.price > product2.price) {
            betterProductPrice = "Product 2";
        }
        else {
            betterProductPrice = "Product 1";
        }


        if (product1.bedrooms === product2.bedrooms) {
            betterProductBedrooms = "Both products have the same number of bedrooms";
        }
        else if (product1.bedrooms > product2.bedrooms) {
            betterProductBedrooms = "Product 1";
        }
        else {
            betterProductBedrooms = "Product 2";
        }

        if (product1.bathrooms === product2.bathrooms) {
            betterProductBathrooms = "Both products have the same number of bathrooms";
        }
        else if (product1.bathrooms > product2.bathrooms) {
            betterProductBathrooms = "Product 1";
        }
        else {
            betterProductBathrooms = "Product 2";
        }

        if (product1.livingRoom === product2.livingRoom) {
            betterProductLivingRoom = "Both products have the same number of living rooms";
        }
        else if (product1.livingRoom > product2.livingRoom) {
            betterProductLivingRoom = "Product 1";
        }
        else {
            betterProductLivingRoom = "Product 2";
        }

        return (
            <>

                <div className="grid grid-cols-1 gap-2">
                    <h1 className="text-3xl text-rose-600 font-bold pl-3">Property Differences in many aspects</h1>
                    <div className="card bg-base-100 p-3">
                        <h3 className="text-xl font-bold">Price</h3>
                        <p>{product1.price} vs {product2.price} =  <span className="text-rose-600 font-semibold">{betterProductPrice}</span></p>
                    </div>
                    <div className="card bg-base-100 p-3">
                        <h3 className="text-xl font-bold">Bedrooms</h3>
                        <p>{product1.bedrooms} vs {product2.bedrooms} =  <span className="text-rose-600 font-semibold">{betterProductBedrooms}</span> </p>
                    </div>
                    <div className="card bg-base-100 p-3">
                        <h3 className="text-xl font-bold">Bathrooms</h3>
                        <p>{product1.bathrooms} vs {product2.bathrooms} = <span className="text-rose-600 font-semibold">{betterProductBathrooms}</span> </p>
                    </div>
                    <div className="card bg-base-100 p-3">
                        <h3 className="text-xl font-bold">Living Room</h3>
                        <p className=''>{product1.livingRoom} vs {product2.livingRoom} = <span className="text-rose-600 font-semibold">{betterProductLivingRoom}</span></p>
                    </div>
                    <div className="card bg-base-100 p-3">
                        <h3 className="text-xl font-bold">Location</h3>
                        <p>{product1.location} vs {product2.location} = <span className="text-rose-600 font-semibold">{"Choose one as your need"}</span> </p>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div>
            {isPending1 || isPending2 ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Title2 title="Property Compare" />
                    <div className='flex flex-col justify-between items-center mb-10'>
                        <div className="flex flex-col md:flex-row  justify-between items-center mx-auto my-2 gap-2 md:gap-20 ">
                            {/* Product 1 details */}
                            {product1 && (
                                <>
                                    {/* Display other product details */}
                                    <div className="card bg-base-100 m-2 ">
                                        <div className="flex justify-between items-center gap-6 md:gap-20 my-4">
                                            <h1 className="text-3xl text-rose-600 font-bold">{product1.propertyName}</h1>
                                        </div>
                                        <div>
                                            <Image
                                                width={400}
                                                height={200}
                                                src={product1?.image}
                                                alt={product1?.propertyName}
                                                className="object-cover rounded-t-md w-full mb-4 h-30 sm:h-60 dark:bg-gray-500"
                                            />

                                            <h1 className="top-20 right-0 px-3 py-2 bg-slate-100 absolute">
                                                {product1?.propertyType}
                                            </h1>
                                        </div>

                                        <div className=" px-3   ">
                                            <h2 className="flex justify-between card-title font-bold text-2xl text-[#2C2946] text-left py-2">
                                                {product1?.propertyType === "Sell" ? (
                                                    <>${product1?.price}</>
                                                ) : (
                                                    <>Package For a month: ${product1?.month1} <br />
                                                        Package For 6 months: ${product1?.month6}
                                                        Package For 1 year: ${product1?.month12}
                                                    </>
                                                )}

                                                <div className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                    {product1?.propertyCategory}
                                                </div>
                                            </h2>

                                            <div className="flex text-xs  w-full    content-stretch justify-between pb-2">
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faBed}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        <span className="font-bold">{product1.bedrooms}</span>
                                                    </div>
                                                    <br />
                                                    Bedrooms
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faBath}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        <span className="font-bold">
                                                            {" "}
                                                            {product1.bathrooms}{" "}
                                                        </span>
                                                    </div>
                                                    <br />
                                                    Bathrooms
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faCouch}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        <span className="font-bold">
                                                            {" "}
                                                            {product1.livingRoom}{" "}
                                                        </span>
                                                    </div>
                                                    <br />
                                                    LivingRoom
                                                </div>
                                            </div>

                                            <hr className="py-2" />
                                            <div className="card-actions py-2 flex justify-between w-full">
                                                <div className="text-xs w-2/4">
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faMapMarkerAlt}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        {product1.location}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {/* Product 2 details */}
                            {product2 && (
                                <>

                                    {/* Display other product details */}
                                    <div className="card bg-base-100 m-2 ">
                                        <div className="flex justify-between items-center my-4">
                                            <h1 className="text-3xl text-rose-600 font-bold">{product2.propertyName}</h1>
                                        </div>
                                        <div>
                                            <Image
                                                width={400}
                                                height={200}
                                                src={product2?.image}
                                                alt={product2?.propertyName}
                                                className="object-cover rounded-t-md w-full mb-4 h-30 sm:h-60 dark:bg-gray-500"
                                            />

                                            <h1 className="top-20 right-0 px-3 py-2 bg-slate-100 absolute">
                                                {product2?.propertyType}
                                            </h1>
                                        </div>

                                        <div className=" px-3   ">
                                            <h2 className="flex justify-between card-title font-bold text-2xl text-[#2C2946] text-left py-2">
                                                {product2?.propertyType === "Sell" ? (
                                                    <>${product2?.price}</>
                                                ) : (
                                                    <>Package For a month: ${product2?.month1} <br />
                                                        Package For 6 months: ${product2?.month6}
                                                        Package For 1 year: ${product2?.month12}
                                                    </>
                                                )}

                                                <div className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                    {product2?.propertyCategory}
                                                </div>
                                            </h2>

                                            <div className="flex text-xs  w-full    content-stretch justify-between pb-2">
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faBed}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        <span className="font-bold">{product2.bedrooms}</span>
                                                    </div>
                                                    <br />
                                                    Bedrooms
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faBath}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        <span className="font-bold">
                                                            {" "}
                                                            {product2.bathrooms}{" "}
                                                        </span>
                                                    </div>
                                                    <br />
                                                    Bathrooms
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faCouch}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        <span className="font-bold">
                                                            {" "}
                                                            {product2.livingRoom}{" "}
                                                        </span>
                                                    </div>
                                                    <br />
                                                    LivingRoom
                                                </div>
                                            </div>

                                            <hr className="py-2" />
                                            <div className="card-actions py-2 flex justify-between w-full">
                                                <div className="text-xs w-2/4">
                                                    <div className="flex items-center gap-1">
                                                        <FontAwesomeIcon
                                                            icon={faMapMarkerAlt}
                                                            className="text-rose-600 mr-1"
                                                        />
                                                        {product2.location}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}


                            {renderDifferences()}
                        </div>

                    </div>
                </>
            )}


        </div>
    );
};

export default ViewComparison;