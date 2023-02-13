import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineForm,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";

const CheckoutProgressBar = () => {
  return (
    <div className="text-[16px] text-lightBlue flex flex-row text-center justify-between my-5">
      {/* Stage 1: cart */}
      <div>
        <div className="w-10 h-10 border-[1px] border-lightBlue rounded-full flex justify-center items-center mx-auto">
          <AiOutlineShoppingCart />
        </div>
        <p className="text-smallNote mt-1.5">Cart</p>
      </div>

      {/* Stage 2: contact info */}
      <div>
        <div className="w-10 h-10 border-[1px] border-lightBlue rounded-full flex justify-center items-center mx-auto">
          <AiOutlineForm />
        </div>
        <p className="text-smallNote mt-1.5">Information</p>
      </div>

      {/* Stage 3: shipping info */}
      <div>
        <div className="w-10 h-10 border-[1px] border-lightBlue rounded-full flex justify-center items-center mx-auto">
          <BsBox />
        </div>
        <p className="text-smallNote mt-1.5">Delivery</p>
      </div>

      {/* Stage 4: payment */}
      <div>
        <div className="w-10 h-10 border-[1px] border-lightBlue rounded-full flex justify-center items-center mx-auto">
          <AiOutlineCreditCard />
        </div>
        <p className="text-smallNote mt-1.5">Payment</p>
      </div>
    </div>
  );
};

export default CheckoutProgressBar;
