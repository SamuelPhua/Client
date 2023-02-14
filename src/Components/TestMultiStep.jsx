import React, { useState } from "react";
import CheckoutSteps from "./checkout/CheckoutSteps";
import CheckoutPage1 from "./Checkout/CheckoutPage1";
import CheckoutPage2 from "./Checkout/CheckoutPage2";
import CheckoutPage3 from "./Checkout/CheckoutPage3";
import CheckoutPage4 from "./Checkout/CheckoutPage4";
import {
  AiOutlineShoppingCart,
  AiOutlineForm,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";

const TestMultiStep = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { icon: AiOutlineShoppingCart, description: "Cart" },
    { icon: AiOutlineForm, description: "Information" },
    { icon: BsBox, description: "Delivery" },
    { icon: AiOutlineCreditCard, description: "Payment" },
  ];

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      <div className="horizontal container mt-5">
        <CheckoutSteps steps={steps} currentStep={currentStep} />
        <div className="my-10 p-10 ">
          {/* <UseContextProvider>{displayStep(currentStep)}</UseContextProvider> */}
        </div>
      </div>
    </div>
  );
};

export default TestMultiStep;
