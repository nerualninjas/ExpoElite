import MyOrder from '@/components/PaymentForm/MyOrder';
import ShowPayment from '@/components/PaymentForm/ShowPayment';
import React from 'react';

const paymentList = () => {
    return (
        <div>
          {/* <ShowPayment/> */}
          <MyOrder />
        </div>
    );
};

export default paymentList;