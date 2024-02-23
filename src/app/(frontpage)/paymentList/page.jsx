import MyOrder from '@/components/PaymentForm/MyOrder';
import MyOrder2 from '@/components/PaymentForm/MyOrder2';
import ShowPayment from '@/components/PaymentForm/ShowPayment';
import React from 'react';

const paymentList = () => {
    return (
        <div>
          {/* <ShowPayment/> */}
          {/* <MyOrder /> */}
          <MyOrder2 />
        </div>
    );
};

export default paymentList;