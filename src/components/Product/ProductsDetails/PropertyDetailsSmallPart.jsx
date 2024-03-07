"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCouch } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import Link from 'next/link';
import usePropertyData from '@/hooks/Propertys/usePropertyData';
import { UserAuth } from '@/app/(auth)/context/AuthContext';

const PropertyDetailsSmallPart = ({ propertyId }) => {
    const { user, loading } = UserAuth();
    const { propertySingleData, isPending } = usePropertyData(propertyId);
    const { propertyName, propertyCategory, price, image, bathrooms, bedrooms, livingRoom } = propertySingleData || {};
    const [compareList, setCompareList] = useState(false);

    useEffect(() => {
        const productIds = localStorage.getItem('productIds');
        const length = productIds ? JSON.parse(productIds).length : 0;
        if (length === 2) {
            setCompareList(true)
        }
        console.log(length);
    }, [])


    const addToCompare = () => {
        let productIds = localStorage.getItem('productIds');

        if (!productIds) {
            productIds = [];
        } else {
            productIds = JSON.parse(productIds);
        }

        if (productIds.length < 2) {

            if (productIds.length < 1) {
                productIds.push(propertyId);
                Swal.fire({
                    icon: 'success',
                    title: 'Property added to compare 1',
                    text: 'Add another property to view comparison',
                })
            }
            else if (productIds.includes(`${propertyId}`)) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This property is already added to compare.',
                })

            }
            else {
                productIds.push(propertyId);
                Swal.fire({
                    icon: 'success',
                    title: 'Property added to compare 2',
                    text: 'Click on "Compare Now" button to view comparison',
                });
                setCompareList(true)
            }

        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You can only compare two properties at a time.',
            })
        }

        localStorage.setItem('productIds', JSON.stringify(productIds));
    };



    return (
        <div className='w-full bg-rose-200 -translate-y-56 md:-translate-y-32  rounded py-10 md:py-10 px-4 md:px-20 my-10 '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <Image src={image} alt="property image" width={150} height={150} />
                <div className='text-center md:text-start'>
                    <h1 className='text-lg md:text-xl'>{propertyCategory}</h1>
                    <h1 className='text-sm md:text-lg '>{propertyName}</h1>
                </div>
                <div className='flex md:flex-col items-center justify-between  gap-4'>
                    <div>
                        <FontAwesomeIcon
                            icon={faBed}
                            className="text-rose-500 mr-1 text-xl"
                        />{" "}
                        <span className="font-bold">  {bedrooms}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faBath}
                            className="text-rose-500 mr-1 text-xl"
                        />{" "}
                        <span className="font-bold">  {bathrooms} </span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faCouch}
                            className="text-rose-500 mr-1 text-xl"
                        />{" "}
                        <span className="font-bold">  {livingRoom}</span>
                    </div>
                </div>
                <h1 className=' text-xl font-bold text-rose-600 md:text-2xl  '>${price}</h1>

                {compareList ? <>
                    <Link href="/compare">
                        <button className='bg-rose-600 hover:bg-rose-100 text-white hover:text-rose-700 px-4 py-2 rounded text-extrabold'>Compare Now</button>
                    </Link>
                </>
                    :
                    <><button onClick={addToCompare} className='bg-rose-600 hover:bg-rose-100 text-white hover:text-rose-700 px-4 py-2 rounded text-extrabold'>Wanna Compare?</button></>
                }
            </div>
        </div>
    );
};

export default PropertyDetailsSmallPart;
