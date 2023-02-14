import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const CheckoutPaymentTotal = () => {
  const { checkoutInput } = useContext(DataContext);

  return (
    <div className="font-montserrat text-xxs">
      <p className="pb-5">You are paying</p>
      <h1 className="text-sm">$ {checkoutInput.checkoutAmount} </h1>
      <h1 className="text-sm pb-5">SGD</h1>
      <p className="pb-5">LAILIAO pte ltd</p>
      <p>Order #1025</p>
    </div>
  );
};

export default CheckoutPaymentTotal;
