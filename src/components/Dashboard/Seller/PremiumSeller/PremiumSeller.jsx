import PremiumSellerCard from '@/components/Dashboard/Seller/PremiumSeller/PremiumSellerCard';
import PremiumSellerYearly from '@/components/Dashboard/Seller/PremiumSeller/PremiumSellerYear';
import FreeSellerCard from '@/components/Dashboard/Seller/PremiumSeller/FreeSellerCard';
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Swal from "sweetalert2";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const PremiumSeller= ()=>{
  const { user } = UserAuth();
 const axiosSecure = useAxiosSecure();


const handleBeSeller = (d)=>{

  //date calculation for subscription
  const startDate=  new Date();
  const endDate = new Date(startDate);

  if(d.membership === "premium-monthly"){
    endDate.setDate(endDate.getDate()+30);
  }else if (d.membership === "premium-yearly"){
    endDate.setDate(endDate.getDate()+365);
  }else{
    endDate.setDate(endDate.getDate()+2); //todo 15days
  }

  const sellerReg= {
    sellerRegStartDate: startDate,
    sellerExpireDate: endDate,
    sellerRegStatus: "pending",
  }

  const data ={...d,...sellerReg};
  if(data){
    Swal.fire({
      title: `Please pay ${d.amount}$`,
      text: `You will be ${d.membership} seller !`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ok"
    }).then( async (result) => {
      if (result.isConfirmed) {

        try {
          const res = await axiosSecure.patch(`/updateMemberShip/${user?.email}`, data)
            
          if(res?.data.modifiedCount === 1){
            console.log(res?.data);
           //todo payment route
          }
            
            
        } catch (error) {
            console.error("Error updating user role:", error);
        }
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
    
    
  }
}


    return (
        <>


{/* menu  */}



<div className="flex  flex-col">
      <Tabs aria-label="Options">
        <Tab key="free" title="Free">
          <Card>
            <CardBody>
            <FreeSellerCard handleBeSeller={handleBeSeller}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Premium" title="Premium/Monthly">
          <Card>
            <CardBody>
            <PremiumSellerCard handleBeSeller={handleBeSeller} />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="PremiumYearly" title="Premium/Yearly">
          <Card>
            <CardBody>
            <PremiumSellerYearly handleBeSeller={handleBeSeller}/>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  

          {/* seller card   */}
    {/* <div className="md:flex gap-4 justify-center">
   
    
    </div> */}
        </>
    )
};
  

export default PremiumSeller;