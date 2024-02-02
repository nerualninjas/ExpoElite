import React from 'react';


const Title = ({ title, heading }) => {
    return (
        <div>
        <h1 className="text-4xl mt-10 font-extrabold text-black ">{title}</h1>
        {/* <hr className="border border-rose-600  w-2/3 md:w-1/4   my-4"/> */}
        {/* <div className="w-2/3 md:1/4 border border-[#FF385D] my-2 mx-auto"></div> */}
        <p className="my-6 text-rose-600 ">
          {heading}
        </p>
           
        </div>
    );
};

export default Title;