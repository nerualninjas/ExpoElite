"use client"
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAUserPurchase from '@/hooks/users/useAUserPurchase';
const PurchaseUser = () => {
    const {MyPurchases} = useAUserPurchase();

    const count = MyPurchases?.length || 0;
    return (
    
                <div className='flex justify-between items-center bg-gray-100 p-10 rounded-md gap-4  shadow-md' >
                    <FontAwesomeIcon className='rounded-full text-rose-400 w-16 h-16' icon={faShop} />
                    <div className='flex flex-col justify-between items-center text-center'>
                        <p className='text-rose-600 '>Purchases</p>
                        <p className='text-rose-600 text-2xl'>{count}</p>
                    </div>
                </div>
          
    );
};

export default PurchaseUser;