// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import React from "react";
// import {
//   faMapMarkerAlt,
//   faBed,
//   faBath,
//   faCouch,
// } from "@fortawesome/free-solid-svg-icons";
// import ChatAllUserbox from "./Chat/ChatAllUserbox";
// import { usePathname } from "next/navigation";

// const Rightbar = () => {
//   const pathName = usePathname();
//   return (
//     <>
//       {pathName === "/" && (
//         <div className=" hidden lg:block   ">
//           <div className=" z-0 fixed -bottom-0 top-20 end-0  overflow-x-hidden scrollbar-none hover:scrollbar-thin scrollbar-rounded scrollbar-thumb-rose-500 scrollbar-track-gray-400  ">
//             <h3 className="font-bold text-xl py-2">Product Details</h3>
//             <div className="bg-base-100 w-72  rounded-lg shadow-2xl">
//               <div className="card w-full p-2 bg-base-100 shadow-xl">
//                 <figure>
//                   <img
//                     className=" rounded-lg max-h-[20vh] w-full"
//                     src="https://assets-global.website-files.com/6151887923ecfa4ac66a9e69/648ae1ccbe0209d4f34b5216_hero-after-decompressed.jpeg"
//                     alt="Shoes"
//                   />
//                 </figure>
//                 <div className="flex p-1 gap-1">
//                   <figure>
//                     <img
//                       className="rounded-lg"
//                       src="https://assets-global.website-files.com/6151887923ecfa4ac66a9e69/648ae04d5ee6dbba171c33f1_sky-replacement-after-decompressed-p-800.jpeg"
//                       alt="Shoes"
//                     />
//                   </figure>
//                   <figure>
//                     <img
//                       className="rounded-lg"
//                       src="https://assets-global.website-files.com/6151887923ecfa4ac66a9e69/648addfdca83e0420d9b8dae_lighting-after-decompressed-p-800.jpeg"
//                       alt="Shoes"
//                     />
//                   </figure>
//                 </div>
//                 <div className="p-2 space-y-2">
//                   <h2 className="text-md font-bold">
//                     Product Name
//                     <div className="badge badge-secondary">NEW</div>
//                   </h2>
//                   <div className="flex justify-between items-center">
//                     <div className="w-1/3">
//                       <div className="flex  items-center gap-1">
//                         <FontAwesomeIcon
//                           icon={faBed}
//                           className="text-gray-500 mr-1"
//                         />
//                         <span className="font-bold"> {"2"} </span>
//                       </div>
//                     </div>
//                     <div className="w-1/3">
//                       <div className="flex items-center gap-1">
//                         <FontAwesomeIcon
//                           icon={faBath}
//                           className="text-gray-500 mr-1"
//                         />
//                         <span className="font-bold"> {"2"} </span>
//                       </div>
//                     </div>
//                     <div className="w-1/3">
//                       <div className="flex items-center gap-1">
//                         <FontAwesomeIcon
//                           icon={faCouch}
//                           className="text-gray-500 mr-1"
//                         />
//                         <span className="font-bold"> {"1"} </span>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="text-sm">
//                     If a dog chews shoes whose shoes does he choose?
//                   </p>
//                   <div>
//                     <button className="btn btn-1  btn-sm">read more..</button>
//                   </div>

//                   {/* chat section */}
//                   <section>
//                     <ChatAllUserbox />
//                   </section>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Rightbar;
