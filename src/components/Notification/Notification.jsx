import Link from "next/link";


const Notification =({open})=>{

    const notificationData = [
        {notificationText: "User Created", notificationPath:'/',createdTime:"10.44"},
        {notificationText: "Product added", notificationPath:'/',createdTime:"10.44"},
        {notificationText: "New Message", notificationPath:'/',createdTime:"10.44"},
        {notificationText: "Ok", notificationPath:'/',createdTime:"10.44"}
    ]

    return( 
    <div className="bg-base-200 pl-5  w-[20vw] py-2 rounded-lg">
<div className="flex items-center justify-between">
<h2 className="text-xl">Notifications</h2>
<button className="text-3xl btn text-center btn-circle pb-4 pr-5">...</button>
</div>
        <ul className="bg-base-200  space-y-2 py-2 rounded-lg" onMouseLeave={()=>open(false)}>
            {notificationData?.map((data)=> <li key={data.notificationText} className="hover:bg-gray-500 pl-2 p-1 rounded-lg" >
                <Link href={data.notificationPath}>{data.notificationText} <br />
 <span className="text-[10px] text-rose-500">{data.createdTime} hours ago</span>              
                
                </Link>
            </li>)}
        </ul>
    </div>);
    
}


export default Notification;