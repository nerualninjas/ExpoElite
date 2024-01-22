'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // Fetch data directly from the JSON file
    fetch('/testimonial.json')
      .then(res => res.json())
      .then(data => setPersons(data))
  }, []);

  return (
    <div className='text-center bg-sky-100 h-[90vh] my-10 py-10 '>
      <h1 className='text-4xl mt-10 font-bold text-sky-950'>Our Testimonials</h1>
      <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

     <div className='grid grid-cols-1 md:grid-cols-3 pt-10 gap-4'>
     {persons.map((person, index) => (
        <div key={index} className='flex flex-col justify-center items-center w-60 h-72 rounded border-2 shadow-2xl my-10 '>
          <div className='bg-white h-36 px-6 pt-8 text-sm'>
            <p>{person.description}</p>
          </div>
          <div className='absolute'>
            <Image className='w-20 h-20 rounded-full border-4 border-sky-100' src={person.image} width={200} height={200} alt='testimonials' />
          </div>
          <div className='h-36 pt-14 px-6 text-sm font-bold '>
            <h1>{person.name}</h1>
            {/* <h2>{person.designation}</h2> */}
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Testimonials;
