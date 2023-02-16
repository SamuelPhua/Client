import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CheckoutPaymentTotal from "./CheckoutPaymentTotal";
import CheckoutPaymentMethod from "./CheckoutPaymentMethod";

const CheckoutPage3 = () => {
  return (
    <div>
      <div className="grid grid-cols-3 h-screen">
        <div className="relative px-auto bg-darkOrange flex flex-col ">
          <Link
            to="/cart"
            className="flex flex-row justify-start items-center pl-5 py-8"
          >
            <BiArrowBack className="stroke-2 mr-2 cursor-pointer" />
            <span className="cursor-pointer">Back to merchant</span>
          </Link>

          <div className="text-center flex justify-center absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-2/4">
            <CheckoutPaymentTotal />
          </div>
        </div>
        <div className="col-span-2">
          <CheckoutPaymentMethod />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage3;
