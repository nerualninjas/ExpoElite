import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const SellerDetailsModal =({data})=>{
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

     console.log(data)
    return (
        <>
         <Button  className='btn text-white bg-[#3a9648]' onPress={onOpen}>Details</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Seller Details</ModalHeader>
              <ModalBody>
             
              <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
       <div>
        <div> <p className="text-tiny uppercase font-bold">{data?.membership}</p>
        <h4 className="font-bold text-large">{data?.userName}</h4>
        <small className="text-default-500">{data?.userEmail}</small></div>
        <div className="py-2">
        <p className="text-tiny uppercase font-bold">Registration Date: {data?.sellerRegStartDate?.slice(0,10)}</p>
        <p className="text-tiny uppercase font-bold">Expire Date: {data?.sellerExpireDate?.slice(0,10)}</p>  
        </div>

       </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data?.userPhoto}
          
        />
      </CardBody>
    </Card>


              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </>
    )
}
export default SellerDetailsModal;

