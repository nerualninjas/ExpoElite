import Link from "next/link";


const Sidebar = () => {
    return (
        <div className="w-32 border">
          

           <ul>
           <li>
                <Link href='/dashboard'>Dashboard</Link>
            </li>
           <li>
                <Link href='/'>Homepage</Link>
            </li>
           </ul>
        </div>
    );
};

export default Sidebar;