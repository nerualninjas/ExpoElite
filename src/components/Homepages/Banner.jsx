
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';


const Banner = () => {

  return (
    <div>

      <div className='w-full h-[50vh] my-10 rounded-lg bg-gradient-to-r from-pink-200 to-pink-100  mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='pl-10 '>
            <h2 className='font-semibold text-3xl'>10% Discount</h2>
            <p>Get a discount on certain days and don't miss it</p>
            <button className='rounded-full bg-[#FF385D] text-white text-3xl'><MdArrowOutward /></button>
          </div>
          <div>
            <div className='flex items-center justify-center' >
              <Image width={400} height={100} className='w-full h-full' src={"https://i.postimg.cc/dQTr9xpk/banner2-removebg-preview.png"} alt='picture' />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Banner;

