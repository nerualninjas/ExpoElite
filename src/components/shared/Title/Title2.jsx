import React from 'react';


const Title2 = ({ title, heading }) => {
    return (
        <div className="text-left  ml-10">
            <div className="w-24 border border-[#FF385D]  "></div>
            <h2 className="text-4xl  pt-8 font-semibold  text-[#54595F]">
                {title}
            </h2>
            <p className="text-rose-600 font-semibold mt-4 mb-10"> {heading}</p>

        </div>
    );
};

export default Title2;