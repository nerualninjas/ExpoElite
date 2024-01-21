import Link from "next/link";


const Sidebar = () => {
    return (
        <div className="w-56 hidden md:block fixed start-20 bg-[#FFFFFF] shadow-2xl  rounded-tl-2xl min-h-screen">
          

        <div className="p-4">
        <ul>
           <li>
                <Link href='/dashboard'>Dashboard</Link>
            </li>
           <li>
                <Link href='/'>Homepage</Link>
            </li>
           </ul>
        </div>
        </div>
    );
};

export default Sidebar;