import React, { useState, useContext } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineForm,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import CheckoutSteps from "./CheckoutSteps";
import DataContext from "../context/DataContext";

const CheckoutProgressBar = () => {
  const { step: currentStep } = useContext(DataContext);
  //const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { icon: AiOutlineShoppingCart, description: "Cart" },
    { icon: AiOutlineForm, description: "Information" },
    { icon: BsBox, description: "Delivery" },
    { icon: AiOutlineCreditCard, description: "Payment" },
  ];

  return (
    <div className="text-[16px] text-lightBlue flex flex-row text-center justify-between my-5">
      <div className="horizontal container mt-5 mb-10">
        <CheckoutSteps steps={steps} currentStep={currentStep} />
      </div>
    </div>
  );
};

export default CheckoutProgressBar;
