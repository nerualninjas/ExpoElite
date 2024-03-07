import MyOrder from '@/components/PaymentForm/MyOrder';
import MyOrder2 from '@/components/PaymentForm/MyOrder2';
import ShowPayment from '@/components/PaymentForm/ShowPayment';
import PrivateRoutes from '@/libs/PrivateRoute';
import React from 'react';

const paymentList = () => {
  return (
    <PrivateRoutes>
      <div>
        {/* <ShowPayment/> */}
        {/* <MyOrder /> */}
        <MyOrder2 />
      </div>
    </PrivateRoutes>

  );
};

export default paymentList;