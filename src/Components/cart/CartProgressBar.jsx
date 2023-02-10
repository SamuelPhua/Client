import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineForm,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";

const CartProgressBar = () => {
  return (
    <div className="text-[24px] text-lightBlue flex flex-row text-center justify-between my-5">
      <div>
        <div className="w-14 h-14 border-[1px] border-lightBlue rounded-full flex justify-center items-center">
          <AiOutlineShoppingCart />
        </div>
        <p className="text-smallNote mt-1.5">Cart</p>
      </div>
      <div>
        <div className="w-14 h-14 border-[1px] border-lightBlue rounded-full flex justify-center items-center">
          <AiOutlineForm />
        </div>
        <p className="text-smallNote mt-1.5">Information</p>
      </div>
      <div>
        <div className="w-14 h-14 border-[1px] border-lightBlue rounded-full flex justify-center items-center">
          <BsBox />
        </div>
        <p className="text-smallNote mt-1.5">Delivery</p>
      </div>
      <div>
        <div className="w-14 h-14 border-[1px] border-lightBlue rounded-full flex justify-center items-center">
          <AiOutlineCreditCard />
        </div>
        <p className="text-smallNote mt-1.5">Payment</p>
      </div>
    </div>
  );
};

export default CartProgressBar;
