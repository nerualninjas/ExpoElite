import PremiumSellerCard from '@/components/Dashboard/Seller/PremiumSeller/PremiumSellerCard';
import PremiumSellerYearly from '@/components/Dashboard/Seller/PremiumSeller/PremiumSellerYear';
import FreeSellerCard from '@/components/Dashboard/Seller/PremiumSeller/FreeSellerCard';
// import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const PremiumSeller= ()=>{

const handleBeSeller =(d)=>{
  console.log(d)

  //date calculation for subcription
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
  }

  const data={...d,...sellerReg};
  console.log(data)
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