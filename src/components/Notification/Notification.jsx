

const Notification =({open})=>{

    return( 
    <div>

        <ul className="bg-base-200 px-6 space-y-2 py-2 rounded-lg" onMouseLeave={()=>open(false)}>
            <li>Notification One</li>
            <li>Notification One</li>
            <li>Notification One</li>
            <li>Notification One</li>
        </ul>
    </div>);
    
}


export default Notification;