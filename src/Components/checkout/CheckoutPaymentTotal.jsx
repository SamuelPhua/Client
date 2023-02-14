import React from "react";

const CheckoutPaymentTotal = ({ cartSum }) => {
  return (
    <div className="font-montserrat text-xxs">
      <p className="pb-5">You are paying</p>
      <h1 className="text-sm">$ {cartSum}</h1>
      <h1 className="text-sm pb-5">SGD</h1>
      <p className="pb-5">Seeteey Pte Ltd</p>
      <p>Order #1025</p>
    </div>
  );
};

export default CheckoutPaymentTotal;
