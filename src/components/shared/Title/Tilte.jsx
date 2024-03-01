import React from 'react';


const Title = ( { title } ) => {
    return (
        <div>
          <h1 className="text-center text-2xl font-bold text-[#212121] mb-2">{title}</h1>
        {/* <hr className="border border-rose-600  w-2/3 md:w-1/4   my-4"/> */}
        {/* <div className="w-2/3 md:1/4 border border-[#FF385D] my-2 mx-auto"></div> */}
        
        {/* <p className="text-center text-[#FF385D] font-semibold my-6"> {heading}</p> */}
        <hr className="w-full md:w-1/4 mx-auto border-rose-400 border-2" />
        </div>
    );
};

export default Title;